let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombreValidacion");
    let telefono = document.getElementById("telefonoValidacion");
    let correo = document.getElementById("inputEmail");
    let validacorreo = document.getElementById("inputEmail").value;
    let mensaje = document.getElementById("mensajeValidacion");

          // Validación Nombre
    if (nombre.value.length >= 6) {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");        
    }else{
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");   
        }

        // Validación Teléfono
    if ((telefono.value.length == 10) && (!isNaN(telefono.value))) {
        telefono.classList.remove("is-invalid");
        telefono.classList.add("is-valid");
    }else{
        telefono.classList.remove("is-valid");
        telefono.classList.add("is-invalid");
    } //==10 telefono


        //Validación Correo
    function validarCorreo (inputEmail) {
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let verificar = expReg.test(inputEmail);
        console.log(verificar)
        if(verificar) {
            correo.classList.remove("is-invalid");
            correo.classList.add("is-valid");  
        }else{
            correo.classList.remove("is-valid");
            correo.classList.add("is-invalid");  
        }
    }
    validarCorreo(validacorreo);


        // Validación Mensaje
    if (mensaje.value.length >= 10) {
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add("is-valid");        
    }else{
        mensaje.classList.remove("is-valid");
        mensaje.classList.add("is-invalid");   
     }
}); //btnEnviar.addEventListener