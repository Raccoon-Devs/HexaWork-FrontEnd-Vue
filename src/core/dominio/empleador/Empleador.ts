import { Entidad } from "../clasesBase/Entidad"
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion"
import { IDEmpleador } from "./valueObjects/IDEmpleador"
import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { LogoEmpleador } from "./valueObjects/LogoEmpleador"
import { RequerimientosEspeciales } from "./valueObjects/RequerimientosEspeciales"
import { EstadoEmpleador } from "./valueObjects/EstadoEmpleador"
import { InformacionDeContacto, InformacionDeContactoPropiedades } from "../informacionDeContacto/InformacionDeContacto"

export interface EmpleadorPropiedades {
    idEmpleador: IDEmpleador
    nombreCompania: NombreCompania,
    direccion: Direccion,
    contactos: InformacionDeContacto[],
    logo: LogoEmpleador
    habilidades: Habilidad[]
    requerimientosEspeciales: RequerimientosEspeciales
    estadoEmpleador: EstadoEmpleador
}

export class Empleador extends Entidad<EmpleadorPropiedades> {

    constructor (propiedades: EmpleadorPropiedades) {
        super(propiedades, propiedades.idEmpleador)
    }

    obtenerId(): string | number {
        return this.propiedades.idEmpleador.obtenerId()
    }

    obtenerNombreCompania(): string {
        return this.propiedades.nombreCompania.obtenerNombre()
    }

    obtenerDireccion(): DireccionPropiedades {
        return this.propiedades.direccion.obtenerDireccion()
    }

    obtenerInformacionDeContacto(): InformacionDeContacto[] {

        const contactos: InformacionDeContacto[] = []
        this.propiedades.contactos.forEach(contacto => {
            contactos.push(contacto.obtenerInformacionDeContacto())
        });

        return contactos
    }

    obtenerLogo(): string {
        return this.propiedades.logo.obtenerUrlLogo()
    }

    obtenerHabilidades(): Habilidad[] {

        const habilidades: Habilidad[] = []
        this.propiedades.habilidades.forEach(habilidad => {
            habilidades.push(habilidad.obtenerHabilidad())
        });

        return habilidades
    }

    obtenerRequerimientosEspeciales(): string {
        return this.propiedades.requerimientosEspeciales.obtenerRequerimientos()
    }

    obtenerEstadoEmpleador(): number {
        return this.propiedades.estadoEmpleador.obtenerEstadoEmpleador()
    }

    obtenerEmpleador(): Empleador {
        return this
    }

    public static crear(atributos: any){

        const contactos: InformacionDeContacto[] = []
        atributos.contactos.forEach(contacto => {
            contactos.push(InformacionDeContacto.crear(contacto))
        });

        const habilidades: Habilidad[] = []
        atributos.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        return new Empleador({
            idEmpleador: IDEmpleador.crear(atributos.idEmpleador),
            nombreCompania: NombreCompania.crear(atributos.nombreCompania),
            direccion: Direccion.crear(
                atributos.direccion.calle1, 
                atributos.direccion.calle2, 
                atributos.direccion.ciudad, 
                atributos.direccion.estado, 
                atributos.direccion.codPostal
            ),
            contactos: contactos,
            logo: LogoEmpleador.crear(atributos.logo),
            habilidades: habilidades,
            requerimientosEspeciales: RequerimientosEspeciales.crear(atributos.requerimientosEspeciales),
            estadoEmpleador: EstadoEmpleador.crear(atributos.estadoEmpleador)
        })
    }

}
