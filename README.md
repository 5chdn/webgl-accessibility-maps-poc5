Reachability Maps WebGL Visualization
=====================================

GPU-accelerated (JS/WebGL) rendering of network-based reachability maps.
<span>#leaflet #route360 #webgl #gltf #reachabilitymaps #proofofconcept #5.</span>


Proof of Concept #5
-------------------

Rendering of the street graph using a webgl-enabled gltf-tiling approach.

![Screenshot of Potsdam, Germany](img/screenshot-potsdam.png?raw=true "Screenshot of Potsdam, Germany")

- Eurovis 2016 Short Paper: [Academia](https://www.academia.edu/25987068/Interactive_Web-based_Visualization_for_Accessibility_Mapping_of_Transportation_Networks), [Google](https://scholar.google.de/scholar?q=related:7_slo3gc70kJ:scholar.google.com/)
- Showcase Screencast: [Youtube](https://www.youtube.com/watch?v=5TNdPxGf6Y8), [Twitter](https://twitter.com/5chdn/status/750420233115033600)

Demo
----

Beware of the [bug](https://github.com/5chdn/webgl-accessibility-maps-poc5/issues)!

  - http://5chdn.github.io/webgl-accessibility-maps-poc5

Requires:

  - WebGL 1.0 context (might has to be enabled in browser)
  - ECMAScript 6 (2015) / JavaScript 1.7

Does not work with:

  - Internet Explorer 8, 9 and 10 (upgrade to 11 or Edge)
  - Safari 7, 8 and 9 (upgrade to 10 or TP)

Credits
-------

PoC #5 written and (c) 2016 by Alexander Schoedon (schoedon@uni-potsdam.de)
at the Hasso-Plattner-Institute, University of Potsdam, Germany, and in
cooperation with Motion Intelligence GmbH, Potsdam, Germany.

  - https://hpi.de/en/computer-graphics-systems/
  - https://www.route360.net/

This project utilizes Leaflet JS, and the Route360° JS API.

  - http://leafletjs.com/
  - https://developers.route360.net/index.html
