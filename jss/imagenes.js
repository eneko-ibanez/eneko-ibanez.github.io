
    document.addEventListener("DOMContentLoaded", function () {
        // Obtener las referencias a las imágenes
        var imagen1 = document.querySelector('.imagen_1 img');
        var imagen2 = document.querySelector('.imagen_2 img');
        var imagen3 = document.querySelector('.imagen_3 img');

        // Agregar eventos de mouseover para activar las animaciones
        imagen1.addEventListener('mouseover', function () {
            imagen1.style.animationPlayState = 'running';
        });

        imagen2.addEventListener('mouseover', function () {
            imagen2.style.animationPlayState = 'running';
        });

        imagen3.addEventListener('mouseover', function () {
            imagen3.style.animationPlayState = 'running';
        });

        // Agregar eventos de mouseout para detener las animaciones al salir del área de las imágenes
        imagen1.addEventListener('mouseout', function () {
            imagen1.style.animationPlayState = 'paused';
        });

        imagen2.addEventListener('mouseout', function () {
            imagen2.style.animationPlayState = 'paused';
        });

        imagen3.addEventListener('mouseout', function () {
            imagen3.style.animationPlayState = 'paused';
        });
    });
