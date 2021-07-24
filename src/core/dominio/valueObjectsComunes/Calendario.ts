import { ValueObject } from "../ClasesBase/ValueObject"

interface CalendarioPropiedades {
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

    obtenerCalendario(): any{
        return this.propiedades
    }

    obtenerHoraFin(): string {
        return this.propiedades.horaFin
    }

    public static crear(calendario: CalendarioPropiedades): Calendario {
        return new Calendario(calendario)
    }
}