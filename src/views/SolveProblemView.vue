<template>
    <v-app>
        <v-app-bar color="primary" app dark>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <div class="d-flex align-center">
                <!-- LOGO -->
            </div>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            bottom
            temporary>
            <v-list
                nav
                dense>
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4">
                    <v-list-item href="/mis-problemas">
                        <v-list-item-title>Mis problemas</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <Problem />
        </v-main>
    </v-app>
</template>

<script>

import Problem from "@/components/Problem.vue";

export default {
    name: 'App',

    components: {
        Problem,
    },

    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group () {
            this.drawer = false
        },
    },
};
</script>
