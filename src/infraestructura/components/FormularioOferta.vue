<template>
  <v-container>
    <v-dialog v-model="crearOfertaDialog" width="900" class="mb-2">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="indigo darken-4" v-bind="attrs"
          v-on="on" dark>
          <v-icon left>mdi-plus</v-icon>
          Crear Oferta
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-card-title class="headline ml-2 pt-6 pb-0">
          Crear Oferta
        </v-card-title>
        <v-card-subtitle class="title ml-2 mt-2 pb-1">
          Datos Básicos
        </v-card-subtitle>
        <v-card-text>
          <v-row class="mt-2 ml-0">
            <v-col cols="6">
              <v-text-field
                v-model="ofertaDeTrabajo.cargo"
                type="cargo"
                label="Cargo" placeholder="Cargo de la oferta de trabajo"
                class="mt-0 pt-0" prepend-icon="mdi-briefcase"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                type="vacantes"
                v-model="ofertaDeTrabajo.vacantes"
                label="Cantidad De Vacantes" placeholder="5"
                class="mt-0 pt-0" prepend-icon="mdi-numeric-1-box-outline"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-0 pt-0 ml-0">
            <v-col cols="6">
              <v-menu
                ref="menuFechaInicio"
                v-model="menuFechaInicio"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="ofertaDeTrabajo.fechaInicio"
                    label="Fecha de Inicio"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="ofertaDeTrabajo.fechaInicio"
                  :active-picker.sync="fechaInicioPicker"
                  :min="new Date().toISOString().substr(0, 10)"
                  @change="guardarFechaInicio"
                  locale="es-VE"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-menu
                ref="menuFechaFin"
                v-model="menuFechaFin"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="ofertaDeTrabajo.fechaFin"
                    label="Fecha de Fin"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="ofertaDeTrabajo.fechaFin"
                  :active-picker.sync="fechaFinPicker"
                  :min="new Date().toISOString().substr(0, 10)"
                  @change="guardarFechaFin"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
           <v-row class="mt-2 ml-0">
            <v-col cols="6" class="mt-0 pt-0">
              <v-select
                v-model="ofertaDeTrabajo.tipoDePago"
                :items="opciones"
                label="Tipo de Pago"
                placeholder="Elige un método de pago"
                prepend-icon="mdi-credit-card-outline"
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="money"
                v-model="ofertaDeTrabajo.remuneracion"
                label="Remuneracion" placeholder="Monto a pagar"
                class="mt-0 pt-0"
                prepend-icon="mdi-cash"
              >
              </v-text-field>
            </v-col>
            <v-col cols="3" class="mt-0 pt-0">
              <v-select
                v-model="ofertaDeTrabajo.divisa"
                class = "mt-0"
                :items="divisas"
                label="Divisa"
                placeholder="Elige una Divisa"
                prepend-icon="mdi-currency-usd"
              ></v-select>
            </v-col>    
          </v-row>
          <v-row class="pt-0 mt-0 ml-1">
            <v-col cols="8" class="pt-0 mt-0">
              <v-textarea
                v-model="ofertaDeTrabajo.descripcion"
                name="input-7-1"
                label="Descripción"
                placeholder="Ingresa la descripción del cargo."
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end pb-3">
          <v-btn class="mr-4" color="indigo darken-4" text v-bind="attrs" v-on="on" @click="cambiarEstadoCrearOfertaDialog">
            Cancelar
          </v-btn>
          <v-btn class="indigo darken-4" v-bind="attrs" v-on="on" dark @click="crearOferta">
            <v-icon left>mdi-plus</v-icon>
            Crear Oferta
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from "vue-property-decorator"

  export default Vue.extend({
    name: 'FormularioOferta',

    data: () => ({
      opciones: ["Por Hora", "Por día", "Semanal","Mensual"],
      divisas: ["$ (Dólar)", "€ (Euro)", "£ (Libra)"],
      fechaInicioPicker: "",
      menuFechaInicio: false,
      fechaFinPicker: "",
      menuFechaFin: false,
      crearOfertaDialog: false,
      ofertaDeTrabajo: {
        cargo: "",
        descripcion: "",
        remuneracion: "",
        divisa: "",
        vacantes: "",
        tipoDePago: "",
        fechaInicio: "",
        fechaFin: ""
      }

    }),
    watch: {
      menuFechaInicio (val) {
        val && setTimeout(() => (this.fechaInicioPicker = 'YEAR'))
      },
      menuFechaFin (val) {
        val && setTimeout(() => (this.fechaFinPicker = 'YEAR'))
      },
    },
    methods: {
      guardarFechaInicio (fechaInicio: Date): void {
        this.$refs.menuFechaInicio!.save(fechaInicio)
      },
      guardarFechaFin (fechaFin: Date): void {
        this.$refs.menuFechaFin!.save(fechaFin)
      },
      cambiarEstadoCrearOfertaDialog(): void{
        this.crearOfertaDialog = !this.crearOfertaDialog
        this.limpiarFormulario()
      },
      limpiarFormulario(): void{
        this.ofertaDeTrabajo = {
          cargo: "",
          descripcion: "",
          remuneracion: "",
          divisa: "",
          vacantes: "",
          tipoDePago: "",
          fechaInicio: "",
          fechaFin: ""
        }
      },
      crearOferta(){
        console.log('OFERTA DE TRABAJO')
        console.log(this.ofertaDeTrabajo)
        this.cambiarEstadoCrearOfertaDialog()
      }
    },
  })
</script>