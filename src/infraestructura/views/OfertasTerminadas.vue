<template>
     <v-container>
         <h2 class="py-4 grey--text">
            Ofertas culminadas
         </h2>
         <RelacionesPorEvaluarCard/>
     </v-container>
 </template>

 <script lang="ts">
    import Vue from 'vue'
    import RelacionesPorEvaluarCard from '../components/RelacionesPorEvaluarCard'

    export default Vue.extend({
        name: 'OfertasTerminadas',
        components: {
            RelacionesPorEvaluarCard
        }
    })
 </script>
