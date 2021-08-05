<template>
    <v-container>
        <h2 class="py-4 grey--text">
            Relaciones de Trabajo Por Evaluar
        </h2>
        <TablaRelacionesDeTrabajoPorEvaluar/>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'
    import TablaRelacionesDeTrabajoPorEvaluar from '../components/TablaRelacionesDeTrabajoPorEvaluar.vue'

    export default Vue.extend({
        name: 'RelacionesPorEvaluar',

        components: {
            TablaRelacionesDeTrabajoPorEvaluar
        }
    })
</script>
