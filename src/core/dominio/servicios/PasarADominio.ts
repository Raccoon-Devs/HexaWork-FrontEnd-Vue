import { Certificacion } from "../certificacion/Certificacion";
import { Habilidad } from "../habilidad/Habilidad";
import { Empleador } from "../empleador/Empleador";
import { OfertaParaDominio } from "../ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajoPropiedades } from "../ofertasDeTrabajo/OfertaDeTrabajo";
import { Duracion } from "../ofertasDeTrabajo/valueObjects/Duracion";
import { EstadoOfertaDeTrabajo } from "../ofertasDeTrabajo/valueObjects/EstadoOfertaDeTrabajo";
import { IDOferta } from "../ofertasDeTrabajo/valueObjects/IDOferta";
import { Remuneracion } from "../ofertasDeTrabajo/valueObjects/Remuneracion";
import { RequerimientosEspecialesOfertaDeTrabajo } from "../ofertasDeTrabajo/valueObjects/RequerimientosEspecialesOfertaDeTrabajo";
import { TiempoLimitePostulacion } from "../ofertasDeTrabajo/valueObjects/TiempoLimitePostulacion";
import { Vacante } from "../ofertasDeTrabajo/valueObjects/Vacante";
import { Calendario } from "../valueObjectsComunes/Calendario";
import { Direccion } from "../valueObjectsComunes/Direccion";
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo";

import { RelacionDeTrabajoParaDominio } from "../relacionDeTrabajo/DTORelacionDeTrabajo";
import { RelacionDeTrabajoPropiedades } from "../relacionDeTrabajo/RelacionDeTrabajo";
import { IDRelacionDeTrabajo } from "../relacionDeTrabajo/valueObjects/IDRelacionDeTrabajo";
import { IDPostulacion } from "../postulacion/valueObjects/IDPostulacion";
import { Postulacion } from "../postulacion/Postulacion";
import { EstadoRelacionDeTrabajo } from "../relacionDeTrabajo/valueObjects/EstadoRelacionDeTrabajo"

export class PasarADominio {
    public aDominio (atributos: OfertaParaDominio): OfertaDeTrabajoPropiedades {

        const calendario: Calendario[] = []

        atributos.calendario.forEach(fecha => {
            calendario.push(Calendario.crear(fecha))
        });

        const habilidades: Habilidad[] = []

        atributos.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        const certificaciones: Certificacion[] = []

        atributos.certificaciones.forEach(certificacion => {
            certificaciones.push(Certificacion.crear(certificacion))
        });

        return {
            idOfertaDeTrabajo: IDOferta.crear(atributos.idOfertaDeTrabajo),
            tituloTrabajo: TituloTrabajo.crear(atributos.tituloTrabajo),
            //empleador: Empleador.crear(atributos.empleador),
            direccion: Direccion.crear(
                atributos.direccion.calle1,
                atributos.direccion.calle2,
                atributos.direccion.ciudad,
                atributos.direccion.estado,
                atributos.direccion.codPostal
            ),
            fechaLimitePostulacionOfertaDeTrabajo: TiempoLimitePostulacion.crear(atributos.fechaLimitePostulacionOfertaDeTrabajo),
            calendario: calendario,
            habilidades: habilidades,
            requerimientosEspeciales: RequerimientosEspecialesOfertaDeTrabajo.crear(atributos.requerimientosEspeciales),
            certificaciones: certificaciones,
            duracion: Duracion.crear(atributos.duracion),
            remuneracionPorHora: Remuneracion.crear(atributos.remuneracionPorHora),
            estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo.crear(atributos.estadoOfertaDeTrabajo),
            vacantes: Vacante.crear(atributos.vacantes)
        }
    }
    public relacionDeTrabajoADominio(atributos: RelacionDeTrabajoParaDominio): RelacionDeTrabajoPropiedades {
        const calendario: Calendario[] = []

        atributos.calendario.forEach(fecha => {
            calendario.push(Calendario.crear(fecha))
        });

        const postulacion = Postulacion.crear(atributos.postulacion)
        return {
            idRelacion:  IDRelacionDeTrabajo.crear(atributos.idRelacion),
            postulacion: postulacion,
            calendario: calendario,
            estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(atributos.estadoRelacionDeTrabajo)
        }
    }
}
