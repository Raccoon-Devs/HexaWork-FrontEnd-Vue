<template>
    <v-container>
        <v-card>
            <h3 class="px-8 py-8 indigo--text">
                Relaciones de trabajo por evaluar
            </h3>
            <v-data-table
                :headers="columnas_tabla"
                :items="relacionesPorEvaluar"
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
                    value: 'empleadoTrabajo',
                    class: 'indigo--text font-weight-bold',
                },
                {
                    text: 'Título',
                    align: 'center',
                    sortable: true,
                    filterable: true,
                    value: 'tituloTrabajo',
                    class: 'indigo--text font-weight-bold',
                },
                {
                    text: 'Fecha de culminación',
                    align: 'center',
                    sortable: false,
                    value: 'fechaCulmincacionDeTrabajo',
                    class: 'indigo--text font-weight-bold'
                },
                {
                    text: 'Acción',
                    align: 'center',
                    sortable: false,
                    value: 'accion',
                    class: 'indigo--text font-weight-bold'
                }
            ],
            relacionesPorEvaluar: [
                {
                    empleadoTrabajo: 'empleadoTrabajo',
                    tituloTrabajo: 'tituloTrabajo',
                    fechaCulmincacionDeTrabajo: 'fechaCulmincacionDeTrabajo'
                },
                {
                    empleadoTrabajo: 'empleadoTrabajo',
                    tituloTrabajo: 'tituloTrabajo',
                    fechaCulmincacionDeTrabajo: 'fechaCulmincacionDeTrabajo'
                },
                {
                    empleadoTrabajo: 'empleadoTrabajo',
                    tituloTrabajo: 'tituloTrabajo',
                    fechaCulmincacionDeTrabajo: 'fechaCulmincacionDeTrabajo'
                },
            ]
        })
    })
 </script>
