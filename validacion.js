function validar() {
    var fname, email, tel, confirmar;
    fname = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    tel = document.getElementById("tel").value;
    motivo = document.getElementById("motivo").value;

    if (fname === "" || email === "" || tel === "" || motivo === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }


    return true;
}
