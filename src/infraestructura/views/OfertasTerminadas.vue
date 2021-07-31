<template>
     <v-container>
        <h2 class="py-4 grey--text">
            Ofertas Culminadas por Evaluar
        </h2>
        <RelacionesPorEvaluarCard/>
        <h2 class="py-4 grey--text">
            Trabajos Culminados
        </h2>
        <TrabajosFinalizadosCard/>
     </v-container>
 </template>

 <script lang="ts">
    import Vue from 'vue'
    import RelacionesPorEvaluarCard from '../components/RelacionesPorEvaluarCard'
    import TrabajosFinalizadosCard from '../components/TrabajosFinalizadosCard'

    export default Vue.extend({
        name: 'OfertasTerminadas',
        components: {
            RelacionesPorEvaluarCard,
            TrabajosFinalizadosCard
        }
    })
 </script>
