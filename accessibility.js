/*jshint esversion: 6 */
/*jshint indent: 2 */

/* leaflet map, overlay, canvas */
let m;
let o;
let c;

/* webgl context, shader program, processing unit */
let gl;
let sp;

/* center berlin, default zoom */
const DEFAULT_CENTER = [52.516, 13.377];
const DEFAULT_ZOOM = 12;

/* cache for all tile's vertex, index and color buffers */
let TILE_CACHE;

/* default travel time is 30 minutes */
let TRAVEL_TIME = 1800;
const TRAVEL_TIME_LIMIT = 3600;
let TRAVEL_TYPE = 'car';

/* travel time control (r360) and a marker */
let travelTimeControl;
let travelTypeButtons;
let startMarker;
let textureImage = new Image();

const COLOR_GRAD = [
  49.0, 54.0, 149.0, 255.0, /* #313695 */
  59.0,  85.0, 164.0, 255.0, /* #3b55a4 */
  69.0, 117.0, 180.0, 255.0, /* #4575b4 */
  92.0, 145.0, 194.0, 255.0, /* #5c91c2 */
  116.0, 173.0, 209.0, 255.0, /* #74add1 */
  143.0, 195.0, 221.0, 255.0, /* #8fc3dd */
  171.0, 217.0, 233.0, 255.0, /* #abd9e9 */
  197.0, 230.0, 240.0, 255.0, /* #c5e6f0 */
  224.0, 243.0, 248.0, 255.0, /* #e0f3f8 */
  239.0, 249.0, 219.0, 255.0, /* #eff9db */
  255.0, 255.0, 191.0, 255.0, /* #ffffbf */
  254.0, 239.0, 167.0, 255.0, /* #feefa7 */
  254.0, 224.0, 144.0, 255.0, /* #fee090 */
  253.0, 199.0, 120.0, 255.0, /* #fdc778 */
  253.0, 174.0, 97.0, 255.0, /* #fdae61 */
  248.0, 141.0, 82.0, 255.0, /* #f88d52 */
  244.0, 109.0, 67.0, 255.0, /* #f46d43 */
  229.0, 78.0, 53.0, 255.0, /* #e54e35 */
  215.0, 48.0, 39.0, 255.0, /* #d73027 */
  190.0, 24.0, 38.0, 255.0, /* #be1826 */
  165.0, 0.0, 38.0, 255.0, /* #a50026 */
  144.0, 0.0, 22.0, 255.0, /* #900016 */
  123.0, 0.0, 11.0, 255.0, /* #7b000b */
  102.0, 0.0, 0.0, 255.0, /* #660000 */
  0.0, 0.0, 0.0, 0.0 /* hidden */
];

/**
 * initialize the distance map visualization
 */
