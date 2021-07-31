let ofertas: any[] = [
     {
        idOfertaDeTrabajo: "1",
        tituloTrabajo: "Título crear oferta",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "codigoPos"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 3.44,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
]

export function actualizarOferta(oferta: any): any {
  
    ofertas.map(o => {
        if (oferta._idOfertaTrabajo == o.idOfertaTrabajo) {
            o.estadoOfertaDeTrabajo = 1
        }
    })
    return {statusCode: 201, mensaje: "Oferta Actualizada Con éxito"}
}

export function crearOferta(oferta: any): any{

    oferta = {
        ...oferta,
        idOfertaDeTrabajo : (ofertas.length+1).toString()
    }
    ofertas.push(oferta)
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function obtenerOfertas():any{
    return ofertas
}
