/*jshint esversion: 6 */
/*jshint indent: 2 */

/* leaflet map, overlay, canvas */
let M;
let O;
let C;

/* webgl context, shader program, processing unit */
let GL;
let SP;

/* enable instrumentation to console log */
const MEASURE_TRANSMISSION = false;
const MEASURE_RENDERING = false;
let MEASURE_ID = 0;

/* center berlin, default zoom */
const DEFAULT_CENTER = [52.516285, 13.386181];
const DEFAULT_ZOOM = 10;

/* default travel time, medium and operand */
let TRAVEL_TIME = 7200;
const TRAVEL_MAX_ROUTING = 7200;
let TRAVEL_MEDIUM = 'bike';
let TRAVEL_OPERAND = 'union';
const _DATE = new Date();
const TRAVEL_DATE = _DATE.getFullYear() * 10000
  + (_DATE.getMonth()+1) * 100
  + _DATE.getDate();
const TRAVEL_DATE_TIME = _DATE.getHours() * 60 * 60
  + _DATE.getMinutes() * 60
  + _DATE.getSeconds();
let TRAVEL_DECIMAL_PLACES = 10;
const TRAVEL_EDGE_CLASSES = [1, 11, 12, 13, 14, 15, 16, 21, 22, 31, 32,
      41, 42, 51, 63, 62, 71, 72, 81, 91, 92, 99];

/* binary geometry tiles */
let GLTF_TILES;
let TEXTURE_IMAGE = new Image();

/* travel time control (r360) and markers */
let CONTROL_TIME;
let CONTROL_MEDIUM;
let CONTROL_OPERAND;
let MARKER_ORIGIN_PRIMAR;
let MARKER_ORIGIN_SECOND;

/* cache for all tiles, count requests and responses */
let TILE_CACHE;
let TILE_CACHE_NUM_REQU = 0;
let TILE_CACHE_NUM_RESP = 0;

/* selected parameters and hash */
let TILE_PARAMETERS = new Object();
let TILE_PARAMETERS_SHA1;

/**
 * initialize the distance map visualization
 */
