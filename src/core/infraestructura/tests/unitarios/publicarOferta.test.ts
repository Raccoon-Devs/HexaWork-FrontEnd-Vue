
import { UIPuertoPublicarOferta } from "../../..//aplicacion/ui/UIPuertoPublicarOferta";
import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../..//aplicacion/ui/UIPuertoCrearOferta";
import { PublicarOfertaDeTrabajo } from "../../../aplicacion/servicios/PublicarOfertaDeTrabajo";
import { AdaptadorTUOferta } from "../../adaptadorTUOferta";

//Test Publicar Oferta
test('publicar una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()

    const puertoPublicarOferta: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()

    const hoy = new Date()
    const dd = String(hoy.getDate()).padStart(2, '0')
    const mm = String(hoy.getMonth() + 1).padStart(2, '0')
    const yyyy = hoy.getFullYear()

    const ofertaDesdeUI = {
        descripcion: "descripcion",
        estado: "Draft",
        fechaLimite: "05/05/2020",
        fechaPublicacion:  dd + '/' + mm + '/' + yyyy,
        nombre:"a",
        pago: "5"
    }

    expect(puertoPublicarOferta.publicarOfertaUI(ofertaDesdeUI, new AdaptadorTUOferta())).toEqual({statusCode: 201, mensaje: "Oferta Actualizada Con éxito"});
});
