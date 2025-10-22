document.addEventListener('DOMContentLoaded', function() {
  // Coordenadas de Huichapan y Querétaro
  const huichapan = [20.4696, -99.2263];
  const queretaro = [20.5888, -100.3899];

  // Crear el mapa centrado en Huichapan
  const map = L.map('map').setView(huichapan, 8);

  // Añadir capa de mapa base (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Marcadores de inicio y fin
  L.marker(huichapan).addTo(map).bindPopup("Huichapan").openPopup();
  L.marker(queretaro).addTo(map).bindPopup("Querétaro");

  // Dibujar ruta aproximada (polilínea)
  const ruta = L.polyline([huichapan, queretaro], {
    color: 'blue',
    weight: 5,
    opacity: 0.7
  }).addTo(map);

  // Ajustar el mapa para que muestre toda la ruta
  map.fitBounds(ruta.getBounds());
});
document.addEventListener('DOMContentLoaded', function() {
  // Coordenadas de prueba (Huichapan)
  const huichapan = [20.4696, -99.2263];

  // Crear mapa centrado en Huichapan
  const map = L.map('map').setView(huichapan, 8);

  // Añadir capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
  }).addTo(map);

  // Añadir marcador
  L.marker(huichapan).addTo(map).bindPopup("Huichapan").openPopup();
});
