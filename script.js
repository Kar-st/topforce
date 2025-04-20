document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle mejorado
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un ítem (mobile)
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling optimizado para mobile
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                }
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission mejorado
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar feedback visual
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío (en producción sería una llamada AJAX)
            setTimeout(() => {
                const name = document.getElementById('name').value;
                alert(`Gracias ${name}, hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.`);
                contactForm.reset();
                submitBtn.innerHTML = 'ENVIAR MENSAJE';
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    // Mejor manejo del scroll para destacar sección activa
    let isScrolling;
    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            const scrollPosition = window.scrollY;
            const headerHeight = document.querySelector('header').offsetHeight;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - headerHeight - 20;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, 100);
    }, false);
});