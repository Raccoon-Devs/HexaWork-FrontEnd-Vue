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
                                        Evaluar
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
    import { UIPuertoRelacionesPorEvaluar } from '../../core/aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesPorEvaluar'
    import { MostrarRelacionesDeTrabajoPorEvaluar } from '../../core/aplicacion/servicios/relacionesDeTrabajo/MostrarRelacionesDeTrabajoPorEvaluar'
    import { AdaptadorMockRelacionDeTrabajo } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockRelacionDeTrabajo'

    export default Vue.extend({
        name: 'TablaRelacionesDeTrabajoPorEvaluar',
        data: () => ({
            ofertas: [{
                empleados: []
            }],
            relaciones: [{}],
        }),
        methods: {
            listarOfertas(){
                this.ofertas = []
                this.relaciones.forEach((relacion: any) => {
                    if (this.ofertas.length > 0) {
                        let aux: any = false
                        this.ofertas.forEach((ofertas: any) => {
                            if (ofertas.idOfertaDeTrabajo == relacion.postulacion.ofertaDeTrabajo.idOfertaDeTrabajo) {
                                aux = true
                            }
                        })
                        if (!aux) {
                            this.ofertas.push(relacion.postulacion.ofertaDeTrabajo)
                        }
                    } else {
                        this.ofertas.push(relacion.postulacion.ofertaDeTrabajo)
                    }
                })  
            },
            listarEmpleados() {
                this.ofertas.forEach((oferta: any) => {
                    let empleados: any = []
                    this.relaciones.forEach((relacion: any) => {
                        if (relacion.postulacion.ofertaDeTrabajo.idOfertaDeTrabajo == oferta.idOfertaDeTrabajo) {
                            empleados.push(relacion.postulacion.empleado)
                        }
                    })
                    oferta.empleados = empleados
                })
            },
            listarRelacionesDeTrabajoActivas() {
                let controlador: UIPuertoRelacionesPorEvaluar = new MostrarRelacionesDeTrabajoPorEvaluar()
                let relacionesEnElRepo = controlador.listarRelacionesPorEvaluarUI(new AdaptadorMockRelacionDeTrabajo())
                this.relaciones = []
                relacionesEnElRepo.forEach((relacion: any) => {
                    this.relaciones.push(relacion)
                })    
            }
        },
        mounted() {
            this.listarRelacionesDeTrabajoActivas()
            this.listarOfertas()
            this.listarEmpleados()
        }
    })
</script>
