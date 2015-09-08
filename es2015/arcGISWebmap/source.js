import Map from "esri/map";
import arcgisUtils from "esri/arcgis/utils";
import Legend from "esri/dijit/Legend"

var map;

arcgisUtils.createMap("1a40fa5cc1ab4569b79f45444d728067", "map").then((response) => {
    map = response.map;

    var legend = new Legend({
        map,
        layerInfos: (arcgisUtils.getLegendLayers(response))
    }, "legendDiv");

    legend.startup();
});

