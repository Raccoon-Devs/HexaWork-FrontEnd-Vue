import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { AdaptadorTIOferta } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIOferta";

test('Mostrar ofertas de trabajo', () => {

    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(1)
});