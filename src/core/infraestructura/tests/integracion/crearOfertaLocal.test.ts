import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../../aplicacion/ui/UIPuertoCrearOferta";
import { AdaptadorTIOferta } from "../../adaptadorTIOferta";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";

//Test Crear Oferta
test('Crea una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Oferta Creada Con éxito");
});

// Test Título
test('Muestra error al intentar crear una oferta de trabajo sin título', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "",
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El titulo: \"\" es inválido, el título no puede estar vacío");
});

//Dirección
    //Calle 1
test('Muestra error al intentar crear una oferta de trabajo con calle 1 de dirección vacía', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "",
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("La calle1:  es inválida, no puede estar vacía");
});

    //Calle 2
test('Muestra error al intentar crear una oferta de trabajo con calle 2 de dirección vacía', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "",
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("La calle2:  es inválida, no puede estar vacía");
});

    //Ciudad
test('Muestra error al intentar crear una oferta de trabajo con ciudad de dirección vacía', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "",
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("La ciudad:  es inválida, no puede estar vacía");
});

    //Estado
test('Muestra error al intentar crear una oferta de trabajo con estado de dirección vacío', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "",
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El estado:  es inválido, no puede estar vacío");
});

    //Codigo Postal
test('Muestra error al intentar crear una oferta de trabajo con codigo postal de dirección vacío', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: ""
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
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El código postal:  es inválido, no puede estar vacío");
});

//Test Duración
test('Muestra error al intentar crear una oferta de trabajo con una duración vacía', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: "",
        remuneracionPorHora: 3.44,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Las horas totales son inválidas, no pueden estar vacías");
});

test('Muestra error al intentar crear una oferta de trabajo con una duración negativa', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: -8,
        remuneracionPorHora: 3.44,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Las horas totales: -8 no pueden ser menores a 0");
});

//Test Remuneración

    //Monto
test('Muestra error al intentar crear una oferta de trabajo con un monto de remuneración vacío', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 0,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El monto: 0 es inválido, no puede estar vacío");
});

test('Muestra error al intentar crear una oferta de trabajo con un monto de remuneración negativo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: -5,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El monto: -5 es inválido, no puede ser negativo");
});

//Estado Oferta de Trabajo
test('Muestra error al intentar crear una oferta de trabajo con un estado de oferta de trabajo vacío', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 5,
        estadoOfertaDeTrabajo: null,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El estado: null no puede estar vacio");
});

test('Muestra error al intentar crear una oferta de trabajo con un estado de oferta de trabajo invalido', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 5,
        estadoOfertaDeTrabajo: 7,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("El estado: 7 de la oferta debe ser: 0 (creado), 1 (publicado), 2 (postulaciones cerradas), 3 (empleado asignado), 4 (en progreso), 5 (finalizada), 6 (cancelada)");
});

//Vacante
test('Muestra error al intentar crear una oferta de trabajo con vacante vacía', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 5,
        estadoOfertaDeTrabajo: 1,
        vacantes: 0
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("La cantidad de vacantes: 0 es inválida, no puede estar vacía");
});

test('Muestra error al intentar crear una oferta de trabajo con vacante negativa', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 5,
        estadoOfertaDeTrabajo: 1,
        vacantes: -1
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("La cantidad de vacantes: -1 es inválida, debe ser mayor a cero");
});

//Requerimientos especiales
test('Muestra error al intentar crear una oferta de trabajo con requerimientos especiales vacíos', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: "titulo oferta de trabajo",
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "1011"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 5,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Los requerimientos especiales no pueden estar vacíos");
});