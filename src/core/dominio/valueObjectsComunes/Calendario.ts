import { ValueObject } from "../ClasesBase/ValueObject"

interface CalendarioPropiedades {
    horaInicio: Date
    horaFin: Date
}

export class Calendario extends ValueObject<CalendarioPropiedades> {

    private constructor (propiedades: CalendarioPropiedades) {
        super(propiedades)
    }

    obtenerHoraInicio(): Date {
        return this.propiedades.horaInicio
    }

    obtenerHoraFin(): Date {
        return this.propiedades.horaFin
    }

    public static crear(calendario: CalendarioPropiedades): Calendario {
        return new Calendario(calendario)
    }
}