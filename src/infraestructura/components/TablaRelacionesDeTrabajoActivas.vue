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

    export default Vue.extend({
        name: 'TablaRelacionesDeTrabajoActivas',
        data: () => ({
            ofertas: [
                {
                    idOfertaDeTrabajo: 1,
                    tituloTrabajo: 'Titulo de trabajo',
                    duracion: {
                        totalHorasRequeridas: 20
                    },
                    //empleador: Empleador,
                    empleados: [{
                        ssn: '123',
                        nombreCompleto: 'Nombre empleado'
                    }, {
                        ssn: '456',
                        nombreCompleto: 'Nombre empleado'
                    }, {
                        ssn: '789',
                        nombreCompleto: 'Nombre empleado'
                    }]
                },
                {
                    idOfertaDeTrabajo: 1,
                    tituloTrabajo: 'Titulo de trabajo',
                    duracion: {
                        totalHorasRequeridas: 20
                    },
                    //empleador: Empleador,
                    empleados: [{
                        ssn: '123',
                        nombreCompleto: 'Nombre empleado'
                    }, {
                        ssn: '456',
                        nombreCompleto: 'Nombre empleado'
                    }, {
                        ssn: '789',
                        nombreCompleto: 'Nombre empleado'
                    }]
                },
            ]
        })
    })
</script>
