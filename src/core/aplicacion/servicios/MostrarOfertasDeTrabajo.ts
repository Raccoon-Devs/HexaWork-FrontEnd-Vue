import { OfertaParaDominio } from "../../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { ServicioListarOfertasDeTrabajo } from "../../dominio/servicios/ServicioListarOfertasDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuerto } from "../ui/UIPuerto";

export class MostrarOfertasDeTrabajo extends UIPuerto {

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

    public listarOfertasActivasUI(apiPuerto:APIPuerto):OfertaParaDominio[] | {statusCode: number, mensaje: string}{
        try{
            this.listarOfertasActivasApi(apiPuerto)
            const mapper: Mapper = new MappearOfertaDeTrabajo()
            const ofertas: OfertaParaDominio[] = []
            this.resultado.forEach((oferta : any) => {
                if (oferta.propiedades.estadoOfertaDeTrabajo.propiedades.estado == 4) {
                    ofertas.push(mapper.paraInfraestructura(oferta))
                }
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

    public listarOfertasActivasApi(apiPuerto: APIPuerto): void {
        const ofertas = apiPuerto.listarOfertasMock()
        this.resultado=[]
        ofertas.forEach((oferta : any) => {
            if (oferta.estadoOfertaDeTrabajo == 4) {
                this.resultado.push(ServicioListarOfertasDeTrabajo.pasarADominio(oferta))
            }
        })
    }

}