function accessibility_map() {
  'use strict';

  /* increase timeouts for slow development server */
  r360.config.requestTimeout = 60000;

  /* load r360 color gradient */
  TEXTURE_IMAGE.src = "img/mi-r360.png";

  /* leaflet map canvas */
  M = L.map('map', {
    minZoom:  5,
    maxZoom: 18,
    maxBounds: L.latLngBounds(L.latLng(49.6, 6.0), L.latLng(54.8, 20.4)),
    noWrap: true,
    continuousWorld: false,
    zoomControl: false
  });

  /* set viewport to berlin */
  M.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  let whiteIcon = L.icon({
    iconUrl   : 'img/marker_source.svg',
    iconSize  : [28, 40],
    iconAnchor: [14, 40]
  });
  MARKER_ORIGIN_PRIMAR = L.marker(DEFAULT_CENTER, {
    draggable: true,
    icon     : whiteIcon
  }).addTo(M);
  MARKER_ORIGIN_SECOND = L.marker([52.393616, 13.133086], {
    draggable: true,
    icon     : whiteIcon
  }).addTo(M);

  TILE_PARAMETERS_SHA1 = parametersSha1();

  /* setup leaflet canvas webgl overlay */
  O = L.canvasOverlay().drawing(drawGL(true)).addTo(M);
  C = O.canvas();
  O.canvas.width = C.clientWidth;
  O.canvas.height = C.clientHeight;

  /* initialize webgl on canvas overlay */
  initGL();
  initShaders();

  let attribution =
    '<a href="https://carto.com/location-data-services/basemaps/">CartoDB</a> | '
    + '<a href="https://developers.route360.net/index.html">Route360 API</a> | '
    + 'Rendering &copy; <a href="./LICENSE">Schoedon</a>';
  L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    {
      attribution: attribution,
      subdomains: 'abcd',
      maxZoom: 18
    }
  ).addTo(M);

  /* use a r360 time slider to adjust travel time */
  CONTROL_TIME = r360.travelTimeControl({
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
  GLTF_TILES = L.tileLayer.canvas({
    async:true,
    updateWhenIdle:true,
    reuseTiles:true
  });
  GLTF_TILES.drawTile = function(canvas, tile, zoom) {
    requestGltfTiles(tile, zoom, canvas);
  };
  GLTF_TILES.addTo(M);

  CONTROL_MEDIUM = r360.radioButtonControl({
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
        tooltip: 'This contains public transportation',
        checked: false
      }
    ]
  });
  CONTROL_MEDIUM.addTo(M);
  CONTROL_MEDIUM.onChange(function(value){
    TRAVEL_MEDIUM = CONTROL_MEDIUM.getValue();
    TILE_PARAMETERS_SHA1 = parametersSha1();
    TILE_CACHE.resetHard();
    TILE_CACHE_NUM_REQU = 0;
    TILE_CACHE_NUM_RESP = 0;
    GLTF_TILES.redraw();
    drawGL();
  });
  CONTROL_MEDIUM.setPosition('topleft');

  CONTROL_OPERAND = r360.radioButtonControl({
    buttons: [
      {
        label: '&cup; Union',
        key: 'union',
        tooltip: 'No intersection shown',
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
        tooltip: 'Average travel time shown',
        checked: false
      },
    ]
  });
  CONTROL_OPERAND.addTo(M);
  CONTROL_OPERAND.onChange(function(value){
    TRAVEL_OPERAND = CONTROL_OPERAND.getValue();
    TILE_PARAMETERS_SHA1 = parametersSha1();
    TILE_CACHE.resetHard();
    TILE_CACHE_NUM_REQU = 0;
    TILE_CACHE_NUM_RESP = 0;
    GLTF_TILES.redraw();
    drawGL();
  });
  CONTROL_OPERAND.setPosition('bottomleft');

  MARKER_ORIGIN_PRIMAR.on('dragend', function(){
    TILE_PARAMETERS_SHA1 = parametersSha1();
    TILE_CACHE.resetHard();
    TILE_CACHE_NUM_REQU = 0;
    TILE_CACHE_NUM_RESP = 0;
    GLTF_TILES.redraw();
    drawGL();
  });

  MARKER_ORIGIN_SECOND.on('dragend', function(){
    TILE_PARAMETERS_SHA1 = parametersSha1();
    TILE_CACHE.resetHard();
    TILE_CACHE_NUM_REQU = 0;
    TILE_CACHE_NUM_RESP = 0;
    GLTF_TILES.redraw();
    drawGL();
  });

  /* redraw the scene after all tiles are loaded */
  GLTF_TILES.on('load', function(e) {
      drawGL();
  });

  /* update overlay on slider events */
  CONTROL_TIME.onSlideMove(function(values){
    TRAVEL_TIME = values[values.length - 1].time;
    drawGL();
  });
  CONTROL_TIME.onSlideStop(function(values){
    TRAVEL_TIME = values[values.length - 1].time;
    drawGL();
  });
  CONTROL_TIME.addTo(M);
  CONTROL_TIME.setPosition('topright');

  /* init cache for tile buffers for current zoom level */
  TILE_CACHE = L.tileBufferCollection(M.getZoom());

  /* reset tile buffer cache for each zoom level change */
  M.on('zoomend', function(e) {
    TILE_CACHE.resetOnZoom(M.getZoom());
    TILE_CACHE_NUM_REQU = 0;
    TILE_CACHE_NUM_RESP = 0;
    TRAVEL_DECIMAL_PLACES = M.getZoom();
    drawGL();
  });

  M.on('movestart', function(e) {
    drawGL();
  });

  M.on('move', function(e) {
    drawGL();
  });

  M.on('moveend', function(e) {
    drawGL();
  });

  L.control.zoom({ position: 'bottomright' }).addTo(M);
}

/**
* initialize webgl context
*/
function initGL() {
  'use strict';

  GL = C.getContext('experimental-webgl', { antialias: false });
}

