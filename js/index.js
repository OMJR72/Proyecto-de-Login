import { validarCorreo, validarPassword, soloLetras } from "./utileria.js";
let contador = 1;
const usuario = localStorage.getItem("usuario");
document.getElementById("usuario").textContent = usuario;

const btnCapturar = document.getElementById("btnCapturar");
const vistaUsuario = document.getElementById("vistaUsuario");

btnCapturar.addEventListener("click", function (e) {
    e.preventDefault();

    vistaUsuario.classList.remove("d-none");

    const menu = bootstrap.Offcanvas.getInstance(document.getElementById("menu"));
    menu.hide();
});

function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    let valido = true;

    if(!validarCorreo(correo)){
        document.getElementById("mensajeCorreo").textContent = "Correo inválido";
        valido = false;
    } else {
        document.getElementById("mensajeCorreo").textContent = "";
    }

    if(!validarPassword(password)){
        document.getElementById("mensajePassword").textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        valido = false;
    } else {
        document.getElementById("mensajePassword").textContent = "";
    }

    if(!soloLetras(nombre)){
        document.getElementById("mensajeNombre").textContent = "Nombre inválido";
        valido = false;
    } else {
        document.getElementById("mensajeNombre").textContent = "";
    }

    if(valido){
        document.getElementById("mensaje").classList.remove("d-none");
        document.getElementById("formulario").reset();

        const tabla = document.getElementById("tablaUsuarios");
        tabla.innerHTML += `
        <tr>
            <td>${contador++}</td>
            <td>${nombre}</td>
            <td>${correo}</td>
        </tr>
        `;
        document.getElementById("formulario").reset();
        const toast = new bootstrap.Toast(document.getElementById("toastExito"));
        toast.show();
    }
}

document.getElementById("btnValidar").addEventListener("click", validarFormulario);