<template>
  <v-container>
    <v-snackbar
        v-model="ofertaCreada.mostrar"
        top
        timeout=6000
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
          <v-icon left>mdi-plus-circle</v-icon>
          Crear Oferta
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-card-title class="headline ml-2 pt-6 pb-0">
          Crear Oferta
        </v-card-title>
        <v-card-subtitle id="tituloDatos" class="title ml-2 mt-2 pb-1">
          Datos de la oferta
        </v-card-subtitle>
        <v-card-text>
          <v-row class="mt-2 ml-0">
            <v-col cols="12">
               <v-text-field
                v-model ="ofertaDeTrabajo.titulo"
                id="titulo"
                type="titulo"
                label="Título de la oferta" placeholder="Título de la oferta de trabajo"
                class="mt-0 pt-0" prepend-icon="mdi-star-check"
              >
              </v-text-field>
            </v-col>
          </v-row>
            <v-row class="pt-0 mt-0 ml-1">
                    <v-col cols="12" class="pt-0 mt-0">
                        <v-textarea
                        id="requerimientosEspeciales"
                        v-model="ofertaDeTrabajo.requerimientosEspeciales"
                        label="Requerimientos Especiales"
                        name="requerimientosEspeciales"
                        placeholder="Ingresa los requerimientos especiales de la oferta de trabajo."
                        ></v-textarea>
                    </v-col>
            </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Habilidades y Certificaciones Requeridas
            </v-card-subtitle>
          <v-row class="mt-0 pt-0 ml-0">
            <v-col cols="6">
              <v-select
                  prepend-icon="mdi-check-bold"
                  v-model="habilidadesSeleccionadas"
                  :items="habilidades"
                  item-text="nombre"
                  item-value="idHabilidad"
                  :menu-props="{ maxHeight: '400' }"
                  label="Habilidades"
                  multiple
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                  prepend-icon="mdi-certificate"
                  v-model="certificacionesSeleccionadas"
                  :items="certificaciones"
                  item-text="nombre"
                  item-value="idCertificacion"
                  :menu-props="{ maxHeight: '400' }"
                  label="Certificaciones"
                  multiple
              ></v-select>
            </v-col>
            
          </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Duración y días de trabajo
            </v-card-subtitle>
            <v-row class="mt-2 ml-0">
              <v-col cols="6">
                  <v-text-field
                  id="duracion"
                      type="duracion"
                      v-model="ofertaDeTrabajo.duracion"
                      label="Cantidad De Horas Requeridas" placeholder="5"
                      class="mt-0 pt-0" prepend-icon="mdi-clock-time-five"
                  >
                  </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-btn class="indigo darken-4" dark @click="dialogCalendario = true">Modificar Calendario</v-btn>
              </v-col>
            </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Fecha límite de postulación y cantidad de vacantes
            </v-card-subtitle>
            <v-row class="mt-2 ml-0">
              <v-col
                  cols="6"
                >
                    <v-menu
                      id="menuFechaLimite"
                      ref="menuFechaLimite"
                      v-model="menuFechaLimite"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          id="fechaPostulacion"
                          v-model="ofertaDeTrabajo.fechaLimite"
                          label="Fecha Límite de Postulación"
                          prepend-icon="mdi-calendar"
                          type="fechaPostulacion"
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
                <v-col cols="6" class="pt-7">
                    <v-text-field
                        id="vacantes"
                        type="vacantes"
                        v-model="ofertaDeTrabajo.vacantes"
                        label="Cantidad De Vacantes" placeholder="5"
                        class="mt-0 pt-0" prepend-icon="mdi-numeric-1-box-outline"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Remuneración
            </v-card-subtitle>
           <v-row class="mt-2 ml-0">
            <v-col cols="6">
              <v-text-field
                id="monto"
                type="monto"
                v-model="ofertaDeTrabajo.remuneracionPorHora"
                label="Monto" placeholder="Monto a pagar"
                class="mt-0 pt-0"
                prepend-icon="mdi-cash"
              >
              </v-text-field>
            </v-col>
            <v-col cols="3" class="mt-0 pt-0">
            </v-col>    
          </v-row>
            <v-card-subtitle class="indigo--text subtitle-1 mt-2 pb-1">
                Dirección
            </v-card-subtitle>
          <v-row class="mt-2 ml-0">
            <v-col cols="6">
                <v-text-field
                    v-model="ofertaDeTrabajo.direccion.calle1"
                    id="calle1"
                    type="calle1"
                    label="Calle1" placeholder="Calle1"
                    class="mt-0 pt-0" prepend-icon="mdi-sign-direction"
                >
                </v-text-field>
                </v-col>
            <v-col cols="6">
                <v-text-field
                    id="calle2"
                    type="calle2"
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
                    id="ciudad"
                    v-model="ofertaDeTrabajo.direccion.ciudad"
                    type="ciudad"
                    label="Ciudad" placeholder="Ciudad"
                    class="mt-0 pt-0" prepend-icon="mdi-city"
                >
                </v-text-field>
                </v-col>
            <v-col cols="6">
                <v-text-field
                    id="estado"
                    type="estado"
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
                    id="codPostal"
                    type="codPostal"
                    v-model="ofertaDeTrabajo.direccion.codPostal"
                    label="Código Postal" placeholder="Código Postal"
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
          <v-btn id="crearOferta" class="indigo darken-4" v-bind="attrs" v-on="on" dark @click="crearOferta">
            <v-icon left>mdi-plus</v-icon>
            Crear Oferta
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogCalendario" max-width="1000">
      <v-card>
        <v-card-title class="text-h5">
          Calendario de Trabajo
        </v-card-title>
        <v-card-text>
          Aqui podrás modificar el calendario de trabajo.
        </v-card-text>   
          <v-row class="justify-center mx-2 pl-2">
            <v-col cols=4>
              <v-menu
                id="menuFechaCalendario"
                ref="menuFechaCalendario"
                v-model="menuFechaCalendario"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    id="fechaCalendario"
                    v-model="fechaCalendario"
                    label="Fecha Calendario"
                    prepend-icon="mdi-calendar"
                    type="fechaCalendario"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  id="fechaCalendario"
                  v-model="fechaCalendario"
                  :active-picker.sync="fechaCalendarioPicker"
                  :min="new Date().toISOString().substr(0, 10)"
                  @change="guardarFechaCalendario"
                  locale="es-VE"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols=3>
              <v-text-field id="horaInicio" v-model="horaInicio" label="Hora de inicio" placeholder="hh:mm:ss"></v-text-field>
            </v-col>
            <v-col cols=3>
              <v-text-field id="horaFin" v-model="horaFin" label="Hora de fin" placeholder="hh:mm:ss"></v-text-field>
            </v-col>
            <v-col cols=2>
              <v-btn id="agregarCalendario" color="green" class="mt-4" text @click="agregarFechaCalendario">Agregar</v-btn>
            </v-col>
          </v-row>
           <v-data-table v-if="ofertaDeTrabajo.fechasCalendario.length!==0"
                :headers="columnas_tabla"
                :items="ofertaDeTrabajo.fechasCalendario"
                class="elevation-1 mx-5"
              >
                <template v-slot:[`item.dia`]="{ item }">
                  <span v-text="item.horaInicio.split(' ')[0]"></span>
                </template>
                <template v-slot:[`item.horaInicio`]="{ item }">
                  <span v-text="item.horaInicio.split(' ')[1]"></span>
                </template>
                <template v-slot:[`item.horaFin`]="{ item }">
                  <span v-text="item.horaFin.split(' ')[1]"></span>
                </template>
                <template v-slot:[`item.acciones`]="{ item }">
                  <v-icon
                    small
                    @click="eliminarFechaCalendario(item)"
                    color="red"
                  >
                    mdi-delete
                  </v-icon>
                </template>
              </v-data-table>  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mr-2" color="indigo darken-4" text @click="dialogCalendario = false">
            Cancelar
          </v-btn>
          <v-btn id="aceptarCalendario" class="indigo darken-4" dark @click="dialogCalendario = false">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { UIPuertoCrearOferta } from '../../core/aplicacion/ui/UIPuertoCrearOferta'
  import { UIPuertoHabilidades } from '../../core/aplicacion/ui/habilidades/UIPuertoHabilidades'
  import { UIPuertoCertificaciones } from '../../core/aplicacion/ui/certificaciones/UIPuertoCertificaciones'
  import { CrearOfertaDeTrabajo } from '../../core/aplicacion/servicios/CrearOfertaDeTrabajo'
  import { MostrarHabilidades } from '@/core/aplicacion/servicios/habilidades/MostrarHabilidades'
  import { MostrarCertificaciones } from '../../core/aplicacion/servicios/certificaciones/MostrarCertificaciones'
  import { AdaptadorMockOferta } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockOferta'
  import { AdaptadorMockHabilidades } from '@/core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockHabilidades'
  import { AdaptadorMockCertificaciones } from '../../core/infraestructura/adaptadores/adaptadoresMock/adaptadorMockCertificaciones'

  export default Vue.extend({
    name: 'FormularioOferta',

    data: () => ({
      columnas_tabla: [
        {
          text: 'Día',
          align: 'center',
          sortable: true,
          value: 'dia',
          class: 'primary--text font-weight-bold',
        },
        {
          text: 'Hora de Inicio',
          align: 'center',
          sortable: true,
          value: 'horaInicio',
          class: 'primary--text font-weight-bold',
        },
        {
          text: 'Hora de Fin',
          align: 'center',
          sortable: false,
          value: 'horaFin',
          class: 'primary--text font-weight-bold'
        },
        {
          text: 'Eliminar',
          align: 'center',
          sortable: false,
          value: 'acciones',
          class: 'primary--text font-weight-bold',
        },
      ],
      horaInicio: "",
      horaFin: "",
      dialogCalendario: false,
      habilidadesSeleccionadas: [],
      certificacionesSeleccionadas: [],
      habilidades: [{}],
      certificaciones: [{}],
      // habilidades: [
      //   {
      //     nombre: 'Habilidades Blandas',
      //     valor: 1
      //   },
      //   {
      //     nombre: 'Habilidades Técnicas',
      //     valor: 2
      //   },
      //   {
      //     nombre: 'Habilidades Cognitivas',
      //     valor: 3
      //   },
      //   {
      //     nombre: 'Habilidades Mecánicas',
      //     valor: 4
      //   },
      //   {
      //     nombre: 'Habilidades Linguísticas',
      //     valor: 5
      //   },
      //   {
      //     nombre: 'Habilidades Manuales',
      //     valor: 6
      //   },
      //   {
      //     nombre: 'Habilidades Visuales',
      //     valor: 7
      //   }
      // ],
      // certificaciones: [
      //   {
      //     nombre: 'Certificacion 1',
      //     valor: "ab"
      //   },
      //   {
      //     nombre: 'Certificacion 2',
      //     valor: "bb"
      //   },
      //   {
      //     nombre: 'Certificacion 3',
      //     valor: "cb"
      //   },
      //   {
      //     nombre: 'Certificacion 4',
      //     valor: "db"
      //   },
      //   {
      //     nombre: 'Certificacion 5',
      //     valor: "eb"
      //   },
      //   {
      //     nombre: 'Certificacion 6',
      //     valor: "fb"
      //   },
      //   {
      //     nombre: 'Certificacion 7',
      //     valor: "gb"
      //   }
      // ],
      fechaLimite: "",
      menuFechaLimite: false,
      fechaLimitePicker: "",
      fechaCalendario: "",
      menuFechaCalendario: false,
      fechaCalendarioPicker: "",
      crearOfertaDialog: false,
      ofertaDeTrabajo: {
        titulo: "",
        cargo: "",
        requerimientosEspeciales: "",
        duracion: "",
        direccion: {
            calle1: "",
            calle2: "",
            ciudad: "",
            estado: "",
            codPostal: ""
        },
        remuneracionPorHora: "",
        vacantes: "",
        fechaLimite: "",
        fechasCalendario:[] as {horaInicio: string, horaFin: string}[]
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
      menuFechaCalendario (val) {
        val && setTimeout(() => (this.fechaCalendarioPicker = 'YEAR'))
      },
    },
    methods: {
      guardarFechaLimite (fechaLimite: Date): void {
        (this.$refs.menuFechaLimite! as Vue & { save: (fechaLimite:any) => string }).save(fechaLimite)
      },
      guardarFechaCalendario (fechaCalendario: Date): void {
        (this.$refs.menuFechaCalendario! as Vue & { save: (fechaCalendario:any) => string }).save(fechaCalendario)
      },
      cambiarEstadoCrearOfertaDialog(): void{
        this.crearOfertaDialog = !this.crearOfertaDialog
        this.limpiarFormulario()
      },
      eliminarFechaCalendario(fecha: {horaInicio: string, horaFin: string}): void {
        const index = this.ofertaDeTrabajo.fechasCalendario.findIndex((f: any) => f == fecha)
        this.ofertaDeTrabajo.fechasCalendario.splice(index,1)
      },
      limpiarFormulario(): void{
        this.ofertaDeTrabajo = {
            fechasCalendario:[],
            duracion: "",
            titulo: "",
            cargo: "",
            requerimientosEspeciales: "",
            direccion: {
                calle1: "",
                calle2: "",
                ciudad: "",
                estado: "",
                codPostal: ""
            },
            remuneracionPorHora: "",
            vacantes: "",
            fechaLimite: ""

        }
      },
      agregarFechaCalendario(): void{
        this.ofertaDeTrabajo.fechasCalendario.push({
          horaInicio: `${this.fechaCalendario} ${this.horaInicio}`,
          horaFin: `${this.fechaCalendario} ${this.horaFin}`,
        })

        this.horaInicio = ""
        this.horaFin = ""
        this.fechaCalendario = ""
      },
      crearOferta(){
        const habilidades: any[] = []
        this.habilidadesSeleccionadas.forEach((seleccionada: any) => {
          this.habilidades.forEach((habilidad: any) => {
            if (habilidad.idHabilidad == seleccionada) {
              habilidades.push(habilidad)
            }
          })
        })
        const certificaciones: any[] = []
        this.certificacionesSeleccionadas.forEach((seleccionada: any) => {
          this.certificaciones.forEach((certificacion: any) => {
            if (certificacion.idCertificacion == seleccionada) {
              certificaciones.push(certificacion)
            }
          })
        })
        const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
        const oferta = {
            requerimientosEspeciales: this.ofertaDeTrabajo.requerimientosEspeciales,
            direccion: this.ofertaDeTrabajo.direccion,
            duracion: this.ofertaDeTrabajo.duracion,
            fechaLimitePostulacionOfertaDeTrabajo: this.ofertaDeTrabajo.fechaLimite,
            tituloTrabajo: this.ofertaDeTrabajo.titulo,
            remuneracionPorHora: this.ofertaDeTrabajo.remuneracionPorHora,
            estadoOfertaDeTrabajo: 0,
            vacantes: this.ofertaDeTrabajo.vacantes,
            certificaciones: certificaciones,
            habilidades: habilidades,
            calendario: this.ofertaDeTrabajo.fechasCalendario
            // empleador: {
            //     id: "5",
            // },
        }
        
        let respuesta = puertoOferta.crearOfertaUI(oferta, new AdaptadorMockOferta())

        this.ofertaCreada.mostrar = true
        this.ofertaCreada.mensaje = respuesta
        this.$emit('ofertaCreada');
        this.cambiarEstadoCrearOfertaDialog()
      },
      listarHabilidades(){
        let controlador: UIPuertoHabilidades = new MostrarHabilidades()
        let habilidadesEnElRepo = controlador.listarHabilidadesUI(new AdaptadorMockHabilidades())
        this.habilidades = []
        habilidadesEnElRepo.forEach((habilidad: any) => {
          this.habilidades.push(habilidad)
        })
      },
      listarCertificaciones(){
        let controlador: UIPuertoCertificaciones = new MostrarCertificaciones()
        let certificacionesEnElRepo = controlador.listarCertificacionesUI(new AdaptadorMockCertificaciones())
        this.certificaciones = []
        certificacionesEnElRepo.forEach((certificacion: any) => {
          this.certificaciones.push(certificacion)
        })
      }
    },
    mounted() {
      this.listarHabilidades()
      this.listarCertificaciones()
    }
  })
</script>