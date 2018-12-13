/// <reference path="./libs/jquery/index.d.ts" />

window.onload=function() { 
    $.ajax({
        type:'POST',
        url:"index.php/validar/",
        dataType:"json",
        data:"token="+String(localStorage.getItem("miToken")),
        async:true
    })
    .done(function(resultado:any) {
        if(resultado.mensaje=='token valido') { 
            var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
            let lista="<table class='table table-dark'><thead><tr><th scope='col'>CORREO</th><th scope='col'>NOMBRE</th><th scope='col'>APELLIDO</th><th scope='col'>PERFIL</th><th scope='col'>LEGAJO</th><th scope='col'>FOTO</th></tr></thead>";
            lista+="<tbody>";
            for(var i=0;i<arrayJson.length;i++)
            {
            lista+="<tr><th scope='row'>"+arrayJson[i].correo+"</th><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].perfil+"</td><td>"+arrayJson[i].legajo+"</td><td><img src='fotos/"+arrayJson[i].foto+"' width='50px' height='50px' ></td>";
            //lista+="<td><input type='button' value='Eliminar' class='btn btn-danger' onclick='Modal("+JSON.stringify(arrayJson[i])+")'></td>";
            //lista+="<td><input type='button' value='Modificar' class='btn btn-danger' onclick='ModificarPersona("+JSON.stringify(arrayJson[i])+")'></td>";
            lista+="</tr>";
            }
            lista+="</tbody></table>";
            $("#divTabla").html(lista);
        }
        else if(resultado.mensaje=='token valido y es admin') {
            var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
            let lista="<table class='table table-dark'><thead><tr><th scope='col'>CORREO</th><th scope='col'>NOMBRE</th><th scope='col'>APELLIDO</th><th scope='col'>PERFIL</th><th scope='col'>LEGAJO</th><th scope='col'>FOTO</th></tr></thead>";
            lista+="<tbody>";
            for(var i=0;i<arrayJson.length;i++)
            {
            lista+="<tr><th scope='row'>"+arrayJson[i].correo+"</th><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].perfil+"</td><td>"+arrayJson[i].legajo+"</td><td><img src='fotos/"+arrayJson[i].foto+"' width='50px' height='50px' ></td>";
            lista+="<td><input type='button' value='Eliminar' class='btn btn-danger' onclick='Modal("+JSON.stringify(arrayJson[i])+")'></td>";
            //lista+="<td><input type='button' value='Modificar' class='btn btn-danger' onclick='ModificarPersona("+JSON.stringify(arrayJson[i])+")'></td>";
            lista+="</tr>";
            }
            lista+="</tbody></table>";
            $("#divTabla").html(lista);
        }
        else if(resultado.mensaje=='token valido y es superAdmin') {
            var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
            let lista="<table class='table table-dark'><thead><tr><th scope='col'>CORREO</th><th scope='col'>NOMBRE</th><th scope='col'>APELLIDO</th><th scope='col'>PERFIL</th><th scope='col'>LEGAJO</th><th scope='col'>FOTO</th></tr></thead>";
            lista+="<tbody>";
            for(var i=0;i<arrayJson.length;i++)
            {
            lista+="<tr><th scope='row'>"+arrayJson[i].correo+"</th><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].perfil+"</td><td>"+arrayJson[i].legajo+"</td><td><img src='fotos/"+arrayJson[i].foto+"' width='50px' height='50px' ></td>";
            lista+="<td><input type='button' value='Eliminar' class='btn btn-danger' onclick='Modal("+JSON.stringify(arrayJson[i])+")'></td>";
            lista+="<td><input type='button' value='Modificar' class='btn btn-danger' onclick='ModificarPersona("+JSON.stringify(arrayJson[i])+")'></td>";
            lista+="</tr>";
            }
            lista+="</tbody></table>";
            $("#divTabla").html(lista);
        }
    }).fail(function(resultado) {
        window.location.href="login.html";
    });
    /*let usuario=JSON.parse(String(localStorage.getItem("usuarioIngresado")));
    if(usuario.perfil=='administrador') {
        var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
        let lista="<table class='table table-dark'><thead><tr><th scope='col'>CORREO</th><th scope='col'>NOMBRE</th><th scope='col'>APELLIDO</th><th scope='col'>PERFIL</th><th scope='col'>LEGAJO</th><th scope='col'>FOTO</th></tr></thead>";
        lista+="<tbody>";
        for(var i=0;i<arrayJson.length;i++)
        {
            lista+="<tr><th scope='row'>"+arrayJson[i].correo+"</th><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].perfil+"</td><td>"+arrayJson[i].legajo+"</td><td><img src='fotos/"+arrayJson[i].foto+"' width='50px' height='50px' ></td>";
            lista+="<td><input type='button' value='Eliminar' class='btn btn-danger' onclick='Modal("+JSON.stringify(arrayJson[i])+")'></td>";
            lista+="<td><input type='button' value='Modificar' class='btn btn-danger' onclick='ModificarPersona("+JSON.stringify(arrayJson[i])+")'></td>";
            lista+="</tr>";
        }
        lista+="</tbody></table>";
        $("#divTabla").html(lista);
    }
    else if(usuario.perfil=='invitado') {
        var local=localStorage.getItem(usuario.correo);
        if(local!=null) {
            let local=JSON.parse(String(localStorage.getItem(usuario.correo)));
            var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
            let lista="<table class='table table-dark'><thead><tr><th scope='col'>CORREO</th><th scope='col'>NOMBRE</th><th scope='col'>APELLIDO</th><th scope='col'>PERFIL</th><th scope='col'>LEGAJO</th><th scope='col'>FOTO</th></tr></thead>";
            lista+="<tbody>";
            for(var i=0;i<arrayJson.length;i++)
            {
                lista+="<tr><th scope='row'><font color='"+local.fuente+"'>"+arrayJson[i].correo+"</font></th><td><font color='"+local.fuente+"'>"+arrayJson[i].nombre+"</font></td><td><font color='"+local.fuente+"'>"+arrayJson[i].apellido+"</font></td><td><font color='"+local.fuente+"'>"+arrayJson[i].perfil+"</font></td><td><font color='"+local.fuente+"'>"+arrayJson[i].legajo+"</font></td><td><img src='fotos/"+arrayJson[i].foto+"' class='"+local.forma+"' width='50px' height='50px' ></td>";
                //lista+="<td><input type='button' value='Eliminar' class='btn btn-danger' onclick='Modal("+JSON.stringify(arrayJson[i])+")'></td>";
                //lista+="<td><input type='button' value='Modificar' class='btn btn-success' onclick='Modificar("+JSON.stringify(arrayJson[i])+")'></td>";
                lista+="</tr>";
            }
            lista+="</tbody></table>";
            lista+="<div class='form-group'><label for='fondo'>Elija color de fondo</label><select class='form-control' id='fondo' name='fondo'>";
            lista+="<option value='rgb(255, 0, 0)' >Rojo</option>";
            lista+="<option value='rgb(0, 0, 231)' >Azul</option>";
            lista+="<option value='rgb(0, 154, 0)' >Verde</option>";
            lista+="<option value='rgb(0, 0, 0)' >Negro</option>";
            lista+="<option value='rgb(255, 254, 0)' >Amarillo</option>";
            lista+="<option value='rgb(1, 196, 254)' >Celeste</option></select></div>";
            lista+="<div class='form-group'><label for='fuente'>Elija color de fuente</label><select class='form-control' id='fuente' name='fuente'>";
            lista+="<option value='Red' >Rojo</option>";
            lista+="<option value='Blue' >Azul</option>";
            lista+="<option value='Green' >Verde</option>";
            lista+="<option value='Black' >Negro</option>";
            lista+="<option value='Yellow' >Amarillo</option>";
            lista+="<option value='Purple' >Purpura</option></select></div>";
            lista+="<div class='form-group'><label for='forma'>Elija forma de la foto</label><select class='form-control' id='forma' name='forma'>";
            lista+="<option value='img-circle' >Redondo</option>";
            lista+="<option value='img-rounded' >Vertices redondeados</option>";
            lista+="<option value='img-thumbnail' >Estilo diapositiva</option></select></div>";
            lista+="<button  onclick='GuardarCambios()' class='btn btn-success'>Guardar cambios</button>"
            $("#divTabla").html(lista);
            (<HTMLInputElement> document.getElementById("principal")).style.backgroundColor = local.fondo;
        }
        else {
            var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
            let lista="<table class='table table-dark'><thead><tr><th scope='col'>CORREO</th><th scope='col'>NOMBRE</th><th scope='col'>APELLIDO</th><th scope='col'>PERFIL</th><th scope='col'>LEGAJO</th><th scope='col'>FOTO</th></tr></thead>";
            lista+="<tbody>";
            for(var i=0;i<arrayJson.length;i++)
            {
                lista+="<tr><th scope='row'>"+arrayJson[i].correo+"</th><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].perfil+"</td><td>"+arrayJson[i].legajo+"</td><td><img src='fotos/"+arrayJson[i].foto+"' width='50px' height='50px' ></td>";
                //lista+="<td><input type='button' value='Eliminar' class='btn btn-danger' onclick='Modal("+JSON.stringify(arrayJson[i])+")'></td>";
                //lista+="<td><input type='button' value='Modificar' class='btn btn-success' onclick='Modificar("+JSON.stringify(arrayJson[i])+")'></td>";
                lista+="</tr>";
            }
            lista+="</tbody></table>";
            lista+="<div class='form-group'><label for='fondo'>Elija color de fondo</label><select class='form-control' id='fondo' name='fondo'>";
            lista+="<option value='rgb(255, 0, 0)' >Rojo</option>";
            lista+="<option value='rgb(0, 0, 231)' >Azul</option>";
            lista+="<option value='rgb(0, 154, 0)' >Verde</option>";
            lista+="<option value='rgb(0, 0, 0)' >Negro</option>";
            lista+="<option value='rgb(255, 254, 0)' >Amarillo</option>";
            lista+="<option value='rgb(1, 196, 254)' >Celeste</option></select></div>";
            lista+="<div class='form-group'><label for='fuente'>Elija color de fuente</label><select class='form-control' id='fuente' name='fuente'>";
            lista+="<option value='Red' >Rojo</option>";
            lista+="<option value='Blue' >Azul</option>";
            lista+="<option value='Green' >Verde</option>";
            lista+="<option value='Black' >Negro</option>";
            lista+="<option value='Yellow' >Amarillo</option>";
            lista+="<option value='Purple' >Purpura</option></select></div>";
            lista+="<div class='form-group'><label for='forma'>Elija forma de la foto</label><select class='form-control' id='forma' name='forma'>";
            lista+="<option value='img-circle' >Redondo</option>";
            lista+="<option value='img-rounded' >Vertices redondeados</option>";
            lista+="<option value='img-thumbnail' >Estilo diapositiva</option></select></div>";
            lista+="<button  onclick='GuardarCambios()' class='btn btn-success'>Guardar cambios</button>"
            $("#divTabla").html(lista);
        }       
    }*/
}

