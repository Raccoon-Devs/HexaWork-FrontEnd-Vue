import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../../aplicacion/ui/UIPuertoCrearOferta";
import { AdaptadorTIOferta } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIOferta";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";

import { PublicarOfertaDeTrabajo } from "../../../aplicacion/servicios/PublicarOfertaDeTrabajo";
import { UIPuertoPublicarOferta } from "../../../aplicacion/ui/UIPuertoPublicarOferta";


test('Publicar una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoPublicarOferta: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()

    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "Título crear oferta",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "codigoPos"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020-07-05",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: [
            {
                idHabilidad: "1",
                categoria: 1,
                nombre: "HabilidadesBlandas"
            }
        ],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: [
            {
                idCertificacion: "3",
                nombre: "Certificacion 3",
                fechaCompletacionCertificacion: "2021-03-03",
                curso: {
                    idCurso: "3",
                    codigo: "Curso 3",
                    titulo: "Titulo curso 3",
                    imagenPortada: "Imagen",
                    estadoCurso: 0,
                    habilidades: [{
                        idHabilidad: '1',
                        nombre: 'Habilidades blandas',
                        categoria: 0
                    }],
                }
            }
        ],
        duracion: 5,
        remuneracionPorHora: 3.44,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Oferta Creada Con éxito");
    expect(puertoPublicarOferta.publicarOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Oferta Actualizada Con éxito");
});
