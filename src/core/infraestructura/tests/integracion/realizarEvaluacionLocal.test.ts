import { AdaptadorTIEvaluacion } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIEvaluacion";
import { UIPuertoEvaluacionDeTrabajo } from "../../../aplicacion/ui/evaluacionesDeTrabajo/UIPuertoEvaluacionDeTrabajo";
import { RealizarEvaluacion } from "../../../aplicacion/servicios/evaluacionesDeTrabajo/RealizarEvaluacion";
import { EvaluacionDeTrabajoParaDominio } from "../../../dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { IDRelacionDeTrabajo } from "../../../dominio/relacionDeTrabajo/valueObjects/IDRelacionDeTrabajo";
import { IDPostulacion } from "../../../dominio/postulacion/valueObjects/IDPostulacion";
import { EstadoRelacionDeTrabajo } from "../../../dominio/relacionDeTrabajo/valueObjects/EstadoRelacionDeTrabajo";
import { Calendario } from "../../../dominio/valueObjectsComunes/Calendario";
import { FechaPostulacion } from "../../../dominio/postulacion/valueObjects/Fechapostulacion";
import { Postulacion } from "../../../dominio/postulacion/Postulacion";

//Realizar evaluación de trabajo
test('Realizar evaluación de trabajo', () => {

    const puertoEvaluacion: UIPuertoEvaluacionDeTrabajo = new RealizarEvaluacion()
    const evaluacion:EvaluacionDeTrabajoParaDominio  = {
        idEvaluacion: "",
        preguntas: {
            pregunta1: "pregunta1",
            pregunta2: "pregunta2",
            pregunta3: "pregunta3",
            pregunta4: "pregunta4",
            pregunta5: "pregunta5"
        },
        puntuaciones: {
            puntuacion1: 4,
            puntuacion2: 4,
            puntuacion3: 4,
            puntuacion4: 4,
            puntuacion5: 4
        },
        puntuacionPromedio: 4,
        trabajo: {
            idRelacion: IDRelacionDeTrabajo.crear("1"),
            postulacion: {    
                idPostulacion: IDPostulacion.crear("1"),
                fechaPostulacion: FechaPostulacion.crear(new Date(), new Date()),
                empleado: {
                    ssn: "123456",
                    nombreCompleto: "NombreCompleto",
                    numeroTelefono: "4145556565",
                    fechaNacimiento: "1995-05-05",
                    nivelEducativo: 0,
                    experienciaLaboral: [],
                    habilidades: [],
                    cursos: [],
                    referencias: [],
                    clasificacion: 15,
                    estadoEmpleado: 2,
                    direccion: {
                        calle1: "calle1",
                        calle2: "calle2",
                        ciudad: "ciudad",
                        estado: "estado",
                        codPostal: "codigoPos"
                    }
                },
                ofertaDeTrabajo: {
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
                },
                estadoPostulacion: 1
            } as unknown as Postulacion,
            calendario: [Calendario.crear({horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"})],
            estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(1)
        },
    }
    expect(puertoEvaluacion.realizarEvaluacionUI(evaluacion, new AdaptadorTIEvaluacion())).toEqual("Evaluación realizada con éxito");
});