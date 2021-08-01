import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { AdaptadorTUOferta } from "../../adaptadores/adaptadoresUnitarios/adaptadorTUOferta";

//Test Mostrar Oferta
test('Mostrar Oferta de Trabajo', () => {

    const puertoOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    expect(puertoOferta.listarOfertasUI(new AdaptadorTUOferta()).length).toBe(1);
});