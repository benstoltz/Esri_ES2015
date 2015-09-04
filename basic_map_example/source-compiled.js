define(["exports", "module", "esri/map"], function (exports, module, _esriMap) {
    /**
     * Created by ben7664 on 9/4/2015.
     */

    "use strict";

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _Map = _interopRequireDefault(_esriMap);

    var map = new _Map["default"]("map", {
        basemap: "gray",
        center: [-119.11, 35.65],
        zoom: 7,
        minZoom: 7,
        maxZoom: 9
    });

    module.exports = map;
});

//# sourceMappingURL=source-compiled.js.map