<template>
    <v-app>
        <v-app-bar color="primary" app dark>
            <div class="d-flex align-center">
                <!-- LOGO -->
            </div>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main>
            <Problem />
        </v-main>
    </v-app>
</template>

<script>

import Problem from './components/Problem';

export default {
    name: 'App',

    components: {
        Problem,
    },

    data: () => ({
        //
    }),
};
</script>
