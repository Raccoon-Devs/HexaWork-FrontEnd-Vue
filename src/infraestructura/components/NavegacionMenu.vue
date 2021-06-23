<template>
    <div>
        <v-card
            class="mx-auto overflow-hidden"
            height="100vh"
        >
            <v-app-bar
              color="deep-purple"
              dense
              dark
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title>{{pageName}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </v-app-bar>

            <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
            >
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                        <v-list-item v-for="(menuItem, x) in menuItems" :key="x">
                            <router-link v-bind:to="menuItem.route"  style="text-decoration: none; color: inherit;">
                                <v-row no-gutters>
                                    <v-col>
                                        <v-list-item-icon>
                                            <v-icon>{{menuItem.icon}}</v-icon>
                                        </v-list-item-icon>
                                    </v-col>
                                    <v-col >
                                        <v-list-item-title :class="mt-auto" class="pt-3">
                                            {{menuItem.label}}
                                        </v-list-item-title>
                                    </v-col>
                                </v-row>
                            </router-link>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <div>
                <router-view></router-view>
            </div>

        </v-card>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'NavegacionMenu',
    props: ['pageName'],

    data: () => ({
        drawer: false,
        group: null,
        menuItems: [
            {
                label: 'Empresa',
                icon: 'mdi-domain',
                route: '/Empresa'
            },
            {
                label: 'Gestionar Ofertas de Trabajo',
                icon: 'mdi-briefcase-outline',
                route: '/Ofertas'
            },
            {
                label: 'Cerrar Sesión',
                icon:'mdi-logout',
                route: '/'
            },
        ]
    }),
  })
</script>

<style>
    .v-application a {
        color: white;
    }
</style>
