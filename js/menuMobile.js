document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.getElementById("menuIcon");

    // Evento para alternar la visibilidad del menú
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open"); // Alterna la clase 'open'

        // Cambiar el ícono del menú
        if (navMenu.classList.contains("open")) {
            menuIcon.src = "/img/iconoX.png"; // Cambia a icono de cerrar
        } else {
            menuIcon.src = "/img/iconoMenu.png"; // Cambia a icono de menú
        }
    });
});