function accessibility_map() {
  'use strict';

  textureImage.src = "img/blue-white-red.png";

  /* leaflet map canvas */
  m = L.map('map', {
    minZoom: 3,
    maxZoom: 18,
    maxBounds: L.latLngBounds(L.latLng(49.6, 6.0), L.latLng(54.8, 20.4)),
    noWrap: true,
    continuousWorld: false,
    zoomControl: false
  });

  /* set viewport to berlin */
  m.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  let whiteIcon = L.icon({
    iconUrl   : 'img/map-marker-point-64.png',
    iconSize  : [32, 32],
    iconAnchor: [16, 32]
  });
  startMarker = L.marker(DEFAULT_CENTER, {
    draggable: true,
    icon     : whiteIcon
  }).addTo(m);

  /* setup leaflet canvas webgl overlay */
  o = L.canvasOverlay().drawing(drawGL()).addTo(m);
  c = o.canvas();
  o.canvas.width = c.clientWidth;
  o.canvas.height = c.clientHeight;

  /* initialize webgl on canvas overlay */
  initGL();
  initShaders();

  /* setup map with mapbox basemap tiles */
  let tileLayerUrl =
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png' +
      '?access_token={accessToken}';
  let token =
    'pk.eyJ1IjoiZG9uc2Nob2UiLCJhIjoiMkN5RUk0QSJ9.FGcEYWjfgcJUmSyN1tkwgQ';
  let mapboxTiles = L.tileLayer(tileLayerUrl, {
    attribution: 'WebGL/glTF Tiling PoC #5 | &copy; 2016 A. Schoedon',
    id: 'mapbox.dark',
    accessToken: token,
    noWrap: true,
    continuousWorld: false,
    attributionControl: false
  });
  mapboxTiles.addTo(m);

  /* use a r360 time slider to adjust travel time */
  travelTimeControl = r360.travelTimeControl({
    travelTimes: [
      { time:  150, color: rgbToHex([COLOR_GRAD[ 0], COLOR_GRAD[ 1], COLOR_GRAD[ 2]]) },
      { time:  300, color: rgbToHex([COLOR_GRAD[ 4], COLOR_GRAD[ 5], COLOR_GRAD[ 6]]) },
      { time:  450, color: rgbToHex([COLOR_GRAD[ 8], COLOR_GRAD[ 9], COLOR_GRAD[10]]) },
      { time:  600, color: rgbToHex([COLOR_GRAD[12], COLOR_GRAD[13], COLOR_GRAD[14]]) },
      { time:  750, color: rgbToHex([COLOR_GRAD[16], COLOR_GRAD[17], COLOR_GRAD[18]]) },
      { time:  900, color: rgbToHex([COLOR_GRAD[20], COLOR_GRAD[21], COLOR_GRAD[22]]) },
      { time: 1050, color: rgbToHex([COLOR_GRAD[24], COLOR_GRAD[25], COLOR_GRAD[26]]) },
      { time: 1200, color: rgbToHex([COLOR_GRAD[28], COLOR_GRAD[29], COLOR_GRAD[30]]) },
      { time: 1350, color: rgbToHex([COLOR_GRAD[32], COLOR_GRAD[33], COLOR_GRAD[34]]) },
      { time: 1500, color: rgbToHex([COLOR_GRAD[36], COLOR_GRAD[37], COLOR_GRAD[38]]) },
      { time: 1650, color: rgbToHex([COLOR_GRAD[40], COLOR_GRAD[41], COLOR_GRAD[42]]) },
      { time: 1800, color: rgbToHex([COLOR_GRAD[44], COLOR_GRAD[45], COLOR_GRAD[46]]) },
      { time: 1950, color: rgbToHex([COLOR_GRAD[48], COLOR_GRAD[49], COLOR_GRAD[50]]) },
      { time: 2100, color: rgbToHex([COLOR_GRAD[52], COLOR_GRAD[53], COLOR_GRAD[54]]) },
      { time: 2250, color: rgbToHex([COLOR_GRAD[56], COLOR_GRAD[57], COLOR_GRAD[58]]) },
      { time: 2400, color: rgbToHex([COLOR_GRAD[60], COLOR_GRAD[61], COLOR_GRAD[62]]) },
      { time: 2550, color: rgbToHex([COLOR_GRAD[64], COLOR_GRAD[65], COLOR_GRAD[66]]) },
      { time: 2700, color: rgbToHex([COLOR_GRAD[68], COLOR_GRAD[69], COLOR_GRAD[70]]) },
      { time: 2850, color: rgbToHex([COLOR_GRAD[72], COLOR_GRAD[73], COLOR_GRAD[74]]) },
      { time: 3000, color: rgbToHex([COLOR_GRAD[76], COLOR_GRAD[77], COLOR_GRAD[78]]) },
      { time: 3150, color: rgbToHex([COLOR_GRAD[80], COLOR_GRAD[81], COLOR_GRAD[82]]) },
      { time: 3300, color: rgbToHex([COLOR_GRAD[84], COLOR_GRAD[85], COLOR_GRAD[86]]) },
      { time: 3450, color: rgbToHex([COLOR_GRAD[88], COLOR_GRAD[89], COLOR_GRAD[90]]) },
      { time: 3600, color: rgbToHex([COLOR_GRAD[92], COLOR_GRAD[93], COLOR_GRAD[94]]) }
    ],
    unit      : ' min',
    position  : 'topright',
    label     : 'travel time',
    initValue : TRAVEL_TIME / 60
  });

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
        checked: false
      },
      {
        label: '<i class="fa fa-car"></i> Car',
        key: 'car',
        tooltip: 'Car speed is limited by speed limit',
        checked: true
      }
    ]
  });
  travelTypeButtons.addTo(m);
  travelTypeButtons.onChange(function(value){
    TRAVEL_TYPE = travelTypeButtons.getValue();
    TILE_CACHE.resetHard();
    gltfTiles.redraw();
  });
  travelTypeButtons.setPosition('topleft');

  /* create webgl gltf tiles */
  let gltfTiles = L.tileLayer.canvas({async:false});
  gltfTiles.drawTile = function(canvas, tile, zoom) {
    getGltfTiles(tile, zoom);
  };
  gltfTiles.addTo(m);

  startMarker.on('dragend', function(){
    TILE_CACHE.resetHard();
    gltfTiles.redraw();
  });

  /* redraw the scene after all tiles are loaded */
  gltfTiles.on('load', function(e) {
      drawGL();
  });

  /* update overlay on slider events */
  travelTimeControl.onSlideStop(function(){
    let recentTime = TRAVEL_TIME;
    TRAVEL_TIME = travelTimeControl.getMaxValue();
    if (recentTime > TRAVEL_TIME) {
      TILE_CACHE.resetHard();
    }
    gltfTiles.redraw();
  });
  travelTimeControl.addTo(m);
  travelTimeControl.setPosition('topright');

  /* init cache for tile buffers for current zoom level */
  TILE_CACHE = L.tileBufferCollection(m.getZoom());

  /* reset tile buffer cache for each zoom level change */
  m.on('zoomstart', function(e) {
    TILE_CACHE.resetOnZoom(m.getZoom());
  });

  let zoomControl = L.control.zoom({ position: 'bottomright' });
  zoomControl.addTo(m);
}

