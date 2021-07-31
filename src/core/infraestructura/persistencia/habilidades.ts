const almacenamiento = window.localStorage

const habilidades = [
    {
        id: 1,
        nombre: "Habilidad 1",
        categoria: 0
    },
    {
        id: 2,
        nombre: "Habilidad 2",
        categoria: 1
    },
]

almacenamiento.setItem("habilidades", JSON.stringify(habilidades))

export function obtenerHabilidades(){
    return almacenamiento.getItem("habilidades")
}