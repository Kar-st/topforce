// Reemplazá estas URLs con las tuyas
const arancelesURL = 'URL_CSV_DE_ARANCELES';
const cerradoURL = 'URL_CSV_DE_CERRADO';

function cargarAranceles() {
  Papa.parse(arancelesURL, {
    download: true,
    header: true,
    complete: function(results) {
      const container = document.getElementById("arancelesData");
      container.innerHTML = "";
      results.data.forEach(item => {
        if (item.arancel) {
          const li = document.createElement("li");
          li.textContent = item.arancel;
          container.appendChild(li);
        }
      });
    }
  });
}

function cargarCerrado() {
  Papa.parse(cerradoURL, {
    download: true,
    header: true,
    complete: function(results) {
      const container = document.querySelector("#cerrado ul");
      container.innerHTML = "";
      results.data.forEach(item => {
        if (item.dia) {
          const li = document.createElement("li");
          li.textContent = item.dia;
          container.appendChild(li);
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarAranceles();
  cargarCerrado();
});
