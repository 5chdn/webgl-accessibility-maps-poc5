/*jshint esversion: 6 */
/*jshint indent: 2 */

/*
  WebGL tile buffer objects for leaflet,
  storing vertex, index and color array buffers and tile information.

  ** Requires **
    - Leaflet 0.7.7 or later

  ** Copyright & License **
  (C) 2015-2016 Alexander Schoedon <schoedon@uni-potsdam.de>

  Find a GPLv3 attached.

  ** Credits **

  Inspired by Stanislav Sumbera's Leaflet Canvas Overlay.
    - http://blog.sumbera.com/2014/04/20/leaflet-canvas/
*/

/**
 * Leaflet tile buffer class
 */
L.TileBuffer = L.Class.extend({

  /* Array buffers for webgl vertices, indices and colors */
  vertexBuffer : new Float32Array(0),   /* array buffer for vertices */
  indexBuffer : new Uint32Array(0),     /* array buffer for indices  */
  colorBuffer : new Float32Array(0),    /* array buffer for colors   */

  /* Default options (invalid on purpose) */
  options : {
    x : -1,
    y : -1,
    zoom : -1
  },

  /**
   * Initialize a new leaflet tile buffer object
   *
   * @param {Float32Array} vertexBuffer the vertex array buffer
   * @param {Uint32Array} indexBuffer the index element array buffer
   * @param {Float32Array} colorBuffer the color array buffer
   * @param {Array} options an array of options for the tile (x, y, zoom)
   */
  initialize : function(vertexBuffer, indexBuffer, colorBuffer, options) {
    this.vertexBuffer = new Float32Array(vertexBuffer);
    this.indexBuffer = new Uint32Array(indexBuffer);
    this.colorBuffer = new Float32Array(colorBuffer);
    L.setOptions(this, options);
  },

  /**
   * Update the leaflet tile buffer object
   *
   * @param {Float32Array} vertexBuffer the vertex array buffer
   * @param {Uint32Array} indexBuffer the index element array buffer
   * @param {Float32Array} colorBuffer the color array buffer
   * @param {Array} options an array of options for the tile (x, y, zoom)
   * @return {Object} the updated tile buffer object
   */
  params : function(vertexBuffer, indexBuffer, colorBuffer, options) {
    this.vertexBuffer = new Float32Array(vertexBuffer);
    this.indexBuffer = new Uint32Array(indexBuffer);
    this.colorBuffer = new Float32Array(colorBuffer);
    L.setOptions(this, options);
    return this;
  },

  /**
   * Set the vertex buffer
   *
   * @param {Float32Array} vertexBuffer the vertex array buffer
   */
  setVertexBuffer : function(vertexBuffer) {
    this.vertexBuffer = new Float32Array(vertexBuffer);
  },

  /**
   * Set the index buffer
   *
   * @param {Uint32Array} indexBuffer the index element array buffer
   */
  setIndexBuffer : function(indexBuffer) {
    this.indexBuffer = new Uint32Array(indexBuffer);
  },

  /**
   * Set the color buffer
   *
   * @param {Float32Array} colorBuffer the color array buffer
   */
  setColorBuffer : function(colorBuffer) {
    this.colorBuffer = new Float32Array(colorBuffer);
  },

  /**
   * Gets the x coordinate of the tile
   *
   * @return {Integer} the x coordinate of the tile
   */
  getX : function() {
    return this.options.x;
  },

  /**
   * Gets the y coordinate of the tile
   *
   * @return {Integer} the y coordinate of the tile
   */
  getY : function() {
    return this.options.y;
  },

  /**
   * Gets the zoom factor of the tile
   *
   * @return {Integer} the zoom factor of the tile
   */
  getZoom : function() {
    return this.options.zoom;
  },

  /**
   * Gets the vertex array buffer of the tile
   *
   * @return {Float32Array} the vertex array buffer of the tile
   */
  getVertexBuffer : function() {
    return this.vertexBuffer;
  },

  /**
   * Gets the index element array buffer of the tile
   *
   * @return {Uint32Array} the index element array buffer of the tile
   */
  getIndexBuffer : function() {
    return this.indexBuffer;
  },

  /**
   * Gets the color array buffer of the tile
   *
   * @return {Float32Array} the color array buffer of the tile
   */
  getColorBuffer : function() {
    return this.colorBuffer;
  },

  /**
   * Tests if this x/y/z-tile is available. Does not check the buffers.
   * Use with caution.
   *
   * @param {Integer} x the x coordinate of the tile
   * @param {Integer} y the y coordinate of the tile
   * @param {Integer} zoom the zoom factor of the tile
   * @return {Boolean} true if this tile is available
   */
  isEqual : function(x, y, zoom) {
    if (this.options.x == x && this.options.y == y && this.options.zoom == zoom) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * Checks if this is a valid tile buffer. Use with caution.
   *
   * @return {Boolean} true if tile buffer parameters look sane.
   */
  isSane : function() {
    if (this.options.zoom < 0 ||
        this.colorBuffer.length < 3 ||
        this.indexBuffer.length < 2 ||
        this.vertexBuffer.length < 2) {
      return false;
    } else {

      /* careful!!! */
      return true;
    }
  },

  /**
   * Creates a string representation of the tile buffer
   *
   * @return {String} a string representation of the tile buffer
   */
  toString : function() {
    return "L.TileBuffer: X(" + this.options.x + "), Y(" + this.options.y + "), Zoom(" + this.options.zoom + ").";
  },
});

/**
 * A wrapper function to create a tile buffer object.
 *
 * @param {Float32Array} vertexBuffer the vertex array buffer
 * @param {Uint32Array} indexBuffer the index element array buffer
 * @param {Float32Array} colorBuffer the color array buffer
 * @param {Array} options an array of options for the tile (x, y, zoom)
 * @return {Object} a tile buffer object
 */
L.tileBuffer = function (vertexBuffer, indexBuffer, colorBuffer, options) {
  return new L.TileBuffer(vertexBuffer, indexBuffer, colorBuffer, options);
};
