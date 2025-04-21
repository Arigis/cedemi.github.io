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
var lyr_RecurrenciasequasNeventos_2 = new ol.layer.Image({
        opacity: 0.6,
        
    title: 'Recurrencia sequías (N° eventos)<br />Periodo 2013-2024<br />\
    <img src="styles/legend/RecurrenciasequasNeventos_2_0.png" /> 1: Muy baja (< 2)<br />\
    <img src="styles/legend/RecurrenciasequasNeventos_2_1.png" /> 2: Baja (2 a 5)<br />\
    <img src="styles/legend/RecurrenciasequasNeventos_2_2.png" /> 3: Moderada (5 a 10)<br />\
    <img src="styles/legend/RecurrenciasequasNeventos_2_3.png" /> 4: Alta (10 a 15)<br />\
    <img src="styles/legend/RecurrenciasequasNeventos_2_4.png" /> 5: Muy alta (>15)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RecurrenciasequasNeventos_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7459042.737241, -2116239.603685, -7151942.737241, -1856207.127305]
        })
    });
var format_RegionesCochabamba_3 = new ol.format.GeoJSON();
var features_RegionesCochabamba_3 = format_RegionesCochabamba_3.readFeatures(json_RegionesCochabamba_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionesCochabamba_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionesCochabamba_3.addFeatures(features_RegionesCochabamba_3);
var lyr_RegionesCochabamba_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionesCochabamba_3, 
                style: style_RegionesCochabamba_3,
                popuplayertitle: 'Regiones Cochabamba',
                interactive: false,
                title: '<img src="styles/legend/RegionesCochabamba_3.png" /> Regiones Cochabamba'
            });
var format_Municipios_4 = new ol.format.GeoJSON();
var features_Municipios_4 = format_Municipios_4.readFeatures(json_Municipios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_4.addFeatures(features_Municipios_4);
var lyr_Municipios_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_4, 
                style: style_Municipios_4,
                popuplayertitle: 'Municipios',
                interactive: true,
                title: '<img src="styles/legend/Municipios_4.png" /> Municipios'
            });

lyr_ESRIImagenSatelite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_RecurrenciasequasNeventos_2.setVisible(true);lyr_RegionesCochabamba_3.setVisible(true);lyr_Municipios_4.setVisible(false);
var layersList = [lyr_ESRIImagenSatelite_0,lyr_OSMStandard_1,lyr_RecurrenciasequasNeventos_2,lyr_RegionesCochabamba_3,lyr_Municipios_4];
lyr_RegionesCochabamba_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Region': 'Region', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Municipios_4.set('fieldAliases', {'Region': 'Region', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Km2': 'Km2', });
lyr_RegionesCochabamba_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Region': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Municipios_4.set('fieldImages', {'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Km2': 'TextEdit', });
lyr_RegionesCochabamba_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Region': 'header label - always visible', 'Shape_Length': 'hidden field', 'Shape_Area': 'header label - always visible', });
lyr_Municipios_4.set('fieldLabels', {'Region': 'header label - always visible', 'Provincia': 'header label - always visible', 'Municipio': 'header label - always visible', 'Km2': 'header label - always visible', });
lyr_Municipios_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});