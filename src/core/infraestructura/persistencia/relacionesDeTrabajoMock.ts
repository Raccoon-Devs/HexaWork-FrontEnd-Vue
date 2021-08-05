const experiencias: any = [
    {
        idExperiencia: '1',
        tituloTrabajo: 'Consultor de marketing',
        nombreCompania: 'Compañia 1',
        categoria: 0
    },
    {
        idExperiencia: '2',
        tituloTrabajo: 'Asistente',
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
        tituloTrabajo: 'Chef',
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
        tituloTrabajo: 'Vendedor freelance',
        nombreCompania: 'Compañia 2',
        numeroTelefono: {
            codigoPais: 222,
            numeroTelefono: 2222222222
        },
        correo: 'correo2@example.com'
    },
]

const empleados: any = [
    {
        ssn: '1111',
        nombreCompleto: {
            primerNombre: 'José',
            segundoNombre: 'Segundo Nombre 1',
            primerApellido: 'Ramirez',
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
    },
    {
        ssn: '2222',
        nombreCompleto: {
            primerNombre: 'David',
            segundoNombre: 'Segundo Nombre 2',
            primerApellido: 'Zacarias',
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
        estadoEmpleado: 2,
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
            primerNombre: 'Sofía',
            segundoNombre: 'Segundo Nombre 3',
            primerApellido: 'Rodríguez',
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
        estadoEmpleado: 2,
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
            primerNombre: 'Victoria',
            segundoNombre: 'Segundo Nombre 4',
            primerApellido: 'Pacciello',
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
        estadoEmpleado: 2,
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
            primerNombre: 'Diego',
            segundoNombre: 'Segundo Nombre 5',
            primerApellido: 'Hernandez',
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
        estadoEmpleado: 2,
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
            primerNombre: 'Cristina',
            segundoNombre: 'Segundo Nombre 6',
            primerApellido: 'Morales',
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
        estadoEmpleado: 2,
        direccion: {
            calle1: 'calle1',
            calle2: 'calle2',
            ciudad: 'ciudad',
            estado: 'estado',
            codPostal: 'codPostal'
        }
    },
]

const ofertasDeTrabajo = [{
    idOfertaDeTrabajo: "IdPorDefecto",
    tituloTrabajo: "Community Manager",
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
}, {
    idOfertaDeTrabajo: "IdPorDefecto",
    tituloTrabajo: "Editor de Videos",
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
}]

const relacionesDeTrabajo = [
    {
        idRelacion: "",
        estadoRelacionDeTrabajo: 1,
        calendario: [],
        postulacion: {
            idPostulacion: '1',
            fechaPostulacion: '2020-07-02',
            empleado: empleados[0],
            ofertaDeTrabajo: ofertasDeTrabajo[0],
            estadoPostulacion: 0,
        }
    },
    {
        idRelacion: "",
        estadoRelacionDeTrabajo: 1,
        calendario: [],
        postulacion: {
            idPostulacion: '1',
            fechaPostulacion: '2020-07-02',
            empleado: empleados[1],
            ofertaDeTrabajo: ofertasDeTrabajo[1],
            estadoPostulacion: 0,
        }
    }
]

export function obtenerRelacionesDeTrabajoMock() {
    return relacionesDeTrabajo
}
