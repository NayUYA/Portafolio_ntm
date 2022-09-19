let btnCotizar = document.getElementById("btnCotizar");
let btnPrint = document.getElementById("btnPrint");

btnCotizar.addEventListener("click", function (event) {
    event.preventDefault();
    let valNombre = document.getElementById("validacionNombre");            //variable de validación-nombre
    let correo = document.getElementById("validacionCorreo");               //variable de validación-correo
    let agregarCorreo = document.getElementById("validacionCorreo").value;  //variable de validación-correo
    let servicio = document.getElementById("inputServicios");               //variable de validación-servicio
    let tipoServicio = document.getElementById("inputTiposervicio");        //variable de validación-tipo de servicio

         // Validación Nombre
    if (valNombre.value.length >= 6) {
        valNombre.classList.remove("is-invalid");
        valNombre.classList.add("is-valid");        
    }else{
        valNombre.classList.remove("is-valid");
        valNombre.classList.add("is-invalid");   
    }   // fin-validacion-nombre


        //Validación correo
    function validarCorreo (validacionCorreo) {
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let verificar = expReg.test(validacionCorreo);
        if (verificar) {
            correo.classList.remove("is-invalid")
            correo.classList.add("is-valid")
        }else{
            correo.classList.remove("is-valid")
            correo.classList.add("is-invalid")
        } // fin-validacion-correo
    }
    validarCorreo(agregarCorreo);


        //Validación servicio 
    if (servicio.selectedIndex==0) {
        servicio.classList.remove("is-valid");
        servicio.classList.add("is-invalid");        
    }else{
        servicio.classList.remove("is-invalid");
        servicio.classList.add("is-valid");
    }   // fin-validacion-servicio


    // Validación tipo de servicio
    if (tipoServicio.selectedIndex==0) {
        tipoServicio.classList.remove("is-valid");
        tipoServicio.classList.add("is-invalid");
    }else{
        tipoServicio.classList.remove("is-invalid");
        tipoServicio.classList.add("is-valid");
    }   // fin validacióntipodeservicio
}); //btnQuote.addEventListener


btnPrint.addEventListener("click", function (event) {
    event.preventDefault();
    window.print();
});