/**
* init vertex/fragment shader and shader program
*/
function initShaders() {
  'use strict';

  /* vertex shader */
  const vertexShader = getShader("shader-vtx");

  /* fragment shader */
  const fragementShader = getShader("shader-frg");

  /* shader program */
  SP = GL.createProgram();
  GL.attachShader(SP, vertexShader);
  GL.attachShader(SP, fragementShader);
  GL.linkProgram(SP);

  /* check shader linking */
  if (!GL.getProgramParameter(SP, GL.LINK_STATUS)) {
    _log("initShaders(): [ERR]: could not init shaders");
  } else {

    /* use shader program */
    GL.useProgram(SP);

    /* get attribute and uniform locations */
    SP.uniformMatrix = GL.getUniformLocation(SP, "u_matrix");
    SP.textureRamp = GL.getUniformLocation(SP, "u_texture");
    SP.travelTime = GL.getUniformLocation(SP, "u_time");
    SP.vertexPosition = GL.getAttribLocation(SP, "a_vertex");
    SP.textureCoord = GL.getAttribLocation(SP, "a_coord");
    GL.enableVertexAttribArray(SP.vertexPosition);
    GL.enableVertexAttribArray(SP.textureCoord);
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
  const shaderScript = document.getElementById(id);

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
    shader = GL.createShader(GL.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {

    /* vertex shader */
    shader = GL.createShader(GL.VERTEX_SHADER);
  } else {
    _log("getShader(id): [WRN]: unknown shader type");
    return null;
  }

  GL.shaderSource(shader, str);
  GL.compileShader(shader);

  /* check shader compile status */
  if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
    _log("getShader(id): [ERR]: shader failed to compile");
    _log(GL.getShaderInfoLog(shader));
    return null;
  }

  return shader;
}

function requestGltfTiles(tile, zoom, canvas) {
  'use strict';

  TILE_CACHE_NUM_REQU++;

  /* request tile from tiling server */
  requestTile(tile.x, tile.y, zoom, function(response){

    /* update status bar */
    TILE_CACHE_NUM_RESP++;
    let tc_perc = TILE_CACHE_NUM_RESP / TILE_CACHE_NUM_REQU * 100.0;
    document.getElementById("bar").innerHTML = statusBar(tc_perc);
    document.getElementById("perc").innerHTML = tc_perc.toFixed(2);

    const buffers = response.data.tile.gltf.buffers;

    /* measure transmission times if desired */
    if (MEASURE_TRANSMISSION) {
      window.console.timeEnd("0," + tile.x + "," + tile.y + "," + zoom);
      window.console.log(";;;" + (buffers.vertices.length/2.0) + ","
        + response.requestTime + "," + JSON.stringify(response).length);
    }

    /* proceed on valid responses */
    if (buffers.vertices.length > 0 &&
      buffers.indices.length > 0 &&
      response.id.localeCompare(TILE_PARAMETERS_SHA1) == 0) {

      /* create a tile buffer object for the current tile */
      let tileBuffer = L.tileBuffer(
        buffers.vertices,
        buffers.indices,
        buffers.times,
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
      GLTF_TILES.tileDrawn(canvas);
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
  travelOptions.addSource(MARKER_ORIGIN_PRIMAR);
  travelOptions.addSource(MARKER_ORIGIN_SECOND);
  travelOptions.setMaxRoutingTime(TRAVEL_MAX_ROUTING);
  travelOptions.setTravelType(TRAVEL_MEDIUM);
  travelOptions.setIntersectionMode(TRAVEL_OPERAND);
  travelOptions.setDate(TRAVEL_DATE);
  travelOptions.setTime(TRAVEL_DATE_TIME);
  travelOptions.setX(x);
  travelOptions.setY(y);
  travelOptions.setZ(z);
  travelOptions.setDecimalPlaces(TRAVEL_DECIMAL_PLACES);
  travelOptions.setEdgeClasses(TRAVEL_EDGE_CLASSES);

  if (MEASURE_TRANSMISSION) window.console.time("0," + x + "," + y + "," + z);

  r360.MobieService.getGraph(TILE_PARAMETERS_SHA1, travelOptions, callback);
}

/**
* draw all tiles from cache on the canvas overlay
*/
function drawGL() {
  'use strict';

  /* only proceed if context is available */
  if (GL) {

    /* enable blending */
    GL.enable(GL.BLEND);
    GL.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA);

    /* disable depth testing */
    GL.disable(GL.DEPTH_TEST);

    /* clear color buffer for redraw */
    GL.clear(GL.COLOR_BUFFER_BIT);

    /* set view port to canvas size */
    GL.viewport(0, 0, C.width, C.height);

     /* get map bounds and top left corner used for webgl translation later */
    const bounds = M.getBounds();
    const topLeft = new L.LatLng(bounds.getNorth(), bounds.getWest());

    /* precalculate map scale, offset and line width */
    const zoom = M.getZoom();
    const scale = Math.pow(2, zoom) * 256.0;
    const offset = normalizeLatLon(topLeft.lat, topLeft.lng);
    const width = Math.max(zoom - 12.0, 1.0);

    /* define sizes of vertex and texture coordinate buffer objects */
    const vertexSize = 2;
    const texSize = 1;

    /* define model view matrix. here: identity */
    let uMatrix = new Float32Array([
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,1
    ]);

    /* generate texture from color gradient */
    let texture = GL.createTexture();
    GL.bindTexture(GL.TEXTURE_2D, texture);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.NEAREST);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.NEAREST);
    GL.texImage2D(
      GL.TEXTURE_2D,
      0,
      GL.RGBA,
      GL.RGBA,
      GL.UNSIGNED_BYTE,
      TEXTURE_IMAGE
    );
    const texUnit = 5;
    GL.activeTexture(GL.TEXTURE0 + texUnit);
    GL.uniform1i(SP.textureRamp, texUnit);

    /* pass selected travel time to fragment shader */
    GL.uniform1f(SP.travelTime, TRAVEL_TIME / 3600.0);

    /* translate to move [0,0] to top left corner */
    translateMatrix(uMatrix, -1, 1);

    /* scale based on canvas width and height */
    scaleMatrix(uMatrix, 2.0 / C.width, -2.0 / C.height);

    /* scale based on map zoom scale */
    scaleMatrix(uMatrix, scale, scale);

    /* translate offset to match current map position (lat/lon) */
    translateMatrix(uMatrix, -offset.x, -offset.y);

    /* set model view */
    GL.uniformMatrix4fv(SP.uniformMatrix, false, uMatrix);

    /* adjust line width based on zoom */
    GL.lineWidth(width);

    let renderTime = window.performance.now();
    let vertexCount = 0;
    let indexCount = 0;
    let drawCount = 0;

    /* loop all tile buffers in cache and draw each geometry */
    const tileBuffers = TILE_CACHE.getTileBufferCollection();
    for (let i = TILE_CACHE.getSize() - 1; i >= 0; i -= 1) {

      /* only render tiles for current zoom level */
      if(tileBuffers[i].getZoom() == M.getZoom()) {

        /* measure rendering if desired */
        if (MEASURE_RENDERING) window.console.time(MEASURE_ID + ","
          + tileBuffers[i].getX() + "," + tileBuffers[i].getY() + ","
          + tileBuffers[i].getZoom() + ","
          + (tileBuffers[i].getVertexBuffer().length/2.0));

        vertexCount += tileBuffers[i].getVertexBuffer().length / 2.0;

        /* create vertex buffer */
        let vertexBuffer = GL.createBuffer();
        GL.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer);
        GL.bufferData(
          GL.ARRAY_BUFFER,
          tileBuffers[i].getVertexBuffer(),
          GL.STATIC_DRAW
        );
        GL.vertexAttribPointer(
          SP.vertexPosition,
          vertexSize,
          GL.FLOAT,
          false,
          0,
          0
        );

        /* create texture coordinate buffer */
        let textureBuffer = GL.createBuffer();
        GL.bindBuffer(GL.ARRAY_BUFFER, textureBuffer);
        GL.bufferData(
          GL.ARRAY_BUFFER,
          tileBuffers[i].getColorBuffer(),
          GL.STATIC_DRAW
        );
        GL.vertexAttribPointer(
          SP.textureCoord,
          texSize,
          GL.FLOAT,
          false,
          0,
          0
        );

        indexCount += tileBuffers[i].getIndexBuffer().length / 2.0;

        /* create index buffer */
        let indexBuffer = GL.createBuffer();
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, indexBuffer);

        /* draw geometry lines by indices */
        if (tileBuffers[i].getIndexBuffer().length > 65535) {

          /* use 32 bit extension */
          const ext = (
            GL.getExtension('OES_element_index_uint') ||
            GL.getExtension('MOZ_OES_element_index_uint') ||
            GL.getExtension('WEBKIT_OES_element_index_uint')
          );

          const buffer = new Uint32Array(tileBuffers[i].getIndexBuffer());
          GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, buffer, GL.STATIC_DRAW);
          GL.drawElements(
            GL.LINES,
            tileBuffers[i].getIndexBuffer().length,
            GL.UNSIGNED_INT,
            indexBuffer
          );
          drawCount++;
        } else {

          /* fall back to webgl default 16 bit short */
          const buffer = new Uint16Array(tileBuffers[i].getIndexBuffer());
          GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, buffer, GL.STATIC_DRAW);
          GL.drawElements(
            GL.LINES,
            tileBuffers[i].getIndexBuffer().length,
            GL.UNSIGNED_SHORT,
            indexBuffer
          );
          drawCount++;
        }
        GL.finish();
        if (MEASURE_RENDERING) {
          window.console.timeEnd(MEASURE_ID + "," + tileBuffers[i].getX()
            + "," + tileBuffers[i].getY() + "," + tileBuffers[i].getZoom() + ","
            + (tileBuffers[i].getVertexBuffer().length/2.0));
          ++MEASURE_ID;
        }
      }
    }
    GL.finish();

    /* update debug info on UI */
    renderTime = window.performance.now() - renderTime;
    let fps = 1000.0 / renderTime;
    document.getElementById("calls").innerHTML = drawCount;
    document.getElementById("timer").innerHTML = renderTime.toFixed(3);
    document.getElementById("frames").innerHTML = fps.toFixed(1);
    document.getElementById("vertex").innerHTML = nFormatter(vertexCount, 1);
    document.getElementById("index").innerHTML = nFormatter(indexCount, 1);
    document.getElementById("tiles").innerHTML = TILE_CACHE.getSize();
    document.getElementById("hash").innerHTML = TILE_PARAMETERS_SHA1;
  }
}

