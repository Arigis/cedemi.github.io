// 1. Esperamos a que el mapa esté listo
window.addEventListener('load', function() {
    
    // 2. Crear capa para el marcador (si no existe)
    var searchSource = new ol.source.Vector();
    var searchLayer = new ol.layer.Vector({
        source: searchSource,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 1], // Esto centra la base de la imagen en la coordenada (importante para pines)
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: 'images/marker.png', // RUTA DE TU IMAGEN
                scale: 0.5 // Ajusta este número para cambiar el tamaño (0.1 = 10% del original)
            })
        })
    });
    map.addLayer(searchLayer);

    // 3. Mostrar/Ocultar panel
    var btnToggle = document.getElementById('btn-toggle-coords');
    var panel = document.getElementById('coord-inputs');

    btnToggle.onclick = function(e) {
        e.preventDefault();
        panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
    };

    // 4. Lógica de dibujo y centrado
    document.getElementById('btn-go-to-coord').onclick = function(e) {
        e.preventDefault();
    
        var lat = parseFloat(document.getElementById('input-lat').value);
        var lon = parseFloat(document.getElementById('input-lon').value);

        if (isNaN(lat) || isNaN(lon) || lat < -19 || lat > -15 || lon < -68 || lon > -62) {
            alert("Coordenadas no válidas o fuera del departamento");
            return;
        }

        var proyectada = ol.proj.fromLonLat([lon, lat]);

        searchSource.clear();
        var feature = new ol.Feature({
            // CORRECCIÓN AQUÍ: Añadimos .geom
            geometry: new ol.geom.Point(proyectada)
        });
        searchSource.addFeature(feature);

        map.getView().animate({
            center: proyectada,
            zoom: 16,
            duration: 1000
        });
    };
});