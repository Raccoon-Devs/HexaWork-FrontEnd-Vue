import { EmpleadorParaDominio } from "../Empleador/DTOEmpleador";
import { Empleador, EmpleadorPropiedades } from "../Empleador/Empleador";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { Duracion, DuracionPropiedades } from "../OfertasDeTrabajo/ValueObjects/Duracion";
import { EstadoOfertaDeTrabajo, EstadoOfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/ValueObjects/EstadoOfertaDeTrabajo";
import { FechaPublicacion } from "../OfertasDeTrabajo/ValueObjects/FechaPublicacion";
import { Remuneracion, RemuneracionPropiedades } from "../OfertasDeTrabajo/ValueObjects/Remuneracion";
import { TiempoLimitePostulacion } from "../OfertasDeTrabajo/ValueObjects/TiempoLimitePostulacion";
import { Vacante, VacantePropiedades } from "../OfertasDeTrabajo/ValueObjects/Vacante";
import { Calendario } from "../valueObjectsComunes/Calendario";
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo, TituloTrabajoPropiedades } from "../valueObjectsComunes/TituloTrabajo";
import { IDOferta } from "./ValueObjects/IDOferta";
import { RequerimientosEspecialesOfertaDeTrabajo, RequerimientosEspecialesPropiedades } from "./ValueObjects/RequerimientosEspecialesOfertaDeTrabajo";

type OfertaParaDominioMap<Type> = {
    [Property in keyof Type]: 
    Type[Property] extends Direccion? any 
    : Type[Property] extends Remuneracion? number 
    : Type[Property] extends FechaPublicacion? Date: Type[Property] extends TiempoLimitePostulacion? Date
    : Type[Property] extends Duracion? number
    : Type[Property] extends Vacante? number
    //: Type[Property] extends Empleador? EmpleadorParaDominio
    : Type[Property] extends EstadoOfertaDeTrabajo? number
    : Type[Property] extends RequerimientosEspecialesOfertaDeTrabajo? string
    : Type[Property] extends TituloTrabajo? string
    : Type[Property] extends string[]? string[]
    : Type[Property] extends Calendario[]? {horaInicio: string, horaFin: string}[]
    : string;
}

export type OfertaParaDominio= OfertaParaDominioMap<OfertaDeTrabajoPropiedades>