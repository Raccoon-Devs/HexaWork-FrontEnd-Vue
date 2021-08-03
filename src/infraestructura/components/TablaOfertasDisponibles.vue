<template>
	<v-container>
		<v-snackbar
        v-model="ofertaPublicacion"
        top
		>
			Oferta publicada con éxito

			<template v-slot:action="{ attrs }">
			<v-btn
				color="indigo lighten-3"
				text
				v-bind="attrs"
				@click="ofertaPublicacion = false"
			>
				Cerrar
			</v-btn>
			</template>
		</v-snackbar>
		<v-card class="py-4 ma-sm-9" color="#F5F5F5" elevation="4" shaped>
			<v-card-title class="grey--text text--darken-2">
				Consultar Ofertas de Trabajo
			</v-card-title>
			<v-row align="center">
				<v-col cols="11" class="ml-5">
					<v-text-field clear-icon="mdi-close" clearable label="Buscar"
					prepend-icon="mdi-magnify" type="text" v-model="busqueda" name="busqueda"> </v-text-field>
				</v-col>
			</v-row>
			<v-row class="d-none d-md-flex">
				<v-col cols="12" class="text-right">
					<formulario-oferta @ofertaCreada="listarOfertas()"/>
				</v-col>
			</v-row>
			<v-data-table class="mt-5 mx-5" :headers="columnas_tabla" :items="ofertas" :search="busqueda"
				no-data-text="No hay ofertas disponibles."
				no-results-text="No hay ofertas para esta búsqueda."
				loading-text="Cargando datos..."
				locale="es-VE"
				fixed-header
			>
				<!-- <template v-slot:[`item.direccion`]="{ item }">
					<v-icon dense color="primary" @click="item"> mdi-eye </v-icon>
				</template>
				<template v-slot:[`item.calendario`]="{ item }">
					<v-icon dense color="primary" @click="item"> mdi-eye </v-icon>
				</template>
				<template v-slot:[`item.habilidades`]="{ item }">
					<v-icon dense color="primary" @click="item"> mdi-eye </v-icon>
				</template>
				<template v-slot:[`item.requerimientosEspeciales`]="{ item }">
					<v-icon dense color="primary" @click="item"> mdi-eye </v-icon>
				</template>
				<template v-slot:[`item.certificaciones`]="{ item }">
					<v-icon dense color="primary" @click="item"> mdi-eye </v-icon>
				</template> -->
				<template v-slot:[`item.estadoOfertaDeTrabajo`]="{ item }">
					<span v-if="item.estadoOfertaDeTrabajo == 0">Creada</span>
					<span v-else-if="item.estadoOfertaDeTrabajo == 1">Abierta a Postulación</span>
					<span v-else-if="item.estadoOfertaDeTrabajo == 2">Postulaciones Cerradas</span>
					<span v-else-if="item.estadoOfertaDeTrabajo == 3">Asignada</span>
					<span v-else-if="item.estadoOfertaDeTrabajo == 4">En progreso</span>
					<span v-else-if="item.estadoOfertaDeTrabajo == 5">Finalizada</span>
					<span v-else>Cancelada</span>
				</template>
				<template v-slot:[`item.duracion`]="{ item }">
					<span v-text="`${item.duracion} hora`" v-if="item.duracion == 1"></span>
					<span v-text="`${item.duracion} horas`" v-else></span>
				</template>
				<template v-slot:[`item.remuneracionPorHora`]="{ item }">
					<span v-text="`$ ${item.remuneracionPorHora} por hora`"></span>
				</template>
				<template v-slot:[`item.acciones`]="{ item }">
					<v-icon dense color="primary" @click="mostrarDatosDeOferta(item)"> mdi-eye </v-icon>
					<v-icon dense color="black" @click="listarPostulantesDeOferta(item)" v-if="item.estadoOfertaDeTrabajo != 0"> mdi-account-multiple </v-icon>
					<v-icon dense color="green" @click="publicarOferta(item)" v-if="item.estadoOfertaDeTrabajo == 0"> mdi-clipboard-check </v-icon>
				</template>
			</v-data-table>
		</v-card>

		<!-- Datos Oferta de Trabajo -->
		<v-dialog v-model="datosOferta" class="text-center" max-width="450">
            <v-card rounded="md">
                <v-card-title>
                    <span class="d-none d-sm-flex"> Datos de la Oferta de Trabajo </span>
                    <b class="d-flex d-sm-none text-subtitle-1 font-weight-bold"> Datos de la Oferta de Trabajo </b>
                    <v-spacer> </v-spacer>
                    <v-btn icon @click="datosOferta = false"><v-icon> mdi-close </v-icon></v-btn>
                </v-card-title>
                <v-card-subtitle class="grey--text text--darken-2 subtitle-1 d-flex justify-center justify-sm-start"> 
                    <span v-text="` ${oferta.tituloTrabajo} `"></span>
                </v-card-subtitle>
            </v-card>
        </v-dialog>

		<!-- Postulaciones -->
		<v-dialog v-model="verPostulaciones" class="text-center" max-width="450">
            <v-card rounded="md">
                <v-card-title>
                    <span class="d-none d-sm-flex"> Postulaciones </span>
                    <b class="d-flex d-sm-none text-subtitle-1 font-weight-bold"> Postulaciones </b>
                    <v-spacer> </v-spacer>
                    <v-btn icon @click="verPostulaciones = false"><v-icon> mdi-close </v-icon></v-btn>
                </v-card-title>
				<div v-if="postulaciones.length > 0">
					<v-col>
						<v-list>
							<template v-for="(postulacion, index) in postulaciones">
								<v-list-item :key="postulacion.idPostulacion">
									<v-list-item-icon class="d-none d-sm-flex">
                                            <v-icon color="indigo"> mdi-account </v-icon>
                                        </v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title> {{postulacion.apellido}}, {{postulacion.nombre}} </v-list-item-title>
										<v-list-item-subtitle><b>SSN:</b> {{postulacion.ssn}} </v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-divider v-if="index < postulaciones.length -1" :key="index + 'a'"></v-divider>
							</template>
						</v-list>
					</v-col>
				</div>
                <v-card-subtitle class="grey--text text--darken-2" v-else>
                    <br>
                    No se encontraron postulantes.
                </v-card-subtitle>
            </v-card>
        </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {UIPuerto} from '../../core/aplicacion/ui/UIPuerto'
