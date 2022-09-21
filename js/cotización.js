let btnCotizar = document.getElementById("btnCotizar");
let btnPrint = document.getElementById("btnPrint");

btnCotizar.addEventListener("click", function (event) {
    event.preventDefault();
    let valNombre = document.getElementById("validacionNombre");            //variable de validación-nombre
    let nombre = document.getElementById("validacionNombre").value;            // valor nombre
    let correo = document.getElementById("validacionCorreo");               //variable de validación-correo
    let agregarCorreo = document.getElementById("validacionCorreo").value;  //variable de validación-correo
    let valServicio = document.getElementById("inputServicios");               //variable de validación-servicio
    let valTiposer = document.getElementById("inputTiposervicio");        //variable de validación-tipo de servicio

    let servicio = document.getElementById("inputServicios");
    let tipoSer = document.getElementById("inputTiposervicio");
    let iva = document.getElementById("checkIVA").checked;
    let cardTexto = document.getElementById("cardTexto"); 
    let cardCosto = document.getElementById("cardCosto");
    let flag = true;


    // console.log(servicio.selectedIndex);
    // console.log(iva);

         // Validación Nombre
    if (valNombre.value.length >= 3) {
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
    if (valServicio.selectedIndex==0) {
        valServicio.classList.remove("is-valid");
        valServicio.classList.add("is-invalid");        
    }else{
        valServicio.classList.remove("is-invalid");
        valServicio.classList.add("is-valid");
    }   // fin-validacion-servicio


    // Validación tipo de servicio
    if (valTiposer.selectedIndex==0) {
        valTiposer.classList.remove("is-valid");
        valTiposer.classList.add("is-invalid");
    }else{
        valTiposer.classList.remove("is-invalid");
        valTiposer.classList.add("is-valid");
    }   // fin validacióntipodeservicio

    
    //Impresion en cotización

    if (flag) {
        cardTexto.innerHTML= `Correo: ${agregarCorreo} <br/>Nombre: ${nombre} <br/>
        Resumen de su cotización;<br/> ${getRequirements(servicio)}
        `;
        cardCosto.innerHTML = "<strong>$ " + cotizacion(servicio.selectedIndex, tipoSer.selectedIndex, iva).toFixed(2);
    }


}); //btnQuote.addEventListener


btnPrint.addEventListener("click", function (event) {
    event.preventDefault();
    window.print();
});

const getRequirements = (ex) => {
    let str = `<br/><ul class= "list-group col-4">`;
    for (let i = 0; i < ex.options.length; i++) {
        console.log(ex.options[i].selected);
            if(ex.options[i].selected){
                str += `<li class="list-group-item list-group-item-action"> ${ex.options[i].text}  </li>`;
             }//if
    } //for i
    str += `</ul>`
    return str;
};




    function cotizacion(s, t, vat) {
        let result = 0
        if (s==1 && t==1) {                        //Desarrollo web
            result += 7000 *1.50;        
        }else if (s==1 && t==2) {
            result += 7000 *1.20; 
        } if(s==2 && t==1) {                       //Mantenimiento
            result += 1100 *1.50;
        }else if (s==2 && t==2) {
            result += 1100 *1.20;            
        } if (s==3 && t==1) {                      //Hosting
            result += 1500 *1.50;  
        }else if(s==3 && t==2) {                    
            result += 1500 *1.20;
        } // else    

        if (vat) {
            result *= 1.16;   
        } // if vat

        return result;
} //cotizacion






