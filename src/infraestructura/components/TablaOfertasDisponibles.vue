<template>
	<v-container>
		<!-- <v-btn @click="listarOfertas">a</v-btn> -->
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
			<v-row class="d-none d-md-flex mr-5">
				<v-col cols="12" class="text-right">
					<v-btn color="indigo" dark> 
						<v-icon left> mdi-plus-circle </v-icon>
						Crear Oferta
					</v-btn>
				</v-col>
			</v-row>
			<v-data-table class="mt-5 mx-5" :headers="columnas_tabla" :items="ofertas" :search="busqueda"
				no-data-text="No hay ofertas disponibles."
				no-results-text="No hay ofertas para esta búsqueda."
				loading-text="Cargando datos..."
				locale="es-VE"
				fixed-header
			>
				<template v-slot:item.fechaPublicacion="{ item }">
					<span class="grey--text" v-if="!item.fechaPublicacion">Sin definir</span>
					<span v-text="item.fechaPublicacion.propiedades.fechaPublicacion" v-else></span>
				</template>
				<template v-slot:item.remuneracion="{ item }">
					<span v-text="`$ ${item.remuneracion.monto} por ${item.remuneracion.frecuencia}`" v-if="item.remuneracion.divisa == 'dolar'"></span>
					<span v-text="`€ ${item.remuneracion.monto} por ${item.remuneracion.frecuencia}`" v-else-if="item.remuneracion.divisa == 'euro'"></span>
					<span v-text="`Bs. ${item.remuneracion.monto} por ${item.remuneracion.frecuencia}`" v-else></span>
				</template>
				<template v-slot:item.acciones="{ item }">
					<v-icon dense color="primary"> mdi-pencil </v-icon>
					<v-icon dense color="primary"> mdi-eye </v-icon>
					<v-icon dense color="green" @click="publicarOferta(item.id)" v-if="!item.fechaPublicacion"> mdi-clipboard-check </v-icon>
					<v-icon dense color="red" @click="eliminarOferta(item.id)"> mdi-delete </v-icon>
				</template>
			</v-data-table>
		</v-card>
  </v-container>
</template>

<script lang="ts">
	import Vue from 'vue'
	import {UIPuerto} from '../../core/aplicacion/ui/UIPuerto'
	import { MostrarOfertasDeTrabajo } from '../../core/aplicacion/servicios/MostrarOfertasDeTrabajo'
	import { UIPuertoPublicarOferta } from '../../core/aplicacion/ui/UIPuertoPublicarOferta'
	import { PublicarOfertaDeTrabajo } from '../../core/aplicacion/servicios/PublicarOfertaDeTrabajo'

	export default Vue.extend({
    name: 'TablaOfertasDisponibles',

    data: () => ({
			ofertas: [],
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
					text: 'Fecha Límite de Postulación',
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
					text: 'Acciones',
					align: 'center',
					sortable: false,
					value: 'acciones',
					class: 'primary--text font-weight-bold',
				},
			],
			busqueda: '',
    }),
		methods: {
			publicarOferta(id: any) {
				const oferta = this.ofertas.find((o: any) => o.id == id)
				const puertoOferta: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()
				puertoOferta.publicarOfertaUI(oferta)
				this.listarOfertas()
			},
			eliminarOferta(id: any) {
				const index = this.ofertas.findIndex((o: any) => o.id == id)
				this.ofertas.splice(index,1)
			},
			listarOfertas(){
				let controlador: UIPuerto = new MostrarOfertasDeTrabajo()
				let ofertasEnElRepo = controlador.listarOfertasUI()
				this.ofertas =[]
				ofertasEnElRepo.forEach((oferta: any) => {
					this.ofertas.push(oferta)
				})
			}
		},
		mounted() {
			this.listarOfertas()
		}
  })
</script>