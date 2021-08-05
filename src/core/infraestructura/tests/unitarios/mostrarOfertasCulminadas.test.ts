import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { AdaptadorTUOferta } from "../../adaptadores/adaptadoresUnitarios/adaptadorTUOferta";

//Test Mostrar Oferta Culminadas
test('Mostrar Oferta de Trabajo Culminadas', () => {

    const puertoOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    expect(puertoOferta.listarOfertasCulminadasUI(new AdaptadorTUOferta()).length).toBe(2);
});