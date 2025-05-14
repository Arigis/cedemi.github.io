var wms_layers = [];


        var lyr_ESRIImagenSatelite_0 = new ol.layer.Tile({
            'title': 'ESRI Imagen Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SismosProfKm_2 = new ol.format.GeoJSON();
var features_SismosProfKm_2 = format_SismosProfKm_2.readFeatures(json_SismosProfKm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SismosProfKm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SismosProfKm_2.addFeatures(features_SismosProfKm_2);
var lyr_SismosProfKm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SismosProfKm_2, 
                style: style_SismosProfKm_2,
                popuplayertitle: 'Sismos (Prof. Km)',
                interactive: true,
    title: 'Sismos (Prof. Km)<br />\
    <img src="styles/legend/SismosProfKm_2_0.png" /> Superficial (<100 km)<br />\
    <img src="styles/legend/SismosProfKm_2_1.png" /> Intermedio (100 - 350 km)<br />\
    <img src="styles/legend/SismosProfKm_2_2.png" /> Profundo (>350 km)<br />' });
var format_SismosMagM_3 = new ol.format.GeoJSON();
var features_SismosMagM_3 = format_SismosMagM_3.readFeatures(json_SismosMagM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SismosMagM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SismosMagM_3.addFeatures(features_SismosMagM_3);
var lyr_SismosMagM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SismosMagM_3, 
                style: style_SismosMagM_3,
                popuplayertitle: 'Sismos (Mag. M)',
                interactive: true,
    title: 'Sismos (Mag. M)<br />\
    <img src="styles/legend/SismosMagM_3_0.png" /> Igual a 3<br />\
    <img src="styles/legend/SismosMagM_3_1.png" /> 3 - 4<br />\
    <img src="styles/legend/SismosMagM_3_2.png" /> 4 - 5<br />\
    <img src="styles/legend/SismosMagM_3_3.png" /> 5 - 6<br />\
    <img src="styles/legend/SismosMagM_3_4.png" /> Mayor a 6<br />' });
var format_RegionesCochabamba_4 = new ol.format.GeoJSON();
var features_RegionesCochabamba_4 = format_RegionesCochabamba_4.readFeatures(json_RegionesCochabamba_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionesCochabamba_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionesCochabamba_4.addFeatures(features_RegionesCochabamba_4);
var lyr_RegionesCochabamba_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionesCochabamba_4, 
                style: style_RegionesCochabamba_4,
                popuplayertitle: 'Regiones Cochabamba',
                interactive: false,
                title: '<img src="styles/legend/RegionesCochabamba_4.png" /> Regiones Cochabamba<br /> <br />Sismos con magnitud =>3'
            });
var format_Municipios_5 = new ol.format.GeoJSON();
var features_Municipios_5 = format_Municipios_5.readFeatures(json_Municipios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_5.addFeatures(features_Municipios_5);
var lyr_Municipios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_5, 
                style: style_Municipios_5,
                popuplayertitle: 'Municipios',
                interactive: true,
                title: '<img src="styles/legend/Municipios_5.png" /> Municipios'
            });

lyr_ESRIImagenSatelite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_SismosProfKm_2.setVisible(true);lyr_SismosMagM_3.setVisible(false);lyr_RegionesCochabamba_4.setVisible(true);lyr_Municipios_5.setVisible(false);
var layersList = [lyr_ESRIImagenSatelite_0,lyr_OSMStandard_1,lyr_SismosProfKm_2,lyr_SismosMagM_3,lyr_RegionesCochabamba_4,lyr_Municipios_5];
lyr_SismosProfKm_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Fecha': 'Fecha', 'Time': 'Time', 'Lat': 'Lat', 'Lon': 'Lon', 'ProfKm': 'ProfKm', 'Mag_M': 'Mag_M', 'Region': 'Region', 'Dpto': 'Dpto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidade': 'Comunidade', 'Fuente': 'Fuente', });
lyr_SismosMagM_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Fecha': 'Fecha', 'Time': 'Time', 'Lat': 'Lat', 'Lon': 'Lon', 'ProfKm': 'ProfKm', 'Mag_M': 'Mag_M', 'Region': 'Region', 'Dpto': 'Dpto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidade': 'Comunidade', 'Fuente': 'Fuente', });
lyr_RegionesCochabamba_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Region': 'Region', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Municipios_5.set('fieldAliases', {'Region': 'Region', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Km2': 'Km2', });
lyr_SismosProfKm_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Fecha': 'TextEdit', 'Time': '', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'ProfKm': 'TextEdit', 'Mag_M': 'TextEdit', 'Region': 'TextEdit', 'Dpto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidade': '', 'Fuente': 'TextEdit', });
lyr_SismosMagM_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Fecha': 'TextEdit', 'Time': '', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'ProfKm': 'TextEdit', 'Mag_M': 'TextEdit', 'Region': 'TextEdit', 'Dpto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidade': '', 'Fuente': 'TextEdit', });
lyr_RegionesCochabamba_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Region': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Municipios_5.set('fieldImages', {'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Km2': 'TextEdit', });
lyr_SismosProfKm_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Fecha': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Lat': 'hidden field', 'Lon': 'hidden field', 'ProfKm': 'inline label - visible with data', 'Mag_M': 'hidden field', 'Region': 'hidden field', 'Dpto': 'hidden field', 'Provincia': 'hidden field', 'Municipio': 'inline label - visible with data', 'Comunidade': 'inline label - visible with data', 'Fuente': 'inline label - visible with data', });
lyr_SismosMagM_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Fecha': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Lat': 'hidden field', 'Lon': 'hidden field', 'ProfKm': 'hidden field', 'Mag_M': 'inline label - visible with data', 'Region': 'hidden field', 'Dpto': 'hidden field', 'Provincia': 'hidden field', 'Municipio': 'inline label - visible with data', 'Comunidade': 'inline label - visible with data', 'Fuente': 'inline label - visible with data', });
lyr_RegionesCochabamba_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Region': 'header label - always visible', 'Shape_Length': 'hidden field', 'Shape_Area': 'header label - always visible', });
lyr_Municipios_5.set('fieldLabels', {'Region': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Km2': 'inline label - always visible', });
lyr_Municipios_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});