<template>
    <v-app>
        <TheHeader />

        <v-main>
            <Problem />
        </v-main>
    </v-app>
</template>

<script>

import Problem from "@/components/Problem.vue";
import TheHeader from "@/components/Layout/TheHeader.vue";

export default {
    name: 'App',

    components: {
        TheHeader,
        Problem,
    },


};
</script>
