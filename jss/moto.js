document.addEventListener("DOMContentLoaded", function () {
    var motoIcon = document.getElementById("motoIcon");

    motoIcon.addEventListener("click", function () {
        // Cambiar color
        motoIcon.style.color = getRandomColor();

        // Aumentar velocidad
        var currentAnimation = motoIcon.style.animationDuration || "15s";
        var newSpeed = parseInt(currentAnimation) - 2 + "s";
        motoIcon.style.animationDuration = newSpeed;
    });

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
