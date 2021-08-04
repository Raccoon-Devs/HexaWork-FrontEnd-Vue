import { MostrarCertificaciones } from "../../../aplicacion/servicios/certificaciones/MostrarCertificaciones";
import { UIPuertoCertificaciones } from "../../../aplicacion/ui/certificaciones/UIPuertoCertificaciones";
import { AdaptadorTUCertificaciones } from "../../adaptadores/adaptadoresUnitarios/adaptadorTUCertificaciones";

//Test Mostrar Certificaciones
test('Mostrar Certificaciones', () => {

    const puertoOferta: UIPuertoCertificaciones = new MostrarCertificaciones()
    expect(puertoOferta.listarCertificacionesUI(new AdaptadorTUCertificaciones()).length).toBe(7);
});