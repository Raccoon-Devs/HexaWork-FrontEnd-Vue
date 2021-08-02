<template>
    <v-container>
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
                                    {{empleado.nombreCompleto.primerNombre}} {{empleado.nombreCompleto.primerApellido}}
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="auto">
                                    <v-btn
                                        class="white--text"
                                        elevation="2"
                                        color="indigo"
                                    >
                                        Chat
                                    </v-btn>
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
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { UIPuerto } from '../../core/aplicacion/ui/UIPuerto'
    import { MostrarOfertasDeTrabajo } from '../../core/aplicacion/servicios/MostrarOfertasDeTrabajo'
    import { AdaptadorMockOferta } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockOferta'
    import { UIPuertoRelacionesDeTrabajo } from '../../core/aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesDeTrabajo'
    import { MostrarRelacionesDeTrabajoActivas } from '../../core/aplicacion/servicios/MostrarRelacionesDeTrabajoActivas'
    import { AdaptadorMockRelacionDeTrabajo } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockRelacionDeTrabajo'

    export default Vue.extend({
        name: 'TablaRelacionesDeTrabajoActivas',
        data: () => ({
            ofertas: [{
                empleados: [{}]
            }],
            oferta: {},
            relaciones: [{}]
        }),
        methods: {
            listarOfertasActivas(){
                let controlador: UIPuerto = new MostrarOfertasDeTrabajo()
                let ofertasEnElRepo = controlador.listarOfertasActivasUI(new AdaptadorMockOferta())
                this.ofertas = []
                ofertasEnElRepo.forEach((oferta: any) => {
                    this.ofertas.push(oferta)
                })
            },
            listarRelacionesDeTrabajoActivas() {
                let controlador: UIPuertoRelacionesDeTrabajo = new MostrarRelacionesDeTrabajoActivas()
                let relacionesEnElRepo = controlador.listarRelacionesDeTrabajoUI(new AdaptadorMockRelacionDeTrabajo())
                this.relaciones = []
                relacionesEnElRepo.forEach((relacion: any) => {
                    this.relaciones.push(relacion)
                })
                this.relaciones.map((relacion: any) => {
                    this.ofertas.map((oferta: any) => {
                        oferta.empleados = []
                        if (relacion.postulacion.ofertaDeTrabajo.idOfertaDeTrabajo == oferta.idOfertaDeTrabajo) {
                            oferta.empleados.push(relacion.postulacion.empleado)
                        }
                    })
                })
            }
        },
        mounted() {
            this.listarOfertasActivas()
            this.listarRelacionesDeTrabajoActivas()
        }
    })
</script>
