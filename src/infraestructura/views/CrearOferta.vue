<template>
  <div>
    <formulario-oferta />
    <tabla-ofertas-disponibles/>
  </div>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import FormularioOferta from '../components/FormularioOferta.vue'
  import TablaOfertasDisponibles from '../components/TablaOfertasDisponibles.vue'

  export default Vue.extend({
    name: 'CrearOferta',

    components: {
      FormularioOferta,
      TablaOfertasDisponibles
    },
  })
</script>