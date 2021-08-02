const almacenamiento = window.localStorage

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
            primerNombre: 'Primer Nombre 3',
            segundoNombre: 'Segundo Nombre 3',
            primerApellido: 'Primer Apellido 3',
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
            primerNombre: 'Primer Nombre 4',
            segundoNombre: 'Segundo Nombre 4',
            primerApellido: 'Primer Apellido 4',
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
            primerNombre: 'Primer Nombre 5',
            segundoNombre: 'Segundo Nombre 5',
            primerApellido: 'Primer Apellido 5',
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
            primerNombre: 'Primer Nombre 6',
            segundoNombre: 'Segundo Nombre 6',
            primerApellido: 'Primer Apellido 6',
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

let postulaciones: any = []

if (almacenamiento.getItem("oferta") == null || JSON.parse(almacenamiento.getItem("oferta")!)[1] == null) {
    postulaciones = []
} else {
    const ofertas: any = JSON.parse(almacenamiento.getItem("oferta")!)

    postulaciones = [
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
}

export function obtenerPostulaciones(){
    return postulaciones
}
