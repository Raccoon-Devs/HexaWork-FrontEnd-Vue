import { HabilidadParaDominio } from "@/core/dominio/Habilidad/DTOHabilidad";
import { Habilidad } from "@/core/dominio/Habilidad/Habilidad";
import { ServicioListarHabilidades } from "@/core/dominio/servicios/Habilidades/ServicioListarHabilidades";
import { APIPuertoHabilidades } from "../../api/Habilidades/APIPuertoHabilidades";
import { MappearHabilidad } from "../../mappers/MapperHabilidad";
import { UIPuertoHabilidades } from "../../ui/Habilidades/UIPuertoHabilidades";
import { Mapper } from "../../mappers/Mapper";

export class MostrarHabilidades extends UIPuertoHabilidades{

    public listarHabilidadesUI(apiPuerto: APIPuertoHabilidades): HabilidadParaDominio[] | {statusCode: number, mensaje: string}{
        try{
            const habilidadesEnElRepo = this.listarHabilidadesApi(apiPuerto)
            const mapper: Mapper = new MappearHabilidad()
            const habilidades: HabilidadParaDominio[] = []
            habilidadesEnElRepo.forEach((habilidad : any) => {
                habilidades.push(mapper.paraInfraestructura(habilidad))
            })
            return habilidades
        }
        catch(error){
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    public listarHabilidadesApi(apiPuerto: APIPuertoHabilidades): Habilidad[]{
        const habilidadesEnElRepo = apiPuerto.listarHabilidades()
        const habilidades: any[] = []
        habilidadesEnElRepo.forEach((habilidad : any) => {
            habilidades.push(ServicioListarHabilidades.pasarADominio(habilidad))
        })
        return habilidades
    }

}
