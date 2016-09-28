/*jshint esversion: 6 */
/*jshint indent: 2 */

/* leaflet map, overlay, canvas */
let m;
let o;
let c;

/* webgl context, shader program, processing unit */
let gl;
let sp;

const MEASURE_TRANSMISSION = false;
const MEASURE_RENDERING = false;
let MEASURE_ID = 0;

/* center berlin, default zoom */
const DEFAULT_CENTER = [52.516285, 13.386181];
const DEFAULT_ZOOM = 10;

/* default travel time is 120 minutes */
let TRAVEL_TIME = 7200;
let TRAVEL_TYPE = 'bike';
let INTERSECTION_MODE = 'union';

/* binary geometry tiles */
let gltfTiles;

/* travel time control (r360) and a marker */
let travelTimeControl;
let travelTypeButtons;
let intersectionModeButtons;
let startMarker;
//let auxiliaryMarker;
let textureImage = new Image();

/* cache for all tile's vertex, index and color buffers */
let TILE_CACHE;
let TILE_SHA1_ID;

/**
 * initialize the distance map visualization
 */
function accessibility_map() {
  'use strict';

  /* yellow-blue sequence */
  textureImage.src = "img/mi-r360.png";

  /* workaround for slow devel server */
  r360.config.requestTimeout = 120000;

  /* leaflet map canvas */
  m = L.map('map', {
    minZoom:  0,
    maxZoom: 99,
    maxBounds: L.latLngBounds(L.latLng(49.6, 6.0), L.latLng(54.8, 20.4)),
    noWrap: true,
    continuousWorld: false,
    zoomControl: false
  });

  /* set viewport to berlin */
  m.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  let whiteIcon = L.icon({
    iconUrl   : 'img/marker_source.svg',
    iconSize  : [28, 40],
    iconAnchor: [14, 40]
  });
  startMarker = L.marker(DEFAULT_CENTER, {
    draggable: true,
    icon     : whiteIcon
  }).addTo(m);
  //auxiliaryMarker = L.marker([52.514, 13.349], {
  //  draggable: true,
  //  icon     : whiteIcon
  //}).addTo(m);

  TILE_SHA1_ID = sha1id();

  /* setup leaflet canvas webgl overlay */
  o = L.canvasOverlay().drawing(drawGL(true)).addTo(m);
  c = o.canvas();
  o.canvas.width = c.clientWidth;
  o.canvas.height = c.clientHeight;

  /* initialize webgl on canvas overlay */
  initGL(c);
  initShaders();

  let attribution =
    '<a href="https://carto.com/location-data-services/basemaps/">CartoDB</a> | '
    + '<a href="https://developers.route360.net/index.html">R360 API</a> | '
    + 'Rendering &copy; <a href="./LICENSE">Schoedon</a>';
  let bgTiles = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    {
      attribution: attribution,
      subdomains: 'abcd',
      maxZoom: 18
    }
  ).addTo(m);

  /* use a r360 time slider to adjust travel time */
  travelTimeControl = r360.travelTimeControl({
    travelTimes: [
      { time:  150 * 2, color: '#00341B' },
      { time:  300 * 2, color: '#004524' },
      { time:  450 * 2, color: '#00562D' },
      { time:  600 * 2, color: '#006837' },
      { time:  750 * 2, color: '#0E7B3B' },
      { time:  900 * 2, color: '#1C8E40' },
      { time: 1050 * 2, color: '#2AA145' },
      { time: 1200 * 2, color: '#39B54A' },
      { time: 1350 * 2, color: '#4DB947' },
      { time: 1500 * 2, color: '#62BD44' },
      { time: 1650 * 2, color: '#77C141' },
      { time: 1800 * 2, color: '#8CC63F' },
      { time: 1950 * 2, color: '#A6B936' },
      { time: 2100 * 2, color: '#C1AC2E' },
      { time: 2250 * 2, color: '#DC9F26' },
      { time: 2400 * 2, color: '#F7931E' },
      { time: 2550 * 2, color: '#F5841F' },
      { time: 2700 * 2, color: '#F47621' },
      { time: 2850 * 2, color: '#F26822' },
      { time: 3000 * 2, color: '#F15A24' },
      { time: 3150 * 2, color: '#E54D26' },
      { time: 3300 * 2, color: '#D94028' },
      { time: 3450 * 2, color: '#CD332A' },
      { time: 3600 * 2, color: '#C1272D' }
    ],
    unit      : ' min',
    position  : 'topright',
    label     : '',
    initValue : TRAVEL_TIME / 60
  });

  /* create webgl gltf tiles */
  gltfTiles = L.tileLayer.canvas({
    async:true,
    updateWhenIdle:true,
    reuseTiles:true
  });
  gltfTiles.drawTile = function(canvas, tile, zoom) {
    getGltfTiles(tile, zoom, canvas);
  };
  gltfTiles.addTo(m);

  travelTypeButtons = r360.radioButtonControl({
    buttons: [
      {
        label: '<i class="fa fa-female"></i>  Walking',
        key: 'walk',
        tooltip: 'Walking speed is on average 5km/h',
        checked: false
      },
      {
        label: '<i class="fa fa-bicycle"></i> Cycling',
        key: 'bike',
        tooltip: 'Cycling speed is on average 15km/h',
        checked: true
      },
      {
        label: '<i class="fa fa-car"></i> Car',
        key: 'car',
        tooltip: 'Car speed is limited by speed limit',
        checked: false
      },
      {
        label: '<i class="fa fa-bus"></i> Transit',
        key: 'transit',
        tooltip: 'This demo only contains subways',
        checked: false
      }
    ]
  });
  travelTypeButtons.addTo(m);
  travelTypeButtons.onChange(function(value){
    TRAVEL_TYPE = travelTypeButtons.getValue();
    TILE_SHA1_ID = sha1id();
    TILE_CACHE.resetHard();
    gltfTiles.redraw();
    drawGL();
  });
  travelTypeButtons.setPosition('topleft');

  intersectionModeButtons = r360.radioButtonControl({
    buttons: [
      {
        label: '&cup; Union',
        key: 'union',
        tooltip: 'No intersection of polygons',
        checked: true
      },

      {
        label: '&cap; Intersection',
        key: 'intersection',
        tooltip: 'Only intersected area shown.',
        checked: false
      },

      {
        label: '&#8960; Average',
        key: 'average',
        tooltip: 'Average travel time in polygons',
        checked: false
      },
    ]
  });
  //intersectionModeButtons.addTo(m);
  intersectionModeButtons.onChange(function(value){
    INTERSECTION_MODE = intersectionModeButtons.getValue();
    TILE_SHA1_ID = sha1id();
    TILE_CACHE.resetHard();
    gltfTiles.redraw();
    drawGL();
  });
  intersectionModeButtons.setPosition('topright');

  startMarker.on('dragend', function(){
    TILE_SHA1_ID = sha1id();
    TILE_CACHE.resetHard();
    gltfTiles.redraw();
    drawGL();
  });

  //auxiliaryMarker.on('dragend', function(){
  //  TILE_SHA1_ID = sha1id();
  //  TILE_CACHE.resetHard();
  //  gltfTiles.redraw();
  //  drawGL();
  //});

  /* redraw the scene after all tiles are loaded */
  gltfTiles.on('load', function(e) {
      drawGL();
  });

  /* update overlay on slider events */
  travelTimeControl.onSlideMove(function(values){
    TRAVEL_TIME = values[values.length - 1].time;
    drawGL();
  });
  travelTimeControl.onSlideStop(function(values){
    TRAVEL_TIME = values[values.length - 1].time;
    drawGL();
  });
  travelTimeControl.addTo(m);
  travelTimeControl.setPosition('topright');

  /* init cache for tile buffers for current zoom level */
  TILE_CACHE = L.tileBufferCollection(m.getZoom());

  /* reset tile buffer cache for each zoom level change */
  m.on('zoomstart', function(e) {
    TILE_CACHE.resetOnZoom(m.getZoom());
    drawGL();
  });

  m.on('movestart', function(e) {
    drawGL();
  });

  m.on('move', function(e) {
    drawGL();
  });

  m.on('moveend', function(e) {
    drawGL();
  });

  let zoomControl = L.control.zoom({ position: 'bottomright' });
  zoomControl.addTo(m);
}

