define(["exports", "esri/map", "esri/geometry/Extent", "esri/layers/FeatureLayer", "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleMarkerSymbol", "esri/symbols/TextSymbol", "esri/renderers/SimpleRenderer", "esri/layers/LabelLayer", "dojo/_base/Color"], function (exports, _esriMap, _esriGeometryExtent, _esriLayersFeatureLayer, _esriSymbolsSimpleLineSymbol, _esriSymbolsSimpleFillSymbol, _esriSymbolsSimpleMarkerSymbol, _esriSymbolsTextSymbol, _esriRenderersSimpleRenderer, _esriLayersLabelLayer, _dojo_baseColor) {
    "use strict";

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _Map = _interopRequireDefault(_esriMap);

    var _Extent = _interopRequireDefault(_esriGeometryExtent);

    var _FeatureLayer = _interopRequireDefault(_esriLayersFeatureLayer);

    var _SimpleLineSymbol = _interopRequireDefault(_esriSymbolsSimpleLineSymbol);

    var _SimpleFillSymbol = _interopRequireDefault(_esriSymbolsSimpleFillSymbol);

    var _SimpleMarkerSymbol = _interopRequireDefault(_esriSymbolsSimpleMarkerSymbol);

    var _TextSymbol = _interopRequireDefault(_esriSymbolsTextSymbol);

    var _SimpleRenderer = _interopRequireDefault(_esriRenderersSimpleRenderer);

    var _LabelLayer = _interopRequireDefault(_esriLayersLabelLayer);

    var _Color = _interopRequireDefault(_dojo_baseColor);

    var bbox = new _Extent["default"]({ "xmin": -1940058, "ymin": -814715, "xmax": 1683105, "ymax": 1446096, "spatialReference": { "wkid": 102003 } });

    var map = new _Map["default"]("map", {
        extent: bbox
    });

    var labelField = "STATE_NAME";

    // States Feature Layer
    var statesColor = new _Color["default"]("#666");
    var statesLine = new _SimpleLineSymbol["default"]("solid", statesColor, 1.5);
    var statesSymbol = new _SimpleFillSymbol["default"]("solid", statesLine, null);
    var statesRenderer = new _SimpleRenderer["default"](statesSymbol);

    var statesURL = "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3";
    var states = new _FeatureLayer["default"](statesURL, {
        id: "states",
        outFields: [labelField]
    });

    states.setRenderer(statesRenderer);
    map.addLayer(states);

    // States name Label
    var statesLabel = new _TextSymbol["default"]().setColor(statesColor);
    statesLabel.font.setSize("14pt");
    statesLabel.font.setFamily("arial");
    var statesLabelRenderer = new _SimpleRenderer["default"](statesLabel);
    var labels = new _LabelLayer["default"]({ id: "labels" });

    labels.addFeatureLayer(states, statesLabelRenderer, "{" + labelField + "}");
    map.addLayer(labels);

    // Cities Feature Layer
    var citiesColor = new _Color["default"]("#444");
    var whiteLine = new _SimpleLineSymbol["default"]("solid", new _Color["default"]("#fff"), 2);
    var citiesUrl = "http://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0";
    var cities = new _FeatureLayer["default"](citiesUrl, { mode: _FeatureLayer["default"].MODE_ONDEMAND, outFields: ["CITY_NAME"] });
    cities.setDefinitionExpression("POP_RANK < 3");

    var citiesRenderer = new _SimpleRenderer["default"](new _SimpleMarkerSymbol["default"]("solid", 10, whiteLine, citiesColor));
    cities.setRenderer(citiesRenderer);
    map.addLayer(cities);

    // Label Cities

    var citiesSymbol = new _TextSymbol["default"]().setColor(citiesColor);
    citiesSymbol.font.setSize("18pt");
    citiesSymbol.font.setFamily("arial");
    citiesSymbol.yoffset = 4;
    labels.addFeatureLayer(cities, new _SimpleRenderer["default"](citiesSymbol), "{CITY_NAME}");
});

//# sourceMappingURL=source-compiled.js.map