<template>
    <v-container>
        <h2 class="py-4 grey--text">
            Relaciones de trabajo activas
        </h2>
        <TablaRelacionesDeTrabajoActivas/>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'
    import TablaRelacionesDeTrabajoActivas from '../components/TablaRelacionesDeTrabajoActivas'

    export default Vue.extend({
        name: 'RelacionesActivas',

        components: {
            TablaRelacionesDeTrabajoActivas
        }
    })
</script>
