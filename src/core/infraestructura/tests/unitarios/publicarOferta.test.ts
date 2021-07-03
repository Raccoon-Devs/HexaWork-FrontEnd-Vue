
import { UIPuertoPublicarOferta } from "../../..//aplicacion/ui/UIPuertoPublicarOferta";
import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../..//aplicacion/ui/UIPuertoCrearOferta";
import { PublicarOfertaDeTrabajo } from "../../../aplicacion/servicios/PublicarOfertaDeTrabajo";
import { AdaptadorTUOferta } from "../../adaptadorTUOferta";

//Test Publicar Oferta
test('publicar una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()

    const puertoPublicarOferta: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const ofertaDesdeUI = {
        descripcion: "descripcion",
        estado: "Draft",
        fecha_fin: "05/05/2020",
        fecha_inicio:  dd + '/' + mm + '/' + yyyy,
        nombre:"a",
        pago: "5"
    }

    expect(puertoPublicarOferta.publicarOfertaUI(ofertaDesdeUI, new AdaptadorTUOferta())).toEqual({statusCode: 201, mensaje: "Oferta Actualizada Con éxito"});
});
