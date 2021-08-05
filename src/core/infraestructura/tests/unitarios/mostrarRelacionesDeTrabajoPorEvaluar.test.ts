import { MostrarRelacionesDeTrabajoPorEvaluar } from "../../../aplicacion/servicios/relacionesDeTrabajo/MostrarRelacionesDeTrabajoPorEvaluar";
import { UIPuertoRelacionesPorEvaluar } from "../../../aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesPorEvaluar";
import { AdaptadorTURelacionesDeTrabajo } from "../../adaptadores/adaptadoresUnitarios/adaptadorTURelacionesDeTrabajo";

//Test Mostrar Relaciones de Trabajo por Evaluar
test('Mostrar Relaciones de Trabajo por Evaluar', () => {

    const puertoRelaciones: UIPuertoRelacionesPorEvaluar = new MostrarRelacionesDeTrabajoPorEvaluar()
    expect(puertoRelaciones.listarRelacionesPorEvaluarUI(new AdaptadorTURelacionesDeTrabajo()).length).toBe(1);
});