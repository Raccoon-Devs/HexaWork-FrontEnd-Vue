import {Entidad} from "../ClasesBase/Entidad"
import {IDOferta} from "./ValueObjects/IDOferta"
import {TituloOferta} from "./ValueObjects/TituloOferta"
import {Direccion} from "../OfertasDeTrabajo/ValueObjects/Direccion"
import {TiempoLimitePostulacion, TiempoLimitePostulacionPropiedades} from "./ValueObjects/TiempoLimitePostulacion"
import {Duracion} from "./ValueObjects/Duracion"
import {Remuneracion, RemuneracionPropiedades} from "./ValueObjects/Remuneracion"
import {EstadoOfertaDeTrabajo} from "./ValueObjects/EstadoOfertaDeTrabajo"
import {Vacante} from "./ValueObjects/Vacante"
import {Cargo} from "./ValueObjects/Cargo"
import {Descripcion} from "./ValueObjects/Descripcion"
import {FechaPublicacion} from "./ValueObjects/FechaPublicacion"
import { Empleador, EmpleadorPropiedades } from "../Empleador/Empleador"
import { EmpleadorParaDominio } from "../Empleador/DTOEmpleador"
import { DireccionPropiedades } from "../Empleador/valueObjects/Direccion"


export interface OfertaDeTrabajoPropiedades {
    id: IDOferta
    titulo: TituloOferta
    empleador: Empleador
    direccion: Direccion
    fechaLimite: TiempoLimitePostulacion
    duracion: Duracion
    remuneracion: Remuneracion
    estadoOfertaDeTrabajo:  EstadoOfertaDeTrabajo
    vacante: Vacante
    cargo: Cargo
    descripcion: Descripcion
    fechaPublicacion: FechaPublicacion | null
}

type direccionOferta = {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    zip: string
}

type remuneracionOferta = {
    monto: number,
    frecuencia: string,
    divisa: string
}


export class OfertaDeTrabajo extends Entidad<OfertaDeTrabajoPropiedades> {

    private constructor (propiedades: OfertaDeTrabajoPropiedades) {
        super(propiedades, propiedades.id)
    }

    obtenerTitulo(): string{
        return this.propiedades.titulo.obtenerTitulo()
    }

    obtenerDireccion(): DireccionPropiedades{
        return this.propiedades.direccion.obtenerDireccion()
    }

    obtenerFechaLimite(): Date{
        return this.propiedades.fechaLimite.obtenerFechaLimite()
    }

    obtenerRemuneracion(): RemuneracionPropiedades{
        return this.propiedades.remuneracion.obtenerRemuneracion()
    }

    obtenerEstadoOfertaDeTrabajo(): number{
        return this.propiedades.estadoOfertaDeTrabajo.obtenerEstado()
    }

    obtenerVacante(): number{
        return this.propiedades.vacante.obtenerVacante()
    }

    obtenerCargo(): Cargo{
        return this.propiedades.cargo
    }

    obtenerDescripcion(): Descripcion{
        return this.propiedades.descripcion
    }

    obtenerFechaPublicacion(): FechaPublicacion | null{
        return this.propiedades.fechaPublicacion
    }

    obtenerId(): IDOferta{
        return this.propiedades.id
    }

    obtenerDuracion(): number{
        return this.propiedades.duracion.obtenerDuracion()
    }

    obtenerEmpleador(): Empleador{
        return this.propiedades.empleador
    }

    public static update(
        ofertaDeTrabajo: any,
        
    ): OfertaDeTrabajo {

        return new OfertaDeTrabajo(
            <unknown>{...ofertaDeTrabajo} as OfertaDeTrabajoPropiedades
        )
    }

    public static crear(
        // atributos: {
        //     titulo : string,
        //     direccion: direccionOferta,
        //     fechaLimite: Date,
        //     duracion: number,
        //     remuneracion: remuneracionOferta,
        //     estadoOfertaDeTrabajo: number,
        //     vacante: number,
        //     cargo: Cargo,
        //     descripcion: Descripcion,
        //     fechaPublicacion?: Date,
        //     id? : string,
        //     empleador: any
        // }
        atributos:any
    ): OfertaDeTrabajo

        {
        return new OfertaDeTrabajo(
            {
                id: IDOferta.crear(atributos.id),
                titulo: TituloOferta.crear(atributos.titulo),
                empleador: Empleador.crear(atributos.empleador.nombreEmpresa, atributos.empleador.direccion.propiedades, atributos.empleador.infoEmpleador.propiedades, atributos.empleador.rol.propiedades.nombre, atributos.empleador.id),
                direccion: Direccion.crear(atributos.direccion.calle1, atributos.direccion.calle2, atributos.direccion.ciudad, atributos.direccion.estado, atributos.direccion.zip),
                fechaLimite: TiempoLimitePostulacion.crear(atributos.fechaLimite),
                duracion: Duracion.crear(atributos.duracion),
                remuneracion: Remuneracion.crear(atributos.remuneracion.monto, atributos.remuneracion.frecuencia, atributos.remuneracion.divisa),
                estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo.crear(atributos.estadoOfertaDeTrabajo),
                vacante: Vacante.crear(atributos.vacante),
                cargo: Cargo.crear(atributos.cargo.propiedades.cargo),
                descripcion: Descripcion.crear(atributos.descripcion.propiedades.descripcion),
                fechaPublicacion: atributos.fechaPublicacion? FechaPublicacion.crear(atributos.fechaPublicacion) : null
            }
        )
    }
}
