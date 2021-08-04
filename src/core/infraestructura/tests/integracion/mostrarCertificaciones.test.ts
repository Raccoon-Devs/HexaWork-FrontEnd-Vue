import { MostrarCertificaciones } from "../../../aplicacion/servicios/certificaciones/MostrarCertificaciones";
import { UIPuertoCertificaciones } from "../../../aplicacion/ui/certificaciones/UIPuertoCertificaciones";
import { AdaptadorTICertificaciones } from "../../adaptadores/adaptadoresIntegracion/adaptadorTICertificaciones";

//Test Mostrar Certificaciones
test('Mostrar Certificaciones', () => {

    const puertoOferta: UIPuertoCertificaciones = new MostrarCertificaciones()
    expect(puertoOferta.listarCertificacionesUI(new AdaptadorTICertificaciones()).length).toBe(7);
});