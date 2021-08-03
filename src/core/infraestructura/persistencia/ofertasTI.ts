let ofertas: any[] = [
    {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "Título crear oferta",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "codigoPos"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020-07-05",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: [
            {
                idHabilidad: "1",
                categoria: 1,
                nombre: "HabilidadesBlandas"
            }
        ],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: [
            {
                idCertificacion: "3",
                nombre: "Certificacion 3",
                fechaCompletacionCertificacion: "2021-03-03",
                curso: {
                    idCurso: "3",
                    codigo: "Curso 3",
                    titulo: "Titulo curso 3",
                    imagenPortada: "Imagen",
                    estadoCurso: 0,
                    habilidades: [{
                        idHabilidad: '1',
                        nombre: 'Habilidades blandas',
                        categoria: 0
                    }],
                }
            }
        ],
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
        idOfertaTrabajo : (ofertas.length+1).toString()
    }
    // oferta.id.valor = (ofertas.length+1).toString()
    ofertas.push(oferta)
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function obtenerOfertas():any{
    return ofertas
}

export function obtenerOfertasMock():any{
    return ofertas
}
