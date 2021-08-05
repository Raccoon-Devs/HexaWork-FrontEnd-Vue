import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionPuntuacionInvalida } from "../excepciones/ExcepcionPuntuacionInvalida"

export interface PuntuacionEvaluacionPropiedades {
    puntuacion1: number,
    puntuacion2: number,
    puntuacion3: number,
    puntuacion4: number,
    puntuacion5: number
}

export class PuntuacionEvaluacionDeTrabajo extends ValueObject<PuntuacionEvaluacionPropiedades> {

    private constructor (propiedades: PuntuacionEvaluacionPropiedades) {
        super(propiedades)
    }

    obtenerPuntuacion1(): number {
        return this.propiedades.puntuacion1
    }

    obtenerPuntuacion2(): number {
        return this.propiedades.puntuacion2
    }

    obtenerPuntuacion3(): number {
        return this.propiedades.puntuacion3
    }

    obtenerPuntuacion4(): number {
        return this.propiedades.puntuacion4
    }

    obtenerPuntuacion5(): number {
        return this.propiedades.puntuacion5
    }

    obtenerPreguntasEvaluacionDeTrabajo(): PuntuacionEvaluacionPropiedades {
        return this.propiedades
    }

    public static crear(
        puntuacion1: number,
        puntuacion2: number,
        puntuacion3: number,
        puntuacion4: number,
        puntuacion5: number
    ): PuntuacionEvaluacionDeTrabajo {

        if(puntuacion1 === null || puntuacion1 === undefined){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion1 >(`La puntuación 1: ${puntuacion1} no puede estar vacia`, puntuacion1)
        }

        if(puntuacion1 < 1 || puntuacion1 > 5){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion1 >(`La puntuación 1: ${puntuacion1} debe ser un valor entre 1 y 5`, puntuacion1)
        }

        if(puntuacion2 === null || puntuacion2 === undefined){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion2 >(`La puntuación 2: ${puntuacion2} no puede estar vacia`, puntuacion2)
        }

        if(puntuacion2 < 1 || puntuacion2 > 5){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion2 >(`La puntuación 2: ${puntuacion2} debe ser un valor entre 1 y 5`, puntuacion2)
        }

        if(puntuacion3 === null || puntuacion3 === undefined){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion3 >(`La puntuación 3: ${puntuacion3} no puede estar vacia`, puntuacion3)
        }

        if(puntuacion3 < 1 || puntuacion3 > 5){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion3 >(`La puntuación 3: ${puntuacion3} debe ser un valor entre 1 y 5`, puntuacion3)
        }

        if(puntuacion4 === null || puntuacion4 === undefined){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion4 >(`La puntuación 4: ${puntuacion4} no puede estar vacia`, puntuacion4)
        }

        if(puntuacion4 < 1 || puntuacion4 > 5){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion4 >(`La puntuación 4: ${puntuacion4} debe ser un valor entre 1 y 5`, puntuacion4)
        }

        if(puntuacion5 === null || puntuacion5 === undefined){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion5 >(`La puntuación 5: ${puntuacion5} no puede estar vacia`, puntuacion5)
        }

        if(puntuacion5 < 1 || puntuacion5 > 5){
            throw new ExcepcionPuntuacionInvalida<typeof puntuacion5 >(`La puntuación 5: ${puntuacion5} debe ser un valor entre 1 y 5`, puntuacion5)
        }

        return new PuntuacionEvaluacionDeTrabajo({
            puntuacion1,
            puntuacion2,
            puntuacion3,
            puntuacion4,
            puntuacion5
        })
    }
}
