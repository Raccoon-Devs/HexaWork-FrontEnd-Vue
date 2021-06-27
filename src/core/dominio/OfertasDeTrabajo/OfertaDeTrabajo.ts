import {Entidad} from "../ClasesBase/Entidad"
import {IDOferta} from "./ValueObjects/IDOferta"
import {TituloOferta} from "./ValueObjects/TituloOferta"
import {Direccion} from "../ValueObjectsComunes/Direccion"
import {TiempoLimitePostulacion} from "./ValueObjects/TiempoLimitePostulacion"
import {Duracion} from "./ValueObjects/Duracion"
import {Remuneracion} from "./ValueObjects/Remuneracion"
import {EstadoOfertaDeTrabajo} from "./ValueObjects/EstadoOfertaDeTrabajo"
import {Vacante} from "./ValueObjects/Vacante"
import {Cargo} from "./ValueObjects/Cargo"
import {Descripcion} from "./ValueObjects/Descripcion"
import {FechaPublicacion} from "./ValueObjects/FechaPublicacion"


interface OfertaDeTrabajoPropiedades {
    id: IDOferta
    titulo: TituloOferta
    //empleador: Empleador
    direccion: Direccion
    fechaLimite: TiempoLimitePostulacion
    duracion: Duracion
    remuneracion: Remuneracion
    estadoOfertaDeTrabajo:  EstadoOfertaDeTrabajo
    vacante: Vacante
    cargo: Cargo
    descripcion: Descripcion
    fechaPublicacion: FechaPublicacion

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
        super(propiedades)
    }

    obtenerTitulo(): TituloOferta{
        return this.propiedades.titulo
    }
    
    ObtenerDireccion(): Direccion{
        return this.propiedades.direccion
    }

    obtenerFechaLimite(): TiempoLimitePostulacion{
        return this.propiedades.fechaLimite
    }

    obtenerRemuneracion(): Remuneracion{
        return this.propiedades.remuneracion
    }

    obtenerEstadoOfertaDeTrabajo(): EstadoOfertaDeTrabajo{
        return this.propiedades.estadoOfertaDeTrabajo
    }

    obtenerVacante(): Vacante{
        return this.propiedades.vacante
    }

    obtenerCargo(): Cargo{
        return this.propiedades.cargo
    }

    obtenerDescripcion(): Descripcion{
        return this.propiedades.descripcion
    }

    obtenerFechaPublicacion(): FechaPublicacion{
        return this.propiedades.fechaPublicacion
    }

    obtenerId(): IDOferta{
        return this.propiedades.id
    }

    public static crear(
        titulo : string,
        direccion: direccionOferta,
        fechaLimite: Date,
        duracion: number,
        remuneracion: remuneracionOferta,
        estadoOfertaDeTrabajo: number,
        vacante: number,
        cargo: string,
        descripcion: string,
        fechaPublicacion?: Date,
        id? : string): OfertaDeTrabajo
        
        {
    
        return new OfertaDeTrabajo(
            {
                id: IDOferta.crear(id),
                titulo: TituloOferta.crear(titulo),
                direccion: Direccion.crear(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.ciudad, direccion.zip),
                fechaLimite: TiempoLimitePostulacion.crear(fechaLimite),
                duracion: Duracion.crear(duracion),
                remuneracion: Remuneracion.crear(remuneracion.monto, remuneracion.frecuencia, remuneracion.divisa),
                estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo.crear(estadoOfertaDeTrabajo),
                vacante: Vacante.crear(vacante),
                cargo: Cargo.crear(cargo),
                descripcion: Descripcion.crear(descripcion),
                fechaPublicacion: FechaPublicacion.crear(fechaPublicacion)
            }
        )
    }
}