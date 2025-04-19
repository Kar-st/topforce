document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  });
  
  // Simulación de datos desde Google Sheets
  const horarios = [
    "Lunes a Viernes: 8:00 a 12:00 y 15:00 a 22:00",
    "Sábados: 9:00 a 12:00",
    "Feriados: A designar"
  ];
  
  const aranceles = [
    "Cuota libre (Musculación): $30.000",
    "3 veces por semana (12 clases): $26.000",
    "Medio mes: $19.000",
    "Semanal: $15.000",
    "Por día: $4.000",
    "G.A.P. 3 veces por semana: $30.000",
    "Horarios G.A.P.: Lunes, Miércoles y Viernes 18:00 / Martes y Jueves 19:30 / Sábados 10:00",
    "Promo G.A.P. + Gym: $2.000 de descuento si venís con otra persona",
    "Cuotas mensuales: Del 1 al 15 de cada mes",
    "Desde el 15: Solo medio mes habilitado"
  ];
  
  function renderList(id, data) {
    const container = document.getElementById(id);
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  }
  
  renderList("horariosData", horarios);
  renderList("arancelesData", aranceles);
  