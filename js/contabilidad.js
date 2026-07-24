// Variables de los campos del formulario

let tipoMovimiento = document.getElementById("tipoMovimiento");
let valor = document.getElementById("valor");
let concepto = document.getElementById("concepto");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");


// Función para validar datos

function ValidarDatos(){


    // Validar tipo de movimiento

    if(tipoMovimiento.value == "Seleccione una opción"){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione el tipo de movimiento"
        });

        return;
    }



    // Validar valor

    if(valor.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el valor"
        });

        return;
    }



    // Validar concepto

    if(concepto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el concepto"
        });

        return;
    }



    // Validar fecha

    if(fecha.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione la fecha"
        });

        return;
    }



    // Validar descripción

    if(descripcion.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la descripción"
        });

        return;
    }

    function ValidarDatos(){


    // Validar campos vacíos
    // (aquí va lo que ya hicimos)


    // Validación del valor

    if(!/^[0-9]+$/.test(valor.value)){

        Swal.fire({
            icon:"error",
            title:"Valor incorrecto",
            text:"El valor solo debe contener números"
        });

        return;
    }



    // Mostrar datos en consola

    console.log("Tipo Movimiento:", tipoMovimiento.value);
    console.log("Valor:", valor.value);
    console.log("Concepto:", concepto.value);
    console.log("Fecha:", fecha.value);
    console.log("Descripción:", descripcion.value);



    Swal.fire({
        icon:"success",
        title:"Datos correctos",
        text:"Registro financiero guardado correctamente"
    });

}



    

}