


const almacenamiento = window.localStorage
// almacenamiento.setItem(
//     "oferta",
//     JSON.stringify(oferta)
// )

export function crearOferta(dato: any): any{
    let variableLocal = JSON.parse(almacenamiento.getItem("oferta")!)
    if (variableLocal == null){
        almacenamiento.setItem("idOferta", "2")
        variableLocal = []
        dato.id.valor = "1"
    }
    else{
        dato.id.valor = almacenamiento.getItem("idOferta")!
        almacenamiento.setItem("idOferta", (+(dato.id.valor)+1).toString())

    }
    variableLocal.push(dato)

    almacenamiento.setItem(
        "oferta",
        JSON.stringify(variableLocal)
    )
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function actualizarOferta(dato: any): void {
    const ofertasFromStorage = JSON.parse(almacenamiento.getItem('oferta')!);

    for (const oferta of ofertasFromStorage) { // 1, "string", false
        if (oferta.cargo.propiedades.cargo == dato.propiedades.cargo.propiedades.cargo) {
            oferta.estadoOfertaDeTrabajo = dato.propiedades.estadoOfertaDeTrabajo
            oferta.fechaPublicacion = dato.propiedades.fechaPublicacion
        }
    }

    localStorage.setItem('oferta', JSON.stringify(ofertasFromStorage));
    return {statusCode: 201, mensaje: "Oferta Actualizada Con éxito"}
}

export function obtenerOfertas(){
    return almacenamiento.getItem("oferta")
}
