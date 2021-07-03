<template>
  <div>
    <tabla-ofertas-disponibles/>
  </div>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import TablaOfertasDisponibles from '../components/TablaOfertasDisponibles.vue'

  export default Vue.extend({
    name: 'CrearOferta',

    components: {
      TablaOfertasDisponibles
    },
  })
</script>