function Modal(item:any) {
    console.log(item.correo);
    let modal="<div id='myModal' class='modal fade' role='dialog'>";
    modal+="<div class='modal-dialog'>";
    modal+="<div class='modal-content'>";
    modal+="<div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Eliminar</h4></div>";
    modal+="<div class='modal-body'><p>Esta seguro que desea eliminar a "+item.correo+" ?</p><button class='btn btn-success' onClick='Eliminar("+JSON.stringify(item)+")'>Aceptar</button>";
    modal+="<button class='btn btn-danger' data-dismiss='modal'>Cancelar</button></div>";
    modal+="<div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div></div></div>";
    $("#mostrarModal").html(modal);
    $("#myModal").modal("show");
}

function ModificarPersona(item:any) {
    let modal="<div id='myModal' class='modal fade' role='dialog'>";
    modal+="<div class='modal-dialog'>";
    modal+="<div class='modal-content'>";
    modal+="<div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Modificar</h4></div>";
    modal+="<div class='modal-body'><form id='loginFormModificar' method='POST' class='well form-horizontal'>";
    modal+="<div class='form-group'>";
    modal+="<label for='apellido'>Apellido</label>";
    modal+="<input type='text' class='form-control' id='apellido' name='apellido' placeholder='Introduce tu apellido'></div>";
    modal+="<div class='form-group'>";
    modal+="<label for='nombre'>Nombre</label>";
    modal+="<input type='text' class='form-control' id='nombre' name='nombre' placeholder='Introduce tu nombre'></div>";
    modal+="<div class='form-group'>";
    modal+="<label for='email'>Email</label>";
    modal+="<input type='email' class='form-control' id='email' name='correo' placeholder='Introduce tu email'></div>";       
    modal+="<div class='form-group'>";
    modal+="<label for='legajo'>Legajo</label>";
    modal+="<input type='text' class='form-control' id='legajo' name='legajo' placeholder='Introduce tu legajo'></div>";
    modal+="<div class='form-group'><label for='perfil'>Perfil</label><select class='form-control' id='perfil' name='perfil'>"
    modal+="<option selected value='invitado' >invitado</option><option value='superAdmin'>super admin</option><option value='dueño'>dueño</option><option value='administrador'>administrador</option></select></div>"
    modal+="<div class='form-group'>";
    modal+="<label for='foto'>Foto</label>";
    modal+="<input type='file' class='form-control' id='foto' name='foto' onchange='SubirFoto()' ><img id='imgFoto' src='' width='300px' height='100px' /></div>";                   
    modal+="<div class='form-group'>";
    modal+="<label for='clave'>Clave</label>";
    modal+="<input type='password' class='form-control' id='clave' name='clave'</div>";
    modal+="<div><input type='button' value='Modificar' onClick='Modificar()' class='btn btn-primary' /></div></form>" ; 
    modal+="<button class='btn btn-danger' data-dismiss='modal'>Cancelar</button></div>";
    modal+="<div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div></div></div>";
    $("#mostrarModal").html(modal);
    $("#myModal").modal("show");
    $("#apellido").val(item.apellido);
    $("#nombre").val(item.nombre);
    $("#email").val(item.correo);
    $("#legajo").val(item.legajo);
    $("#perfil").val(item.perfil);
    $("#clave").val(item.clave);
    $("#imgFoto").attr("src","fotos/"+item.foto);
    $("#email").attr("readonly","readonly");
    $("#clave").attr("readonly","readonly");
    //(<HTMLInputElement> document.getElementById("modificar")).style.display = "block";
}

