function validarRegistro() {
    let usuario = document.getElementById("usuario");
    let email = document.getElementById("email");
    let clave1 = document.getElementById("clave1");
    let clave2 = document.getElementById("clave2");
    let imagen = document.getElementById("imagen")
    let genero = document.getElementById("genero")
    let check = document.getElementById("check")

    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp;  ";
    document.getElementById("validar_clave1").innerHTML = "&nbsp; ";
    document.getElementById("validar_clave2").innerHTML = "&nbsp; ";
    document.getElementById("validar_email").innerHTML = "&nbsp; ";
    document.getElementById("validar_imagen").innerHTML = "&nbsp; ";
    document.getElementById("validar_genero").innerHTML = "&nbsp; ";
    document.getElementById("validar_check").innerHTML = "&nbsp; ";

    let nombreValido = new RegExp(/^[A-Z]+$/i)
    let emailValido = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)
    let claveValida = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
    let claveValida2 = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/)

    if (usuario.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar su usuario";
        error = true; 
    }else if (usuario.value.length < 3) {
            document.getElementById("validar_usuario").innerHTML = "Debe completar el usuario con al menos 3 caracteres";
            error = true;
    }else if ( !nombreValido.test(usuario.value)) {
                document.getElementById("validar_usuario").innerHTML = "Su nombre debe contener letras";
                error = true;
    }


    if (email.value == "") {
        document.getElementById("validar_email").innerHTML = "Debe completar el email ";
        error = true;
    }else if (!emailValido.test(email.value)) {
        document.getElementById("validar_email").innerHTML = "El email debe ser valido ";
        error = true;
    }



    if (clave1.value == "") {
        document.getElementById("validar_clave1").innerHTML = "Debe completar la clave";
        error = true;
    }else if (!claveValida2.test(clave1.value)) {
                document.getElementById("validar_clave1").innerHTML = "La clave debe tener 1 numero,minuscula,mayuscula y un caracter especial";
                error = true;
    }


    if (clave2.value == "") {
        document.getElementById("validar_clave2").innerHTML = "Debe repetir la misma contraseña";
        error = true;
    }else if ( clave2.value != clave1.value) {
                document.getElementById("validar_clave2").innerHTML = "Deben coincidir las contraseñas";
                error = true;
    }

    if (imagen.value == "") {
        document.getElementById("validar_imagen").innerHTML = "Debe cargar una imagen";
        error = true;
    }

    if (imagen.value == "") {
        document.getElementById("validar_imagen").innerHTML = "Debe cargar una imagen";
        error = true;
    }

    if (genero.value == "") {
        document.getElementById("validar_genero").innerHTML = "Debe elegir su genero";
        error = true;
    }


    if (!check.checked) {
        document.getElementById("validar_check").innerHTML = "Debe aceptar las condiciones";
        error = true;
    }




    if (error == false) {
        alert("Registro Exitoso")
        
    }
        
    //     document.getElementById("usuario").value = ""
    //     document.getElementById("validar_usuario").innerHTML = "&nbsp;";
    //     document.getElementById("clave").value = ""
    //     document.getElementById("validar_clave").innerHTML = "&nbsp;";
    //     alert("Dato enviado")
    // }
     return !error
    /*if (error)
        return false;
    else{
        return true;
    }*/
    
}