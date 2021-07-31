const almacenamiento = window.localStorage

const relacionesDeTrabajo = [
    {
        idRelacion: "1",
        postulacion: {
            fechaPostulacion: "2020-07-07 05:05:55",
            empleado: {
                ssn: "1"
            },
            ofertaDeTrabajo: {
                idOfertaDeTrabajo: "1",
            }
        },
        calendario: [
            {
                horaInicio: "2020-08-08 05:05:55",
                horaFin: "2020-08-08 06:05:55"
            },
        ],
        estadoRelacionDeTrabajo: 0
    },
]

almacenamiento.setItem("relacionesDeTrabajo", JSON.stringify(relacionesDeTrabajo))

export function obtenerRelacionesDeTrabajo(){
    return almacenamiento.getItem("relacionesDeTrabajo")
}