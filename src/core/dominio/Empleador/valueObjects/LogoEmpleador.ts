import { ValueObject } from "../../clasesBase/ValueObject"

interface LogoEmpleadorPropiedades {
    urlLogo: string
}

export class LogoEmpleador extends ValueObject<LogoEmpleadorPropiedades> {

    private constructor (propiedades: LogoEmpleadorPropiedades) {
        super(propiedades)
    }

    obtenerUrlLogo(): string {
        return this.propiedades.urlLogo
    }

    public static crear(urlLogo: string): LogoEmpleador {
        return new LogoEmpleador({urlLogo})
    }
}
