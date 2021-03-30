<template>
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Inicio de Sesión</h1>
        </div>
        <div class="col-sm-5 m-auto">
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="loginRequest" id="login-form">
                <div class="row text-left">
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" v-model="email" id="email" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" v-model="password" id="password" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-primary px-4">
                            <span v-if="! xhrRequest">Ingresar</span>
                            <span v-if="xhrRequest">Por favor espere</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center form-group mt-5">
                        <p>¿No tienes una cuenta? <router-link to="/signup">Registrate</router-link></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        }
    },
    methods: {
        loginRequest() {
            let v = this;

            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
                () => {
                    this.$router.replace('dashboard')
                    v.xhrRequest = false;
                }, 
                (error) => {
                    v.errorMessage = error.message;
                    v.xhrRequest = false;
                }
                
            )
        }
    }
}
</script>
<style scoped>
.loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>