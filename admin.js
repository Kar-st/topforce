document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos actuales al abrir el admin
    cargarDatosGuardados();
    
    // Manejar el guardado de precios
    document.getElementById('formPrecios').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const precios = {
            libre: document.getElementById('precioLibre').value,
            tresVeces: document.getElementById('precio3veces').value,
            medioMes: document.getElementById('precioMedioMes').value,
            semanal: document.getElementById('precioSemanal').value,
            dia: document.getElementById('precioDia').value,
            gap: document.getElementById('precioGAP').value
        };
        
        localStorage.setItem('topForcePrecios', JSON.stringify(precios));
        alert('Precios actualizados correctamente');
    });
    
    // Manejar el guardado de horarios
    document.getElementById('formHorarios').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const horarios = {
            lvManana: document.getElementById('horarioLvManana').value,
            lvTarde: document.getElementById('horarioLvTarde').value,
            sabados: document.getElementById('horarioSabados').value,
            feriados: document.getElementById('horarioFeriados').value,
            gap1: document.getElementById('horarioGAP1').value,
            gap2: document.getElementById('horarioGAP2').value,
            gap3: document.getElementById('horarioGAP3').value
        };
        
        localStorage.setItem('topForceHorarios', JSON.stringify(horarios));
        alert('Horarios actualizados correctamente');
    });
    
    // Manejar el guardado de promociones
    document.getElementById('formPromociones').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const promociones = {
            descuento: document.getElementById('descuentoReferido').value,
            texto: document.getElementById('textoPromocion').value
        };
        
        localStorage.setItem('topForcePromociones', JSON.stringify(promociones));
        alert('Promociones actualizadas correctamente');
    });
    
    // Manejar el guardado de textos
    document.getElementById('formTextos').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const textos = {
            titulo: document.getElementById('tituloPrincipal').value,
            subtitulo: document.getElementById('subtituloPrincipal').value
        };
        
        localStorage.setItem('topForceTextos', JSON.stringify(textos));
        alert('Textos actualizados correctamente');
    });
    
    // Función para cargar datos guardados
    function cargarDatosGuardados() {
        // Cargar precios
        if (localStorage.getItem('topForcePrecios')) {
            const precios = JSON.parse(localStorage.getItem('topForcePrecios'));
            document.getElementById('precioLibre').value = precios.libre;
            document.getElementById('precio3veces').value = precios.tresVeces;
            document.getElementById('precioMedioMes').value = precios.medioMes;
            document.getElementById('precioSemanal').value = precios.semanal;
            document.getElementById('precioDia').value = precios.dia;
            document.getElementById('precioGAP').value = precios.gap;
        }
        
        // Cargar horarios
        if (localStorage.getItem('topForceHorarios')) {
            const horarios = JSON.parse(localStorage.getItem('topForceHorarios'));
            document.getElementById('horarioLvManana').value = horarios.lvManana;
            document.getElementById('horarioLvTarde').value = horarios.lvTarde;
            document.getElementById('horarioSabados').value = horarios.sabados;
            document.getElementById('horarioFeriados').value = horarios.feriados;
            document.getElementById('horarioGAP1').value = horarios.gap1;
            document.getElementById('horarioGAP2').value = horarios.gap2;
            document.getElementById('horarioGAP3').value = horarios.gap3;
        }
        
        // Cargar promociones
        if (localStorage.getItem('topForcePromociones')) {
            const promociones = JSON.parse(localStorage.getItem('topForcePromociones'));
            document.getElementById('descuentoReferido').value = promociones.descuento;
            document.getElementById('textoPromocion').value = promociones.texto;
        }
        
        // Cargar textos
        if (localStorage.getItem('topForceTextos')) {
            const textos = JSON.parse(localStorage.getItem('topForceTextos'));
            document.getElementById('tituloPrincipal').value = textos.titulo;
            document.getElementById('subtituloPrincipal').value = textos.subtitulo;
        }
    }
});