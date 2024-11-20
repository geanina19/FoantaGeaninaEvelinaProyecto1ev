// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Limpiar las marcas de error previas
    limpiarErrores();

    // Validar que todos los campos estén completos
    let esValido = true;
    
    if (!nombre) {
        marcarError("nombre");
        esValido = false;
    }

    if (!apellido) {
        marcarError("apellido");
        esValido = false;
    }

    if (!correo) {
        marcarError("correo");
        esValido = false;
    } else if (!validarCorreo(correo)) {
        marcarError("correo");
        esValido = false;
    }

    if (!mensaje) {
        marcarError("mensaje");
        esValido = false;
    }

    // Si el formulario es válido, se envía y se borra
    if (esValido) {
        alert("Formulario enviado con éxito.");
        borrarFormulario();
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
}

// Función para marcar un campo con error (borde rojo)
function marcarError(campo) {
    document.getElementById(campo).classList.add("error");
}

// Función para limpiar los errores (borrar los bordes rojos)
function limpiarErrores() {
    const campos = ["nombre", "apellido", "correo", "mensaje"];
    campos.forEach(campo => {
        document.getElementById(campo).classList.remove("error");
    });
}

// Función para validar el formato de un correo electrónico
function validarCorreo(correo) {
    // Expresión regular para formato de correo electrónico válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// Función para borrar el formulario
function borrarFormulario() {
    // Resetea todos los campos del formulario
    document.getElementById("miFormulario").reset();
    alert("Formulario borrado.");
}

