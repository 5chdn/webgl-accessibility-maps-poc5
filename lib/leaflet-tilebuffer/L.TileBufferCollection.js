/*jshint esversion: 6 */
/*jshint indent: 2 */

/*
  WebGL tile buffer object cache for leaflet,
  storing all loaded tile buffers on current zoom level.

  ** Requires **
    - Leaflet 0.7.7 or later
    - L.TileBuffer

  ** Copyright & License **
  (C) 2015-2016 Alexander Schoedon <schoedon@uni-potsdam.de>

  Find a GPLv3 attached.

  ** Credits **
  Inspired by Stanislav Sumbera's Leaflet Canvas Overlay.
    - http://blog.sumbera.com/2014/04/20/leaflet-canvas/

  Inspired by Vladimir Agafonkin's Leaflet Heat Maps.
    - https://github.com/Leaflet/Leaflet.heat
*/

/**
 * Leaflet tile buffer collection class
 */
L.TileBufferCollection = L.Class.extend({


  /* Public member variables for the collection size and current zoom */
  size : 0,           /* number of tiles at this zoom level    */
  zoom : -1,          /* current zoom level                    */

  /* Actual tile buffer objects collection */
  collection : [],

  /* Default options (blank on purpose) */
  options : {},

  /**
   * Initialize a new leaflet tile buffer collection object
   *
   * @param {Integer} zoom the current zoom level for this collection
   * @param {Array} options an array of options for the tile (none)
   */
  initialize : function(zoom, options) {
    this.zoom = zoom;
    L.setOptions(this, options);
  },

  /**
   * Updates the leaflet tile buffer collection object
   *
   * @param {Integer} zoom the current zoom level for this collection
   * @param {Array} options an array of options for the tile (none)
   * @return {Object} the updated tile buffer collection object
   */
  params : function(zoom, options) {
    this.zoom = zoom;
    L.setOptions(this, options);
    return this;
  },

  /**
   * Adds a tile buffer object to the collection
   *
   * @param {L.TileBuffer} tileBuffer the tile buffer object
   * @return {Boolean} true if it was added correctly
   */
  addTile : function(tileBuffer) {
    /* only proceed if tileBuffer looks valid */
    if (tileBuffer !== null && tileBuffer.isSane() && tileBuffer.getZoom() == this.zoom) {
      this.collection.push(tileBuffer);
      this.size = this.collection.length;
      return true;
    } else {
      return false;
    }
  },

  /**
   * Updates a tile buffer object in the collection
   *
   * @param {L.TileBuffer} tileBuffer the tile buffer object
   * @return {Boolean} true if it was updated correctly
   */
  updateTile : function(tileBuffer) {

    /* only proceed if tileBuffer looks valid */
    if (tileBuffer !== null && tileBuffer.isSane() && tileBuffer.getZoom() == this.zoom) {
      this.removeTile(tileBuffer.getX(), tileBuffer.getY(), tileBuffer.getZoom());
      return this.addTile(tileBuffer);
    } else {
      return false;
    }
  },

  /**
   * Removes a tile buffer object from the collection
   *
   * @param {Integer} x the x coordinate of the tile to remove
   * @param {Integer} y the y coordinate of the tile to remove
   * @param {Integer} zoom the zoom factor of the tile to remove
   * @return {Boolean} true if it was removed correctly
   */
  removeTile : function(x, y, zoom) {
    let remove = -1;
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].getX() == x &&
        this.collection[i].getY() == y &&
        this.collection[i].getZoom() == zoom) {
        remove = i;
      }
    }
    if (remove > -1) {
      this.collection.splice(remove, 1);
      this.size = this.collection.length;
      return true;
    }
    return false;
  },

  /**
   * Gets the size of the tile buffer collection
   *
   * @return {Integer} the size of the tile buffer collection
   */
  getSize : function() {
    return this.size;
  },

  /**
   * Gets the zoom factor of the tile buffer collection
   *
   * @return {Integer} the zoom factor of the tile buffer collection
   */
  getZoom : function() {
    return this.zoom;
  },

  /**
   * Gets a tile buffer object from the collection
   *
   * @param {Integer} x the x coordinate of the tile to return
   * @param {Integer} y the y coordinate of the tile to return
   * @param {Integer} zoom the zoom factor of the tile to return
   * @return {Object} the tile buffer from the collection
   */
  getTile : function(x, y, zoom) {
    let tileBuffer = null;
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].getX() == x &&
        this.collection[i].getY() == y &&
        this.collection[i].getZoom() == zoom) {
        tileBuffer = this.collection[i];
      }
    }
    return tileBuffer;
  },

  /**
   * Gets the complete tile buffer collection
   *
   * @return {Array} the complete tile buffer collection
   */
  getTileBufferCollection : function() {
    return this.collection;
  },

  /**
   * Checks if the collection matches the desired zoom level.
   *
   * @param {Integer} zoom the zoom factor of the collection
   * @return {Boolean} true if zoom level is valid
   */
  isZoomLevel : function(zoom) {
    if (this.zoom == zoom) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * Checks if collection is empty.
   *
   * @return {Boolean} true collection is empty
   */
  isEmpty : function() {
    if (this.size < 1 || this.collection.length < 1) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * Checks if this is a valid collection. Use with caution.
   *
   * @return {Boolean} true if collection parameters look sane.
   */
  isSane : function() {
    if (this.size < 1 || this.zoom < 0) {
      return false;
    } else {

      /* careful!!! */
      return true;
    }
  },


  /**
   * Clears the collection on zoom level change.
   *
   * @param {Integer} zoom the new zoom level for this collection
   */
  resetOnZoom : function(zoom) {
    for (let i = 0; i < this.collection.length; i++) {
      if (!this.collection[i].getZoom() != zoom) {
        this.removeTile(this.collection[i].getX(), this.collection[i].getY(), this.collection[i].getZoom());
      }
    }
    this.size = this.collection.length;
    this.zoom = zoom;
  },

  /**
   * Hard reset! Clears all collection objects. Don't use it.
   */
  resetHard : function() {
    this.size = 0;
    this.zoom = -1;
    this.collection = [];
  },

  /**
   * Creates a string representation of the tile buffer collection
   *
   * @return {String} a string representation of the tile buffer collection
   */
  toString : function() {
    return "L.TileBufferCollection: Zoom(" + this.zoom + "), Size(" + this.size + ").";
  },
});

/**
 * A wrapper function to create a tile buffer collection.
 *
 * @param {Integer} zoom the current zoom level for this collection
 * @param {Array} options an array of options for the tile (none)
 * @return {Object} a tile buffer collection object
 */
L.tileBufferCollection = function (zoom, options) {
  return new L.TileBufferCollection(zoom, options);
};
