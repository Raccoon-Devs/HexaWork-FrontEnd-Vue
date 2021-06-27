import { Entidad } from "../ClasesBase/Entidad"
import { Cedula } from "./valueObjects/Cedula"
import { Direccion } from "./valueObjects/Direccion"
import { NombreCompleto } from "./valueObjects/NombreCompleto"
import { NumeroDeTelefono } from "./valueObjects/NumeroDeTelefono"


interface EmpeladoPropiedades {
    cedula: Cedula,
    nombreEmpleado: NombreCompleto,
    nroTlf: NumeroDeTelefono,
    direccion: Direccion
}

type cedulaEmpleado = {
    prefijo: string,
    numero: number
}

type nombreEmpleado = {
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string
}

type telefonoEmpleado = {
    codigo: number,
    numero: number
}

type direccionEmpleado = {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    zip: string
}

export class Empleado extends Entidad<EmpeladoPropiedades> {
    
    private constructor (propiedades: EmpeladoPropiedades) {
        super(propiedades)
    }

    obtenerCedula(): Cedula{
        return this.propiedades.cedula
    }
    
    ObtenerNombreEmpleado(): NombreCompleto{
        return this.propiedades.nombreEmpleado
    }

    obtenerNroTlf(): NumeroDeTelefono{
        return this.propiedades.nroTlf
    }

    obtenerDireccion(): Direccion{
        return this.propiedades.direccion
    }

    public static crear(
        cedula: cedulaEmpleado, 
        nombreEmpleado: nombreEmpleado, 
        nroTlf: telefonoEmpleado, 
        direccion: direccionEmpleado
    ): Empleado{
        return new Empleado(
            {
                cedula: Cedula.crear(cedula.prefijo, cedula.numero),
                nombreEmpleado: NombreCompleto.crear(nombreEmpleado.primerNombre, nombreEmpleado.segundoNombre, nombreEmpleado.primerApellido),
                nroTlf: NumeroDeTelefono.crear(nroTlf.codigo, nroTlf.numero),
                direccion: Direccion.crear(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.ciudad, direccion.zip)
            }
        )
    }
}