/**
* initialize webgl context
*/
function initGL(canvas) {
  'use strict';

  gl = canvas.getContext('experimental-webgl', { antialias: true });
}

/**
* init vertex/fragment shader and shader program
*/
function initShaders() {
  'use strict';

  /* vertex shader */
  let vShader = getShader("shader-vtx");

  /* fragment shader */
  let fShader = getShader("shader-frg");

  /* shader program */
  sp = gl.createProgram();
  gl.attachShader(sp, vShader);
  gl.attachShader(sp, fShader);
  gl.linkProgram(sp);

  /* check shader linking */
  if (!gl.getProgramParameter(sp, gl.LINK_STATUS)) {
    _log("initShaders(): [ERR]: could not init shaders");
  } else {

    /* use shader programm */
    gl.useProgram(sp);

    /* get attribute and uniform locations */
    sp.uniformMatrix = gl.getUniformLocation(sp, "u_matrix");
    sp.textureRamp = gl.getUniformLocation(sp, "u_texture");
    sp.travelTime = gl.getUniformLocation(sp, "u_time");
    sp.vertexPosition = gl.getAttribLocation(sp, "a_vertex");
    sp.textureCoord = gl.getAttribLocation(sp, "a_coord");
    gl.enableVertexAttribArray(sp.vertexPosition);
    gl.enableVertexAttribArray(sp.textureCoord);
  }
}

