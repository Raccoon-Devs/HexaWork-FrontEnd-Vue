import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { AdaptadorTIOferta } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIOferta";

//Test Mostrar Oferta Culminadas
test('Mostrar Oferta de Trabajo Culminadas', () => {

    const puertoOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    expect(puertoOferta.listarOfertasCulminadasUI(new AdaptadorTIOferta()).length).toBe(2);
});