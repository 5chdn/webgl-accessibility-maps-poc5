/* global leaflet map, overlay, canvas */
var m, o, c;

/* global webgl context, shader program, processing unit */
var gl, sp, gpu;

/* global center berlin, default zoom */
var DEFAULT_CENTER = [52.516, 13.377];
var DEFAULT_ZOOM = 12;

/* cache for all tile's vertex, index and color buffers */
var TILE_CACHE;

/* default travel time is 10 minutes */
var TRAVEL_TIME = 1800;
var TRAVEL_TIME_LIMIT = 3600;
var TRAVEL_TYPE = 'car';

/* travel time control (r360) and a marker */
var travelTimeControl, travelTypeButtons, colorControl;
var startMarker;

var COLOR_GRAD = [
   49.0 / 255.0,  54.0 / 255.0, 149.0 / 255.0,  /* #313695 */
   59.0 / 255.0,  85.0 / 255.0, 164.0 / 255.0,  /* #3b55a4 */
   69.0 / 255.0, 117.0 / 255.0, 180.0 / 255.0,  /* #4575b4 */
   92.0 / 255.0, 145.0 / 255.0, 194.0 / 255.0,  /* #5c91c2 */
  116.0 / 255.0, 173.0 / 255.0, 209.0 / 255.0,  /* #74add1 */
  143.0 / 255.0, 195.0 / 255.0, 221.0 / 255.0,  /* #8fc3dd */
  171.0 / 255.0, 217.0 / 255.0, 233.0 / 255.0,  /* #abd9e9 */
  197.0 / 255.0, 230.0 / 255.0, 240.0 / 255.0,  /* #c5e6f0 */
  224.0 / 255.0, 243.0 / 255.0, 248.0 / 255.0,  /* #e0f3f8 */
  239.0 / 255.0, 249.0 / 255.0, 219.0 / 255.0,  /* #eff9db */
            1.0,           1.0, 191.0 / 255.0,  /* #ffffbf */
  254.0 / 255.0, 239.0 / 255.0, 167.0 / 255.0,  /* #feefa7 */
  254.0 / 255.0, 224.0 / 255.0, 144.0 / 255.0,  /* #fee090 */
  253.0 / 255.0, 199.0 / 255.0, 120.0 / 255.0,  /* #fdc778 */
  253.0 / 255.0, 174.0 / 255.0,  97.0 / 255.0,  /* #fdae61 */
  248.0 / 255.0, 141.0 / 255.0,  82.0 / 255.0,  /* #f88d52 */
  244.0 / 255.0, 109.0 / 255.0,  67.0 / 255.0,  /* #f46d43 */
  229.0 / 255.0,  78.0 / 255.0,  53.0 / 255.0,  /* #e54e35 */
  215.0 / 255.0,  48.0 / 255.0,  39.0 / 255.0,  /* #d73027 */
  190.0 / 255.0,  24.0 / 255.0,  38.0 / 255.0,  /* #be1826 */
  165.0 / 255.0,           0.0,  38.0 / 255.0,  /* #a50026 */
  144.0 / 255.0,           0.0,  22.0 / 255.0,  /* #900016 */
  123.0 / 255.0,           0.0,  11.0 / 255.0,  /* #7b000b */
  102.0 / 255.0,           0.0,           0.0,  /* #660000 */
];

/**
 * initialize the distance map visualization
 */
