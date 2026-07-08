import { validarCorreo, validarPassword } from "./utileria.js";

function iniciarSesion(){
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(!validarCorreo(correo)){
        document.getElementById("mensajeCorreo").textContent = "Correo inválido";
    }

    if(!validarPassword(password)){
        document.getElementById("mensajePassword").textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
    }

    if(validarCorreo(correo)==true && validarPassword(password)==true){
        window.location.href = "index.html";
    }
}
document.getElementById("btnLogin").addEventListener("click", iniciarSesion);