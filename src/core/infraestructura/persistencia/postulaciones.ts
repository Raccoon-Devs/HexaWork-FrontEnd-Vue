const almacenamiento = window.localStorage

const postulaciones = [
    {
        idPostulacion: 1,
        fechaPostulacion: "2020-07-07",
        empleado: "a",
        ofertaDeTrabajo: "oferta",
        estadoPostulacion: 0
    },
    {
        idPostulacion: 2,
        fechaPostulacion: "2020-07-07",
        empleado: "a",
        ofertaDeTrabajo: "oferta",
        estadoPostulacion: 0
    },
]

almacenamiento.setItem("postulaciones", JSON.stringify(postulaciones))

export function obtenerPostulaciones(){
    return almacenamiento.getItem("postulaciones")
}