/**
* initialize webgl context
*/
function initGL() {
  'use strict';

  /* wrap webgl context in a debug context */
  gl = WebGLDebugUtils.makeDebugContext(
    WebGLUtils.setupWebGL(c),
    throwOnGLError
  );

  /* init webgl debug context */
  WebGLDebugUtils.init(gl);
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

function getGltfTiles(tile, zoom) {
  'use strict';

  /* request tile from tiling server */
  requestTile(tile.x, tile.y, zoom, function(response){

    if (response.tile.gltf.buffers.vertices.length > 0 &&
      response.tile.gltf.buffers.indices.length > 0) {

      /* create a tile buffer object for the current tile */
      let tileBuffer = L.tileBuffer(
        response.tile.gltf.buffers.vertices,
        response.tile.gltf.buffers.indices,
        response.tile.gltf.buffers.times,
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
  travelOptions.setServiceKey('uhWrWpUhyZQy8rPfiC7X');
  travelOptions.setServiceUrl('https://dev.route360.net/mobie/');
  travelOptions.addSource(startMarker);
  travelOptions.setMaxRoutingTime(TRAVEL_TIME);
  travelOptions.setTravelType(TRAVEL_TYPE);
  travelOptions.setX(x);
  travelOptions.setY(y);
  travelOptions.setZ(z);
  r360.MobieService.getGraph(travelOptions, callback);
}

/**
* draw all tiles from cache on the canvas overlay
*/
function drawGL() {
  'use strict';

  /* only proceed if context is available */
  if (gl) {

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
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
    let texUnit = 5;
    gl.activeTexture(gl.TEXTURE0 + texUnit);
    gl.uniform1i(sp.textureRamp, texUnit);

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
      gl.bufferData(gl.ARRAY_BUFFER, tileBuffers[i].getColorBuffer(), gl.STATIC_DRAW);
      gl.vertexAttribPointer(sp.textureCoord, texSize, gl.FLOAT, false, 0, 0);

      /* create index buffer */
      let idxBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, tileBuffers[i].getIndexBuffer(), gl.STATIC_DRAW);

      /* draw geometry lines by indices */
      gl.drawElements(gl.LINES, tileBuffers[i].getIndexBuffer().length, gl.UNSIGNED_SHORT, idxBuffer);
    }
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

function rgbToHex(rgb) {
  let red = rgb[0];
  let grn = rgb[1];
  let blu = rgb[2];
  let hex = blu | (grn << 8) | (red << 16);
  return '#' + (0x1000000 + hex).toString(16).slice(1);
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

/**
* throw webgl errors
*
* @param {glEnum} e the webgl error
* @param {string} f the name of the last function call
* @param {object} args additional arguments
* @throws webgl error
*/
function throwOnGLError(e, f, args) {
  throw WebGLDebugUtils.glEnumToString(e) + " was caused by call to " + f;
}
