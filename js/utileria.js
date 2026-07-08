//Correo
export function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}


//Solo letras
export function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto);
}

//Longitud
export function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}
//Edad
export function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())){
        edad--;
    }
    return edad;
}
//Mayor de edad
export function mayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}
//Contrase;a
export function validarPassword(password) {
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#\-+=])[A-Za-z\d@$!%*?&._#\-+=]{8,}$/;
    return expresion.test(password);
}


//Mayor, menor y promedio
export function calcularMayorMenorPromedio(arreglo) {

    arreglo.sort(function (a, b) {
        return a - b;
    });
    let suma = arreglo.reduce(function (total, numero) {
        return total + numero;
    }, 0);
    return {
        mayor: arreglo[arreglo.length - 1],
        menor: arreglo[0],
        promedio: suma / arreglo.length
    };
}

//Telefono
export function validarTelefono(telefono) {
    const expresion = /^\d{10}$/;
    return expresion.test(telefono);
}