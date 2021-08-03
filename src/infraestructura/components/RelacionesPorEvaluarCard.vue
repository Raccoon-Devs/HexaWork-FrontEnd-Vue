<template>
    <v-container>
        <v-card>
            <h3 class="px-8 py-8 indigo--text">
                Relaciones de trabajo por evaluar
            </h3>
            <v-data-table
                :headers="columnas_tabla"
                :items="relaciones"
                :items-per-page="5"
                class="elevation-1"
            >
                <template v-slot:[`item.accion`]>
                    <v-btn
                        class="white--text"
                        elevation="2"
                        color="indigo"
                        @click.stop="showForm=true"
                    >
                        Evaluar
                    </v-btn>
                    <EvaluacionEmpleadoDialog  v-model="showForm"/>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
 </template>

 <script lang="ts">
    import Vue from 'vue'
    import  EvaluacionEmpleadoDialog from './EvaluacionEmpleadoDialog.vue'
    import { UIPuertoRelacionesPorEvaluar } from '../../core/aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesPorEvaluar'
    import { MostrarRelacionesDeTrabajoPorEvaluar } from '../../core/aplicacion/servicios/relacionesDeTrabajo/MostrarRelacionesDeTrabajoPorEvaluar'
    import { AdaptadorMockRelacionDeTrabajo } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockRelacionDeTrabajo'

    export default Vue.extend({
        name: 'RelacionesPorEvaluarCard',
        components: {
            EvaluacionEmpleadoDialog
        },
        data: () => ({

            showForm: false,

            columnas_tabla: [
                {
                    text: 'Empleado',
                    align: 'center',
                    sortable: true,
                    filterable: true,
                    value: 'empleado',
                    class: 'indigo--text font-weight-bold',
                },
                {
                    text: 'Título de Trabajo',
                    align: 'center',
                    sortable: true,
                    filterable: true,
                    value: 'postulacion.ofertaDeTrabajo.tituloTrabajo',
                    class: 'indigo--text font-weight-bold',
                },
                {
                    text: 'Acción',
                    align: 'center',
                    sortable: false,
                    value: 'accion',
                    class: 'indigo--text font-weight-bold'
                }
            ],
            relaciones: [{
                empleado: null
            }],
        }),
        methods: {
            listarRelacionesDeTrabajoActivas() {
                let controlador: UIPuertoRelacionesPorEvaluar = new MostrarRelacionesDeTrabajoPorEvaluar()
                let relacionesEnElRepo = controlador.listarRelacionesPorEvaluarUI(new AdaptadorMockRelacionDeTrabajo())
                this.relaciones = []
                relacionesEnElRepo.forEach((relacion: any) => {
                    this.relaciones.push(relacion)
                })    
                this.relaciones.forEach((relacion: any) => {
                    relacion.empleado = `${relacion.postulacion.empleado.nombreCompleto.primerNombre}
                                        ${relacion.postulacion.empleado.nombreCompleto.primerApellido}`
                })
            }
        },
        mounted() {
            this.listarRelacionesDeTrabajoActivas()
        }
    })
 </script>
