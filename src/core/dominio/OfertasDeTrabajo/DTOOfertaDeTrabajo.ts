import { Certificacion, CertificacionPropiedades } from "../certificacion/Certificacion";
import { Empleador, EmpleadorPropiedades } from "../empleador/Empleador";
import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad";
import { OfertaDeTrabajoPropiedades } from "./OfertaDeTrabajo";
import { Duracion } from "./valueObjects/Duracion";
import { EstadoOfertaDeTrabajo } from "./valueObjects/EstadoOfertaDeTrabajo";
import { Remuneracion } from "./valueObjects/Remuneracion";
import { TiempoLimitePostulacion } from "./valueObjects/TiempoLimitePostulacion";
import { Vacante } from "./valueObjects/Vacante";
import { Calendario, CalendarioPropiedades } from "../valueObjectsComunes/Calendario";
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo";
import { RequerimientosEspecialesOfertaDeTrabajo } from "./valueObjects/RequerimientosEspecialesOfertaDeTrabajo";

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