import { ValueObject } from "../ClasesBase/ValueObject"
import { ExcepcionCalendarioInvalido } from "./excepciones/ExcepcionCalendarioInvalido"

export interface CalendarioPropiedades {
    horaInicio: string
    horaFin: string
}

export class Calendario extends ValueObject<CalendarioPropiedades> {

    private constructor (propiedades: CalendarioPropiedades) {
        super(propiedades)
    }

    obtenerHoraInicio(): string {
        return this.propiedades.horaInicio
    }

    obtenerHoraFin(): string {
        return this.propiedades.horaFin
    }

    obtenerCalendario(): CalendarioPropiedades{
        return this.propiedades
    }

    public static crear(calendario: CalendarioPropiedades): Calendario {
        const horaInicio = calendario.horaInicio.split(" ")[1]
        const horaFin = calendario.horaFin.split(" ")[1]
        const horas = [Number(horaInicio.split(":")[0]), Number(horaFin.split(":")[0])]
        const minutos = [Number(horaInicio.split(":")[1]), Number(horaFin.split(":")[1])]
        const segundos = [Number(horaInicio.split(":")[2]), Number(horaFin.split(":")[2])]
      
        if(
            horas[0] > horas[1]
            ||(horas[0] == horas[1] && minutos[0] > minutos[1])
            || (horas[0] == horas[1] && minutos[0] == minutos[1] && segundos[0] > segundos[1])
        ){
            throw new ExcepcionCalendarioInvalido<typeof calendario.horaFin>(`La hora final: ${horaFin} es inválida, no puede ser antes a la hora inicial: ${horaInicio}`, calendario.horaFin)
        }
        return new Calendario(calendario)
    }
}