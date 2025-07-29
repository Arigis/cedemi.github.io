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
                title: '<img src="styles/legend/RegionesCochabamba_2.png" /> Regiones Cochabamba'
            });
var format_MonitoreoCalidaddeAgua_3 = new ol.format.GeoJSON();
var features_MonitoreoCalidaddeAgua_3 = format_MonitoreoCalidaddeAgua_3.readFeatures(json_MonitoreoCalidaddeAgua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonitoreoCalidaddeAgua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonitoreoCalidaddeAgua_3.addFeatures(features_MonitoreoCalidaddeAgua_3);
var lyr_MonitoreoCalidaddeAgua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonitoreoCalidaddeAgua_3, 
                style: style_MonitoreoCalidaddeAgua_3,
                popuplayertitle: 'Monitoreo Calidad de Agua',
                interactive: true,
    title: 'Monitoreo Calidad de Agua<br />\
    <img src="styles/legend/MonitoreoCalidaddeAgua_3_0.png" /> Cochabamba<br />\
    <img src="styles/legend/MonitoreoCalidaddeAgua_3_1.png" /> Colcapirhua<br />\
    <img src="styles/legend/MonitoreoCalidaddeAgua_3_2.png" /> Sacaba<br />\
    <img src="styles/legend/MonitoreoCalidaddeAgua_3_3.png" /> Vinto<br />' });
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

lyr_ESRIImagenSatelite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_RegionesCochabamba_2.setVisible(true);lyr_MonitoreoCalidaddeAgua_3.setVisible(true);lyr_Municipios_4.setVisible(false);
var layersList = [lyr_ESRIImagenSatelite_0,lyr_OSMStandard_1,lyr_RegionesCochabamba_2,lyr_MonitoreoCalidaddeAgua_3,lyr_Municipios_4];
lyr_RegionesCochabamba_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Region': 'Region', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MonitoreoCalidaddeAgua_3.set('fieldAliases', {'ID': 'ID', 'Punto': 'Punto', 'Municipio': 'Municipio', 'Lat': 'Lat', 'Lon': 'Lon', 'UTM_X': 'UTM_X', 'UTM_Y': 'UTM_Y', 'UTM_Zona': 'UTM_Zona', });
lyr_Municipios_4.set('fieldAliases', {'Region': 'Region', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Km2': 'Km2', });
lyr_RegionesCochabamba_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Region': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MonitoreoCalidaddeAgua_3.set('fieldImages', {'ID': 'TextEdit', 'Punto': 'TextEdit', 'Municipio': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'UTM_X': 'TextEdit', 'UTM_Y': 'TextEdit', 'UTM_Zona': 'TextEdit', });
lyr_Municipios_4.set('fieldImages', {'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Km2': 'TextEdit', });
lyr_RegionesCochabamba_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Region': 'header label - always visible', 'Shape_Length': 'hidden field', 'Shape_Area': 'header label - always visible', });
lyr_MonitoreoCalidaddeAgua_3.set('fieldLabels', {'ID': 'hidden field', 'Punto': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lat': 'header label - always visible', 'Lon': 'header label - always visible', 'UTM_X': 'hidden field', 'UTM_Y': 'hidden field', 'UTM_Zona': 'hidden field', });
lyr_Municipios_4.set('fieldLabels', {'Region': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Km2': 'inline label - always visible', });
lyr_Municipios_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});