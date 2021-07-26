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
					<v-icon dense color="green" @click="publicarOferta(item)" v-if="item.estadoOfertaDeTrabajo == 0"> mdi-clipboard-check </v-icon>
				</template>
			</v-data-table>
		</v-card>

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
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {UIPuerto} from '../../core/aplicacion/ui/UIPuerto'
import {UIPuertoPublicarOferta} from '../../core/aplicacion/ui/UIPuertoPublicarOferta'
import {MostrarOfertasDeTrabajo} from '../../core/aplicacion/servicios/MostrarOfertasDeTrabajo'
import {PublicarOfertaDeTrabajo} from '../../core/aplicacion/servicios/PublicarOfertaDeTrabajo'
import { AdaptadorMockOferta } from '@/core/infraestructura/adaptadorMockOferta'
import FormularioOferta  from '../components/FormularioOferta.vue'

export default Vue.extend({
	name: 'TablaOfertasDisponibles',

	components: {
		FormularioOferta
	}, 

	data: () => ({
		ofertas: [{}],
		datosOferta: false,
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
