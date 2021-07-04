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
				<template v-slot:[`item.fechaPublicacion`]="{ item }">
					<span class="grey--text" v-if="!item.fechaPublicacion">Sin Definir</span>
					<span v-else v-text="item.fechaPublicacion.propiedades.fechaPublicacion"></span>
				</template>
				<template v-slot:[`item.remuneracion`]="{ item }">
					<span v-if="item.remuneracion.divisa == 'dolar'" v-text="`$ ${item.remuneracion.monto} por ${item.remuneracion.frecuencia}`"></span>
					<span v-else-if="item.remuneracion.divisa == 'euro'" v-text="`€ ${item.remuneracion.monto} por ${item.remuneracion.frecuencia}`"></span>
					<span v-else v-text="`Bs. ${item.remuneracion.monto} por ${item.remuneracion.frecuencia}`"></span>
				</template>
				<template v-slot:[`item.acciones`]="{ item }">
					<v-icon dense color="green" @click="publicarOferta(item)" v-if="!item.fechaPublicacion"> mdi-clipboard-check </v-icon>
				</template>
			</v-data-table>
		</v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {UIPuerto} from '../../core/aplicacion/ui/UIPuerto'
import {UIPuertoPublicarOferta} from '../../core/aplicacion/ui/UIPuertoPublicarOferta'
import {MostrarOfertasDeTrabajo} from '../../core/aplicacion/servicios/MostrarOfertasDeTrabajo'
import {PublicarOfertaDeTrabajo} from '../../core/aplicacion/servicios/PublicarOfertaDeTrabajo'
import { AdaptadorMockOferta } from '@/core/infraestructura/adaptadorMockOferta'
import { IDOferta } from '@/core/dominio/OfertasDeTrabajo/ValueObjects/IDOferta'
import FormularioOferta  from '../components/FormularioOferta.vue'

export default Vue.extend({
	name: 'TablaOfertasDisponibles',

	components: {
		FormularioOferta
	}, 

	data: () => ({
		ofertas: [{
			titulo: "",
			cargo: "",
			descripcion: "",
			duracion: "",
			direccion: {
				calle1: "",
				calle2: "",
				ciudad: "",
				estado: "",
				zip: ""
			},
			remuneracion: {
				monto: "",
				divisa: "",
				frecuencia: ""
			},
			vacantes: "",
			fechaLimite: ""
		}],
		ofertaCreada: {
			mostrar: false,
			mensaje: ""
		},
		columnas_tabla: [
			{
				text: 'Título',
				align: 'center',
				sortable: true,
				filterable: true,
				value: 'titulo',
				class: 'primary--text font-weight-bold',
			},
			{
				text: 'Descripción',
				align: 'center',
				sortable: false,
				value: 'descripcion.propiedades.descripcion',
				class: 'primary--text font-weight-bold'
			},
			{
				text: 'Fecha de Publicación',
				align: 'center',
				sortable: true,
				value: 'fechaPublicacion',
				class: 'primary--text font-weight-bold',
			},
			{
				text: 'Fecha Limite de Postulación',
				align: 'center',
				sortable: true,
				value: 'fechaLimite',
				class: 'primary--text font-weight-bold'
			},
			{
				text: 'Pago',
				align: 'center',
				sortable: true,
				value: 'remuneracion',
				class: 'primary--text font-weight-bold'
			},
			{
				text: 'Publicar',
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
		eliminarOferta(id: IDOferta) {
			const index = this.ofertas.findIndex((o: any) => o.id == id)
			this.ofertas.splice(index,1)
		},
		listarOfertas(){
			let controlador: UIPuerto = new MostrarOfertasDeTrabajo()
			let ofertasEnElRepo = controlador.listarOfertasUI(new AdaptadorMockOferta())
			this.ofertas = []
			
			ofertasEnElRepo.forEach((oferta: any) => {
				
				this.ofertas.push({...oferta, id:Object.values(oferta.id.valor)})
			})
		},
		publicarOferta(oferta: any) {
			let controlador: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()
			controlador.publicarOfertaUI(oferta, new AdaptadorMockOferta())
			this.listarOfertas()
			this.ofertaPublicacion = true
		}
	},
	mounted() {
		this.listarOfertas()
	}
})
</script>
