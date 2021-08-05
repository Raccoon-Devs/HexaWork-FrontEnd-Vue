import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionInfoEmpleadorInvalida } from "../excepciones/ExcepcionInfoEmpleadorInvalida"

export interface InfoEmpleadorPropiedades {
    nombreCompleto: string,
    cargoDeTrabajo: string,
    numeroDeTelefono: string,
    correo: string
}

export class InfoEmpleador extends ValueObject<InfoEmpleadorPropiedades> {
    constructor (propiedades: InfoEmpleadorPropiedades) {
        super(propiedades)
    }
    public static crear(
        nombreCompleto: string,
        cargoDeTrabajo: string,
        numeroDeTelefono: string,
        correo: string
    ){
        if (nombreCompleto === "" || nombreCompleto === null || nombreCompleto === undefined ) {
            throw new ExcepcionInfoEmpleadorInvalida<typeof nombreCompleto>(
                `El valor nombreCompleto: ${nombreCompleto} es invalido, no pueden estar vacio`,
                nombreCompleto
            )
        }
        if (cargoDeTrabajo === "" || cargoDeTrabajo === null || cargoDeTrabajo === undefined) {
            throw new ExcepcionInfoEmpleadorInvalida<typeof cargoDeTrabajo>(
                `El valor cargoDeTrabajo: ${cargoDeTrabajo} es invalido, no pueden estar vacio`,
                cargoDeTrabajo
            )
        }
        if (numeroDeTelefono === "" || numeroDeTelefono === null || numeroDeTelefono === undefined) {
            throw new ExcepcionInfoEmpleadorInvalida<typeof numeroDeTelefono>(
                `El valor numeroDeTelefono: ${numeroDeTelefono} es invalido, no pueden estar vacio`,
                numeroDeTelefono
            )
        }
        if (correo === "" || correo === null || correo === undefined) {
            throw new ExcepcionInfoEmpleadorInvalida<typeof correo>(
                `El valor correo: ${correo} es invalido, no pueden estar vacio`,
                correo
            )
        }

        return new InfoEmpleador({
            nombreCompleto,
            cargoDeTrabajo,
            numeroDeTelefono,
            correo
        })
    }
}
