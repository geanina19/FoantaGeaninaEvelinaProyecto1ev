// Función para manejar la suscripción
function manejarSuscripcion() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("emailSuscripcion").value;

    // Verificar si los campos no están vacíos
    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Verificar si el correo tiene el formato correcto
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
        } else {
            // Aquí puedes manejar lo que ocurre después de una suscripción exitosa, como mostrar un mensaje de éxito
            alert("¡Gracias por suscribirte!");
            // Limpiar los campos del formulario
            document.getElementById("formSuscripcion").reset();
        }
    }
}