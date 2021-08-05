import { MostrarHabilidades } from "../../../aplicacion/servicios/habilidades/MostrarHabilidades";
import { UIPuertoHabilidades } from "../../../aplicacion/ui/habilidades/UIPuertoHabilidades";
import { AdaptadorTUHabilidades } from "../../adaptadores/adaptadoresUnitarios/adaptadorTUHabilidades";

//Test Mostrar Habilidades
test('Mostrar Habilidades', () => {

    const puertoHabilidades: UIPuertoHabilidades = new MostrarHabilidades()
    expect(puertoHabilidades.listarHabilidadesUI(new AdaptadorTUHabilidades()).length).toBe(7);
});