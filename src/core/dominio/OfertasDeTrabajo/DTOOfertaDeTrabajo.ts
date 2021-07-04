import { EmpleadorParaDominio } from "../Empleador/DTOEmpleador";
import { Empleador, EmpleadorPropiedades } from "../Empleador/Empleador";
import { Direccion } from "../Empleador/valueObjects/Direccion";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { Duracion } from "../OfertasDeTrabajo/ValueObjects/Duracion";
import { EstadoOfertaDeTrabajo } from "../OfertasDeTrabajo/ValueObjects/EstadoOfertaDeTrabajo";
import { FechaPublicacion } from "../OfertasDeTrabajo/ValueObjects/FechaPublicacion";
import { Remuneracion } from "../OfertasDeTrabajo/ValueObjects/Remuneracion";
import { TiempoLimitePostulacion } from "../OfertasDeTrabajo/ValueObjects/TiempoLimitePostulacion";
import { Vacante } from "../OfertasDeTrabajo/ValueObjects/Vacante";

type OfertaParaDominioMap<Type> = {
    [Property in keyof Type]: 
    Type[Property] extends Direccion? {calle1: string, calle2: string, ciudad: string, estado: string, zip:string} 
    : Type[Property] extends Remuneracion? {monto: number, frecuencia: string, divisa: string} 
    : Type[Property] extends FechaPublicacion? Date: Type[Property] extends TiempoLimitePostulacion? Date
    : Type[Property] extends Duracion | EstadoOfertaDeTrabajo | Vacante? number
    : Type[Property] extends Empleador? EmpleadorParaDominio: string;
}

export type OfertaParaDominio= OfertaParaDominioMap<OfertaDeTrabajoPropiedades>