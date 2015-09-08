import Map from "esri/map";
import Search from "esri/dijit/Search";
import Extent from "esri/geometry/Extent";
import Graphic from "esri/graphic";
import SimpleMarkerSymbol from "esri/symbols/SimpleMarkerSymbol";
import screenUtils from "esri/geometry/screenUtils";
import dom from "dojo/dom";
import domConstruct from "dojo/dom-construct";
import query from "dojo/query";
import Color from "dojo/_base/Color";


let map = new Map("map", {
    basemap: "topo",
    center: [-117.19, 34.055],
    zoom: 15
});


let search = new Search({
    map
}, dom.byId("search"));

let extent = new Extent({
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
    let point = e.result.feature.geometry;
    let symbol = new SimpleMarkerSymbol().setStyle(
        SimpleMarkerSymbol.STYLE_SQUARE).setColor(
        new Color([255, 0, 0, 0.5])
    );
    let graphic = new Graphic(point, symbol);
    map.graphics.add(graphic);

    map.infoWindow.setTitle("Search Result");
    map.infoWindow.setContent(e.result.name);
    map.infoWindow.show(e.result.feature.geometry);

    let spotlight = map.on("extent-change", function () {
        let geom = screenUtils.toScreenGeometry(map.extent, map.width, map.height, e.result.extent);
        let width = geom.xmax - geom.xmin;
        let height = geom.ymax - geom.ymin;

        let max = height;

        if(width > height) {
            max = width;
        }

        let margin = '-' + Math.floor(max / 2) + 'px 0 0 -' + Math.floor(max / 2) + 'px';

        query(".spotlight").addClass("spotlight-active").style({
            width: max + "px",
            height: max + "px",
            margin: margin
        });
        spotlight.remove();
    })
}



function enableSpotlight() {
    let html = "<div id='spotlight' class='spotlight'></div>";
    domConstruct.place(html, dom.byId("map_container"), "first");
}

function removeSpotlight() {
    query(".spotlight").removeClass("spotlight-active");
    map.infoWindow.hide();
    map.graphics.clear();
}
