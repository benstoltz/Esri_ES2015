/**
 * Created by ben7664 on 9/4/2015.
 */

import Map from 'esri/map';

var map = new Map("map", {
    basemap: "gray",
    center: [-119.11, 35.65],
    zoom: 7,
    minZoom: 7,
    maxZoom: 9
});


export default map;