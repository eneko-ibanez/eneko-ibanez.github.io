document.addEventListener('DOMContentLoaded', function () {
    var cookieBanner = document.createElement('div');
    cookieBanner.className = 'cookie-banner';
    cookieBanner.innerHTML = `
        <p>Este sitio web utiliza cookies. Al continuar utilizando este sitio, aceptas nuestro uso de cookies.</p>
        <button id="accept-btn">Aceptar</button>
        <button id="reject-btn">Rechazar</button>
    `;
    
    document.body.appendChild(cookieBanner);

    var acceptBtn = document.getElementById('accept-btn');
    var rejectBtn = document.getElementById('reject-btn');

    var cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
        cookieBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    rejectBtn.addEventListener('click', function () {
        // Puedes manejar el rechazo según tus necesidades, por ejemplo, redirigir o cerrar la página
        cookieBanner.style.display = 'none';
    });
});