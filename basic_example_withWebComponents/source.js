/**
 * Created by ben7664 on 6/3/2015.
 */

import Map from 'esri/map';


class EsriMap extends HTMLElement {
    createdCallback() {
        this.container = document.createElement('div');
        this.container.style.width = "100%";
        this.container.style.height = "100%";
        this.container.id = "map_internal";
        this.appendChild(this.container);

        let lat = this.getAttribute("lat");
        let lng = this.getAttribute("lng");
        let zoom = this.getAttribute("zoom");
        let basemap = this.getAttribute("basemap");

        this.map = new Map("map_internal", {
            basemap,
            zoom,
            center: [lng, lat]
        });
    }

    addLayer(layer) {
        this.map.addLayer(layer);
    }

    getMap(){
        return this.map;
    }
}

document.registerElement('esri-map', EsriMap);