// Variables de los campos del formulario

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let tipoDocumento = document.getElementById("tipoDocumento");
let numeroDocumento = document.getElementById("numeroDocumento");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let genero = document.getElementById("genero");
let cargo = document.getElementById("cargo");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let contrasena = document.getElementById("contrasena");


// Función para validar datos

function ValidarDatos(){


    // Validar Nombre

    if(nombre.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el nombre"
        });

        return;
    }


    // Validar Apellido

    if(apellido.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el apellido"
        });

        return;
    }


    // Validar Tipo de Documento

    if(tipoDocumento.value == "Seleccione tipo"){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione el tipo de documento"
        });

        return;
    }


    // Validar Número de Documento

    if(numeroDocumento.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el número de documento"
        });

        return;
    }


    // Validar Teléfono

    if(telefono.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el teléfono"
        });

        return;
    }


    // Validar Correo

    if(correo.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el correo electrónico"
        });

        return;
    }


    // Validar Género

    if(genero.value == "Seleccione género"){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione el género"
        });

        return;
    }


    // Validar Cargo

    if(cargo.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el cargo"
        });

        return;
    }


    // Validar Fecha

    if(fechaNacimiento.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione la fecha de nacimiento"
        });

        return;
    }


    // Validar Contraseña

    if(contrasena.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la contraseña"
        });

        return;
    }

    // Nombre: no debe contener números

if(/[0-9]/.test(nombre.value)){

    Swal.fire({
        icon:"error",
        title:"Nombre incorrecto",
        text:"El nombre no debe contener números"
    });

    return;
}


// Apellido: no debe contener números

if(/[0-9]/.test(apellido.value)){

    Swal.fire({
        icon:"error",
        title:"Apellido incorrecto",
        text:"El apellido no debe contener números"
    });

    return;
}


// Número de documento: solo números

if(!/^[0-9]+$/.test(numeroDocumento.value)){

    Swal.fire({
        icon:"error",
        title:"Documento incorrecto",
        text:"El número de documento no debe contener letras"
    });

    return;
}


// Teléfono: solo números y 10 caracteres

if(!/^[0-9]+$/.test(telefono.value)){

    Swal.fire({
        icon:"error",
        title:"Teléfono incorrecto",
        text:"El teléfono no debe contener letras"
    });

    return;
}


if(telefono.value.length != 10){

    Swal.fire({
        icon:"error",
        title:"Teléfono incorrecto",
        text:"El teléfono debe tener 10 caracteres"
    });

    return;
}


// Correo: debe contener @

if(!correo.value.includes("@")){

    Swal.fire({
        icon:"error",
        title:"Correo incorrecto",
        text:"El correo debe contener @"
    });

    return;
}


// Contraseña: mínimo 8 caracteres

if(contrasena.value.length < 8){

    Swal.fire({
        icon:"error",
        title:"Contraseña incorrecta",
        text:"La contraseña debe tener mínimo 8 caracteres"
    });

    return;
}



    // Mostrar datos en consola

    console.log("Nombre:", nombre.value);
    console.log("Apellido:", apellido.value);
    console.log("Tipo Documento:", tipoDocumento.value);
    console.log("Número Documento:", numeroDocumento.value);
    console.log("Teléfono:", telefono.value);
    console.log("Correo:", correo.value);
    console.log("Género:", genero.value);
    console.log("Cargo:", cargo.value);
    console.log("Fecha Nacimiento:", fechaNacimiento.value);
    console.log("Contraseña:", contrasena.value);



    Swal.fire({
        icon: "success",
        title: "Datos correctos",
        text: "Usuario registrado correctamente"
    });

}