<template>
  <v-container>
       <v-card
    class="mx-auto mt-8"
    max-width="650"
    shaped
    >
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                :src="require('../assets/hexawork logo.png')"
                class="my-3"
                contain
                height="200"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 mb-3">
                HexaWork
                </h1>

                <p class="subtitle-1 font-weight-regular">
                    Publica tus ofertas de trabajo como empleador y nosotros nos encargamos del resto.
                    <br>Unete ya
                </p>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center pb-6">
            <router-link to="/oferta">
                <v-btn class="indigo" dark>Acceder</v-btn>
            </router-link>  
        </v-row>  
    </v-card>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
        name: 'PaginaInicio',
  })
</script>