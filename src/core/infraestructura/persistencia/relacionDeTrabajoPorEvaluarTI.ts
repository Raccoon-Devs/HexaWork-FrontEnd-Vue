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
            primerNombre: 'Primer Nombre 1',
            segundoNombre: 'Segundo Nombre 1',
            primerApellido: 'Primer Apellido 1',
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
            primerNombre: 'Primer Nombre 2',
            segundoNombre: 'Segundo Nombre 2',
            primerApellido: 'Primer Apellido 2',
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
        estadoEmpleado: 1,
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
        tituloTrabajo: 'TituloTrabajo 1',
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
        tituloTrabajo: 'TituloTrabajo 2',
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
        ofertaDeTrabajo: ofertas[1],
        estadoPostulacion: 0
    }
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
        estadoRelacionDeTrabajo: 0
    },
]

export function obtenerRelacionesPorEvaluarTI(){
    return relaciones
}