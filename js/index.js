import {
    validarCorreo,
    soloLetras,
    validarTelefono,
    calcularEdad,
    mayorDeEdad,
    validarPassword,
    validarNumeroControl
} from "./utileria.js";
let contador = 1;

const btnCapturar = document.getElementById("btnCapturar");
const vistaUsuario = document.getElementById("vistaUsuario");

const btnAlumnos = document.getElementById("btnAlumnos");
const vistaAlumnos = document.getElementById("vistaAlumnos");

btnCapturar.addEventListener("click", function (e) {
    e.preventDefault();

    mostrarUsuario();

    const menu = bootstrap.Offcanvas.getInstance(document.getElementById("menu"));
    menu.hide();
});

btnAlumnos.addEventListener("click", function(e){
    e.preventDefault();

    mostrarAlumnos();

    const menu = bootstrap.Offcanvas.getInstance(document.getElementById("menu"));
    menu.hide();
});

function validarFormulario(){
    let nombre = document.getElementById("nombreUsuario").value;
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
var arreglo = [];
var aux = 0;

const usuario = localStorage.getItem("correo");
document.getElementById("usuario").textContent = usuario;

document.getElementById("btnAnadir")
    .addEventListener("click", Anadir);

document.getElementById("btnCalcular")
    .addEventListener("click", Calcular);

function Anadir() {
    const control = document.getElementById("control").value;
    if (document.getElementById("nombre").value === "" || document.getElementById("calificacion").value === "" || control === "" ) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puede dejar campos vacios',
        })
        return;
    }
    else if (!validarNumeroControl(control)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un numero de control valido',
        })
        return;
    }
    const estudiante = {
        control: document.getElementById("control").value,
        nombre: document.getElementById("nombre").value,
        calificacion: parseInt(document.getElementById("calificacion").value)
    }
    localStorage.setItem(estudiante.control, estudiante.nombre, estudiante.calificacion);
    arreglo.push(estudiante);
    actualizarTabla();
}

function Calcular() {
    arreglo.sort(function (a, b) {
        return a.calificacion - b.calificacion
    })
    document.getElementById("mayor").value = arreglo[arreglo.length - 1].nombre + " tiene la mayor calificacion con: " + arreglo[arreglo.length - 1].calificacion;
    document.getElementById("menor").value = arreglo[0].nombre + " tiene la menor calificacion con: " + arreglo[0].calificacion;
    var suma = arreglo.map(estudiante => estudiante.calificacion).reduce((a, b) => a + b, 0);
    document.getElementById("promedio").value = "El promedio es: " + suma / arreglo.length;
}

function actualizarTabla() {
    const tbody = document.querySelector("#tabla tbody");
    tbody.innerHTML = "";
    arreglo.forEach(estudiante => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = estudiante.control;
        row.insertCell(1).textContent = estudiante.nombre;
        row.insertCell(2).textContent = estudiante.calificacion;
    });
}

function mostrarUsuario(){

    vistaUsuario.classList.remove("d-none");
    vistaAlumnos.classList.add("d-none");
}

function mostrarAlumnos(){

    vistaUsuario.classList.add("d-none");
    vistaAlumnos.classList.remove("d-none");
}
