import { HabilidadParaDominio } from "@/core/dominio/habilidad/DTOHabilidad";
import { Habilidad } from "@/core/dominio/habilidad/Habilidad";
import { ServicioListarHabilidades } from "@/core/dominio/servicios/habilidades/ServicioListarHabilidades";
import { APIPuertoHabilidades } from "../../api/habilidades/APIPuertoHabilidades";
import { MappearHabilidad } from "../../mappers/MapperHabilidad";
import { UIPuertoHabilidades } from "../../ui/habilidades/UIPuertoHabilidades";
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