function Eliminar(item:any) {
    console.log(item.nombre);
    var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
    for(var i=0;i<arrayJson.length;i++)
    {
        if(item.correo==arrayJson[i].correo) {
            arrayJson.splice(i,1);
            localStorage.setItem("usuarios",JSON.stringify(arrayJson));
            break;
        }
    }
    location.reload(true);
}

function GuardarCambios() {
    let usuario=JSON.parse(String(localStorage.getItem("usuarioIngresado")));
    let fuente=$("#fuente").val();
    let fondo=$("#fondo").val();
    let forma=$("#forma").val();
    let json='{"fondo":"'+fondo+'","fuente":"'+fuente+'","forma":"'+forma+'"}';
    localStorage.setItem(usuario.correo,json);
    location.reload(true);
}

function Modificar() {
    var nombre=$("#nombre").val();
    var apellido=$("#apellido").val();
    var email=$("#email").val();
    var legajo=$("#legajo").val();
    var perfil=$("#perfil").val();
    var clave=$("#clave").val();
    let foto : any = (<HTMLInputElement> document.getElementById("foto"));
    let usuario=JSON.parse(String(localStorage.getItem("usuarioIngresado")));
    var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
    var nuevoJson='{"correo":"'+email+'","clave":"'+clave+'","nombre":"'+nombre+'","apellido":"'+apellido+'","legajo":'+legajo+',"perfil":"'+perfil+'","foto":"'+foto.files[0].name+'"}';
    nuevoJson=JSON.parse(nuevoJson);
    console.log(nuevoJson);
    if(ValidarEmail()) {
        for(var i=0;i<arrayJson.length;i++)
        {
            if(arrayJson[i].legajo==legajo) {
                arrayJson[i]=nuevoJson;
                break;
            }
        }
        localStorage.setItem("usuarios",JSON.stringify(arrayJson));
        location.reload(true);
    }
    else {
        (<HTMLInputElement> document.getElementById("spanCorreo")).style.display = "block";
    }
}

function ValidarEmail():boolean {
    var arrayJson:any[]=JSON.parse(String(localStorage.getItem("usuarios")));
    var mail=String($("#email").val());
    var legajo=$("#legajo").val();
    for(var i=0;i<arrayJson.length;i++)
    {
        if(arrayJson[i].legajo==legajo) {
            continue;
        }
        if(arrayJson[i].correo==mail) {
            return false;
        }
    }
    return true;
}

function SubirFoto():void {
    let foto : any = (<HTMLInputElement> document.getElementById("foto"));
    let form : FormData = new FormData();
    form.append('foto', foto.files[0]);
    $.ajax({
        type: 'POST',
        url: "administrar.php",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        data: form,
        async: true
    })
    .done(function(retJSON) {
        if(!retJSON.Exito){
            console.error("NO se subió la foto!!!");
        }
        else{
            console.info("Foto subida OK!!!");
            $("#imgFoto").attr("src","fotosTemp/"+retJSON.Path);                    
        }
    });
}