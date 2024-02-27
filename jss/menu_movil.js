function mostrarMenuMobil() {
    var menu = document.getElementById("menu_buttons")

    if (menu.classList.contains("mobile_hidden")) {
        menu.classList.remove("mobile_hidden")
    } else {
        menu.classList.add("mobile_hidden")
    }
}