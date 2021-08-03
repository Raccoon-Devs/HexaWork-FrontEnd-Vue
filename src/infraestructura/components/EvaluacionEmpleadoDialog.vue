<template>
    <div class="text-center">
        <v-dialog
          v-model="show"
          width="500"
        >
            <v-card>
                <v-card-actions>
                    <v-btn color="indigo white--text" flat @click.stop="show=false">
                        Evaluar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
   import Vue from 'vue'


   export default Vue.extend({
       name: 'EvaluacionEmpleadoDialog',
       props: {
           value: Boolean
       },
       computed: {
           show: {
               get () {
                   return this['value']
               },
               set (value) {
                   this.$emit('input', value)
               }
           }
       }
   })
</script>
