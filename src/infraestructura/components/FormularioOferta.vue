<template>
  <v-container>
    <v-dialog v-model="dialog" width="900" class="mb-2">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="indigo darken-4" v-bind="attrs"
          v-on="on" dark>
          <v-icon left>mdi-plus</v-icon>
          Crear Oferta
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-card-title class="headline ml-2 mt-2 pb-0">
          Crear Oferta
        </v-card-title>
        <v-card-subtitle class="title ml-2 mt-2 pb-1">
          Datos Básicos
        </v-card-subtitle>
        <v-card-text>
          <v-row class="mt-2 ml-0">
            <v-col cols="6">
              <v-text-field label="Cargo" placeholder="Ejemplo: Desarrollador" class="mt-0 pt-0"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Descripción" placeholder="Descripción del trabajo" class="mt-0 pt-0"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-2 ml-0">
            <v-col cols="6">
              <v-text-field label="Fecha de Inicio" placeholder="01/01/1990" class="mt-0 pt-0"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Fecha de Inicio" placeholder="01/01/1990" class="mt-0 pt-0"></v-text-field>
            </v-col>
          </v-row>
           <v-row class="mt-2 ml-0">
            <v-col cols="6">
              <v-text-field label="Cantidad De Vacantes" placeholder="5" class="mt-0 pt-0"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Remuneracion" placeholder="4000$" class="mt-0 pt-0"></v-text-field>
            </v-col>
            <v-col cols="6" class="mt-0 pt-0">
              <v-combobox></v-combobox>
            </v-col>           
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end pb-3">
          <v-btn class="mr-4" color="indigo darken-4" text v-bind="attrs" v-on="on">
            Cancelar
          </v-btn>
          <v-btn class="indigo darken-4" v-bind="attrs" v-on="on" dark>
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

  export default Vue.extend({
    name: 'FormularioOferta',

    data: () => ({
      
    }),
  })
</script>