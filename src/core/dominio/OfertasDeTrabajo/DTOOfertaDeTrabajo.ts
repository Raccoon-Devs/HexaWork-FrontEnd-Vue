import { EmpleadorParaDominio } from "../Empleador/DTOEmpleador";
import { Empleador, EmpleadorPropiedades } from "../Empleador/Empleador";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { Duracion, DuracionPropiedades } from "../OfertasDeTrabajo/ValueObjects/Duracion";
import { EstadoOfertaDeTrabajo, EstadoOfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/ValueObjects/EstadoOfertaDeTrabajo";
import { FechaPublicacion } from "../OfertasDeTrabajo/ValueObjects/FechaPublicacion";
import { Remuneracion, RemuneracionPropiedades } from "../OfertasDeTrabajo/ValueObjects/Remuneracion";
import { TiempoLimitePostulacion } from "../OfertasDeTrabajo/ValueObjects/TiempoLimitePostulacion";
import { Vacante, VacantePropiedades } from "../OfertasDeTrabajo/ValueObjects/Vacante";
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo, TituloTrabajoPropiedades } from "../valueObjectsComunes/TituloTrabajo";
import { RequerimientosEspecialesOfertaDeTrabajo, RequerimientosEspecialesPropiedades } from "./ValueObjects/RequerimientosEspecialesOfertaDeTrabajo";

type OfertaParaDominioMap<Type> = {
    [Property in keyof Type]: 
    Type[Property] extends Direccion? DireccionPropiedades 
    : Type[Property] extends Remuneracion? RemuneracionPropiedades 
    : Type[Property] extends FechaPublicacion? Date: Type[Property] extends TiempoLimitePostulacion? Date
    : Type[Property] extends Duracion? DuracionPropiedades
    : Type[Property] extends Vacante? VacantePropiedades
    : Type[Property] extends Empleador? EmpleadorParaDominio
    : Type[Property] extends EstadoOfertaDeTrabajo? EstadoOfertaDeTrabajoPropiedades
    : Type[Property] extends RequerimientosEspecialesOfertaDeTrabajo? RequerimientosEspecialesPropiedades
    : Type[Property] extends TituloTrabajo? TituloTrabajoPropiedades
    : string;
}

export type OfertaParaDominio= OfertaParaDominioMap<OfertaDeTrabajoPropiedades>