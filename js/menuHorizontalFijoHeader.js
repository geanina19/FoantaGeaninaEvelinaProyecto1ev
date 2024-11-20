document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("navMenuHorizontal");
    const stickyOffset = nav.offsetTop; // Obtiene la posición del menú horizontal

    function stickNavOnScroll() {
        if (window.pageYOffset >= stickyOffset) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }

    // Escucha el evento de desplazamiento en la ventana
    window.addEventListener("scroll", stickNavOnScroll);
});
