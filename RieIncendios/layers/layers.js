var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
// Obtener la fecha de hoy en formato YYYY-MM-DD
function obtenerFechaHoy() {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, por eso se añade 1
    const dia = String(hoy.getDate()+2).padStart(2, '0');
    return `${anio}-${mes}-${dia}`;
}
        var lyr_Riesgodeincendioprevistoa48Hrs_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.inpe.br/queimadas/geoserver/dados-meteorologicos/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "RF.PREV.T2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Riesgo de incendio previsto a 48 Hrs</br> Fecha pronostico: '+obtenerFechaHoy()+'</br><img style="max-width: 100%; max-height: 100%;" src="https://data.inpe.br/queimadas/geoserver/dados-meteorologicos/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=RF.PREV.T2" /></br>Programa Queimadas do INPE', 
                            popuplayertitle: 'Riesgo de incendio previsto a 48 Hrs',
                            opacity: 0.6,
                            
                            
                          });
              wms_layers.push([lyr_Riesgodeincendioprevistoa48Hrs_2, 0]);
var format_MunicipiosyGAIOCs_3 = new ol.format.GeoJSON();
var features_MunicipiosyGAIOCs_3 = format_MunicipiosyGAIOCs_3.readFeatures(json_MunicipiosyGAIOCs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosyGAIOCs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosyGAIOCs_3.addFeatures(features_MunicipiosyGAIOCs_3);
var lyr_MunicipiosyGAIOCs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosyGAIOCs_3, 
                style: style_MunicipiosyGAIOCs_3,
                popuplayertitle: 'Municipios y GAIOCs',
                interactive: true,
                title: '<img src="styles/legend/MunicipiosyGAIOCs_3.png" /> Municipios y GAIOCs'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_Riesgodeincendioprevistoa48Hrs_2.setVisible(true);lyr_MunicipiosyGAIOCs_3.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_OpenStreetMap_1,lyr_Riesgodeincendioprevistoa48Hrs_2,lyr_MunicipiosyGAIOCs_3];
lyr_MunicipiosyGAIOCs_3.set('fieldAliases', {'UPTE_MUNIC': 'UPTE_MUNIC', 'regiones': 'regiones', 'AreaKm2': 'AreaKm2', });
lyr_MunicipiosyGAIOCs_3.set('fieldImages', {'UPTE_MUNIC': 'TextEdit', 'regiones': 'TextEdit', 'AreaKm2': 'TextEdit', });
lyr_MunicipiosyGAIOCs_3.set('fieldLabels', {'UPTE_MUNIC': 'header label - always visible', 'regiones': 'header label - always visible', 'AreaKm2': 'header label - always visible', });
lyr_MunicipiosyGAIOCs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});