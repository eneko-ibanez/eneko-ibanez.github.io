document.addEventListener('DOMContentLoaded', function () {
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptBtn = document.getElementById('accept-btn');
    var rejectBtn = document.getElementById('reject-btn');

    // Verificar si la cookie de aceptación está presente
    var cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
        cookieBanner.style.display = 'block';
    }

    // Manejar clic en el botón de aceptar
    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    // Manejar clic en el botón de rechazar
    rejectBtn.addEventListener('click', function () {
        // Puedes manejar el rechazo según tus necesidades, por ejemplo, redirigir o cerrar la página
        cookieBanner.style.display = 'none';
    });
});