document.addEventListener('DOMContentLoaded', () => {
    
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const pantallaCarta = document.getElementById('pantalla-carta');
    const imgInicio = document.getElementById('img-inicio');
    const audio = document.getElementById('musica');

    // Función que se ejecuta al hacer clic
    imgInicio.addEventListener('click', () => {
        
        // 1. Ocultamos la pantalla del burro
        pantallaInicio.classList.add('oculto');

        // 2. Mostramos la pantalla de la carta
        pantallaCarta.classList.remove('oculto');
        
        // 3. Reproducimos la música
        // Bajamos el volumen un poco para que no asuste (opcional, 0.5 es 50%)
        audio.volume = 0.8; 
        audio.play().catch(error => {
            console.log("El navegador bloqueó el audio automático: ", error);
        });

    });
});