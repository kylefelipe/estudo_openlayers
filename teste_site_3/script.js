// Declare a Tile layer with an OSM source
var osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
});
// Layer WMS do INEA
var urlINEA = "http://200.198.57.191:8080/geoserver/ows";
var srcINEA = new ol.source.TileWMS({
  url: urlINEA,
  params: {
    LAYERS: "WebGis:2404_MG_Bolsa_Verde_2010_pol",
    VERSION: "1.3.0",
    FORMAT: "image/PNG",
    TILED: true,
  },
});
var lyrINEA = new ol.layer.Tile({
  source: srcINEA,
});
// Layer Municipios do IDESISEMA
var urlMun = "http://200.198.57.191:8080/geoserver/ows";
var srcMun = new ol.source.TileWMS({
  url: urlMun,
  params: {
    LAYERS: "WebGis:1104_mg_municipios_pol",
    VERSION: "1.3.0",
    FORMAT: "image/PNG",
    TILED: true,
  },
});
var lyrMun = new ol.layer.Tile({
  source: srcMun,
});
// Layer Pontos Municipios do IDESISEMA
var urlMunPt = "http://200.198.57.191:8080/geoserver/ows";
var srcMunPt = new ol.source.TileWMS({
  url: urlMunPt,
  params: {
    LAYERS: "WebGis:0902_mg_sede_municipal_pto",
    VERSION: "1.3.0",
    FORMAT: "image/PNG",
    TILED: true,
  },
});
var lyrMunPt = new ol.layer.Tile({
  source: srcMunPt,
});
// Create latitude and longitude and convert them to default projection
var birmingham = ol.proj.transform(
  [-43.950151, -18.93164],
  "EPSG:4326",
  "EPSG:3857"
);
// Create a View, set it center and zoom level
var view = new ol.View({
  center: birmingham,
  zoom: 6,
});
// Instanciate a Map, set the object target to the map DOM id
var map = new ol.Map({
  target: "map",
});
// Add the created layer to the Map
map.addLayer(osmLayer);
// map.addLayer(lyrMun);
// map.addLayer(lyrINEA);
// map.addLayer(lyrMunPt);
// Set the view for the map
map.setView(view);

const btns = document.getElementsByTagName('input');


const municipiosPt = document.getElementById('municipos_pol');
function adicionaMapa() {
  if (municipiosPt.checked == true) {
    console.log('fui checado!');
    map.addLayer(lyrMun);
  }
}
municipiosPt.addEventListener('change', adicionaMapa());