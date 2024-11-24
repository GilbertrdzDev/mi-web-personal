// Validación del formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
    const email = document.getElementById('email').value;

    if (nombre === '' || motivo === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        event.preventDefault();
    } else {
        alert('Formulario enviado correctamente.');
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return regex.test(email);
}