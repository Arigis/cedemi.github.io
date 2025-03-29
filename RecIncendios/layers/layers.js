var wms_layers = [];


        var lyr_ESRIImagenSatelite_0 = new ol.layer.Tile({
            'title': 'ESRI Imagen Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.esri.com/en-us/home">© Esri, Maxar, Earthstar Geographics</a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>',
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
    title: 'Regiones Cochabamba<br />\
    <img src="styles/legend/RegionesCochabamba_2_0.png" /> ANDINA<br />\
    <img src="styles/legend/RegionesCochabamba_2_1.png" /> AYOPAYA<br />\
    <img src="styles/legend/RegionesCochabamba_2_2.png" /> CONO SUR<br />\
    <img src="styles/legend/RegionesCochabamba_2_3.png" /> METROPOLITANA<br />\
    <img src="styles/legend/RegionesCochabamba_2_4.png" /> TRÓPICO<br />\
    <img src="styles/legend/RegionesCochabamba_2_5.png" /> VALLES<br />' });
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
                title: '<img src="styles/legend/Municipios_3.png" /> Municipios'
            });
var format_Incendios2024_4 = new ol.format.GeoJSON();
var features_Incendios2024_4 = format_Incendios2024_4.readFeatures(json_Incendios2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2024_4.addFeatures(features_Incendios2024_4);
var lyr_Incendios2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2024_4, 
                style: style_Incendios2024_4,
                popuplayertitle: 'Incendios 2024',
                interactive: true,
                title: '<img src="styles/legend/Incendios2024_4.png" /> Incendios 2024'
            });
var format_Incendios2023_5 = new ol.format.GeoJSON();
var features_Incendios2023_5 = format_Incendios2023_5.readFeatures(json_Incendios2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2023_5.addFeatures(features_Incendios2023_5);
var lyr_Incendios2023_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2023_5, 
                style: style_Incendios2023_5,
                popuplayertitle: 'Incendios 2023',
                interactive: true,
                title: '<img src="styles/legend/Incendios2023_5.png" /> Incendios 2023'
            });
var format_Incendios2022_6 = new ol.format.GeoJSON();
var features_Incendios2022_6 = format_Incendios2022_6.readFeatures(json_Incendios2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2022_6.addFeatures(features_Incendios2022_6);
var lyr_Incendios2022_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2022_6, 
                style: style_Incendios2022_6,
                popuplayertitle: 'Incendios 2022',
                interactive: true,
                title: '<img src="styles/legend/Incendios2022_6.png" /> Incendios 2022'
            });
var format_Incendios2021_7 = new ol.format.GeoJSON();
var features_Incendios2021_7 = format_Incendios2021_7.readFeatures(json_Incendios2021_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2021_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2021_7.addFeatures(features_Incendios2021_7);
var lyr_Incendios2021_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2021_7, 
                style: style_Incendios2021_7,
                popuplayertitle: 'Incendios 2021',
                interactive: true,
                title: '<img src="styles/legend/Incendios2021_7.png" /> Incendios 2021'
            });
var format_Incendios2020_8 = new ol.format.GeoJSON();
var features_Incendios2020_8 = format_Incendios2020_8.readFeatures(json_Incendios2020_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2020_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2020_8.addFeatures(features_Incendios2020_8);
var lyr_Incendios2020_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2020_8, 
                style: style_Incendios2020_8,
                popuplayertitle: 'Incendios 2020',
                interactive: true,
                title: '<img src="styles/legend/Incendios2020_8.png" /> Incendios 2020'
            });
var format_Incendios2019_9 = new ol.format.GeoJSON();
var features_Incendios2019_9 = format_Incendios2019_9.readFeatures(json_Incendios2019_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2019_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2019_9.addFeatures(features_Incendios2019_9);
var lyr_Incendios2019_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2019_9, 
                style: style_Incendios2019_9,
                popuplayertitle: 'Incendios 2019',
                interactive: true,
                title: '<img src="styles/legend/Incendios2019_9.png" /> Incendios 2019'
            });
var format_Incendios2018_10 = new ol.format.GeoJSON();
var features_Incendios2018_10 = format_Incendios2018_10.readFeatures(json_Incendios2018_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2018_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2018_10.addFeatures(features_Incendios2018_10);
var lyr_Incendios2018_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2018_10, 
                style: style_Incendios2018_10,
                popuplayertitle: 'Incendios 2018',
                interactive: true,
                title: '<img src="styles/legend/Incendios2018_10.png" /> Incendios 2018'
            });
var format_Incendios2017_11 = new ol.format.GeoJSON();
var features_Incendios2017_11 = format_Incendios2017_11.readFeatures(json_Incendios2017_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2017_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2017_11.addFeatures(features_Incendios2017_11);
var lyr_Incendios2017_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2017_11, 
                style: style_Incendios2017_11,
                popuplayertitle: 'Incendios 2017',
                interactive: true,
                title: '<img src="styles/legend/Incendios2017_11.png" /> Incendios 2017'
            });
var format_Incendios2016_12 = new ol.format.GeoJSON();
var features_Incendios2016_12 = format_Incendios2016_12.readFeatures(json_Incendios2016_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2016_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2016_12.addFeatures(features_Incendios2016_12);
var lyr_Incendios2016_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2016_12, 
                style: style_Incendios2016_12,
                popuplayertitle: 'Incendios 2016',
                interactive: true,
                title: '<img src="styles/legend/Incendios2016_12.png" /> Incendios 2016'
            });
