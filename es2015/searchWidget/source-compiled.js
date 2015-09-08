define(["exports", "esri/map", "esri/dijit/Search", "esri/geometry/Extent", "esri/graphic", "esri/symbols/SimpleMarkerSymbol", "esri/geometry/screenUtils", "dojo/dom", "dojo/dom-construct", "dojo/query", "dojo/_base/Color"], function (exports, _esriMap, _esriDijitSearch, _esriGeometryExtent, _esriGraphic, _esriSymbolsSimpleMarkerSymbol, _esriGeometryScreenUtils, _dojoDom, _dojoDomConstruct, _dojoQuery, _dojo_baseColor) {
    "use strict";

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _Map = _interopRequireDefault(_esriMap);

    var _Search = _interopRequireDefault(_esriDijitSearch);

    var _Extent = _interopRequireDefault(_esriGeometryExtent);

    var _Graphic = _interopRequireDefault(_esriGraphic);

    var _SimpleMarkerSymbol = _interopRequireDefault(_esriSymbolsSimpleMarkerSymbol);

    var _screenUtils = _interopRequireDefault(_esriGeometryScreenUtils);

    var _dom = _interopRequireDefault(_dojoDom);

    var _domConstruct = _interopRequireDefault(_dojoDomConstruct);

    var _query = _interopRequireDefault(_dojoQuery);

    var _Color = _interopRequireDefault(_dojo_baseColor);

    var map = new _Map["default"]("map", {
        basemap: "topo",
        center: [-117.19, 34.055],
        zoom: 15
    });

    var search = new _Search["default"]({
        map: map
    }, _dom["default"].byId("search"));

    var extent = new _Extent["default"]({
        "spatialReference": {
            "wkid": 102100
        },
        "xmin": -13063280,
        "xmax": -13033928,
        "ymin": 4028345,
        "ymax": 4042715
    });

    search.sources[0].searchExtent = extent;

    search.startup();

    // Enable spotlight

    map.on("load", enableSpotlight);
    search.on("select-result", showLocation);
    search.on("clear-search", removeSpotlight);

    function showLocation(e) {
        map.graphics.clear();
        var point = e.result.feature.geometry;
        var symbol = new _SimpleMarkerSymbol["default"]().setStyle(_SimpleMarkerSymbol["default"].STYLE_SQUARE).setColor(new _Color["default"]([255, 0, 0, 0.5]));
        var graphic = new _Graphic["default"](point, symbol);
        map.graphics.add(graphic);

        map.infoWindow.setTitle("Search Result");
        map.infoWindow.setContent(e.result.name);
        map.infoWindow.show(e.result.feature.geometry);

        var spotlight = map.on("extent-change", function () {
            var geom = _screenUtils["default"].toScreenGeometry(map.extent, map.width, map.height, e.result.extent);
            var width = geom.xmax - geom.xmin;
            var height = geom.ymax - geom.ymin;

            var max = height;

            if (width > height) {
                max = width;
            }

            var margin = '-' + Math.floor(max / 2) + 'px 0 0 -' + Math.floor(max / 2) + 'px';

            (0, _query["default"])(".spotlight").addClass("spotlight-active").style({
                width: max + "px",
                height: max + "px",
                margin: margin
            });
            spotlight.remove();
        });
    }

    function enableSpotlight() {
        var html = "<div id='spotlight' class='spotlight'></div>";
        _domConstruct["default"].place(html, _dom["default"].byId("map_container"), "first");
    }

    function removeSpotlight() {
        (0, _query["default"])(".spotlight").removeClass("spotlight-active");
        map.infoWindow.hide();
        map.graphics.clear();
    }
});

//# sourceMappingURL=source-compiled.js.map