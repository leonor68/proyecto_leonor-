src =
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js";
src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      resetErrorMessages();
      var titulo_peli = document.getElementById("titulo_peli").value.trim();
      var duracion = document.getElementById("duracion").value.trim();
      var resumen = document.getElementById("genero").value.trim();

      var isValid = true;

      if (titulo_peli === "") {
        displayErrorMessage(
          "tituloError",
          "Por favor ingrese el Titulo de pelicula."
        );
        isValid = false;
      }

      if (duracion === "") {
        displayErrorMessage(
          "duracionError",
          "Por favor ingrese la Duracion de la pelicula."
        );
        isValid = false;
      }

      if (resumen === "") {
        displayErrorMessage(
          "generoError",
          "Por favor ingrese el Género de la pelicula."
        );
        isValid = false;
      }

      if (isValid) {
        alert("¡Película agregada correctamente!");
      }
    });
});

function displayErrorMessage(elementId, message) {
  var errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
}
function resetErrorMessages() {
  let errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (element) {
    element.innerText = "";
  });
}
