<template>
  <v-container>
    <v-snackbar
        v-model="ofertaCreada.mostrar"
        top
    >
        {{ ofertaCreada.mensaje }}

        <template v-slot:action="{ attrs }">
        <v-btn
            color="indigo lighten-3"
            text
            v-bind="attrs"
            @click="ofertaCreada = false"
        >
            Cerrar
        </v-btn>
        </template>
    </v-snackbar>
    <v-dialog v-model="crearOfertaDialog" width="1000" class="mb-2">
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
            <v-col cols="12">
               <v-text-field
                v-model ="ofertaDeTrabajo.titulo"
                type="cargo"
                label="Título de la oferta" placeholder="Título de la oferta de trabajo"
                class="mt-0 pt-0" prepend-icon="mdi-star-check"
              >
              </v-text-field>
            </v-col>
          </v-row>
            <v-row class="pt-0 mt-0 ml-1">
                    <v-col cols="12" class="pt-0 mt-0">
                        <v-textarea
                        v-model="ofertaDeTrabajo.descripcion"
                        name="input-7-1"
                        label="Descripción"
                        placeholder="Ingresa la descripción del cargo."
                        ></v-textarea>
                    </v-col>
            </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Datos principales
            </v-card-subtitle>
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
                        v-model="ofertaDeTrabajo.vacante"
                        label="Cantidad De Vacantes" placeholder="5"
                        class="mt-0 pt-0" prepend-icon="mdi-numeric-1-box-outline"
                    >
                    </v-text-field>
                </v-col>
          </v-row>
          <v-row class="mt-0 pt-0 ml-0">
            <v-col cols="6">
              <v-menu
                ref="menuFechaLimite"
                v-model="menuFechaLimite"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="ofertaDeTrabajo.fechaLimite"
                    label="Fecha Límite de Postulación"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="ofertaDeTrabajo.fechaLimite"
                  :active-picker.sync="fechaLimitePicker"
                  :min="new Date().toISOString().substr(0, 10)"
                  @change="guardarFechaLimite"
                  locale="es-VE"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6 mt-4">
                <v-text-field
                        type="vacantes"
                        v-model="ofertaDeTrabajo.duracion"
                        label="Cantidad De Horas Requeridas" placeholder="5"
                        class="mt-0 pt-0" prepend-icon="mdi-clock-time-five"
                    >
                    </v-text-field>
            </v-col>
          </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Remuneración
            </v-card-subtitle>
           <v-row class="mt-2 ml-0">
            <v-col cols="6" class="mt-0 pt-0">
              <v-select
                v-model="ofertaDeTrabajo.remuneracion.frecuencia"
                :items="opciones"
                item-text="nombre"
                item-value="valor"
                label="Tipo de Pago"
                placeholder="Elige un método de pago"
                prepend-icon="mdi-credit-card-outline"
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="money"
                v-model="ofertaDeTrabajo.remuneracion.monto"
                label="Monto" placeholder="Monto a pagar"
                class="mt-0 pt-0"
                prepend-icon="mdi-cash"
              >
              </v-text-field>
            </v-col>
            <v-col cols="3" class="mt-0 pt-0">
              <v-select
                v-model="ofertaDeTrabajo.remuneracion.divisa"
                class = "mt-0"
                :items="divisas"
                item-text="nombre"
                item-value="valor"
                label="Divisa"
                placeholder="Elige una Divisa"
                prepend-icon="mdi-currency-usd"
              ></v-select>
            </v-col>    
          </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Dirección
            </v-card-subtitle>
          <v-row class="mt-2 ml-0">
            <v-col cols="6">
                <v-text-field
                    v-model="ofertaDeTrabajo.direccion.calle1"
                    type="cargo"
                    label="Calle1" placeholder="Calle1"
                    class="mt-0 pt-0" prepend-icon="mdi-sign-direction"
                >
                </v-text-field>
                </v-col>
            <v-col cols="6">
                <v-text-field
                    type="vacantes"
                    v-model="ofertaDeTrabajo.direccion.calle2"
                    label="Calle2" placeholder="Calle2"
                    class="mt-0 pt-0" prepend-icon="mdi-sign-direction"
                >
                </v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-2 ml-0">
            <v-col cols="6">
                <v-text-field
                    v-model="ofertaDeTrabajo.direccion.ciudad"
                    type="cargo"
                    label="Ciudad" placeholder="Ciudad"
                    class="mt-0 pt-0" prepend-icon="mdi-city"
                >
                </v-text-field>
                </v-col>
            <v-col cols="6">
                <v-text-field
                    type="vacantes"
                    v-model="ofertaDeTrabajo.direccion.estado"
                    label="Estado" placeholder="Estado"
                    class="mt-0 pt-0" prepend-icon="mdi-google-maps"
                >
                </v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-2 ml-0">
              <v-col cols="6">
                <v-text-field
                    type="vacantes"
                    v-model="ofertaDeTrabajo.direccion.zip"
                    label="Zip" placeholder="Zip"
                    class="mt-0 pt-0" prepend-icon="mdi-barcode"
                >
                </v-text-field>
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
  import {UIPuertoCrearOferta} from '../../core/aplicacion/ui/UIPuertoCrearOferta'
  import {CrearOfertaDeTrabajo} from '../../core/aplicacion/servicios/CrearOfertaDeTrabajo'
  import { AdaptadorMockOferta } from '@/core/infraestructura/adaptadorMockOferta'

  export default Vue.extend({
    name: 'FormularioOferta',

    data: () => ({
      opciones: [
            {
                nombre: "Por Hora",
                valor: "hora"
            },
            {
                nombre: "Por Mes",
                valor: "mes"
            },
            {
                nombre: "Por semana",
                valor: "semana" 
            },
            {
                nombre: "Total",
                valor: "total"
            }
        ],
      divisas: [
            {
                nombre: "$ (Dólar)",
                valor: "dolar"
            },
            {
                nombre: "€ (Euro)",
                valor: "euro"
            },
            {
                nombre: "Bs. (Bolívar)",
                valor: "bolivar"
            }
        ],
      fechaLimite: "",
      menuFechaLimite: false,
      fechaLimitePicker: "",
      crearOfertaDialog: false,
      ofertaDeTrabajo: {
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
      },
      ofertaCreada: {
          mostrar: false,
          mensaje: ""
      }

    }),
    watch: {
      menuFechaLimite (val) {
        val && setTimeout(() => (this.fechaLimitePicker = 'YEAR'))
      },
    },
    methods: {
      guardarFechaLimite (fechaLimite: Date): void {
        this.$refs.menuFechaLimite!.save(fechaLimite)
      },
      cambiarEstadoCrearOfertaDialog(): void{
        this.crearOfertaDialog = !this.crearOfertaDialog
        this.limpiarFormulario()
      },
      limpiarFormulario(): void{
        this.ofertaDeTrabajo = {
            titulo: "",
            cargo: "",
            descripcion: "",
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
            vacante: "",
            fechaLimite: ""
        }
      },
      crearOferta(){
        console.log('OFERTA DE TRABAJO')
        console.log(this.ofertaDeTrabajo)
        
        const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
        this.ofertaDeTrabajo = {
            //...this.ofertaDeTrabajo,
            descripcion: {
                propiedades: {
                    descripcion: this.ofertaDeTrabajo.descripcion
                }
            },
            direccion: this.ofertaDeTrabajo.direccion,
            duracion: this.ofertaDeTrabajo.duracion,
            fechaLimite: this.ofertaDeTrabajo.fechaLimite,
            titulo: this.ofertaDeTrabajo.titulo,
            vacante: this.ofertaDeTrabajo.vacante,
            remuneracion: this.ofertaDeTrabajo.remuneracion,
            cargo: {
                propiedades: {
                    cargo :this.ofertaDeTrabajo.cargo
                }
            },
            estadoOfertaDeTrabajo: 0,
            empleador: {
                id: "5",
                nombreEmpresa: {
                    nombre: "nombreEmpresa",
                    rif: "rif"
                },
                direccion: {
                    propiedades: {
                        calle1: "calle1",
                        calle2: "calle2",
                        ciudad: "ciudad",
                        estado: "estado",
                        zip: "zip"
                    }
                } ,
                infoEmpleador: {
                    propiedades: {
                        nombreCompleto: "string",
                        cargoDeTrabajo: "string",
                        numeroDeTelefono: "string",
                        correo: "string"
                    }
                },
                rol:{ propiedades:{
                    nombre: "rolrolrolrol"
                }}
            },
        }
        let respuesta = puertoOferta.crearOfertaUI(this.ofertaDeTrabajo, new AdaptadorMockOferta())
        this.ofertaCreada.mostrar = true,
        this.ofertaCreada.mensaje = respuesta.mensaje

        this.cambiarEstadoCrearOfertaDialog()
      }
    },
  })
</script>