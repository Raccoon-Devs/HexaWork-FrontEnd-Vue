import { APIPuerto } from "../../../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../../../dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";


export class AdaptadorTUOferta extends APIPuerto{

    public listarOfertas():any{
       return [
            {
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
                fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
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
                estadoOfertaDeTrabajo: 0,
                vacantes: 5
            }
       ]
    }

    public listarOfertasMock(): any {
        return [
            {
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
                fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
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
                estadoOfertaDeTrabajo: 0,
                vacantes: 5
            },
            {
                idOfertaDeTrabajo: "2",
                tituloTrabajo: "Título oferta",
                //empleador: Empleador,
                direccion: {
                    calle1: "calle1",
                    calle2: "calle2",
                    ciudad: "ciudad",
                    estado: "estado",
                    codPostal: "codigoPos"
                },
                fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
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
                estadoOfertaDeTrabajo: 5,
                vacantes: 5
            },
            {
                idOfertaDeTrabajo: "3",
                tituloTrabajo: "Título oferta",
                //empleador: Empleador,
                direccion: {
                    calle1: "calle1",
                    calle2: "calle2",
                    ciudad: "ciudad",
                    estado: "estado",
                    codPostal: "codigoPos"
                },
                fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
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
                estadoOfertaDeTrabajo: 5,
                vacantes: 5
            }
        ]
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){
        return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
    }

    public actualizarOferta(ofertaDeTrabajo: OfertaParaDominio) {
        return {statusCode: 201, mensaje: "Oferta Actualizada Con éxito"}
    }

}
