import { APIPuertoCertificaciones } from "../../../aplicacion/api/certificaciones/APIPuertoCertificaciones";

export class AdaptadorTUCertificaciones extends APIPuertoCertificaciones{

    public listarCertificaciones():any{
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
            {
                idHabilidad: '3',
                nombre: 'Habilidades cognitivas',
                categoria: 2
            },
            {
                idHabilidad: '4',
                nombre: 'Habilidades mecánicas',
                categoria: 3
            },
            {
                idHabilidad: '5',
                nombre: 'Habilidades lingüísticas',
                categoria: 4
            },
            {
                idHabilidad: '6',
                nombre: 'Habilidades manuales',
                categoria: 5
            },
            {
                idHabilidad: '7',
                nombre: 'Habilidades visualización',
                categoria: 6
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
                    habilidades[2], 
                    habilidades[3]
                ],
                estadoCurso: 0
            },
            {
                idCurso: '3',
                codigo: 'Curso 3',
                titulo: 'Título Curso 3',
                imagenPortada: 'Imagen 3',
                habilidades: [
                    habilidades[4], 
                    habilidades[5],
                    habilidades[6]
                ],
                estadoCurso: 0
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
            {
                idCertificacion: '3',
                nombre: 'Certificación 3',
                curso: cursos[2],
                fechaCompletacionCertificacion: '2021-03-20'
            },
            {
                idCertificacion: '4',
                nombre: 'Certificación 4',
                curso: cursos[0],
                fechaCompletacionCertificacion: '2021-04-20'
            },
            {
                idCertificacion: '5',
                nombre: 'Certificación 5',
                curso: cursos[1],
                fechaCompletacionCertificacion: '2021-05-20'
            },
            {
                idCertificacion: '6',
                nombre: 'Certificación 6',
                curso: cursos[2],
                fechaCompletacionCertificacion: '2021-06-20'
            },
            {
                idCertificacion: '7',
                nombre: 'Certificación 7',
                curso: cursos[0],
                fechaCompletacionCertificacion: '2021-07-20'
            },
        ]
        return certificaciones
    }
}
