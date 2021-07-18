import { ValueObject } from "../ClasesBase/ValueObject"

interface TituloTrabajoPropiedades {
    titulo: string
}

export class TituloTrabajo extends ValueObject<TituloTrabajoPropiedades> {

    private constructor (propiedades: TituloTrabajoPropiedades) {
        super(propiedades)
    }

    obtenerTitulo(): string {
        return this.propiedades.titulo
    }

    public static crear(titulo: string): TituloTrabajo {
        return new TituloTrabajo({titulo})
    }
}
