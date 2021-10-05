

function validarUsuario( usuario ){

    let usuarioRegistrado = "horacio";

    if( usuario == usuarioRegistrado ){

        return true;
    }
    else{
        return false;
    }

}


function valirdarPass( pass ){

    let passRegistrada = "tandil";

    if( pass == passRegistrada ){

        return true;
    }
    else{
        return false;
    }


}


function login( usuario  , pass){


    if( usuario == true && pass == true){
        return true;
    }
}


let usuario = prompt("Ingrese su usuario o e-mail");
let pass = prompt("Ingrese su contraseña");



if( login( validarUsuario( usuario ) , valirdarPass(pass))){

    console.log("Usuario VALIDO");
    alert("Bienvenido! Usted es un usuario registrado");

}
else{
    console.log("Usuario desconocido")
    alert("El usuario o la contraseña ingresada es incorrecta")
}