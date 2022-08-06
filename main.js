import { } from "leaflet";



var openStreetMapLayer = L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
    attribution: "Daten von <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> - Veröffentlicht unter <a href=\"https://opendatacommons.org/licenses/odbl/\">ODbL</a>"
})

var bluemarble = L.tileLayer.wms("https://maps.dwd.de/geoserver/ows?SERVICE=WMS&", {
    layers: "dwd:bluemarble",
    format: "image/png",
    transparent: true,
    attribution: "Quelle: Deutscher Wetterdienst"
})

var laender = L.tileLayer.wms("https://maps.dwd.de/geoserver/ows?SERVICE=WMS&", {
    layers: "dwd:Laender",
    format: "image/png",
    transparent: true,
    attribution: "Quelle: Deutscher Wetterdienst"
})

var gewaesser = L.tileLayer.wms("https://maps.dwd.de/geoserver/ows?SERVICE=WMS&", {
    layers: "dwd:Gewaesser",
    format: "image/png",
    transparent: true,
    attribution: "Quelle: Deutscher Wetterdienst"
})

var marbleGroupd = L.layerGroup([bluemarble, laender, gewaesser], { attribution: "Quelle: Deutscher Wetterdienst" });

var gefuehlteTemperatur = L.tileLayer.wms("https://maps.dwd.de/geoserver/ows?SERVICE=WMS&", {
    layers: "dwd:GefuehlteTemp",
    format: "image/png",
    transparent: true,
    attribution: "Quelle: Deutscher Wetterdienst"
})

var radar = L.tileLayer.wms("https://maps.dwd.de/geoserver/ows?SERVICE=WMS&", {
    layers: "dwd:RADOLAN-RY",
    format: "image/png",
    transparent: true,
    attribution: "Quelle: Deutscher Wetterdienst"
})

var map = L.map('map', {
    layers: [openStreetMapLayer]
}).setView([50.2845, 11.88], 5);

var baseLayers = {
    "OpenStreetMap": openStreetMapLayer,
    "Satellite": marbleGroupd
}

var overlays = {
    "Gefühlte Temperatur": gefuehlteTemperatur,
    "Radardaten": radar
}

L.control.layers(baseLayers, overlays).addTo(map);

