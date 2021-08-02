import { RelacionDeTrabajoParaDominio } from "../../dominio/RelacionDeTrabajo/DTORelacionDeTrabajo";
import { ServicioListarRelacionesDeTrabajo } from "../../dominio/servicios/ServicioListarRelacionesDeTrabajo";
import { APIPuertoRelacionesDeTrabajo } from "../api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";
import { Mapper } from "../mappers/Mapper";
import { MappearRelacionDeTrabajo } from "../mappers/MapperRelacionDeTrabajo";
import { UIPuertoRelacionesDeTrabajo } from "../ui/relacionesDeTrabajo/UIPuertoRelacionesDeTrabajo";

export class MostrarRelacionesDeTrabajoActivas extends UIPuertoRelacionesDeTrabajo {

    private resultado:any

    public listarRelacionesDeTrabajoUI(apiPuerto: APIPuertoRelacionesDeTrabajo): RelacionDeTrabajoParaDominio[] | {statusCode: number, mensaje: string} {
        try {
            this.listarRelacionesApi(apiPuerto)
            const mapper: Mapper = new MappearRelacionDeTrabajo()
            const relaciones: RelacionDeTrabajoParaDominio[] = []
            this.resultado.forEach((relacion : any) => {
                //relaciones.push(mapper.paraInfraestructura(relacion))
                relaciones.push(relacion)
            })
            return relaciones
        }
        catch(error){
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    public listarRelacionesApi(apiPuerto: APIPuertoRelacionesDeTrabajo): void {
        const relaciones = apiPuerto.listarRelacionesDeTrabajoMock()
        this.resultado = []
        relaciones.forEach((relacion : any) => {
            this.resultado.push(ServicioListarRelacionesDeTrabajo.pasarADominio(relacion))
        })

    }

}
