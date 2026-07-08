import { validarCorreo, validarPassword } from "./utileria.js";

function iniciarSesion(){
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(validarCorreo(correo)==false){
        document.getElementById("mensajeCorreo").textContent = "Correo inválido";
        document.getElementById("mensajeCorreo").style.color = "red";
    }

    if(validarPassword(password)==false){
        document.getElementById("mensajePassword").textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        document.getElementById("mensajePassword").style.color = "red";
    }

    if(validarCorreo(correo)==true && validarPassword(password)==true){
        window.location.href = "index.html";
    }
}
document
    .getElementById("btnLogin")
    .addEventListener("click", iniciarSesion);