Leaflet Full view Canvas Overlay - straightforward full screen canvas overlay that calls custom user function for drawing.
Mostly extracted from [here](https://github.com/Leaflet/Leaflet.heat) added resize and few other parameters for callback
Compare to same data SVG rendering [here](http://bl.ocks.org/Sumbera/7e8e57368175a1433791)

		//Example:
		L.canvasOverlay()
		   .params({data: points})     // optional add any custom data that will be passed to draw function
	           .drawing(drawingOnCanvas)   // set drawing function
	           .addTo(leafletMap);         // add this layer to leaflet map
	            

		//Custom drawing function:
			function drawingOnCanvas(canvasOverlay, params) {
		            var ctx = params.canvas.getContext('2d');
		            params.options.data.map(function (d, i) {
		              // canvas drawing goes here
		            });
		        };
		        
		// parameters passed to custom draw function :
		 {
                                    canvas   : <canvas>,
                                    bounds   : <bounds in WGS84>
                                    size     : <view size>,
                                    zoomScale: <zoom scale is  1/resolution>,
                                    zoom     : <current zoom>,
                                    options  : <options passed >
                 };

Other useful full view  Leaflet Canvas sources here:
- [leaflet.heat](https://github.com/Leaflet/Leaflet.heat)
- [Full Canvas] (https://github.com/cyrilcherian/Leaflet-Fullcanvas)
- [CartoDb Leaflet.Canvas] (https://github.com/CartoDB/Leaflet.CanvasLayer)
 


