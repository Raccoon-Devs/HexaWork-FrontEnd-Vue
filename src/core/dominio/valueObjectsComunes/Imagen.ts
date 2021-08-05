import { ValueObject } from "../clasesBase/ValueObject"

interface ImagenPropiedades {
    url: string
}

export class Imagen extends ValueObject<ImagenPropiedades> {

    private constructor (propiedades: ImagenPropiedades) {
        super(propiedades)
    }

    obtenerImagen(): string {
        return this.propiedades.url
    }

    public static crear(url: string): Imagen {
        return new Imagen({url})
    }
}
