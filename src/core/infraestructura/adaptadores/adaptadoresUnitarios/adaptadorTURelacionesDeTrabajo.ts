import { APIPuertoRelacionesDeTrabajo } from "../../../aplicacion/api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";

export class AdaptadorTURelacionesDeTrabajo extends APIPuertoRelacionesDeTrabajo{

    public listarRelacionesDeTrabajoMock(): any{

        const experiencias: any = [
            {
                idExperiencia: '1',
                tituloTrabajo: 'Titulo Trabajo 1',
                nombreCompania: 'Compañia 1',
                categoria: 0
            },
            {
                idExperiencia: '2',
                tituloTrabajo: 'Titulo Trabajo 2',
                nombreCompania: 'Compañia 2',
                categoria: 1
            },
        ]
        
        const habilidades: any = [
            {
                idHabilidad: '1',
                nombre: 'Habilidades blandas',
                categoria: 0
            },
            {
                idHabilidad: '2',
                nombre: 'Habilidades técnicas',
                categoria: 1
            },
        ]
        
        const cursos: any = [
            {
                idCurso: '1',
                codigo: 'Curso 1',
                titulo: 'Título Curso 1',
                imagenPortada: 'Imagen 1',
                habilidades: [
                    habilidades[0],
                    habilidades[1]
                ],
                estadoCurso: 0
            },
            {
                idCurso: '2',
                codigo: 'Curso 2',
                titulo: 'Título Curso 2',
                imagenPortada: 'Imagen 2',
                habilidades: [
                    habilidades[0],
                    habilidades[1]
                ],
                estadoCurso: 0
            },
        ]
        
        const referencias: any = [
            {
                idReferencia: '1',
                nombreCompleto: {
                    primerNombre: 'Primer Nombre Ref 1',
                    segundoNombre: 'Segundo Nombre Ref 1',
                    primerApellido: 'Primer Apellido Ref 1',
                    segundoApellido: 'Segundo Apellido Ref 1'
                },
                tituloTrabajo: 'Titulo Trabajo 1',
                nombreCompania: 'Compañia 1',
                numeroTelefono: {
                    codigoPais: 111,
                    numeroTelefono: 1111111111
                },
                correo: 'correo1@example.com'
            },
            {
                idReferencia: '2',
                nombreCompleto: {
                    primerNombre: 'Primer Nombre Ref 2',
                    segundoNombre: 'Segundo Nombre Ref 2',
                    primerApellido: 'Primer Apellido Ref 2',
                    segundoApellido: 'Segundo Apellido Ref 2'
                },
                tituloTrabajo: 'Titulo Trabajo 2',
                nombreCompania: 'Compañia 2',
                numeroTelefono: {
                    codigoPais: 222,
                    numeroTelefono: 2222222222
                },
                correo: 'correo2@example.com'
            },
        ]
        
        const empleado: any = {
            ssn: '1111',
            nombreCompleto: {
                primerNombre: 'Nombre1',
                segundoNombre: 'Segundo Nombre 1',
                primerApellido: 'Apellido1',
                segundoApellido: 'Segundo Apellido 1'
            },
            numeroTelefono: {
                codigoPais: 333,
                numeroTelefono: 3333333333
            },
            fechaNacimiento: '2000-01-01',
            nivelEducativo: 10,
            experienciaLaboral: experiencias,
            habilidades: habilidades,
            cursos: cursos,
            referencias: referencias,
            clasificacion: 4,
            estadoEmpleado: 2,
            direccion: {
                calle1: 'calle1',
                calle2: 'calle2',
                ciudad: 'ciudad',
                estado: 'estado',
                codPostal: 'codPostal'
            }
        }
        
        const ofertaDeTrabajo = {
            idOfertaDeTrabajo: "IdPorDefecto",
            tituloTrabajo: "Título oferta",
            //empleador: Empleador,
            direccion: {
                calle1: "calle1",
                calle2: "calle2",
                ciudad: "ciudad",
                estado: "estado",
                codPostal: "codigoPos"
            },
            fechaLimitePostulacionOfertaDeTrabajo: "2020-07-18",
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
                    fechaCompletacionCertificacion: "2021-03-20",
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
            estadoOfertaDeTrabajo: 4,
            vacantes: 5
        }
        
        const relacionesDeTrabajo = [
            {
                idRelacion: "1",
                estadoRelacionDeTrabajo: 1,
                calendario: [],
                postulacion: {
                    idPostulacion: '1',
                    fechaPostulacion: '2020-07-02',
                    empleado: empleado,
                    ofertaDeTrabajo: ofertaDeTrabajo,
                    estadoPostulacion: 0,
                }
            }
        ]
        
        return relacionesDeTrabajo
    }

    public listarRelacionesPorEvaluar(): any {

    }
}
