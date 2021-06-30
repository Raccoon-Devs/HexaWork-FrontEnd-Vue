


const almacenamiento = window.localStorage
// almacenamiento.setItem(
//     "oferta",
//     JSON.stringify(oferta)
// )

export function crearOferta(dato: any): void{
    
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
     //almacenamiento.removeItem("oferta")
}

export function obtenerOfertas(){
    return almacenamiento.getItem("oferta")
}



