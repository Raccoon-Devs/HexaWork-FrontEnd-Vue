


const almacenamiento = window.localStorage
// almacenamiento.setItem(
//     "oferta",
//     JSON.stringify(oferta)
// )

export function crearOferta(dato: any): any{
    
    let variableLocal = JSON.parse(almacenamiento.getItem("oferta")!)
    if (variableLocal == null){
        variableLocal = [dato]
    }
    else{
        variableLocal.push(dato)
    }
    

    almacenamiento.setItem(
        "oferta",
        JSON.stringify(variableLocal)
    )
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function obtenerOfertas(){
    return almacenamiento.getItem("oferta")
}