/**
* parse shader from dom by id
*
* @param {string} id the shader element id in the document
* @return {object} the compiled shader
*/
function getShader(id) {
  'use strict';

  let shader;
  let shaderScript = document.getElementById(id);

  if (!shaderScript) {
    _log("getShader(id): [WRN]: shader not found");
    return null;
  }

  let str = "";
  let k = shaderScript.firstChild;
  while (k) {
    if (k.nodeType == 3) {
      str += k.textContent;
    }
    k = k.nextSibling;
  }

  if (shaderScript.type == "x-shader/x-fragment") {

    /* fragment shader */
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {

    /* vertex shader */
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    _log("getShader(id): [WRN]: unknown shader type");
    return null;
  }

  gl.shaderSource(shader, str);
  gl.compileShader(shader);

  /* check shader compile status */
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    _log("getShader(id): [ERR]: shader failed to compile");
    _log(gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;
}

function getGltfTiles(tile, zoom, canvas) {
  'use strict';

  // if (MEASURE_TRANSMISSION) window.console.time("getGltfTiles," + tile.x + "," + tile.y + "," + zoom);

  /* request tile from tiling server */
  requestTile(tile.x, tile.y, zoom, function(response){

    if (MEASURE_TRANSMISSION) {
      window.console.timeEnd("0," + tile.x + "," + tile.y + "," + zoom);
      window.console.log(";;;" + (response.data.tile.gltf.buffers.vertices.length/2.0) + "," + response.requestTime + "," + JSON.stringify(response).length);
    }

    if (response.data.tile.gltf.buffers.vertices.length > 0 &&
      response.data.tile.gltf.buffers.indices.length > 0 &&
      response.id.localeCompare(TILE_SHA1_ID) == 0) {

      /* create a tile buffer object for the current tile */
      let tileBuffer = L.tileBuffer(
        response.data.tile.gltf.buffers.vertices,
        response.data.tile.gltf.buffers.indices,
        response.data.tile.gltf.buffers.times,
        {
          x: tile.x,
          y: tile.y,
          zoom: zoom
        }
      );

      /* make sanity check on the tile buffer cache */
      if (TILE_CACHE.getZoom() != zoom) {
        TILE_CACHE.resetOnZoom(zoom);
      }

      /* add tile buffer geometries to the collection */
      TILE_CACHE.updateTile(tileBuffer);

      /* redraw the scene */
      drawGL();
      gltfTiles.tileDrawn(canvas);


      // if (MEASURE_TRANSMISSION) window.console.timeEnd("getGltfTiles," + tile.x + "," + tile.y + "," + zoom);
    }
  });
}

/**
 * Requests a tile from the r360 tiling server.
 *
 * @param (Integer) x the x coordinate of the tile
 * @param (Integer) y the y coordinate of the tile
 * @param (Integer) z the zoom factor of the tile
 * @param (Function) callback a callback processing the tile
 */
function requestTile(x, y, z, callback) {
  'use strict';

  let travelOptions = r360.travelOptions();
  travelOptions.setServiceKey('ZTOCBA4MNLQLQQPXHQDW');
  travelOptions.setServiceUrl('https://dev.route360.net/mobie/');
  travelOptions.addSource(startMarker);
  //travelOptions.addSource(auxiliaryMarker);
  travelOptions.setMaxRoutingTime(7200);
  travelOptions.setTravelType(TRAVEL_TYPE);
  travelOptions.setIntersectionMode(INTERSECTION_MODE);
  travelOptions.setDate(20160824);
  travelOptions.setTime(32400);
  travelOptions.setX(x);
  travelOptions.setY(y);
  travelOptions.setZ(z);
  travelOptions.setDecimalPlaces(z);
  travelOptions.setEdgeClasses(
    [1, 11, 12, 13, 14, 15, 16, 21, 22, 31, 32,
      41, 42, 51, 63, 62, 71, 72, 81, 91, 92, 99]
  );

  if (MEASURE_TRANSMISSION) window.console.time("0," + x + "," + y + "," + z);

  r360.MobieService.getGraph(TILE_SHA1_ID, travelOptions, callback);
}

/**
* draw all tiles from cache on the canvas overlay
*/
function drawGL() {
  'use strict';

  /* only proceed if context is available */
  if (gl) {

    // if (MEASURE_RENDERING) window.console.time("drawGL");

    /* enable blending */
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    /* disable depth testing */
    gl.disable(gl.DEPTH_TEST);

    /* clear color buffer for redraw */
    gl.clear(gl.COLOR_BUFFER_BIT);

    /* set view port to canvas size */
    gl.viewport(0, 0, c.width, c.height);

     /* get map bounds and top left corner used for webgl translation later */
    let bounds = m.getBounds();
    let topLeft = new L.LatLng(bounds.getNorth(), bounds.getWest());

    /* precalculate map scale, offset and line width */
    let zoom = m.getZoom();
    let scale = Math.pow(2, zoom) * 256.0;
    let offset = latLonToPixels(topLeft.lat, topLeft.lng);
    let width = Math.max(zoom - 12.0, 1.0);

    /* define sizes of vertex and texture coordinate buffer objects */
    let vtxSize = 2;
    let texSize = 1;

    /* define model view matrix. here: identity */
    let uMatrix = new Float32Array([
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,1
    ]);

    /* generate texture from color gradient */
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      textureImage
    );
    let texUnit = 5;
    gl.activeTexture(gl.TEXTURE0 + texUnit);
    gl.uniform1i(sp.textureRamp, texUnit);

    /* pass selected travel time to fragment shader */
    gl.uniform1f(sp.travelTime, TRAVEL_TIME / 3600.0);

    /* translate to move [0,0] to top left corner */
    translateMatrix(uMatrix, -1, 1);

    /* scale based on canvas width and height */
    scaleMatrix(uMatrix, 2.0 / c.width, -2.0 / c.height);

    /* scale based on map zoom scale */
    scaleMatrix(uMatrix, scale, scale);

    /* translate offset to match current map position (lat/lon) */
    translateMatrix(uMatrix, -offset.x, -offset.y);

    /* set model view */
    gl.uniformMatrix4fv(sp.uniformMatrix, false, uMatrix);

    /* adjust line width based on zoom */
    gl.lineWidth(width);

    /* loop all tile buffers in cache and draw each geometry */
    let tileBuffers = TILE_CACHE.getTileBufferCollection();
    for (let i = TILE_CACHE.getSize() - 1; i >= 0; i -= 1) {

      if(tileBuffers[i].getZoom() == m.getZoom()) {

        if (MEASURE_RENDERING) window.console.time(MEASURE_ID + "," + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom() + "," + (tileBuffers[i].getVertexBuffer().length/2.0));

        /* create vertex buffer */
        let vtxBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vtxBuffer);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          tileBuffers[i].getVertexBuffer(),
          gl.STATIC_DRAW
        );
        gl.vertexAttribPointer(
          sp.vertexPosition,
          vtxSize,
          gl.FLOAT,
          false,
          0,
          0
        );

        /* create texture coordinate buffer */
        let texBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          tileBuffers[i].getColorBuffer(),
          gl.STATIC_DRAW
        );
        gl.vertexAttribPointer(
          sp.textureCoord,
          texSize,
          gl.FLOAT,
          false,
          0,
          0
        );

        /* create index buffer */
        let idxBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuffer);

        // catch issue #33
        //_log("DEBUG#33: " + tileBuffers[i].getIndexBuffer().length);

        /* draw geometry lines by indices */
        if (tileBuffers[i].getIndexBuffer().length > 65535) {

          // if (MEASURE_RENDERING) window.console.time("drawGL.tile.x32," + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom());

          /* use 32 bit extension */
          let ext = (
            gl.getExtension('OES_element_index_uint') ||
            gl.getExtension('MOZ_OES_element_index_uint') ||
            gl.getExtension('WEBKIT_OES_element_index_uint')
          );

          let buffer = new Uint32Array(tileBuffers[i].getIndexBuffer());
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
          gl.drawElements(
            gl.LINES,
            tileBuffers[i].getIndexBuffer().length,
            gl.UNSIGNED_INT,
            idxBuffer
          );

          // if (MEASURE_RENDERING) window.console.timeEnd("drawGL.tile.x32," + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom());
        } else {

          // if (MEASURE_RENDERING) window.console.time("drawGL.tile.x16," + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom());

          /* fall back to webgl default 16 bit short */
          let buffer = new Uint16Array(tileBuffers[i].getIndexBuffer());
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
          gl.drawElements(
            gl.LINES,
            tileBuffers[i].getIndexBuffer().length,
            gl.UNSIGNED_SHORT,
            idxBuffer
          );

          gl.finish();
          // if (MEASURE_RENDERING) window.console.timeEnd("drawGL.tile.x16," + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom());
        }
        gl.finish();
        if (MEASURE_RENDERING) {
          window.console.timeEnd(MEASURE_ID + "," + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom() + "," + (tileBuffers[i].getVertexBuffer().length/2.0));
          ++MEASURE_ID;
        }
      }
    }
    gl.finish();
    // if (MEASURE_RENDERING) window.console.timeEnd("drawGL");
  }
}

