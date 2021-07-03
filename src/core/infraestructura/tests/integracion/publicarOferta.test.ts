import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../../aplicacion/ui/UIPuertoCrearOferta";
import { AdaptadorTIOferta } from "../../adaptadorTIOferta";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";

import { PublicarOfertaDeTrabajo } from "../../../aplicacion/servicios/PublicarOfertaDeTrabajo";
import { UIPuertopublicarOferta } from "../../../aplicacion/ui/UIPuertopublicarOferta";
import { PublicarOfertasDeTrabajo } from "../../../aplicacion/servicios/PublicarOfertasDeTrabajo";


test('Publicar una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoPublicarOferta: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()

    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
            }
        },
        direccion: {
            calle1: "Principal",
            calle2: "Oeste",
            ciudad: "Caracas",
            estado:"Distrito Capital",
            zip:"1011"
        },
        duracion: "8",
        fechaLimite: "2020-05-05",
        titulo: "Se necesita desarrollador web",
        vacante: "1",
        remuneracion: {
            monto: "700",
            divisa:"dolar",
            frecuencia:"mes"
        },
        cargo: {
            propiedades: {
                cargo : "Desarrollador Web Junior"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "Raccoon Developers",
                rif: "J500805050"
            },
            direccion: {
                propiedades: {
                    calle1: "Raccoon",
                    calle2: "Oeste",
                    ciudad: "Caracas",
                    estado: "Distrito Capital",
                    zip: "1011"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "Alejandro Daniel Pérez Verde",
                    cargoDeTrabajo: "Desarrollador Senior",
                    numeroDeTelefono: "+584141234567",
                    correo: "alejandroperez@raccoondevelopers.com"
                }
            },
            rol:{
                propiedades:{
                    nombre: "Gerente"
                }
            }
        },
    }

    const hoy = new Date()
    const dd = String(hoy.getDate()).padStart(2, '0')
    const mm = String(hoy.getMonth() + 1).padStart(2, '0')
    const yyyy = hoy.getFullYear()

    const ofertaDesdeUI = {
        descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles",
        estado: "Draft",
        fecha_fin: "05/05/2020",
        fecha_inicio:  dd + '/' + mm + '/' + yyyy,
        nombre:"Se necesita desarrollador web",
        pago: "700"
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 201, mensaje: "Oferta Creada Con éxito"});
    expect(puertoPublicarOferta.publicarOfertaUI(ofertaDesdeUI, new AdaptadorTIOferta())).toEqual({statusCode: 201, mensaje: "Oferta Actualizada Con éxito"});
});
