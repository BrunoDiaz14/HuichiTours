// ✅ Mensaje de bienvenida
$(document).ready(function () {
  Swal.fire({
    title: "¡Bienvenido a la Ruta Querétaro–Huichapan! 🌵",
    text: "Descubre cultura, historia y experiencias únicas.",
    icon: "info",
    confirmButtonColor: "#FF6F61",
  });

  obtenerClima();
  setInterval(obtenerClima, 600000); // cada 10 minutos
});

// 🌦️ Función del clima
function obtenerClima() {
  const apiKey = "fed181f3f7a88d78b5e07592d62aec01";
  const ciudad = "Huichapan,MX";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  $.getJSON(url, function (data) {
    const temp = data.main.temp.toFixed(1);
    const clima = data.weather[0].description;
    const icono = data.weather[0].icon;

    $("#infoClima").html(`
      <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="clima">
      <p class="mb-1">Temperatura: <strong>${temp}°C</strong></p>
      <p class="text-capitalize">Condición: ${clima}</p>
    `);
  }).fail(function () {
    Swal.fire({
      icon: "error",
      title: "Error al cargar el clima 😞",
      text: "Verifica tu conexión o tu API Key.",
    });
  });
}

// 🛍️ Función para mostrar promociones
function mostrarPromo(nombre, promo) {
  Swal.fire({
    title: nombre,
    text: promo,
    icon: "success",
    confirmButtonColor: "#22B6A1",
    footer: "<strong>Visítanos y apoya el comercio local ❤️</strong>"
  });
}
