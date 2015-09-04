define(['exports', 'esri/map'], function (exports, _esriMap) {
    /**
     * Created by ben7664 on 6/3/2015.
     */

    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _Map = _interopRequireDefault(_esriMap);

    var EsriMap = (function (_HTMLElement) {
        _inherits(EsriMap, _HTMLElement);

        function EsriMap() {
            _classCallCheck(this, EsriMap);

            _get(Object.getPrototypeOf(EsriMap.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(EsriMap, [{
            key: 'createdCallback',
            value: function createdCallback() {
                this.container = document.createElement('div');
                this.container.style.width = "100%";
                this.container.style.height = "100%";
                this.container.id = "map_internal";
                this.appendChild(this.container);

                var lat = this.getAttribute("lat");
                var lng = this.getAttribute("lng");
                var zoom = this.getAttribute("zoom");
                var basemap = this.getAttribute("basemap");

                this.map = new _Map['default']("map_internal", {
                    basemap: basemap,
                    zoom: zoom,
                    center: [lng, lat]
                });
            }
        }, {
            key: 'addLayer',
            value: function addLayer(layer) {
                this.map.addLayer(layer);
            }
        }, {
            key: 'getMap',
            value: function getMap() {
                return this.map;
            }
        }]);

        return EsriMap;
    })(HTMLElement);

    document.registerElement('esri-map', EsriMap);
});

//# sourceMappingURL=source-compiled.js.map