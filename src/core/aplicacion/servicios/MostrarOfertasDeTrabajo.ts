import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { ServicioListarOfertasDeTrabajo } from "@/core/dominio/servicios/ServicioListarOfertasDeTrabajo";
import { AdaptadorMockOferta } from "@/core/infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuerto } from "../ui/UIPuerto";

export class MostrarOfertasDeTrabajo extends UIPuerto{

    private resultado:any

    public listarOfertasUI():OfertaParaDominio[]{
        
        this.listarOfertasApi()

        const mapper: Mapper = new MappearOfertaDeTrabajo()
        const ofertas: OfertaParaDominio[] = []
        this.resultado.forEach((oferta : any) => {
            ofertas.push(mapper.paraInfraestructura(oferta))
        })
      
        return ofertas
        
    }

    public listarOfertasApi():void{
        const apiPuerto: APIPuerto = new AdaptadorMockOferta()
        const ofertas = JSON.parse(apiPuerto.listarOfertas())
        // alert(ofertas[0])
        // alert(ofertas[0].empleador.nombreEmpresa.nombre)
        console.log(ofertas)

        this.resultado=[]
        ofertas.forEach((oferta : any) => {
            this.resultado.push(ServicioListarOfertasDeTrabajo.pasarADominio(oferta))
        })
    }
    
}