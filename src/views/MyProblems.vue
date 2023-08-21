<template>
    <v-app>
        <TheHeader />

        <v-main>
            <v-row>
                <v-col cols="12">
                    <h1 class="display-2 font-weight-bold mb-3 mt-3 text-center">Mis problemas</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12"

                       v-if="showErrorMessage && errorMessage !== ''">
                    <v-alert v-model="showErrorMessage" border="left" close-text="Cerrar" dark dismissible type="error">
                        {{ errorMessage }}
                    </v-alert>

                </v-col>

                <v-col cols="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Problema</th>
                                <th class="text-left">Resuelto</th>
                                <th class="text-left">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
<!--                            <tr-->
<!--                                v-for="item in desserts"-->
<!--                                :key="item.name">-->
<!--                                <td>{{ item.name }}</td>-->
<!--                                <td>{{ item.calories }}</td>-->
<!--                            </tr>-->
                            </tbody>
                        </template>
                    </v-simple-table>

                </v-col>
            </v-row>
        </v-main>
    </v-app>

</template>

<script>

import TheHeader from "@/components/Layout/TheHeader.vue";

export default {
    name: "MyProblems",

    components: {
        TheHeader
    },

    data () {
        return {
            showErrorMessage: false,
            errorMessage: "",
        }
    },

    methods: {

        getProblemsOfUser() {

            this.$axios.get(`${process.env.VUE_APP_API_URL}problems`).then( (response) => {

                console.log(response);

            }).catch( (errResponse) => {

                // Show error
                this.errorMessage = errResponse.response.data.message;

            }).finally( () => {



            });
        },
    },

    mounted() {


    },
}
</script>

<style scoped>

</style>