/**
* helper: simple translation along x/y (2D)
*
* @param {Float32Array} matrix the output matrix to be translated
* @param {integer} x the translation factor along x
* @param {integer} y the translation factor along y
*/
function translateMatrix(matrix, x, y) {
  matrix[12] += matrix[0] * x + matrix[4] * y;
  matrix[13] += matrix[1] * x + matrix[5] * y;
  matrix[14] += matrix[2] * x + matrix[6] * y;
  matrix[15] += matrix[3] * x + matrix[7] * y;
}

/**
* helper: simple scaling along x/y (2D)
*
* @param {Float32Array} matrix the output matrix to be scaled
* @param {integer} x the scaling factor along x
* @param {integer} y the scaling factor along y
*/
function scaleMatrix(matrix, x, y) {
  matrix[0] *= x;
  matrix[1] *= x;
  matrix[2] *= x;
  matrix[3] *= x;
  matrix[4] *= y;
  matrix[5] *= y;
  matrix[6] *= y;
  matrix[7] *= y;
}

/**
 * Converts latitude/longitude to Normalized Mercator coordinates
 * for equator size of 1.0 and inverts the y axis (from EPSG:4326)
 *
 * @param {float} lat Latitude coordinate in EPSG:4326
 * @param {float} lon Longitude coordinate in EPSG:4326
 * @return {L.point} Leaflet point with tile normalized x and y coordinates
 */
