import Map from "esri/map";
import Extent from "esri/geometry/Extent";
import FeatureLayer from "esri/layers/FeatureLayer";
import SimpleLineSymbol from "esri/symbols/SimpleLineSymbol";
import SimpleFillSymbol from "esri/symbols/SimpleFillSymbol";
import SimpleMarkerSymbol from "esri/symbols/SimpleMarkerSymbol";
import TextSymbol from "esri/symbols/TextSymbol";
import SimpleRenderer from "esri/renderers/SimpleRenderer";
import LabelLayer from "esri/layers/LabelLayer";
import Color from "dojo/_base/Color";

let bbox = new Extent({"xmin":-1940058,"ymin":-814715,"xmax":1683105,"ymax":1446096,"spatialReference":{"wkid":102003}});

let map = new Map("map", {
    extent: bbox
});

let labelField = "STATE_NAME";

// States Feature Layer
let statesColor = new Color("#666");
let statesLine = new SimpleLineSymbol("solid", statesColor, 1.5);
let statesSymbol = new SimpleFillSymbol("solid", statesLine, null);
let statesRenderer = new SimpleRenderer(statesSymbol);

let statesURL = "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3";
let states = new FeatureLayer(statesURL, {
    id: "states",
    outFields: [labelField]
});

states.setRenderer(statesRenderer);
map.addLayer(states);

// States name Label
let statesLabel = new TextSymbol().setColor(statesColor);
statesLabel.font.setSize("14pt");
statesLabel.font.setFamily("arial");
let statesLabelRenderer = new SimpleRenderer(statesLabel);
let labels = new LabelLayer({id: "labels"});

labels.addFeatureLayer(states, statesLabelRenderer, "{" + labelField + "}");
map.addLayer(labels);

// Cities Feature Layer
let citiesColor = new Color("#444");
let whiteLine = new SimpleLineSymbol("solid", new Color("#fff"), 2);
let citiesUrl = "http://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0";
let cities = new FeatureLayer(citiesUrl, { mode: FeatureLayer.MODE_ONDEMAND, outFields: ["CITY_NAME"] });
cities.setDefinitionExpression("POP_RANK < 3");

let citiesRenderer = new SimpleRenderer(new SimpleMarkerSymbol("solid", 10, whiteLine, citiesColor));
cities.setRenderer(citiesRenderer);
map.addLayer(cities);


// Label Cities

let citiesSymbol = new TextSymbol().setColor(citiesColor);
citiesSymbol.font.setSize("18pt");
citiesSymbol.font.setFamily("arial");
citiesSymbol.yoffset = 4;
labels.addFeatureLayer(cities, new SimpleRenderer(citiesSymbol), "{CITY_NAME}");