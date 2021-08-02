import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";

export abstract class APIPuerto{
    abstract listarOfertas() : any;
    abstract listarOfertasMock() : any;
    abstract crearOferta(dato: OfertaParaDominio) : any
    abstract actualizarOferta(dato: OfertaParaDominio) : any

}
