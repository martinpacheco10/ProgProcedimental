// Variables de los campos del formulario

let codigoProducto = document.getElementById("codigoProducto");
let nombreProducto = document.getElementById("nombreProducto");
let cantidadProducto = document.getElementById("cantidadProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let marcaProducto = document.getElementById("marcaProducto");
let valorUnitario = document.getElementById("valorUnitario");
let categoriaProducto = document.getElementById("categoriaProducto");
let ubicacionProducto = document.getElementById("ubicacionProducto");


// Función para validar los datos

function ValidarDatos(){


    // Validar código del producto

    if(codigoProducto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el código del producto"
        });

        return;
    }


    // Validar nombre

    if(nombreProducto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el nombre del producto"
        });

        return;
    }


    // Validar cantidad

    if(cantidadProducto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la cantidad del producto"
        });

        return;
    }


    // Validar descripción

    if(descripcionProducto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la descripción del producto"
        });

        return;
    }


    // Validar marca

    if(marcaProducto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la marca del producto"
        });

        return;
    }


    // Validar valor

    if(valorUnitario.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese el valor unitario"
        });

        return;
    }


    // Validar categoría

    if(categoriaProducto.value == "Seleccione categoría"){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Seleccione una categoría"
        });

        return;
    }


    // Validar ubicación

    if(ubicacionProducto.value == ""){

        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Ingrese la ubicación del producto"
        });

        return;
    }

    // Código del producto: solo números

if(!/^[0-9]+$/.test(codigoProducto.value)){

    Swal.fire({
        icon:"error",
        title:"Código incorrecto",
        text:"El código del producto solo debe contener números"
    });

    return;
}


// Nombre del producto: no permite números

if(/[0-9]/.test(nombreProducto.value)){

    Swal.fire({
        icon:"error",
        title:"Nombre incorrecto",
        text:"El nombre del producto no debe contener números"
    });

    return;
}


// Cantidad: solo números

if(!/^[0-9]+$/.test(cantidadProducto.value)){

    Swal.fire({
        icon:"error",
        title:"Cantidad incorrecta",
        text:"La cantidad solo debe contener números"
    });

    return;
}


// Marca: no permite números

if(/[0-9]/.test(marcaProducto.value)){

    Swal.fire({
        icon:"error",
        title:"Marca incorrecta",
        text:"La marca no debe contener números"
    });

    return;
}


// Valor unitario: solo números

if(!/^[0-9]+$/.test(valorUnitario.value)){

    Swal.fire({
        icon:"error",
        title:"Valor incorrecto",
        text:"El valor unitario solo debe contener números"
    });

    return;
}


// Categoría: no permite números

if(/[0-9]/.test(categoriaProducto.value)){

    Swal.fire({
        icon:"error",
        title:"Categoría incorrecta",
        text:"La categoría no debe contener números"
    });

    return;
}



    // Si todo está correcto

    console.log("Código:", codigoProducto.value);
    console.log("Nombre:", nombreProducto.value);
    console.log("Cantidad:", cantidadProducto.value);
    console.log("Descripción:", descripcionProducto.value);
    console.log("Marca:", marcaProducto.value);
    console.log("Valor Unitario:", valorUnitario.value);
    console.log("Categoría:", categoriaProducto.value);
    console.log("Ubicación:", ubicacionProducto.value);



    Swal.fire({
        icon: "success",
        title: "Datos correctos",
        text: "Producto registrado correctamente"
    });

}