const almacenamiento = window.localStorage

export function crearOferta(dato: any): any{

    let variableLocal = JSON.parse(almacenamiento.getItem("oferta")!)
    if (variableLocal == null){
        almacenamiento.setItem("idOferta", "2")
        variableLocal = []
        dato = {
            ...dato,
            idOfertaDeTrabajo: "1"
        }
    }
    else{
        dato = {
            ...dato,
            idOfertaDeTrabajo: almacenamiento.getItem("idOferta")!
        }
        almacenamiento.setItem("idOferta", (+(dato.id)+1).toString())

    }
    variableLocal.push(dato)
    almacenamiento.setItem(
        "oferta",
        JSON.stringify(variableLocal)
    )
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function actualizarOferta(dato: any): any {
    const ofertasFromStorage = JSON.parse(almacenamiento.getItem('oferta')!);
    for (const oferta of ofertasFromStorage) {
        if (oferta.idOfertaDeTrabajo == dato.idOfertaDeTrabajo) {
            oferta.estadoOfertaDeTrabajo = dato.estadoOfertaDeTrabajo
        }
    }

    localStorage.setItem('oferta', JSON.stringify(ofertasFromStorage));
    return {statusCode: 201, mensaje: "Oferta Actualizada Con éxito"}
}

export function obtenerOfertas(){
    return almacenamiento.getItem("oferta")
}
