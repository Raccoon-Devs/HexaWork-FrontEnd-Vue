import { OfertaParaDominio } from "../../dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { ServicioListarOfertasDeTrabajo } from "../../dominio/servicios/ServicioListarOfertasDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuerto } from "../ui/UIPuerto";

export class MostrarOfertasDeTrabajo extends UIPuerto{

    private resultado:any

    public listarOfertasUI(apiPuerto: APIPuerto):OfertaParaDominio[] | {statusCode: number, mensaje: string}{
        try{
            this.listarOfertasApi(apiPuerto)

            const mapper: Mapper = new MappearOfertaDeTrabajo()
            const ofertas: OfertaParaDominio[] = []
            this.resultado.forEach((oferta : any) => {
                ofertas.push(mapper.paraInfraestructura(oferta))
            })
          
            return ofertas
        }
        catch(error){
            return {statusCode: 500, mensaje:error.mensaje}
        }


    }

    public listarOfertasApi(apiPuerto: APIPuerto):void{

        const ofertas = apiPuerto.listarOfertas()

        this.resultado=[]
        ofertas.forEach((oferta : any) => {
            this.resultado.push(ServicioListarOfertasDeTrabajo.pasarADominio(oferta))
        })

    }

}
