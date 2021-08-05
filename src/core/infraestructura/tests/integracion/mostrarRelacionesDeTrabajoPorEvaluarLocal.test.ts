import { MostrarRelacionesDeTrabajoPorEvaluar } from "../../../aplicacion/servicios/relacionesDeTrabajo/MostrarRelacionesDeTrabajoPorEvaluar";
import { UIPuertoRelacionesPorEvaluar } from "../../../aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesPorEvaluar";
import { AdaptadorTIRelacionesDeTrabajo } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIRelacionesDeTrabajo";

//Test Mostrar Relaciones de Trabajo por Evaluar
test('Mostrar Relaciones de Trabajo por Evaluar', () => {

    const puertoRelaciones: UIPuertoRelacionesPorEvaluar = new MostrarRelacionesDeTrabajoPorEvaluar()
    expect(puertoRelaciones.listarRelacionesPorEvaluarUI(new AdaptadorTIRelacionesDeTrabajo()).length).toBe(1);
});