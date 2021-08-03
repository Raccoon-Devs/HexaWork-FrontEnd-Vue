import { AdaptadorTIEvaluacion } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIEvaluacion";
import { UIPuertoEvaluacionDeTrabajo } from "../../../aplicacion/ui/evaluacionesDeTrabajo/UIPuertoEvaluacionDeTrabajo";
import { RealizarEvaluacion } from "../../../aplicacion/servicios/evaluacionesDeTrabajo/RealizarEvaluacion";
import { EvaluacionDeTrabajoParaDominio } from "../../../dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { IDRelacionDeTrabajo } from "../../../dominio/relacionDeTrabajo/valueObjects/IDRelacionDeTrabajo";
import { IDPostulacion } from "../../../dominio/postulacion/valueObjects/IDPostulacion";
import { SSN } from "../../../dominio/empleado/valueObjects/SSN";
import { EstadoRelacionDeTrabajo } from "../../../dominio/relacionDeTrabajo/valueObjects/EstadoRelacionDeTrabajo";
import { Calendario } from "../../../dominio/valueObjectsComunes/Calendario";
import { FechaPostulacion } from "../../../dominio/postulacion/valueObjects/Fechapostulacion";
import { Postulacion } from "../../../dominio/postulacion/Postulacion";
import { NombreCompleto } from "../../../dominio/valueObjectsComunes/NombreCompleto";
import { Telefono } from "../../../dominio/valueObjectsComunes/Telefono";
import { FechaNacimiento } from "../../../dominio/empleado/valueObjects/FechaNacimiento";
import { NivelEducativo } from "../../../dominio/empleado/valueObjects/NivelEducativo";
import { Clasificacion } from "../../../dominio/empleado/valueObjects/Clasificacion";
import { EstadoEmpleado } from "../../../dominio/empleado/valueObjects/EstadoEmpleado";
import { Direccion } from "../../../dominio/valueObjectsComunes/Direccion";
import { IDOferta } from "../../../dominio/ofertasDeTrabajo/valueObjects/IDOferta";
import { TituloTrabajo } from "../../../dominio/valueObjectsComunes/TituloTrabajo";
import { TiempoLimitePostulacion } from "../../../dominio/ofertasDeTrabajo/valueObjects/TiempoLimitePostulacion";
import { IDHabilidad } from "../../../dominio/habilidad/valueObjects/IDHabilidad";
import { CategoriaHabilidad } from "../../../dominio/habilidad/valueObjects/CategoriaHabilidad";
import { NombreHabilidad } from "../../../dominio/habilidad/valueObjects/NombreHabilidad";
import { Habilidad } from "../../../dominio/habilidad/Habilidad";
import { RequerimientosEspecialesOfertaDeTrabajo } from "../../../dominio/ofertasDeTrabajo/valueObjects/RequerimientosEspecialesOfertaDeTrabajo";
import { Duracion } from "../../../dominio/ofertasDeTrabajo/valueObjects/Duracion";
import { Remuneracion } from "../../../dominio/ofertasDeTrabajo/valueObjects/Remuneracion";
import { EstadoOfertaDeTrabajo } from "../../../dominio/ofertasDeTrabajo/valueObjects/EstadoOfertaDeTrabajo";
import { Vacante } from "../../../dominio/ofertasDeTrabajo/valueObjects/Vacante";
import { Certificacion } from "../../../dominio/certificacion/Certificacion";
import { OfertaDeTrabajo } from "../../../dominio/ofertasDeTrabajo/OfertaDeTrabajo";
import { Empleado } from "../../../dominio/empleado/Empleado";


//Realizar evaluación de trabajo
test('Realizar evaluación de trabajo', () => {

    const puertoEvaluacion: UIPuertoEvaluacionDeTrabajo = new RealizarEvaluacion()
    const oferta = OfertaDeTrabajo.crear(
        {
            idOfertaDeTrabajo: 1,
            tituloTrabajo: "Titulo",
            //empleador: Empleador,
            direccion: {
                calle1: "calle1",
                calle2: "calle2",
                ciudad: "ciudad",
                estado: "estado",
                codPostal: "1010"
            }   ,
            fechaLimitePostulacionOfertaDeTrabajo: new Date("2020-07-05"),
            calendario: [
                //Calendario.crear(
                    {
                        horaInicio: "2020-08-08 05:05:55",
                        horaFin: "2020-08-08 06:05:55"
                    }
                //)
            ],
            habilidades: [
                //Habilidad.crear(
                    {
                        idHabilidad: 2,
                        nombre: "Habilidad 1",
                        categoria: 2
                    }
                //)
            ],
            requerimientosEspeciales: "Requerimientos especiales",
            certificaciones: [
                Certificacion.crear({
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
                })
            ],
            duracion: 5,
            remuneracionPorHora: 3.44,
            estadoOfertaDeTrabajo: 1,
            vacantes: 5
        }
    )
    
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
            postulacion: Postulacion.crear(
                {
                    idPostulacion: 1,
                    fechaPostulacion: {
                        fecha: new Date("2020-05-05"),
                        limite: new Date("2020-06-06")
                    },
                    empleado: Empleado.crear({
                        ssn: "ssnempleado",
                        nombreCompleto: {
                            primerNombre: "Primer Nombre",
                            segundoNombre: "Segundo Nombre",
                            primerApellido: "Primer Apellido",
                            segundoApellido:"Segundo Apellido"
                        },
                        numeroTelefono: {
                            codigoPais: 58,
                            numeroTelefono: 4145214151
                        },
                        fechaNacimiento: new Date("1995-05-05"),
                        nivelEducativo: 0,
                        experienciaLaboral: [],
                        habilidades: [
                            {
                                idHabilidad: 2,
                                nombre: "Habilidad 1",
                                categoria: 2
                            }
                        ],
                        cursos: [],
                        referencias: [],
                        clasificacion: 5,
                        estadoEmpleado: 2,
                        direccion: {
                            calle1: "calle1",
                            calle2: "calle2",
                            ciudad: "ciudad",
                            estado: "estado",
                            codPostal: "1010"
                        }    
                    }),
                    ofertaDeTrabajo: oferta
                }
            ),
            calendario: [Calendario.crear({horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"})],
            estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(1)
        },
    }
    expect(puertoEvaluacion.realizarEvaluacionUI(evaluacion, new AdaptadorTIEvaluacion())).toEqual("Evaluación realizada con éxito");
});