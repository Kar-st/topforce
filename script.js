// script.js

// Reemplazá estas URLs con las de tus hojas de cálculo publicadas en formato CSV
const arancelesURL = 'URL_CSV_DE_ARANCELES';
const cerradoURL = 'URL_CSV_DE_CERRADO';

// Función para cargar y mostrar los aranceles
function cargarAranceles() {
  Papa.parse(arancelesURL, {
    download: true,
    header: true,
    complete: function(results) {
      const arancelesContainer = document.getElementById("arancelesData");
      arancelesContainer.innerHTML = "";
      results.data.forEach(item => {
        if (item.arancel) {
          const li = document.createElement("li");
          li.textContent = item.arancel;
          arancelesContainer.appendChild(li);
        }
      });
    }
  });
}

// Función para cargar y mostrar los días cerrados
function cargarDiasCerrados() {
  Papa.parse(cerradoURL, {
    download: true,
    header: true,
    complete: function(results) {
      const cerradoContainer = document.querySelector("#cerrado ul");
      cerradoContainer.innerHTML = "";
      results.data.forEach(item => {
        if (item.dia) {
          const li = document.createElement("li");
          li.textContent = item.dia;
          cerradoContainer.appendChild(li);
        }
      });
    }
  });
}

// Cargar los datos al iniciar la página
document.addEventListener("DOMContentLoaded", function() {
  cargarAranceles();
  cargarDiasCerrados();
});
