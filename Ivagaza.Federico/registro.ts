/// <reference path="./libs/jquery/index.d.ts" />

function Agregar():void {
    var nombre=String($("#nombre").val());
    var apellido=String($("#apellido").val());
    var email=String($("#email").val());
    var legajo=String($("#legajo").val());
    var perfil=String($("#perfil").val());
    var clave=String($("#clave").val());
    let foto : any = (<HTMLInputElement> document.getElementById("foto"));
    if(ValidarMail()) {
        let form : FormData = new FormData();
        form.append("correo",email);
        form.append("nombre",nombre);
        form.append("apellido",apellido);
        form.append("perfil",perfil);
        form.append("clave",clave);
        form.append("legajo",legajo);
        form.append("foto",foto.files[0].name);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "index.php/crearToken/", true);
        var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
        var nuevoJson='{"correo":"'+email+'","clave":"'+clave+'","nombre":"'+nombre+'","apellido":"'+apellido+'","legajo":'+legajo+',"perfil":"'+perfil+'","foto":"'+foto.files[0].name+'"}';
        nuevoJson=JSON.parse(nuevoJson);
        arrayJson.push(nuevoJson);
        localStorage.setItem("usuarios",JSON.stringify(arrayJson));
        alert("usuario agregado");
        window.location.href="login.html";
    }
    else {
        (<HTMLInputElement> document.getElementById("spanCorreo")).style.display = "block";
    }
        
}

function ValidarMail():Boolean {
    var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
    var mail=String($("#email").val());
    for(var i=0;i<arrayJson.length;i++)
    {
        if(arrayJson[i].correo==mail) {
            return false;
        }
    }
    return true;
}