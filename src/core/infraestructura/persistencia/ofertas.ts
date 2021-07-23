const almacenamiento = window.localStorage

export function crearOferta(dato: any): any{

    let variableLocal = JSON.parse(almacenamiento.getItem("oferta")!)
    if (variableLocal == null){
        almacenamiento.setItem("idOferta", "2")
        variableLocal = []
        dato = {
            ...dato,
            id : "1"
        }
    }
    else{
        dato = {
            ...dato,
            id : almacenamiento.getItem("idOferta")!
        }
        almacenamiento.setItem("idOferta", (+(dato.id)+1).toString())

    }
    variableLocal.push(dato)
    console.log("VARIABLE LOCAL", variableLocal)
    almacenamiento.setItem(
        "oferta",
        JSON.stringify(variableLocal)
    )
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function actualizarOferta(dato: any): any {
    const ofertasFromStorage = JSON.parse(almacenamiento.getItem('oferta')!);
    for (const oferta of ofertasFromStorage) {

        if (oferta.id.valor == dato.obtenerId()) {
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
