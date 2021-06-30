const almacenamiento = window.localStorage
// almacenamiento.setItem(
//     "oferta",
//     JSON.stringify(oferta)
// )

export function crearOferta(dato: any): void{
    
    let variableLocal = JSON.parse(almacenamiento.getItem("oferta")!)
    if (variableLocal == null){
        dato.id = {valor: "1"}
        variableLocal = [dato]
    }
    else{
        let aux: number = parseInt(variableLocal[variableLocal.length - 1].id.valor)
        aux+=1
        dato.id = {valor: aux.toString()}
        variableLocal.push(dato)
    }
    

    almacenamiento.setItem(
        "oferta",
        JSON.stringify(variableLocal)
    )
     //almacenamiento.removeItem("oferta")
}

export function publicarOferta(dato: any): void{
    
    let hoy: any = new Date()   
    const dia: any = String(hoy.getDate()).padStart(2,'0')
    const mes: any = String(hoy.getMonth() + 1).padStart(2,'0')
    const año: any = hoy.getFullYear()

    hoy = [año, mes, dia].join('-')

    const variableLocal: any = JSON.parse(almacenamiento.getItem("oferta")!)

    const oferta = variableLocal.find((o: any) => o.id.valor == dato.id.valor.valor)

    oferta.fechaPublicacion = {propiedades: {fechaPublicacion: hoy}}
    oferta.estadoOfertaDeTrabajo = 1
    
    almacenamiento.setItem(
        "oferta",
        JSON.stringify(variableLocal)
    )

}

export function obtenerOfertas(){
    return almacenamiento.getItem("oferta")
}



