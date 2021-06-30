


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

export function actualizarOferta(dato: any): void {

    const ofertasFromStorage = JSON.parse(almacenamiento.getItem('oferta')!);

    for (const oferta of ofertasFromStorage) {
        console.log(oferta); // 1, "string", false
        if (oferta.cargo.propiedades.cargo == dato.propiedades.cargo.propiedades.cargo) {
            oferta.estadoOfertaDeTrabajo = dato.propiedades.estadoOfertaDeTrabajo
            oferta.fechaPublicacion = dato.propiedades.fechaPublicacion
        }
    }
    localStorage.setItem('oferta', JSON.stringify(ofertasFromStorage));
}

export function obtenerOfertas(){
    return almacenamiento.getItem("oferta")
}