import {UIPuertoPublicarOferta} from '../../core/aplicacion/ui/UIPuertoPublicarOferta'
import {UIPuertoPostulaciones} from '../../core/aplicacion/ui/postulaciones/UIPuertoPostulaciones'
import {MostrarOfertasDeTrabajo} from '../../core/aplicacion/servicios/MostrarOfertasDeTrabajo'
import {MostrarPostuladosDeOferta} from '../../core/aplicacion/servicios/postulaciones/MostrarPostuladosDeOferta'
import {PublicarOfertaDeTrabajo} from '../../core/aplicacion/servicios/PublicarOfertaDeTrabajo'
import { AdaptadorMockOferta } from '../../core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockOferta'
import { AdaptadorMockPostulaciones } from '../../core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockPostulaciones'
import FormularioOferta  from '../components/FormularioOferta.vue'

export default Vue.extend({
	name: 'TablaOfertasDisponibles',

	components: {
		FormularioOferta
	}, 

	data: () => ({
		ofertas: [{}],
		postulaciones: [{
			nombre: null,
			apellido: null,
			ssn: null
		}],
		datosOferta: false,
		verPostulaciones: false,
		oferta: {},
		columnas_tabla: [
			{
				text: 'Título',
				align: 'center',
				sortable: true,
				filterable: true,
				value: 'tituloTrabajo',
				class: 'primary--text font-weight-bold',
			},
			// {
			// 	text: 'Dirección',
			// 	align: 'center',
			// 	sortable: false,
			// 	value: 'direccion',
			// 	class: 'primary--text font-weight-bold'
			// },
			{
				text: 'Fecha Límite de Postulación',
				align: 'center',
				sortable: true,
				value: 'fechaLimitePostulacionOfertaDeTrabajo',
				class: 'primary--text font-weight-bold'
			},
			// {
			// 	text: 'Calendario',
			// 	align: 'center',
			// 	sortable: false,
			// 	value: 'calendario',
			// 	class: 'primary--text font-weight-bold'
			// },
			// {
			// 	text: 'Habilidad(es)',
			// 	align: 'center',
			// 	sortable: false,
			// 	value: 'habilidades',
			// 	class: 'primary--text font-weight-bold'
			// },
			// {
			// 	text: 'Requerimiento(s) Especial(es)',
			// 	align: 'center',
			// 	sortable: false,
			// 	value: 'requerimientosEspeciales',
			// 	class: 'primary--text font-weight-bold'
			// },
			// {
			// 	text: 'Certificación(es)',
			// 	align: 'center',
			// 	sortable: false,
			// 	value: 'certificaciones',
			// 	class: 'primary--text font-weight-bold'
			// },
			{
				text: 'Estado de la Oferta',
				align: 'center',
				sortable: false,
				value: 'estadoOfertaDeTrabajo',
				class: 'primary--text font-weight-bold'
			},
			{
				text: 'Duración',
				align: 'center',
				sortable: true,
				value: 'duracion',
				class: 'primary--text font-weight-bold'
			},
			{
				text: 'Pago x Hora',
				align: 'center',
				sortable: true,
				value: 'remuneracionPorHora',
				class: 'primary--text font-weight-bold'
			},
			{
				text: 'Acciones',
				align: 'center',
				sortable: false,
				value: 'acciones',
				class: 'primary--text font-weight-bold',
			},
		],
		busqueda: '',
		ofertaPublicacion: false
	}),
	methods: {
		listarOfertas(){
			let controlador: UIPuerto = new MostrarOfertasDeTrabajo()
			let ofertasEnElRepo = controlador.listarOfertasUI(new AdaptadorMockOferta())
			this.ofertas = []
			ofertasEnElRepo.forEach((oferta: any) => {
				this.ofertas.push(oferta)
			})
		},
		publicarOferta(oferta: any) {
			let controlador: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()
			controlador.publicarOfertaUI(oferta, new AdaptadorMockOferta())
			this.listarOfertas()
			this.ofertaPublicacion = true
		},
		listarPostulantesDeOferta(oferta: any) {
			let controlador: UIPuertoPostulaciones = new MostrarPostuladosDeOferta()
			let postulacionesEnElRepo = controlador.listarPostulacionesUI(new AdaptadorMockPostulaciones(), oferta)
			this.postulaciones = []
			postulacionesEnElRepo.forEach((postulacion: any) => {
				this.postulaciones.push({
					nombre: postulacion.empleado.nombreCompleto.primerNombre,
					apellido: postulacion.empleado.nombreCompleto.primerApellido,
					ssn: postulacion.empleado.ssn
				})
			})
			this.verPostulaciones = true
		},
		mostrarDatosDeOferta(oferta: any) {
			this.oferta = oferta
			this.datosOferta = true
		}
	},
	mounted() {
		this.listarOfertas()
	}
})
</script>
