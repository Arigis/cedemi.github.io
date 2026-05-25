var size = 0;
var placement = 'point';
function categories_RecIncendios_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1: Muy baja (<5 eventos)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,241,91,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2: Baja (5 a 30)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,214,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3: Moderada (30 a 80)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,166,73,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4: Alta (80 a 150)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,108,49,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5: Muy alta  (>150)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,47,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RecIncendios_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("RecIF");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_RecIncendios_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
