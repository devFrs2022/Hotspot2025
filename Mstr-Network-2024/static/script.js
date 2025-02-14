$(document).ready(function () {
  $("#abrirEmbyLink").on("click", function (e) {
    e.preventDefault();
    //console.log("ok");

    //$(this).find('img').css('opacity', '0.5');
    $("#loadingSpinner").addClass("spinner");

    $("#loadingSpinner").show();
    // Aquí puedes llamar a la función que intenta abrir Emby o realizar otras acciones
    intentarAbrirEmby();
  });
});

function intentarAbrirEmby() {
  var esquemaUrl = "emby://items/";
  var tiempoEspera = 2000;
  var inicioTiempo = $.now(); // Usa $.now() de jQuery para obtener el tiempo actual

  $("#loadingSpinner > div").removeClass("d-none");
  var timer = setTimeout(function () {
    var finTiempo = $.now(); // Usa $.now() de jQuery para obtener el tiempo actual
    if (finTiempo - inicioTiempo < tiempoEspera + 100) {
      // Si entra aquí, probablemente la app no está instalada o no se pudo abrir
      mostrarNotificacionInstalacion();
    }
  }, tiempoEspera);

  window.location = esquemaUrl; // Intenta abrir la app con el esquema URL

  // Usa $(window).on('blur', ...) de jQuery para manejar el evento blur
  $(window).on("blur", function () {
    clearTimeout(timer); // Cancela el timer si la app se abre
  });
}

function mostrarNotificacionInstalacion() {
  window.location = "https://media.mstr-network.com";
  //$('#miDiv').removeClass('mi-clase');
}
