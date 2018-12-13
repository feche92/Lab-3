/// <reference path="./libs/jquery/index.d.ts" />
function Agregar() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var legajo = $("#legajo").val();
    var perfil = $("#perfil").val();
    var clave = $("#clave").val();
    var foto = document.getElementById("foto");
    if (ValidarMail()) {
        var arrayJson = JSON.parse(String(localStorage.getItem("usuarios")));
        var nuevoJson = '{"correo":"' + email + '","clave":"' + clave + '","nombre":"' + nombre + '","apellido":"' + apellido + '","legajo":' + legajo + ',"perfil":"' + perfil + '","foto":"' + foto.files[0].name + '"}';
        nuevoJson = JSON.parse(nuevoJson);
        arrayJson.push(nuevoJson);
        localStorage.setItem("usuarios",JSON.stringify(arrayJson));
        alert("usuario agregado");
        window.location.href="login.html";
    }
    else {
        document.getElementById("spanCorreo").style.display = "block";
    }
}
function ValidarMail() {
    var arrayJson = JSON.parse(String(localStorage.getItem("usuarios")));
    var mail = String($("#email").val());
    for (var i = 0; i < arrayJson.length; i++) {
        if (arrayJson[i].correo == mail) {
            return false;
        }
    }
    return true;
}
