var wms_layers = [];


        var lyr_ESRIImagenSatelite_0 = new ol.layer.Tile({
            'title': 'ESRI Imagen Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RegionesCochabamba_2 = new ol.format.GeoJSON();
var features_RegionesCochabamba_2 = format_RegionesCochabamba_2.readFeatures(json_RegionesCochabamba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionesCochabamba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionesCochabamba_2.addFeatures(features_RegionesCochabamba_2);
var lyr_RegionesCochabamba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionesCochabamba_2, 
                style: style_RegionesCochabamba_2,
                popuplayertitle: 'Regiones Cochabamba',
                interactive: false,
                zIndex: 3,
                title: '<img src="styles/legend/RegionesCochabamba_3.png" /> Regiones de Cochabamba'
            });
var format_Municipios_3 = new ol.format.GeoJSON();
var features_Municipios_3 = format_Municipios_3.readFeatures(json_Municipios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_3.addFeatures(features_Municipios_3);
var lyr_Municipios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_3, 
                style: style_Municipios_3,
                popuplayertitle: 'Municipios',
                interactive: true,
                zIndex: 2,
                title: '<img src="styles/legend/Municipios_3.png" /> Municipios y GAIOCs'
            });
var format_RecIncendios_4 = new ol.format.GeoJSON();
var features_RecIncendios_4 = format_RecIncendios_4.readFeatures(json_RecIncendios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecIncendios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecIncendios_4.addFeatures(features_RecIncendios_4);
var lyr_RecIncendios_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecIncendios_4, 
                style: style_RecIncendios_4,
                popuplayertitle: 'Recurrencia Incendios',
                interactive: true,
                opacity: 0.65,
                zIndex: 1,
    title: 'Recurrencia de Incendios<br />\
    <img src="styles/legend/RecIncendios_4_0.png" /> Muy baja (<5 eventos)<br />\
    <img src="styles/legend/RecIncendios_4_1.png" /> Baja (5 a 30)<br />\
    <img src="styles/legend/RecIncendios_4_2.png" /> Moderada (30 a 80)<br />\
    <img src="styles/legend/RecIncendios_4_3.png" /> Alta (80 a 150)<br />\
    <img src="styles/legend/RecIncendios_4_4.png" /> Muy alta  (>150)<br />' });
var format_Incendios20122025_5 = new ol.format.GeoJSON();
var features_Incendios20122025_5 = format_Incendios20122025_5.readFeatures(json_Incendios20122025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios20122025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios20122025_5.addFeatures(features_Incendios20122025_5);
var lyr_Incendios20122025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios20122025_5, 
                style: style_Incendios20122025_5,
                popuplayertitle: 'Incendios 2012-2025',
                interactive: true,
                zIndex: 5,
    title: 'Incendios 2012-2025<br />\
    <img src="styles/legend/Incendios20122025_5_0.png" /> 2012\
    <img src="styles/legend/Incendios20122025_5_1.png" /> 2013<br />\
    <img src="styles/legend/Incendios20122025_5_2.png" /> 2014\
    <img src="styles/legend/Incendios20122025_5_3.png" /> 2015<br />\
    <img src="styles/legend/Incendios20122025_5_4.png" /> 2016\
    <img src="styles/legend/Incendios20122025_5_5.png" /> 2017<br />\
    <img src="styles/legend/Incendios20122025_5_6.png" /> 2018\
    <img src="styles/legend/Incendios20122025_5_7.png" /> 2019<br />\
    <img src="styles/legend/Incendios20122025_5_8.png" /> 2020\
    <img src="styles/legend/Incendios20122025_5_9.png" /> 2021<br />\
    <img src="styles/legend/Incendios20122025_5_10.png" /> 2022\
    <img src="styles/legend/Incendios20122025_5_11.png" /> 2023<br />\
    <img src="styles/legend/Incendios20122025_5_12.png" /> 2024\
    <img src="styles/legend/Incendios20122025_5_13.png" /> 2025<br />' });

lyr_ESRIImagenSatelite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_RegionesCochabamba_2.setVisible(true);lyr_Municipios_3.setVisible(true);lyr_RecIncendios_4.setVisible(true);lyr_Incendios20122025_5.setVisible(true);
var layersList = [lyr_ESRIImagenSatelite_0,lyr_OSMStandard_1,lyr_RegionesCochabamba_2,lyr_Municipios_3,lyr_RecIncendios_4,lyr_Incendios20122025_5];
lyr_RegionesCochabamba_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Region': 'Region', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Municipios_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Region': 'Region', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Area_Km2': 'Area (km²)', 'Hab2024': 'Hab. (2024)', });
lyr_RecIncendios_4.set('fieldAliases', {'grid_code': 'grid_code', 'RecIF': 'Recurrencia', });
lyr_Incendios20122025_5.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area (ha)', 'Vegetacion': 'Vegetacion', 'Year': 'Año', });
lyr_RegionesCochabamba_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Region': 'TextEdit', 'Shape_Leng': '', 'Shape_Area': 'TextEdit', });
lyr_Municipios_3.set('fieldImages', {'OBJECTID': '', 'Region': 'TextEdit', 'Provincia': '', 'Municipio': 'TextEdit', 'Area_Km2': '', 'Hab2024': '', });
lyr_RecIncendios_4.set('fieldImages', {'grid_code': 'Range', 'RecIF': 'TextEdit', });
lyr_Incendios20122025_5.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'Vegetacion': 'TextEdit', 'Year': 'Range', });
lyr_RegionesCochabamba_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Region': 'header label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'header label - always visible', });
lyr_Municipios_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Region': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Area_Km2': 'inline label - always visible', 'Hab2024': 'inline label - visible with data', });
lyr_RecIncendios_4.set('fieldLabels', {'grid_code': 'hidden field', 'RecIF': 'no label', });
lyr_Incendios20122025_5.set('fieldLabels', {'ID': 'hidden field', 'Region': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Lugar': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'inline label - visible with data', 'Vegetacion': 'inline label - visible with data', 'Year': 'inline label - visible with data', });
lyr_Incendios20122025_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});