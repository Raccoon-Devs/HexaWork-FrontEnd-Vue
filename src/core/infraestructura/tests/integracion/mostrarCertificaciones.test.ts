import { MostrarCertificaciones } from "../../../aplicacion/servicios/certificaciones/MostrarCertificaciones";
import { UIPuertoCertificaciones } from "../../../aplicacion/ui/certificaciones/UIPuertoCertificaciones";
import { AdaptadorTICertificaciones } from "../../adaptadores/adaptadoresIntegracion/adaptadorTICertificaciones";

//Test Mostrar Certificaciones
test('Mostrar Certificaciones', () => {

    const puertoCertificaciones: UIPuertoCertificaciones = new MostrarCertificaciones()
    expect(puertoCertificaciones.listarCertificacionesUI(new AdaptadorTICertificaciones()).length).toBe(7);
});