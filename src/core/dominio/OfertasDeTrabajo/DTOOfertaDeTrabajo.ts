import { Certificacion, CertificacionPropiedades } from "../Certificacion/Certificacion";
import { Empleador, EmpleadorPropiedades } from "../Empleador/Empleador";
import { Habilidad, HabilidadPropiedades } from "../Habilidad/Habilidad";
import { OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { Duracion } from "../OfertasDeTrabajo/ValueObjects/Duracion";
import { EstadoOfertaDeTrabajo } from "../OfertasDeTrabajo/ValueObjects/EstadoOfertaDeTrabajo";
import { Remuneracion } from "../OfertasDeTrabajo/ValueObjects/Remuneracion";
import { TiempoLimitePostulacion } from "../OfertasDeTrabajo/ValueObjects/TiempoLimitePostulacion";
import { Vacante } from "../OfertasDeTrabajo/ValueObjects/Vacante";
import { Calendario, CalendarioPropiedades } from "../valueObjectsComunes/Calendario";
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo";
import { RequerimientosEspecialesOfertaDeTrabajo } from "./ValueObjects/RequerimientosEspecialesOfertaDeTrabajo";

type OfertaParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends TituloTrabajo? string
    //: Type[Property] extends Empleador? EmpleadorPropiedades
    : Type[Property] extends Direccion? DireccionPropiedades 
    : Type[Property] extends TiempoLimitePostulacion? Date
    : Type[Property] extends Calendario[]? CalendarioPropiedades[]
    : Type[Property] extends Habilidad[]? HabilidadPropiedades[]
    : Type[Property] extends RequerimientosEspecialesOfertaDeTrabajo? string
    : Type[Property] extends Certificacion[]? CertificacionPropiedades[]
    : Type[Property] extends Duracion? number
    : Type[Property] extends Remuneracion? number 
    : Type[Property] extends EstadoOfertaDeTrabajo? number
    : Type[Property] extends Vacante? number
    : string;
}

export type OfertaParaDominio = OfertaParaDominioMap<OfertaDeTrabajoPropiedades>