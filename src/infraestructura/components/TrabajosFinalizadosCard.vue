<template>
    <!-- <v-container>
        <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(oferta, index) in ofertas"
              :key="index"
            >
                <v-expansion-panel-header>
                    <v-container>
                        <v-row
                            no-gutters
                        >
                            <v-col cols="auto">
                                <h3 class="font-weight-black mr-8 indigo--text">
                                    {{oferta.tituloTrabajo}}
                                </h3>
                            </v-col>
                            <v-col class="mt-1">
                                <h4>
                                    {{oferta.duracion.totalHorasRequeridas}}h. requeridas
                                </h4>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <template
                        v-for="(empleado, indexE) in oferta.empleados"
                    >
                        <v-container
                            :key="indexE"
                        >
                            <v-row
                                no-gutters
                            >
                                <v-col>
                                    {{empleado.nombreCompleto}}
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="auto">

                                </v-col>
                            </v-row>
                        </v-container >
                        <v-divider
                            :key="indexE"
                        >
                        </v-divider>
                    </template>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container> -->

    <v-container>
        <v-card>
            <h3 class="px-8 py-8 indigo--text">
                Trabajos Finalizados
            </h3>
            <v-data-table
                :headers="columnas_tabla"
                :items="ofertas"
                :items-per-page="2"
                class="elevation-1"
            >
                <template v-slot:item.calendario[0].horaInicio="{ item }">
                        {{ item.calendario[0].horaInicio.split(' ')[0]}}
                </template>
                <template v-slot:item.calendario[0].horaFin="{ item }">
                        {{ item.calendario[0].horaFin.split(' ')[0]}}
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { UIPuerto } from '../../core/aplicacion/ui/UIPuerto'
    import { MostrarOfertasDeTrabajo } from '../../core/aplicacion/servicios/MostrarOfertasDeTrabajo'
    import { AdaptadorMockOferta } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockOferta'


    export default Vue.extend({
        name: 'TrabajosFinalizadosCard',
        data: () => ({
            ofertas: [{}],
            columnas_tabla: [
                {
                    text: 'Oferta',
                    align: 'center',
                    sortable: true,
                    filterable: true,
                    value: 'tituloTrabajo',
                    class: 'indigo--text font-weight-bold',
                },
                {
                    text: 'Fecha de Inicio',
                    align: 'center',
                    sortable: true,
                    filterable: true,
                    value: 'calendario[0].horaInicio',
                    class: 'indigo--text font-weight-bold',
                },
                {
                    text: 'Fecha Fin',
                    align: 'center',
                    sortable: false,
                    value: 'calendario[0].horaFin',
                    class: 'indigo--text font-weight-bold'
                },
                {
                    text: 'Dirección',
                    align: 'center',
                    sortable: false,
                    value: 'direccion.estado',
                    class: 'indigo--text font-weight-bold'
                }
            ],
        }),
        methods: {
            listarOfertasCulminadas(){
                let controlador: UIPuerto = new MostrarOfertasDeTrabajo()
                let ofertasEnElRepo = controlador.listarOfertasCulminadasUI(new AdaptadorMockOferta())
                this.ofertas = []
                ofertasEnElRepo.forEach((oferta: any) => {
                    this.ofertas.push(oferta)
                })
            },
        },
        mounted() {
            this.listarOfertasCulminadas()
        }
    })
</script>
