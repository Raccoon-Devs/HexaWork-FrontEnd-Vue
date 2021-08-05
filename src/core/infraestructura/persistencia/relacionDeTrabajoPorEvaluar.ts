const experiencias: any = [
    {
        idExperiencia: '1',
        tituloTrabajo: 'Traductor',
        nombreCompania: 'Compañia 1',
        categoria: 0
    },
    {
        idExperiencia: '2',
        tituloTrabajo: 'Diseñador Web',
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
        tituloTrabajo: 'Corrector de estilo',
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
        tituloTrabajo: 'Agente de call center',
        nombreCompania: 'Compañia 2',
        numeroTelefono: {
            codigoPais: 222,
            numeroTelefono: 2222222222
        },
        correo: 'correo2@example.com'
    },
]

const certificaciones: any = [
    {
        idCertificacion: '1',
        nombre: 'Certificación 1',
        curso: cursos[0],
        fechaCompletacionCertificacion: '2021-01-20'
    },
    {
        idCertificacion: '2',
        nombre: 'Certificación 2',
        curso: cursos[1],
        fechaCompletacionCertificacion: '2021-02-20'
    },
]

const empleados: any = [
    {
        ssn: '1111',
        nombreCompleto: {
            primerNombre: ' Antonio',
            segundoNombre: 'Segundo Nombre 1',
            primerApellido: 'Ruiz',
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
        estadoEmpleado: 3,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
    {
        ssn: '2222',
        nombreCompleto: {
            primerNombre: 'Victor',
            segundoNombre: 'Segundo Nombre 2',
            primerApellido: 'Gutierrez',
            segundoApellido: 'Segundo Apellido 2'
        },
        numeroTelefono: {
            codigoPais: 444,
            numeroTelefono: 4444444444
        },
        fechaNacimiento: '2000-01-02',
        nivelEducativo: 10,
        experienciaLaboral: experiencias,
        habilidades: habilidades,
        cursos: cursos,
        referencias: referencias,
        clasificacion: 4,
        estadoEmpleado: 3,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
    {
        ssn: '3333',
        nombreCompleto: {
            primerNombre: 'Isabel',
            segundoNombre: 'Segundo Nombre 3',
            primerApellido: 'Rangel',
            segundoApellido: 'Segundo Apellido 3'
        },
        numeroTelefono: {
            codigoPais: 555,
            numeroTelefono: 5555555555
        },
        fechaNacimiento: '2000-01-03',
        nivelEducativo: 10,
        experienciaLaboral: experiencias,
        habilidades: habilidades,
        cursos: cursos,
        referencias: referencias,
        clasificacion: 4,
        estadoEmpleado: 3,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
    {
        ssn: '4444',
        nombreCompleto: {
            primerNombre: 'Andrea',
            segundoNombre: 'Segundo Nombre 4',
            primerApellido: 'Ferreiro',
            segundoApellido: 'Segundo Apellido 4'
        },
        numeroTelefono: {
            codigoPais: 666,
            numeroTelefono: 6666666666
        },
        fechaNacimiento: '2000-01-04',
        nivelEducativo: 10,
        experienciaLaboral: experiencias,
        habilidades: habilidades,
        cursos: cursos,
        referencias: referencias,
        clasificacion: 4,
        estadoEmpleado: 3,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
    {
        ssn: '5555',
        nombreCompleto: {
            primerNombre: 'Renato',
            segundoNombre: 'Segundo Nombre 5',
            primerApellido: 'Lorelli',
            segundoApellido: 'Segundo Apellido 5'
        },
        numeroTelefono: {
            codigoPais: 777,
            numeroTelefono: 7777777777
        },
        fechaNacimiento: '2000-01-05',
        nivelEducativo: 10,
        experienciaLaboral: experiencias,
        habilidades: habilidades,
        cursos: cursos,
        referencias: referencias,
        clasificacion: 4,
        estadoEmpleado: 3,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
    {
        ssn: '6666',
        nombreCompleto: {
            primerNombre: 'Pedro',
            segundoNombre: 'Segundo Nombre 6',
            primerApellido: 'Contreras',
            segundoApellido: 'Segundo Apellido 6'
        },
        numeroTelefono: {
            codigoPais: 888,
            numeroTelefono: 8888888888
        },
        fechaNacimiento: '2000-01-06',
        nivelEducativo: 10,
        experienciaLaboral: experiencias,
        habilidades: habilidades,
        cursos: cursos,
        referencias: referencias,
        clasificacion: 4,
        estadoEmpleado: 3,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
]

const ofertas: any = [
    {
        idOfertaDeTrabajo: '10',
        tituloTrabajo: 'Transcriptor de audios',
        //empleador: Empleador,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        },
        fechaLimitePostulacionOfertaDeTrabajo: '2021-10-01',
        calendario: [],
        habilidades: habilidades,
        requerimientosEspeciales: 'RequerimientosEspecialesOfertaDeTrabajo',
        certificaciones: certificaciones,
        duracion: 120,
        remuneracionPorHora: 100,
        estadoOfertaDeTrabajo: 4,
        vacantes: 2
    },
    {
        idOfertaDeTrabajo: '11',
        tituloTrabajo: 'Asistente virtual',
        //empleador: Empleador,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        },
        fechaLimitePostulacionOfertaDeTrabajo: '2021-11-01',
        calendario: [],
        habilidades: habilidades,
        requerimientosEspeciales: 'RequerimientosEspecialesOfertaDeTrabajo',
        certificaciones: certificaciones,
        duracion: 120,
        remuneracionPorHora: 100,
        estadoOfertaDeTrabajo: 4,
        vacantes: 2
    },
]

const postulaciones: any = [
    {
        idPostulacion: '1',
        fechaPostulacion: '2021-08-02',
        empleado: empleados[0],
        ofertaDeTrabajo: ofertas[0],
        estadoPostulacion: 0
    },
    {
        idPostulacion: '2',
        fechaPostulacion: '2021-08-03',
        empleado: empleados[1],
        ofertaDeTrabajo: ofertas[0],
        estadoPostulacion: 0
    },
    {
        idPostulacion: '3',
        fechaPostulacion: '2021-08-04',
        empleado: empleados[2],
        ofertaDeTrabajo: ofertas[0],
        estadoPostulacion: 0
    },
    {
        idPostulacion: '4',
        fechaPostulacion: '2021-08-05',
        empleado: empleados[3],
        ofertaDeTrabajo: ofertas[1],
        estadoPostulacion: 0
    },
    {
        idPostulacion: '5',
        fechaPostulacion: '2021-08-06',
        empleado: empleados[4],
        ofertaDeTrabajo: ofertas[1],
        estadoPostulacion: 0
    },
    {
        idPostulacion: '6',
        fechaPostulacion: '2021-08-07',
        empleado: empleados[5],
        ofertaDeTrabajo: ofertas[1],
        estadoPostulacion: 0
    },
]

const relaciones: any = [
    {
        idRelacion: '10',
        postulacion: postulaciones[0],
        calendario: [],
        estadoRelacionDeTrabajo: 1
    },
    {
        idRelacion: '11',
        postulacion: postulaciones[1],
        calendario: [],
        estadoRelacionDeTrabajo: 1
    },
    {
        idRelacion: '12',
        postulacion: postulaciones[2],
        calendario: [],
        estadoRelacionDeTrabajo: 1
    },
    {
        idRelacion: '13',
        postulacion: postulaciones[3],
        calendario: [],
        estadoRelacionDeTrabajo: 1
    },
    {
        idRelacion: '14',
        postulacion: postulaciones[4],
        calendario: [],
        estadoRelacionDeTrabajo: 1
    },
    {
        idRelacion: '15',
        postulacion: postulaciones[5],
        calendario: [],
        estadoRelacionDeTrabajo: 1
    },
]

export function obtenerRelacionesPorEvaluar(){
    return relaciones
}
