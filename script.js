// Función para manejar la edición de contenido
function setupAdminPanel() {
  const editBtn = document.getElementById('editBtn');
  const modal = document.getElementById('editModal');
  const closeBtn = document.querySelector('.close');
  const saveBtn = document.getElementById('saveBtn');
  
  // Mostrar/ocultar modal
  editBtn.addEventListener('click', () => modal.style.display = 'block');
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  
  // Cerrar al hacer clic fuera del modal
  window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
  });
  
  // Cargar datos actuales al abrir el modal
  editBtn.addEventListener('click', loadCurrentData);
  
  // Guardar cambios
  saveBtn.addEventListener('click', saveChanges);
}

// Función para cargar datos actuales
function loadCurrentData() {
  // Implementa según sea necesario
}

// Función para guardar cambios
function saveChanges() {
  // Implementa según sea necesario
  alert('Cambios guardados correctamente');
  document.getElementById('editModal').style.display = 'none';
}

// Función para las pestañas
function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
  }
  
  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  setupAdminPanel();
  // Resto de tu código existente...
});

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
          }
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      });
  });
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const message = document.getElementById('message').value;
          
          // Here you would typically send the data to a server
          // For this example, we'll just show an alert
          alert(`Gracias ${name}, hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.`);
          
          // Reset form
          contactForm.reset();
      });
  }
  
  // Highlight current section in navigation
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              document.querySelectorAll('nav a').forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  }
                  // Función para actualizar la página con los datos del localStorage
function actualizarContenidoDesdeStorage() {
  // Actualizar precios
  if (localStorage.getItem('topForcePrecios')) {
      const precios = JSON.parse(localStorage.getItem('topForcePrecios'));
      
      document.querySelectorAll('.price-card')[0].querySelector('.price').textContent = precios.libre;
      document.querySelectorAll('.price-card')[1].querySelector('.price').textContent = precios.tresVeces;
      document.querySelectorAll('.price-card')[2].querySelector('.price').textContent = precios.medioMes;
      document.querySelectorAll('.price-card')[3].querySelector('.price').textContent = precios.semanal;
      document.querySelectorAll('.price-card')[4].querySelector('.price').textContent = precios.dia;
      document.querySelectorAll('.price-card')[5].querySelector('.price').textContent = precios.gap;
  }
  
  // Actualizar horarios
  if (localStorage.getItem('topForceHorarios')) {
      const horarios = JSON.parse(localStorage.getItem('topForceHorarios'));
      
      document.querySelectorAll('.schedule-card ul')[0].children[0].innerHTML = 
          `<strong>Lunes a Viernes:</strong> ${horarios.lvManana} / ${horarios.lvTarde}`;
      document.querySelectorAll('.schedule-card ul')[0].children[1].innerHTML = 
          `<strong>Sábados:</strong> ${horarios.sabados}`;
      document.querySelectorAll('.schedule-card ul')[0].children[2].innerHTML = 
          `<strong>Feriados:</strong> ${horarios.feriados}`;
          
      document.querySelectorAll('.schedule-card ul')[1].children[0].innerHTML = 
          `<strong>Lunes, Miércoles, Viernes:</strong> ${horarios.gap1}`;
      document.querySelectorAll('.schedule-card ul')[1].children[1].innerHTML = 
          `<strong>Martes, Jueves:</strong> ${horarios.gap2}`;
      document.querySelectorAll('.schedule-card ul')[1].children[2].innerHTML = 
          `<strong>Sábados:</strong> ${horarios.gap3}`;
  }
  
  // Actualizar promociones
  if (localStorage.getItem('topForcePromociones')) {
      const promociones = JSON.parse(localStorage.getItem('topForcePromociones'));
      const promoText = promociones.texto.replace(
          '$2.000', 
          promociones.descuento
      );
      
      document.querySelector('.promo-box p').textContent = 'PROMOCIÓN ESPECIAL';
      document.querySelector('.promo-list li').innerHTML = 
          `Si traes 1 amigo: <strong>${promociones.descuento} OFF</strong> en tu cuota`;
  }
  
  // Actualizar textos
  if (localStorage.getItem('topForceTextos')) {
      const textos = JSON.parse(localStorage.getItem('topForceTextos'));
      document.querySelector('.hero h2').textContent = textos.titulo;
      document.querySelector('.hero p').textContent = textos.subtitulo;
  }
}

// Ejecutar al cargar la página
actualizarContenidoDesdeStorage();
              });
          }
      });
  });
});