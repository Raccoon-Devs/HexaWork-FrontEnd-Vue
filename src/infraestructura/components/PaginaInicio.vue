<template>
  <v-container>
    <v-card
    class="mx-auto mt-8"
    max-width="650"
    shaped
    >
        <v-row class="text-center mb-0 pb-0">
            <v-col cols="12">
                <v-img
                :src="require('../assets/hexawork logo.png')"
                class="my-3"
                contain
                height="200"
                />
            </v-col>
            <v-col class="mb-4">
                <h1 class="display-2 mb-1">
                HexaWork
                </h1>

                <p class="subtitle-1 font-weight-regular">
                    Publica tus ofertas de trabajo como empleador y nosotros nos encargamos del resto.
                    <br>Unete ya
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center py-0 my-0">
            <v-col
            cols="12"
            sm="6"
            class="mb-0 py-0"
            >
            <v-text-field
                id="loginCorreo"
                v-model="datosLogin.correo"
                type="email"
                name="input-10-2"
                label="Email"
                class="input-group--focused"
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="justify-center py-0 my-0">
            <v-col
            cols="12"
            sm="6"
            class="mt-0 pt-0"
            >
             <v-text-field
                id="loginPassword"
                v-model="datosLogin.password"
                type="password"
                name="input-10-2"
                label="Contraseña"
                class="input-group--focused"
                hide-details
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center pb-6">
            <v-btn id="loginAcceder" class="indigo" dark @click="iniciarSesion">Acceder</v-btn>
        </v-row>  
    </v-card>
    <v-snackbar
        v-model="snackbarLogin.mostrar"
        top
        timeout=6000
    >
        {{ snackbarLogin.mensaje }}

        <template v-slot:action="{ attrs }">
        <v-btn
            color="indigo lighten-3"
            text
            v-bind="attrs"
            @click="snackbarLogin.mostrar = false"
        >
            Cerrar
        </v-btn>
        </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { UIPuertoLogin } from '../../core/aplicacion/ui/login/UIPuertoLogin'
  import { Autenticar } from '../../core/aplicacion/servicios/login/AutenticarUsuario'
  import { AdaptadorTILogin } from '@/core/infraestructura/adaptadores/adaptadoresIntegracion/adaptadorTILogin'
  import { AdaptadorSpringLogin } from '../../core/infraestructura/adaptadores/adaptadoresSpring/adaptadorSpringLogin'
import router from '../router'

  export default Vue.extend({
        name: 'PaginaInicio',

        data: () => ({
            
            datosLogin: {

                correo: "" as string,
                password: "" as string
            },
            snackbarLogin: {

                mensaje: "" as string,
                mostrar: false as boolean
            }
        }),

        methods: {

            iniciarSesion(){
                
                const puertoLogin: UIPuertoLogin = new Autenticar()
                let respuesta = puertoLogin.autenticarUsuarioUI(this.datosLogin, new AdaptadorSpringLogin())

                // if (respuesta != "Login Exitoso"){
                //     this.snackbarLogin.mensaje = respuesta
                //     this.snackbarLogin.mostrar = true
                // }
                // else{
                //     router.push("/oferta")
                // }

            }
        }
  })
</script>