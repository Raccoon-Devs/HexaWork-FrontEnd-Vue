import {Entidad} from "../ClasesBase/Entidad"
import {IDOferta} from "./IDOferta"
import {TituloOferta} from "./TituloOferta"
import {Direccion} from "./Direccion"
import {TiempoLimitePostulacion} from "./TiempoLimitePostulacion"
import {Duracion} from "./Duracion"
import {Remuneracion} from "./Remuneracion"
import {EstadoOfertaDeTrabajo} from "./EstadoOfertaDeTrabajo"
import {Vacante} from "./Vacante"
import {Cargo} from "./Cargo"
import {Descripcion} from "./Descripcion"
import {FechaPublicacion} from "./FechaPublicacion"


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
    
    public static crear(
        titulo : string,
        direccion: direccionOferta,
        fechaLimite: Date,
        duracion: number,
        remuneracion: remuneracionOferta,
        estadoOfertaDeTrabajo: string,
        vacante: number,
        cargo: string,
        descripcion: string,
        fechaPublicacion?: Date,
        id? : string){
    
        return new OfertaDeTrabajo(
            {
                id: IDOferta.create(id),
                titulo: TituloOferta.create(titulo),
                direccion: Direccion.create(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.ciudad, direccion.zip),
                fechaLimite: TiempoLimitePostulacion.create(fechaLimite),
                duracion: Duracion.create(duracion),
                remuneracion: Remuneracion.create(remuneracion.monto, remuneracion.frecuencia, remuneracion.divisa),
                estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo.create(estadoOfertaDeTrabajo),
                vacante: Vacante.create(vacante),
                cargo: Cargo.create(cargo),
                descripcion: Descripcion.create(descripcion),
                fechaPublicacion: FechaPublicacion.create(fechaPublicacion)
            }
        )
    }
}