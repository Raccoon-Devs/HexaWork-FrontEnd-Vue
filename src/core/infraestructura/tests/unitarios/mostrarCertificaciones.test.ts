import { MostrarCertificaciones } from "../../../aplicacion/servicios/certificaciones/MostrarCertificaciones";
import { UIPuertoCertificaciones } from "../../../aplicacion/ui/certificaciones/UIPuertoCertificaciones";
import { AdaptadorTUCertificaciones } from "../../adaptadores/adaptadoresUnitarios/adaptadorTUCertificaciones";

//Test Mostrar Certificaciones
test('Mostrar Certificaciones', () => {

    const puertoCertificaciones: UIPuertoCertificaciones = new MostrarCertificaciones()
    expect(puertoCertificaciones.listarCertificacionesUI(new AdaptadorTUCertificaciones()).length).toBe(7);
});