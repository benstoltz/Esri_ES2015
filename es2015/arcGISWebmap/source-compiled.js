define(["exports", "esri/map", "esri/arcgis/utils", "esri/dijit/Legend"], function (exports, _esriMap, _esriArcgisUtils, _esriDijitLegend) {
    "use strict";

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _Map = _interopRequireDefault(_esriMap);

    var _arcgisUtils = _interopRequireDefault(_esriArcgisUtils);

    var _Legend = _interopRequireDefault(_esriDijitLegend);

    var map;

    _arcgisUtils["default"].createMap("1a40fa5cc1ab4569b79f45444d728067", "map").then(function (response) {
        map = response.map;

        var legend = new _Legend["default"]({
            map: map,
            layerInfos: _arcgisUtils["default"].getLegendLayers(response)
        }, "legendDiv");

        legend.startup();
    });
});

//# sourceMappingURL=source-compiled.js.map