import { ServicioListarOfertasDeTrabajo } from "@/core/dominio/servicios/ServicioListarOfertasDeTrabajo";
import { AdaptadorMockOferta } from "@/core/infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuerto } from "../ui/UIPuerto";

export class MostrarOfertasDeTrabajo extends UIPuerto{

    private resultado:any

    public listarOfertasUI(){
        
        this.listarOfertasApi()

        //3 mapear
        const mapper: Mapper = new MappearOfertaDeTrabajo()
        return mapper.paraInfraestructura(this.resultado)
        
    }

    public listarOfertasApi(){
        //1
        const apiPuerto: APIPuerto = new AdaptadorMockOferta()
        let ofertas = apiPuerto.listarOfertas()

        //2
        this.resultado = ServicioListarOfertasDeTrabajo.pasarADominio(ofertas)
        
        

    }
    
}