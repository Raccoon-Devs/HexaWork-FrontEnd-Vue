import { Entidad } from "../ClasesBase/Entidad"
import { Direccion } from "../valueObjectsComunes/Direccion"
import { IDEmpleador } from "./ValueObjects/IDEmpleador"
import { Habilidad } from "../Habilidad/Habilidad"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { LogoEmpleador } from "./ValueObjects/LogoEmpleador"
import { RequerimientosEspeciales } from "./ValueObjects/RequerimientosEspeciales"
import { EstadoEmpleador } from "./ValueObjects/EstadoEmpleador"
import { InformacionDeContacto } from "../InformacionDeContacto/InformacionDeContacto"

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

    obtenerDireccion(): Direccion {
        return this.propiedades.direccion
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

    public static crear(propiedades: any){

        const contactos: InformacionDeContacto[] = []
        propiedades.contactos.forEach(contacto => {
            contactos.push(InformacionDeContacto.crear(contacto))
        });

        const habilidades: Habilidad[] = []
        propiedades.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        return new Empleador({
            idEmpleador: IDEmpleador.crear(propiedades.idEmpleador),
            nombreCompania: NombreCompania.crear(propiedades.nombreCompania),
            direccion: Direccion.crear(
                propiedades.direccion.calle1, 
                propiedades.direccion.calle2, 
                propiedades.direccion.ciudad, 
                propiedades.direccion.ciudad, 
                propiedades.direccion.codPostal
            ),
            contactos: contactos,
            logo: LogoEmpleador.crear(propiedades.logo),
            habilidades: habilidades,
            requerimientosEspeciales: RequerimientosEspeciales.crear(propiedades.requerimientosEspeciales),
            estadoEmpleador: EstadoEmpleador.crear(propiedades.estadoEmpleador)
        })
    }

}