var format_Incendios2015_13 = new ol.format.GeoJSON();
var features_Incendios2015_13 = format_Incendios2015_13.readFeatures(json_Incendios2015_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2015_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2015_13.addFeatures(features_Incendios2015_13);
var lyr_Incendios2015_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2015_13, 
                style: style_Incendios2015_13,
                popuplayertitle: 'Incendios 2015',
                interactive: true,
                title: '<img src="styles/legend/Incendios2015_13.png" /> Incendios 2015'
            });
var format_Incendios2014_14 = new ol.format.GeoJSON();
var features_Incendios2014_14 = format_Incendios2014_14.readFeatures(json_Incendios2014_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2014_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2014_14.addFeatures(features_Incendios2014_14);
var lyr_Incendios2014_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2014_14, 
                style: style_Incendios2014_14,
                popuplayertitle: 'Incendios 2014',
                interactive: true,
                title: '<img src="styles/legend/Incendios2014_14.png" /> Incendios 2014'
            });
var format_incendios2013_15 = new ol.format.GeoJSON();
var features_incendios2013_15 = format_incendios2013_15.readFeatures(json_incendios2013_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_incendios2013_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_incendios2013_15.addFeatures(features_incendios2013_15);
var lyr_incendios2013_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_incendios2013_15, 
                style: style_incendios2013_15,
                popuplayertitle: 'incendios 2013',
                interactive: true,
                title: '<img src="styles/legend/incendios2013_15.png" /> incendios 2013'
            });
var format_Incendios2012_16 = new ol.format.GeoJSON();
var features_Incendios2012_16 = format_Incendios2012_16.readFeatures(json_Incendios2012_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2012_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2012_16.addFeatures(features_Incendios2012_16);
var lyr_Incendios2012_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios2012_16, 
                style: style_Incendios2012_16,
                popuplayertitle: 'Incendios 2012',
                interactive: true,
                title: '<img src="styles/legend/Incendios2012_16.png" /> Incendios 2012'
            });

lyr_ESRIImagenSatelite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_RegionesCochabamba_2.setVisible(true);lyr_Municipios_3.setVisible(false);lyr_Incendios2024_4.setVisible(true);lyr_Incendios2023_5.setVisible(false);lyr_Incendios2022_6.setVisible(false);lyr_Incendios2021_7.setVisible(false);lyr_Incendios2020_8.setVisible(false);lyr_Incendios2019_9.setVisible(false);lyr_Incendios2018_10.setVisible(false);lyr_Incendios2017_11.setVisible(false);lyr_Incendios2016_12.setVisible(false);lyr_Incendios2015_13.setVisible(false);lyr_Incendios2014_14.setVisible(false);lyr_incendios2013_15.setVisible(false);lyr_Incendios2012_16.setVisible(false);
var layersList = [lyr_ESRIImagenSatelite_0,lyr_OSMStandard_1,lyr_RegionesCochabamba_2,lyr_Municipios_3,lyr_Incendios2024_4,lyr_Incendios2023_5,lyr_Incendios2022_6,lyr_Incendios2021_7,lyr_Incendios2020_8,lyr_Incendios2019_9,lyr_Incendios2018_10,lyr_Incendios2017_11,lyr_Incendios2016_12,lyr_Incendios2015_13,lyr_Incendios2014_14,lyr_incendios2013_15,lyr_Incendios2012_16];
lyr_RegionesCochabamba_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Region': 'Region', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Municipios_3.set('fieldAliases', {'Municipio': 'Municipio', 'Region': 'Region', 'Km2': 'Km2', });
lyr_Incendios2024_4.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2023_5.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2022_6.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2021_7.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2020_8.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2019_9.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2018_10.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2017_11.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2016_12.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2015_13.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2014_14.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_incendios2013_15.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_Incendios2012_16.set('fieldAliases', {'ID': 'ID', 'Region': 'Region', 'Municipio': 'Municipio', 'Lugar': 'Lugar', 'Fecha': 'Fecha', 'Lat': 'Lat', 'Lon': 'Lon', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Year_': 'Year_', });
lyr_RegionesCochabamba_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Region': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Municipios_3.set('fieldImages', {'Municipio': 'TextEdit', 'Region': 'TextEdit', 'Km2': 'TextEdit', });
lyr_Incendios2024_4.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2023_5.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2022_6.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2021_7.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2020_8.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2019_9.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2018_10.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2017_11.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2016_12.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2015_13.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2014_14.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_incendios2013_15.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_Incendios2012_16.set('fieldImages', {'ID': 'TextEdit', 'Region': 'TextEdit', 'Municipio': 'TextEdit', 'Lugar': 'TextEdit', 'Fecha': 'DateTime', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Year_': 'TextEdit', });
lyr_RegionesCochabamba_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Region': 'header label - always visible', 'Shape_Length': 'hidden field', 'Shape_Area': 'header label - always visible', });
lyr_Municipios_3.set('fieldLabels', {'Municipio': 'header label - always visible', 'Region': 'header label - always visible', 'Km2': 'header label - always visible', });
lyr_Incendios2024_4.set('fieldLabels', {'ID': 'header label - visible with data', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - visible with data', 'Year_': 'hidden field', });
lyr_Incendios2023_5.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2022_6.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2021_7.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2020_8.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2019_9.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2018_10.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2017_11.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2016_12.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2015_13.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2014_14.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_incendios2013_15.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2012_16.set('fieldLabels', {'ID': 'hidden field', 'Region': 'header label - always visible', 'Municipio': 'header label - always visible', 'Lugar': 'header label - always visible', 'Fecha': 'header label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Area_Ha': 'header label - always visible', 'DescVegeta': 'header label - always visible', 'Year_': 'hidden field', });
lyr_Incendios2012_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});