
import { UIPuertoPublicarOferta } from "../../..//aplicacion/ui/UIPuertoPublicarOferta";
import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../..//aplicacion/ui/UIPuertoCrearOferta";
import { PublicarOfertaDeTrabajo } from "../../../aplicacion/servicios/PublicarOfertaDeTrabajo";
import { AdaptadorTUOferta } from "../../adaptadores/adaptadoresUnitarios/adaptadorTUOferta";

//Test Publicar Oferta
test('publicar una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()

    const puertoPublicarOferta: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()

    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "Título crear oferta",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "codigoPos"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 3.44,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }

    expect(puertoPublicarOferta.publicarOfertaUI(oferta, new AdaptadorTUOferta())).toEqual({statusCode: 201, mensaje: "Oferta Actualizada Con éxito"});
});
