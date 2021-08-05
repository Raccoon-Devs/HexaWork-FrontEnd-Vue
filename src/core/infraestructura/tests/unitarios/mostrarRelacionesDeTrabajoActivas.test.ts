import { MostrarRelacionesDeTrabajoActivas } from "../../../aplicacion/servicios/MostrarRelacionesDeTrabajoActivas";
import { UIPuertoRelacionesDeTrabajo } from "../../../aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesDeTrabajo";
import { AdaptadorTURelacionesDeTrabajo } from "../../adaptadores/adaptadoresUnitarios/adaptadorTURelacionesDeTrabajo";

//Test Mostrar Relaciones de Trabajo Activas
test('Mostrar Relaciones de Trabajo Activas', () => {

    const puertoRelaciones: UIPuertoRelacionesDeTrabajo = new MostrarRelacionesDeTrabajoActivas()
    expect(puertoRelaciones.listarRelacionesDeTrabajoUI(new AdaptadorTURelacionesDeTrabajo()).length).toBe(1);
});