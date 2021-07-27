import { OfertaParaDominio } from "../OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { Duracion } from "../OfertasDeTrabajo/ValueObjects/Duracion";
import { EstadoOfertaDeTrabajo } from "../OfertasDeTrabajo/ValueObjects/EstadoOfertaDeTrabajo";
import { IDOferta } from "../OfertasDeTrabajo/ValueObjects/IDOferta";
import { Remuneracion } from "../OfertasDeTrabajo/ValueObjects/Remuneracion";
import { RequerimientosEspecialesOfertaDeTrabajo } from "../OfertasDeTrabajo/ValueObjects/RequerimientosEspecialesOfertaDeTrabajo";
import { TiempoLimitePostulacion } from "../OfertasDeTrabajo/ValueObjects/TiempoLimitePostulacion";
import { Vacante } from "../OfertasDeTrabajo/ValueObjects/Vacante";
import { Calendario } from "../valueObjectsComunes/Calendario";
import { Direccion } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo";

export class PasarADominio {
    public aDominio (atributos: OfertaParaDominio): OfertaDeTrabajoPropiedades {
        const calendario: Calendario[] = []

        atributos.calendario.forEach(fecha => {
            calendario.push(Calendario.crear(fecha))
        });
        
        return {
            idOfertaDeTrabajo : IDOferta.crear(atributos.idOfertaDeTrabajo),
            tituloTrabajo: TituloTrabajo.crear(atributos.tituloTrabajo),
            //empleador: Empleador.crear(ofertaAtributos.empleador),
            direccion: Direccion.crear(atributos.direccion.calle1, atributos.direccion.calle2, atributos.direccion.ciudad, atributos.direccion.estado, atributos.direccion.codPostal),
            fechaLimitePostulacionOfertaDeTrabajo: TiempoLimitePostulacion.crear(atributos.fechaLimitePostulacionOfertaDeTrabajo),
            calendario: calendario,
            habilidades: atributos.habilidades,
            requerimientosEspeciales: RequerimientosEspecialesOfertaDeTrabajo.crear(atributos.requerimientosEspeciales),
            certificaciones: atributos.certificaciones,
            duracion: Duracion.crear(atributos.duracion),
            remuneracionPorHora: Remuneracion.crear(atributos.remuneracionPorHora),
            estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo.crear(atributos.estadoOfertaDeTrabajo),
            vacantes: Vacante.crear(atributos.vacantes)
        }
    }
}