<template>
  <formulario-oferta />
</template>

<script lang="ts">
  import Vue from 'vue'
  import FormularioOferta from '../components/FormularioOferta.vue'

  export default Vue.extend({
    name: 'CrearOferta',

    components: {
      FormularioOferta,
    },
  })
</script>