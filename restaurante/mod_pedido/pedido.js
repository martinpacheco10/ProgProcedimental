// Variables de los campos del formulario

let producto = document.getElementById("producto");
let direccion = document.getElementById("direccion");
let nombreUsuario = document.getElementById("nombreUsuario");
let cantidad = document.getElementById("cantidad");
let metodoPago = document.getElementById("metodoPago");
let valorCancelar = document.getElementById("valorCancelar");
let telefono = document.getElementById("telefono");


// Función para validar datos

function ValidarDatos(){


    // Validar producto

    if(producto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el producto"
        });

        return;
    }


    // Validar dirección

    if(direccion.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la dirección"
        });

        return;
    }


    // Validar nombre usuario

    if(nombreUsuario.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el nombre del usuario"
        });

        return;
    }


    // Validar cantidad

    if(cantidad.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la cantidad"
        });

        return;
    }


    // Validar método de pago

    if(metodoPago.value == "Seleccione método"){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione el método de pago"
        });

        return;
    }


    // Validar valor a cancelar

    if(valorCancelar.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el valor a cancelar"
        });

        return;
    }


    // Validar teléfono

    if(telefono.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el teléfono"
        });

        return;
    }

    // Producto: no debe permitir números en el nombre

if(/[0-9]/.test(producto.value)){

    Swal.fire({
        icon:"error",
        title:"Producto incorrecto",
        text:"El nombre del producto no debe contener números"
    });

    return;
}


// Nombre del usuario: no debe permitir números

if(/[0-9]/.test(nombreUsuario.value)){

    Swal.fire({
        icon:"error",
        title:"Nombre incorrecto",
        text:"El nombre del usuario no debe contener números"
    });

    return;
}


// Cantidad: solo números

if(!/^[0-9]+$/.test(cantidad.value)){

    Swal.fire({
        icon:"error",
        title:"Cantidad incorrecta",
        text:"La cantidad solo debe contener números"
    });

    return;
}


// Valor a cancelar: solo números

if(!/^[0-9]+$/.test(valorCancelar.value)){

    Swal.fire({
        icon:"error",
        title:"Valor incorrecto",
        text:"El valor a cancelar solo debe contener números"
    });

    return;
}


// Teléfono: solo números

if(!/^[0-9]+$/.test(telefono.value)){

    Swal.fire({
        icon:"error",
        title:"Teléfono incorrecto",
        text:"El teléfono no debe contener letras"
    });

    return;
}



    // Mostrar datos en consola

    console.log("Producto:", producto.value);
    console.log("Dirección:", direccion.value);
    console.log("Nombre Usuario:", nombreUsuario.value);
    console.log("Cantidad:", cantidad.value);
    console.log("Método de Pago:", metodoPago.value);
    console.log("Valor a Cancelar:", valorCancelar.value);
    console.log("Teléfono:", telefono.value);



    Swal.fire({
        icon: "success",
        title: "Datos correctos",
        text: "Pedido registrado correctamente"
    });

}