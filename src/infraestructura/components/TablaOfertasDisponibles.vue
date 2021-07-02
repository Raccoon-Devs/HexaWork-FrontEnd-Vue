<template>
	<v-container>
		<v-btn @click="listarOfertas">a</v-btn>
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

			<v-data-table class="mt-5 mx-5" :headers="columnas_tabla" :items="ofertas" :search="busqueda"
				no-data-text="No hay ofertas disponibles."
				no-results-text="No hay ofertas para esta búsqueda."
				loading-text="Cargando datos..."
				locale="es-VE"
				fixed-header
				:loading="tablaCargando"
			>

				<template v-slot:item.acciones="{ item }">
					<v-icon dense color="primary"> mdi-pencil </v-icon>
					<v-icon dense color="primary"> mdi-eye </v-icon>
					<v-icon dense color="primary" @click="publicarOferta(item)"> mdi-publish </v-icon>
					<v-icon dense color="red" @click="eliminarOferta(item.id)"> mdi-delete </v-icon>
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


export default Vue.extend({
	name: 'TablaOfertasDisponibles',

	data: () => ({
			ofertas: [
				{
					id: "1",
					nombre: 'Mantenimiento de impresoras',
					descripcion: 'Mantenimiento de impresoras',
					fecha_inicio: '23/06/2021',
					fecha_fin: '28/06/2021',
					estado: 0,
					pago: '$10 por hora'
				},
				{
					id: "2",
					nombre: 'Mantenimiento de computadoras',
					descripcion: 'Mantenimiento de computadoras',
					fecha_inicio: '24/06/2021',
					fecha_fin: '29/06/2021',
					estado: 0,
					pago: '$20 por hora'
				},
				{
					id: "3",
					nombre: 'Mantenimiento de monitores',
					descripcion: 'Mantenimiento de monitores',
					fecha_inicio: '25/06/2021',
					fecha_fin: '30/06/2021',
					estado: 0,
					pago: '$30 por hora'
				}
			],
			columnas_tabla: [
				{
					text: 'Nombre',
					align: 'center',
					sortable: true,
					filterable: true,
					value: 'nombre',
					class: 'primary--text font-weight-bold',
				},
				{
					text: 'Descripción',
					align: 'center',
					sortable: false,
					value: 'descripcion',
					class: 'primary--text font-weight-bold'
				},
				{
					text: 'Fecha de Inicio',
					align: 'center',
					sortable: true,
					value: 'fecha_inicio',
					class: 'primary--text font-weight-bold',
				},
				{
					text: 'Fecha Fin',
					align: 'center',
					sortable: true,
					value: 'fecha_fin',
					class: 'primary--text font-weight-bold'
				},
				{
					text: 'Pago',
					align: 'center',
					sortable: true,
					value: 'pago',
					class: 'primary--text font-weight-bold'
				},
				{
					text: 'Estado',
					align: 'center',
					sortable: true,
					value: 'estado',
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
			eliminarOferta(id: number) {
				const index = this.ofertas.findIndex(o => o.id == id)
				this.ofertas.splice(index,1)
			},
			listarOfertas(){
				let controlador: UIPuerto = new MostrarOfertasDeTrabajo()
				let ofertasEnElRepo = controlador.listarOfertasUI(new AdaptadorMockOferta())
				//console.log(ofertasEnElRepo)

				this.ofertas =[]
				ofertasEnElRepo.forEach(oferta => {

					this.ofertas.push({
						id: oferta.id.valor,
						nombre: oferta.titulo,
						descripcion: oferta.descripcion.propiedades.descripcion,
						fecha_inicio: oferta.fechaLimite,
						fecha_fin: '28/06/2021',
						pago: oferta.remuneracion.monto,
						estado: oferta.estadoOfertaDeTrabajo == 1 ? 'Publicado' : 'Draft'
					})
				})
			},
			publicarOferta(oferta: any) {
				let controlador: UIPuertoPublicarOferta = new PublicarOfertaDeTrabajo()
				controlador.publicarOfertaUI(oferta, new AdaptadorMockOferta())
			}
		}
  })
</script>
