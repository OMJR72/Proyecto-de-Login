var arreglo = [];
var aux = 0;

import {
    validarCorreo,
    soloLetras,
    validarTelefono,
    calcularEdad,
    mayorDeEdad,
    validarPassword,
    validarNumeroControl
} from "./utileria.js";

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