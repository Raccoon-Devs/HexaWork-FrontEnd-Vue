import { MostrarPostuladosDeOferta } from "../../../aplicacion/servicios/postulaciones/MostrarPostuladosDeOferta";
import { UIPuertoPostulaciones } from "../../../aplicacion/ui/postulaciones/UIPuertoPostulaciones";
import { AdaptadorTIPostulaciones } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIPostulaciones";

test('Mostrar postulados ofertas de trabajo', () => {

    const puertoPostulaciones: UIPuertoPostulaciones = new MostrarPostuladosDeOferta()
    const oferta: any = {
        idOfertaDeTrabajo: "1",
        tituloTrabajo: "Título crear oferta",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "codigoPos"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2021-08-31",
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
    expect(puertoPostulaciones.listarPostulacionesUI(new AdaptadorTIPostulaciones(), oferta).length).toBe(3)
});