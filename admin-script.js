// Sistema básico de autenticación por WhatsApp
function initAdminAccess() {
    // Verificar si es el administrador (por número de teléfono)
    const isAdmin = confirm("¿Eres el administrador? (Solo el número 1126357523 puede acceder)");
    
    if (isAdmin) {
        // Mostrar botón de administración
        document.querySelector('.admin-access').style.display = 'block';
        
        // Guardar en localStorage que es admin (por 1 hora)
        localStorage.setItem('tfAdminAuth', 'true');
        setTimeout(() => {
            localStorage.removeItem('tfAdminAuth');
        }, 3600000); // 1 hora
    }
}

// Al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    // Si ya estaba autenticado
    if (localStorage.getItem('tfAdminAuth') === 'true') {
        document.querySelector('.admin-access').style.display = 'block';
    }
    
    // Botón para autenticarse
    const adminBtn = document.createElement('button');
    adminBtn.textContent = 'Acceso Admin';
    adminBtn.style.position = 'fixed';
    adminBtn.style.bottom = '70px';
    adminBtn.style.right = '20px';
    adminBtn.style.zIndex = '999';
    adminBtn.style.padding = '8px 15px';
    adminBtn.style.background = '#ff6b6b';
    adminBtn.style.color = 'white';
    adminBtn.style.border = 'none';
    adminBtn.style.borderRadius = '5px';
    adminBtn.addEventListener('click', initAdminAccess);
    
    document.body.appendChild(adminBtn);
});