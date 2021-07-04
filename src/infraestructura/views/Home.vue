<template>
  <pagina-inicio />
</template>

<script lang="ts">
  import Vue from 'vue'
  import PaginaInicio from '../components/PaginaInicio.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      PaginaInicio,
    },
  })
</script>