/**
* helper: simple translation along x/y (2D)
*
* @param {Float32Array} m the output matrix to be translated
* @param {integer} x the translation factor along x
* @param {integer} y the translation factor along y
*/
function translateMatrix(m, x, y) {
  m[12] += m[0] * x + m[4] * y;
  m[13] += m[1] * x + m[5] * y;
  m[14] += m[2] * x + m[6] * y;
  m[15] += m[3] * x + m[7] * y;
}

/**
* helper: simple scaling along x/y (2D)
*
* @param {Float32Array} m the output matrix to be scaled
* @param {integer} x the scaling factor along x
* @param {integer} y the scaling factor along y
*/
function scaleMatrix(m, x, y) {
  m[0] *= x;
  m[1] *= x;
  m[2] *= x;
  m[3] *= x;
  m[4] *= y;
  m[5] *= y;
  m[6] *= y;
  m[7] *= y;
}

/**
 * Converts latitude/longitude to tile pixel X/Y at zoom level 0
 * for 1x1 tile size and inverts y coordinates. (EPSG: 4326)
 *
 * @param {L.point} p Leaflet point in EPSG:3857
 * @return {L.point} Leaflet point with tile pixel x and y corrdinates
 */
function latLonToPixels(lat, lon) {
  let sinLat = Math.sin(lat * Math.PI / 180.0);
  let pixelX = ((lon + 180) / 360);
  let pixelY = (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (Math.PI * 4));
  return L.point(pixelX, pixelY);
}

function sha1id() {
  let hashMe = startMarker.getLatLng() + ";"
    //+ auxiliaryMarker.getLatLng() + ";"
    + TRAVEL_TYPE + ";"
    + INTERSECTION_MODE + ";";
  return Sha1.hash(hashMe);
}

/**
* log to console with timestamps
*
* @param {string} s the string to log
*/
function _log(s) {
  let n = new Date().getTime() / 1000.0;
  window.console.log('[' + n.toFixed(3) + '] ' + s);
}
