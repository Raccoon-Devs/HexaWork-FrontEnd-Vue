//import { Empleador } from "../Empleador/Empleador";
import { OfertaParaDominio } from "../OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { Duracion } from "../OfertasDeTrabajo/ValueObjects/Duracion";
import { EstadoOfertaDeTrabajo } from "../OfertasDeTrabajo/ValueObjects/EstadoOfertaDeTrabajo";
import { IDOferta } from "../OfertasDeTrabajo/ValueObjects/IDOferta";
import { Remuneracion } from "../OfertasDeTrabajo/ValueObjects/Remuneracion";
import { RequerimientosEspecialesOfertaDeTrabajo } from "../OfertasDeTrabajo/ValueObjects/RequerimientosEspecialesOfertaDeTrabajo";
import { TiempoLimitePostulacion } from "../OfertasDeTrabajo/ValueObjects/TiempoLimitePostulacion";
import { Vacante } from "../OfertasDeTrabajo/ValueObjects/Vacante";
//import { Calendario } from "../valueObjectsComunes/Calendario";
import { Direccion } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo";

export class ServicioCrearOfertaDeTrabajo{
    
    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{

        const datosOferta: OfertaDeTrabajoPropiedades = {
            idOfertaDeTrabajo : IDOferta.crear("5"),
            tituloTrabajo: TituloTrabajo.crear(ofertaAtributos.tituloTrabajo.titulo),
            //empleador: Empleador.crear(ofertaAtributos.empleador),
            direccion: Direccion.crear("calle1","calle2","ciudad", "el estadoooo","codigoPostal"),
            fechaLimitePostulacionOfertaDeTrabajo: TiempoLimitePostulacion.crear(ofertaAtributos.fechaLimitePostulacionOfertaDeTrabajo),
            //calendario: Calendario.crear(ofertaAtributos.calendario),
            //habilidades: Habilidad.crear(ofertaAtributos.habilidades),
            requerimientosEspeciales: RequerimientosEspecialesOfertaDeTrabajo.crear(ofertaAtributos.requerimientosEspeciales),
            //certificaciones: Certificacion.crear(ofertaAtributos.certificaciones),
            duracion: Duracion.crear(ofertaAtributos.duracion),
            remuneracionPorHora: Remuneracion.crear(ofertaAtributos.remuneracionPorHora),
            estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo.crear(ofertaAtributos.estadoOfertaDeTrabajo),
            vacantes: Vacante.crear(ofertaAtributos.vacantes)
        }
        
        return OfertaDeTrabajo.crear(datosOferta)
    }
}