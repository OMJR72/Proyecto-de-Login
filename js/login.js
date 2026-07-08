function ingresar(){
    var usuario = document.getElementById("usuario").value;
    localStorage.setItem("usuario", usuario);
    window.location.href = "./index.html";
}