function accessibility_map() {

  /* do heavy processing on gpu */
  gpu = new GPU();

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
  var whiteIcon = L.icon({
    iconUrl   : 'map-marker-point-64.png',
    iconSize  : [32, 32],
    iconAnchor: [16, 32],
  });
  startMarker = L.marker(DEFAULT_CENTER, {
    draggable: true,
    icon     : whiteIcon
  }).addTo(m);

  /* setup leaflet canvas webgl overlay */
  o = L.canvasOverlay().drawing(drawGL).addTo(m);
  c = o.canvas()
  o.canvas.width = c.clientWidth;
  o.canvas.height = c.clientHeight;

  /* initialize webgl on canvas overlay */
  initGL();
  initShaders();

  /* setup map with mapbox basemap tiles */
  let tileLayerUrl =
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png'
    + '?access_token={accessToken}';
  let token =
    'pk.eyJ1IjoiZG9uc2Nob2UiLCJhIjoiMkN5RUk0QSJ9.FGcEYWjfgcJUmSyN1tkwgQ';
  let mapboxTiles = L.tileLayer(tileLayerUrl, {
    attribution: 'WebGL/glTF Tiling PoC #5 | &copy; 2016 A. Schoedon',
    id: 'mapbox.dark',
    accessToken: token,
    noWrap: true,
    continuousWorld: false,
    attributionControl: false
  }).addTo(m);

  /* use a r360 time slider to adjust travel time */
  travelTimeControl = r360.travelTimeControl({
    travelTimes: [
      { time:  150, color: rgbToHex([COLOR_GRAD[ 0], COLOR_GRAD[ 0+1], COLOR_GRAD[ 0+2]]) },
      { time:  300, color: rgbToHex([COLOR_GRAD[ 3], COLOR_GRAD[ 3+1], COLOR_GRAD[ 3+2]]) },
      { time:  450, color: rgbToHex([COLOR_GRAD[ 6], COLOR_GRAD[ 6+1], COLOR_GRAD[ 6+2]]) },
      { time:  600, color: rgbToHex([COLOR_GRAD[ 9], COLOR_GRAD[ 9+1], COLOR_GRAD[ 9+2]]) },
      { time:  750, color: rgbToHex([COLOR_GRAD[12], COLOR_GRAD[12+1], COLOR_GRAD[12+2]]) },
      { time:  900, color: rgbToHex([COLOR_GRAD[15], COLOR_GRAD[15+1], COLOR_GRAD[15+2]]) },
      { time: 1050, color: rgbToHex([COLOR_GRAD[18], COLOR_GRAD[18+1], COLOR_GRAD[18+2]]) },
      { time: 1200, color: rgbToHex([COLOR_GRAD[21], COLOR_GRAD[21+1], COLOR_GRAD[21+2]]) },
      { time: 1350, color: rgbToHex([COLOR_GRAD[24], COLOR_GRAD[24+1], COLOR_GRAD[24+2]]) },
      { time: 1500, color: rgbToHex([COLOR_GRAD[27], COLOR_GRAD[27+1], COLOR_GRAD[27+2]]) },
      { time: 1650, color: rgbToHex([COLOR_GRAD[30], COLOR_GRAD[30+1], COLOR_GRAD[30+2]]) },
      { time: 1800, color: rgbToHex([COLOR_GRAD[33], COLOR_GRAD[33+1], COLOR_GRAD[33+2]]) },
      { time: 1950, color: rgbToHex([COLOR_GRAD[36], COLOR_GRAD[36+1], COLOR_GRAD[36+2]]) },
      { time: 2100, color: rgbToHex([COLOR_GRAD[39], COLOR_GRAD[39+1], COLOR_GRAD[39+2]]) },
      { time: 2250, color: rgbToHex([COLOR_GRAD[42], COLOR_GRAD[42+1], COLOR_GRAD[42+2]]) },
      { time: 2400, color: rgbToHex([COLOR_GRAD[45], COLOR_GRAD[45+1], COLOR_GRAD[45+2]]) },
      { time: 2550, color: rgbToHex([COLOR_GRAD[48], COLOR_GRAD[48+1], COLOR_GRAD[48+2]]) },
      { time: 2700, color: rgbToHex([COLOR_GRAD[51], COLOR_GRAD[51+1], COLOR_GRAD[51+2]]) },
      { time: 2850, color: rgbToHex([COLOR_GRAD[54], COLOR_GRAD[54+1], COLOR_GRAD[54+2]]) },
      { time: 3000, color: rgbToHex([COLOR_GRAD[57], COLOR_GRAD[57+1], COLOR_GRAD[57+2]]) },
      { time: 3150, color: rgbToHex([COLOR_GRAD[60], COLOR_GRAD[60+1], COLOR_GRAD[60+2]]) },
      { time: 3300, color: rgbToHex([COLOR_GRAD[63], COLOR_GRAD[63+1], COLOR_GRAD[63+2]]) },
      { time: 3450, color: rgbToHex([COLOR_GRAD[66], COLOR_GRAD[66+1], COLOR_GRAD[66+2]]) },
      { time: 3600, color: rgbToHex([COLOR_GRAD[69], COLOR_GRAD[69+1], COLOR_GRAD[69+2]]) }
    ],
    unit      : ' min',
    position  : 'topright',
    label     : 'travel time',
    initValue : TRAVEL_TIME / 60
  });

  travelTypeButtons = r360.radioButtonControl({
    buttons: [
      {
        label: '<i class="fa fa-male"></i>  Walking',
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
    TILE_CACHE.resetOnZoom(m.getZoom());
    gltfTiles.redraw();
  });
  travelTypeButtons.setPosition('topleft');

  /* create webgl gltf tiles */
  let gltfTiles = L.tileLayer.canvas({async:false});
  gltfTiles.drawTile = function(canvas, tile, zoom) {
    getGltfTiles(tile, zoom);
  }
  gltfTiles.addTo(m);

  startMarker.on('dragend', function(){
    TILE_CACHE.resetOnZoom(m.getZoom());
    gltfTiles.redraw();
  });

  /* redraw the scene after all tiles are loaded */
  gltfTiles.on('load', function(e) {
      drawGL();
  });

  /* update overlay on slider events */
  travelTimeControl.onSlideStop(function(){
    recentTime = TRAVEL_TIME;
    TRAVEL_TIME = travelTimeControl.getMaxValue();
    if (recentTime > TRAVEL_TIME) {
      TILE_CACHE.resetOnZoom(m.getZoom());
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
    sp.vertexPosition = gl.getAttribLocation(sp, "a_vertex");
    sp.vertexColor = gl.getAttribLocation(sp, "a_color");
    gl.enableVertexAttribArray(sp.vertexPosition);
    gl.enableVertexAttribArray(sp.vertexColor);
  }
}

/**
* parse shader from dom by id
*
* @param {string} id the shader element id in the document
* @return {object} the compiled shader
*/
function getShader(id) {

  let shader;
  let shaderScript = document.getElementById(id);

  if (!shaderScript) {
    _log("getShader(id): [WRN]: shader not found");
    return null;
  }

  let str = "";
  let k = shaderScript.firstChild;
  while (k) {
    if (k.nodeType == 3)
      str += k.textContent;
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

  /* request tile from tiling server */
  requestTile(tile.x, tile.y, zoom, function(response){

    if (response.tile.gltf.buffers.vertices.length > 0
      && response.tile.gltf.buffers.indices.length > 0) {

      let vtx = new Float32Array(response.tile.gltf.buffers.vertices);
      let idx = new Uint16Array(response.tile.gltf.buffers.indices);

      /* calculate the color ramp on the fly */
      let clrSize = 4;
      let tmpClr = [0.0, 0.0, 0.0, 0.0];
      let clr = new Float32Array(response.tile.gltf.buffers.times.length * clrSize);
      for (let i = 0; i < response.tile.gltf.buffers.times.length; i++) {
        let tmpTime = response.tile.gltf.buffers.times[i] * TRAVEL_TIME;
        tmpClr = pickColor(tmpTime);
        clr[i * clrSize]     = tmpClr[0];
        clr[i * clrSize + 1] = tmpClr[1];
        clr[i * clrSize + 2] = tmpClr[2];
        clr[i * clrSize + 3] = tmpClr[3];
      };

      /* create a tile buffer object for the current tile */
      let tileBuffer = L.tileBuffer(vtx, idx, clr, {
        x: tile.x,
        y: tile.y,
        zoom: zoom
      });

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

function pickColor(selectedTime) {
  let alpha = 0.0;
  let pickedColor = [0.0, 0.0, 0.0, alpha];
  if (selectedTime < TRAVEL_TIME) {
    alpha = 1.0;
  }
  if        (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 23.0) {
    pickedColor = [COLOR_GRAD[23 * 3], COLOR_GRAD[23 * 3 + 1], COLOR_GRAD[23 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 22.0) {
    pickedColor = [COLOR_GRAD[22 * 3], COLOR_GRAD[22 * 3 + 1], COLOR_GRAD[22 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 21.0) {
    pickedColor = [COLOR_GRAD[21 * 3], COLOR_GRAD[21 * 3 + 1], COLOR_GRAD[21 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 20.0) {
    pickedColor = [COLOR_GRAD[20 * 3], COLOR_GRAD[20 * 3 + 1], COLOR_GRAD[20 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 19.0) {
    pickedColor = [COLOR_GRAD[19 * 3], COLOR_GRAD[19 * 3 + 1], COLOR_GRAD[19 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 18.0) {
    pickedColor = [COLOR_GRAD[18 * 3], COLOR_GRAD[18 * 3 + 1], COLOR_GRAD[18 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 17.0) {
    pickedColor = [COLOR_GRAD[17 * 3], COLOR_GRAD[17 * 3 + 1], COLOR_GRAD[17 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 16.0) {
    pickedColor = [COLOR_GRAD[16 * 3], COLOR_GRAD[16 * 3 + 1], COLOR_GRAD[16 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 15.0) {
    pickedColor = [COLOR_GRAD[15 * 3], COLOR_GRAD[15 * 3 + 1], COLOR_GRAD[15 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 14.0) {
    pickedColor = [COLOR_GRAD[14 * 3], COLOR_GRAD[14 * 3 + 1], COLOR_GRAD[14 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 13.0) {
    pickedColor = [COLOR_GRAD[13 * 3], COLOR_GRAD[13 * 3 + 1], COLOR_GRAD[13 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 12.0) {
    pickedColor = [COLOR_GRAD[12 * 3], COLOR_GRAD[12 * 3 + 1], COLOR_GRAD[12 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 11.0) {
    pickedColor = [COLOR_GRAD[11 * 3], COLOR_GRAD[11 * 3 + 1], COLOR_GRAD[11 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 * 10.0) {
    pickedColor = [COLOR_GRAD[10 * 3], COLOR_GRAD[10 * 3 + 1], COLOR_GRAD[10 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  9.0) {
    pickedColor = [COLOR_GRAD[ 9 * 3], COLOR_GRAD[ 9 * 3 + 1], COLOR_GRAD[ 9 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  8.0) {
    pickedColor = [COLOR_GRAD[ 8 * 3], COLOR_GRAD[ 8 * 3 + 1], COLOR_GRAD[ 8 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  7.0) {
    pickedColor = [COLOR_GRAD[ 7 * 3], COLOR_GRAD[ 7 * 3 + 1], COLOR_GRAD[ 7 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  6.0) {
    pickedColor = [COLOR_GRAD[ 6 * 3], COLOR_GRAD[ 6 * 3 + 1], COLOR_GRAD[ 6 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  5.0) {
    pickedColor = [COLOR_GRAD[ 5 * 3], COLOR_GRAD[ 5 * 3 + 1], COLOR_GRAD[ 5 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  4.0) {
    pickedColor = [COLOR_GRAD[ 4 * 3], COLOR_GRAD[ 4 * 3 + 1], COLOR_GRAD[ 4 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  3.0) {
    pickedColor = [COLOR_GRAD[ 3 * 3], COLOR_GRAD[ 3 * 3 + 1], COLOR_GRAD[ 3 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0 *  2.0) {
    pickedColor = [COLOR_GRAD[ 2 * 3], COLOR_GRAD[ 2 * 3 + 1], COLOR_GRAD[ 2 * 3 + 2], alpha];
  } else if (selectedTime > TRAVEL_TIME_LIMIT / 24.0       ) {
    pickedColor = [COLOR_GRAD[     3], COLOR_GRAD[     3 + 1], COLOR_GRAD[     3 + 2], alpha];
  } else {
    pickedColor = [COLOR_GRAD[     0], COLOR_GRAD[         1], COLOR_GRAD[         2], alpha];
  }
  return pickedColor;
}

/**
* draw all tiles from cache on the canvas overlay
*/
function drawGL() {

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

    /* define sizes of vertex and color buffer objects */
    let vtxSize = 2;
    let clrSize = 4;

    /* define model view matrix. here: identity */
    let uMatrix = new Float32Array([
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,1
    ]);

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
    for (let i = TILE_CACHE.getSize() - 1; i >= 0; i--) {

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

      /* create color buffer */
      let clrBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, clrBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, tileBuffers[i].getColorBuffer(), gl.STATIC_DRAW);
      gl.vertexAttribPointer(sp.vertexColor, clrSize, gl.FLOAT, false, 0, 0);

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
 * Converts spherical web mercator to tile pixel X/Y at zoom level 0
 * for 1x1 tile size and inverts y coordinates. (EPSG: 3857)
 *
 * @param {L.point} p Leaflet point with web mercator coordinates
 * @return {L.point} Leaflet point with tile pixel x and y corrdinates
 */
function mercatorToPixels(p)  {
  let pixelX = (p.x + (EARTH_EQUATOR / 2.0)) / EARTH_EQUATOR;
  let pixelY = ((p.y - (EARTH_EQUATOR / 2.0)) / -EARTH_EQUATOR);
  return L.point(pixelX, pixelY);
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
  let red = rgb[0] * 255;
  let grn = rgb[1] * 255;
  let blu = rgb[2] * 255;
  let hex = blu | (grn << 8) | (red << 16);
  return '#' + (0x1000000 + hex).toString(16).slice(1)
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
};
