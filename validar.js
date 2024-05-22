function validar() {
    var nombre, user, password, confirmar;
    nombre = document.getElementById("nombre").value;
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    confirmar = document.getElementById("confirmar").value;

    if (nombre === "" || user === "" || password === "" || confirmar === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }

    if (password !== confirmar) {
        alert("Las contraseñas no coinciden");
        return false;
    }


    return true;
}
