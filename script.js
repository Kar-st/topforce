// Botón hamburguesa
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  });
  
  // Colapsables
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.classList.toggle("active");
    });
  });
  
  // Cargar datos desde Google Sheets
  const SHEET_ID = "TU_ID_DE_SHEET"; // Reemplaza con tu ID real
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
  
  fetch(SHEET_URL)
    .then(res => res.text())
    .then(text => {
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const rows = json.table.rows;
  
      const horarios = [];
      const aranceles = [];
  
      rows.forEach(row => {
        const tipo = row.c[0]?.v;
        const titulo = row.c[1]?.v;
        const contenido = row.c[2]?.v;
  
        if (tipo === "horario") {
          horarios.push(`<p>${titulo}: <strong>${contenido}</strong></p>`);
        } else if (tipo === "arancel" || tipo === "promo") {
          aranceles.push(`<p><strong>${titulo}:</strong> ${contenido}</p>`);
        }
      });
  
      document.getElementById("horarios-content").innerHTML = horarios.join("");
      document.getElementById("aranceles-content").innerHTML = aranceles.join("");
    })
    .catch(err => {
      console.error("Error al cargar datos desde Google Sheets:", err);
    });
  