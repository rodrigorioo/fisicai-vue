<template>
    <v-app >
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>{{isRegister ? stateObj.register.name : stateObj.login.name}} form</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <form ref="form" @submit.prevent="isRegister ? register() : login()">
                                    <v-text-field
                                        v-model="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="pepe@mail.com"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        required
                                    ></v-text-field>

                                    <v-text-field v-if="isRegister"
                                                  v-model="confirmPassword"
                                                  name="confirmPassword"
                                                  label="Confirm Password"
                                                  type="password"
                                                  placeholder="cocnfirm password"
                                                  required
                                    ></v-text-field>
                                    <div class="red--text"> {{ errorMessage }}</div>
                                    <v-btn type="submit" class="mt-4" color="primary" value="log in"
                                        v-if="buttonDisabled">
                                        {{ isRegister ? stateObj.register.name : stateObj.login.name }}
                                    </v-btn>
                                    <div class="grey--text mt-4"
                                         @click="isRegister = !isRegister;">
                                        {{ toggleMessage }}
                                    </div>
                                </form>
                            </v-card-text>
                        </v-card>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import axios from "axios";

export default {
    name: "LoginForm",

    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            isRegister : false,
            errorMessage: "",
            buttonDisabled: false,
            stateObj: {
                register :{
                    name: 'Register',
                    message: 'Ya tenes una cuenta? Login.'
                },
                login : {
                    name: 'Login',
                    message: 'Registrate'
                }
            }
        };
    },
    methods: {

        login() {

            const { email, password } = this;

            this.buttonDisabled = true;

            // Process Login
            axios.post(`${process.env.VUE_APP_API_URL}login`, {
                email,
                password,
            },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
            }).then( (response) => {

                console.log(response.data);
                // TODO: Process login

            }).catch( (errResponse) => {

                // Show error
                this.errorMessage = errResponse.response.data.message;

            }).finally( () => {

                this.buttonDisabled = false;

            });
        },

        register() {

            // If the passwords are equals
            if(this.password == this.confirmPassword){

                const { email, password } = this;

                this.buttonDisabled = true;

                // Process Login
                axios.post(`${process.env.VUE_APP_API_URL}register`, {
                        email,
                        password,
                    },
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).then( (response) => {

                    console.log(response.data);
                    // TODO: Process register

                }).catch( (errResponse) => {

                    // Show error
                    this.errorMessage = errResponse.response.data.message;

                }).finally( () => {

                    // Clear vars
                    this.isRegister = false;
                    this.errorMessage = "";
                    this.$refs.form.reset();
                    this.buttonDisabled = false;

                });

            } else {
                this.errorMessage = "Las contraseñas no coinciden"
            }
        }
    },
    computed: {
        toggleMessage: function () {
            return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message;
        }
    }
}
</script>

<style scoped>

</style>
