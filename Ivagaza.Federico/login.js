/// <reference path="./libs/jquery/index.d.ts" />
window.onload = function () {
    //var json='[{"correo":"algo@gmail.com","clave":"12345","nombre":"fede","perfil":"administrador","foto":"Koala.jpg"},{"correo":"nada@gmail.com","clave":"12345","nombre":"juna","perfil":"empleado","foto":"Koala.jpg"},{"correo":"fede@gmail.com","clave":"12345","nombre":"maxi","perfil":"dueño","foto":"Koala.jpg"},{"correo":"gbgf@gmail.com","clave":"7412","nombre":"juan","perfil":"encargado","foto":"Koala.jpg"},{"correo":"trry@gmail.com","clave":"8523","nombre":"seba","perfil":"empleado","foto":"Koala.jpg"}]';
    var json = '[{"correo":"algo@gmail.com","clave":"12345","nombre":"juna","apellido":"lopez","legajo":100,"perfil":"invitado","foto":"Koala.jpg"}';
    json += ',{"correo":"fede@gmail.com","clave":"12345","nombre":"maxi","apellido":"ivagaza","legajo":101,"perfil":"administrador","foto":"Koala.jpg"}';
    json += ',{"correo":"juan@gmail.com","clave":"12345","nombre":"juan","apellido":"perez","legajo":102,"perfil":"superAdmin","foto":"Koala.jpg"}';
    json += ',{"correo":"seba@gmail.com","clave":"12345","nombre":"seba","apellido":"fernandez","legajo":103,"perfil":"dueño","foto":"Koala.jpg"}]';
    var arrayJson = JSON.parse(json);
    var local = localStorage.getItem("usuarios");
    if (local != null) {
        console.log("Los array ya existen");
    }
    else {
        localStorage.setItem("usuarios", json);
    }
};
function Enviar() {
    var arrayJson = JSON.parse(String(localStorage.getItem("usuarios")));
    console.log(arrayJson);
    var bandera = true;
    var mail = $("#email").val();
    var clave = $("#password").val();
    for (var i = 0; i < arrayJson.length; i++) {
        if (mail == arrayJson[i].correo && clave == arrayJson[i].clave) {
            var form = new FormData();
            bandera = false;
            form.append("correo", arrayJson[i].correo);
            form.append("nombre", arrayJson[i].nombre);
            form.append("apellido", arrayJson[i].apellido);
            form.append("perfil", arrayJson[i].perfil);
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "index.php/crearToken/", true);
            //xhttp.setRequestHeader("token",token);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send("correo=" + arrayJson[i].correo + "&nombre=" + arrayJson[i].nombre + "&apellido=" + arrayJson[i].apellido + "&perfil=" + arrayJson[i].perfil);
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200 && xhttp.responseText != '') {
                    console.log(xhttp.responseText);
                    localStorage.setItem("miToken", xhttp.responseText);
                    window.location.href = "principal.html";
                    
                }
            };
        }
    }
    if (bandera) {
        document.getElementById("spanValidar").style.display = "block";
    }
}
function Registrar() {
    window.location.href = "registro.html";
}
