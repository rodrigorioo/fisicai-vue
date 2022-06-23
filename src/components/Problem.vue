<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="display-2 font-weight-bold mb-3 text-center">FisicAI</h1>
                <h3 class="display-1 font-weight-light mb-3 text-center">Dejá que una IA resuelva tus ejercicios de física 😎</h3>
            </v-col>

            <v-col cols="12">
                <v-row>
                    <v-col cols="12"

                           v-if="show_error_message && error_message !== ''">
                        <v-alert v-model="show_error_message" border="left" close-text="Cerrar" dark dismissible type="error">
                            {{ error_message }}
                        </v-alert>

                    </v-col>

                    <v-col cols="12">
                        <v-textarea name="input-7-1" label="Escribí tu problema" hint="Tratá de respetar las unidades y escribirlas de forma correcta" placeholder="Calcula el tiempo que demora un automóvil en recorrer 800 metros, con una velocidad media de 20 m/s"

                            v-model="problem"></v-textarea>
                    </v-col>

                    <v-col cols="12" class="text-right">
                        <v-btn elevation="2" color="error" dark large
                            :disabled="button_disabled"
                            @click="solveProblem">
                            RESOLVER
                            <v-icon right dark>mdi-send</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12"

                v-if="Object.keys(solution).length > 0">
                <v-card class="mx-auto">

                    <v-card-title>Solución</v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6">

                                <v-list dense>
                                    <v-subheader>Datos solicitados</v-subheader>
                                    <v-list-item-group color="primary">
                                        <v-list-item active-class=""
                                            v-for="(requestedData, iRequestedData) in solution.requested"
                                            :key="iRequestedData">
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    {{ capitalizeWord(requestedData) }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>

                                <v-list dense>
                                    <v-subheader>Datos obtenidos</v-subheader>
                                    <v-list-item-group color="primary">
                                        <v-list-item active-class=""
                                            v-for="(data, iData) in solution.data"
                                            :key="iData">
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    {{ capitalizeWord(data.name) }}: {{ data.value }} {{ data.unit }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>

                            <v-col cols="12" sm="6">

                                <v-list dense>
                                    <v-subheader>Solución de los datos solicitados</v-subheader>
                                    <v-list-item-group color="primary">
                                        <v-list-item active-class=""
                                            v-for="(resolutionData, iResolutionData) in solution.resolution"
                                            :key="iResolutionData">
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    {{ capitalizeWord(resolutionData.name) }}: {{ resolutionData.value }} {{ resolutionData.unit }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" class="text-center"
                v-if="Object.keys(solution).length === 0 && button_disabled">
                <v-progress-circular
                    :size="50"
                    color="primary"
                    indeterminate></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import axios from "axios";

export default {
    name: 'HelloWorld',

    data: () => ({
        problem: "",
        solution: {},

        error_message: "",
        show_error_message: false,

        button_disabled: false,
    }),

    methods: {

        solveProblem () {

            // Clear vars
            this.button_disabled = true;

            this.solution = {};

            this.show_error_message = false;
            this.error_message = "";

            // Process request
            axios.post(`${process.env.VUE_APP_API_URL}solve-problem`, {
                problem: this.problem,
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then( (response) => {

                    this.solution = response.data;

                })
                .catch( (errResponse) => {

                    // Show error
                    this.show_error_message = true;
                    this.error_message = errResponse.response.data.message;

                    // Reset problem text
                    this.problem = "";

                }).finally( () => {
                    this.button_disabled = false;
            });
        },

        capitalizeWord (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
}
</script>
