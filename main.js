import { } from "leaflet";

// Map Layers
var osm = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});


var map = L.map('map', {
    layers: [osm]
}).setView([50.2875, 11.88], 10);

var baseLayers = {
    "OpenStreetMap": osm
};

