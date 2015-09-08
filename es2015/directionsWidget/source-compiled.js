define(["exports", "esri/map", "esri/dijit/Directions", "dojo/parser", "dijit/layout/BorderContainer", "dijit/layout/ContentPane"], function (exports, _esriMap, _esriDijitDirections, _dojoParser, _dijitLayoutBorderContainer, _dijitLayoutContentPane) {
    "use strict";

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _Map = _interopRequireDefault(_esriMap);

    var _Directions = _interopRequireDefault(_esriDijitDirections);

    var _parser = _interopRequireDefault(_dojoParser);

    _parser["default"].parse();

    var map = new _Map["default"]("map", {
        basemap: "gray",
        center: [-119.11, 35.65],
        zoom: 7,
        minZoom: 7,
        maxZoom: 9
    });

    var directions = new _Directions["default"]({
        map: map,
        routeTaskUrl: "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route"
    }, "dir");

    directions.startup();
});

//# sourceMappingURL=source-compiled.js.map