function normalizeLatLon(lat, lon) {
  let l = Math.sin(lat * Math.PI / 180.0);
  let x = ((lon + 180) / 360);
  let y = (0.5 - Math.log((1 + l) / (1 - l)) / (Math.PI * 4));
  return L.point(x, y);
}

function parametersSha1() {
  TILE_PARAMETERS.maxRouting = TRAVEL_MAX_ROUTING;
  /* TILE_PARAMETERS.date = TRAVEL_DATE; */
  /* TILE_PARAMETERS.dateTime = TRAVEL_DATE_TIME; */
  /* TILE_PARAMETERS.decimal = TRAVEL_DECIMAL_PLACES; */
  TILE_PARAMETERS.classes = TRAVEL_EDGE_CLASSES;
  TILE_PARAMETERS.medium = TRAVEL_MEDIUM;
  TILE_PARAMETERS.operand = TRAVEL_OPERAND;
  TILE_PARAMETERS.markers = new Array(2);
  TILE_PARAMETERS.markers[0] = MARKER_ORIGIN_PRIMAR.getLatLng();
  TILE_PARAMETERS.markers[1] = MARKER_ORIGIN_SECOND.getLatLng();
  return Sha1.hash(JSON.stringify(TILE_PARAMETERS));
}

/**
* helper: format big numbers in compact format
*
* @param {float} num the number to format
* @param {integer} digits the decimal points to use
* @return {String} the formatted compact number
*/
function nFormatter(num, digits) {
  let si = [
    { value: 1E18, symbol: "E" },
    { value: 1E15, symbol: "P" },
    { value: 1E12, symbol: "T" },
    { value: 1E9,  symbol: "G" },
    { value: 1E6,  symbol: "M" },
    { value: 1E3,  symbol: "k" }
  ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
  for (i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(rx, "$1")
        + si[i].symbol;
    }
  }
  return num.toFixed(digits).replace(rx, "$1");
}

/**
* helper: format a status bar based on status percent
*
* @param {float} perc the status
* @return {String} the formatted status bar
*/
function statusBar(perc) {
  if (perc < 10)
    return "----------";
  if (perc < 20)
    return "|---------";
  if (perc < 30)
    return "||--------";
  if (perc < 40)
    return "|||-------";
  if (perc < 50)
    return "||||------";
  if (perc < 60)
    return "|||||-----";
  if (perc < 70)
    return "||||||----";
  if (perc < 80)
    return "|||||||---";
  if (perc < 90)
    return "||||||||--";
  if (perc < 100)
    return "|||||||||-";

  return "||||||||||";
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
