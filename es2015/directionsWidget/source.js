import Map from "esri/map";
import Directions from "esri/dijit/Directions";
import parser from "dojo/parser";
import "dijit/layout/BorderContainer";
import "dijit/layout/ContentPane";

parser.parse();

var map = new Map("map", {
    basemap: "gray",
    center: [-119.11, 35.65],
    zoom: 7,
    minZoom: 7,
    maxZoom: 9
});

var directions = new Directions({
    map: map,
    routeTaskUrl: "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route"
}, "dir");

directions.startup();