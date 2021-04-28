<template>
<div class="wrapper">
    <div class="main">
        <div class="izq">
            <h1>Iniciar Sesión</h1>
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="loginRequest" id="login-form">
                    <div class="form-group">
                        <label for="email">Correo Institucional:</label>
                        <input type="email" v-model="email" id="email" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
                        <input type="password" v-model="password" id="password" class="form-control form-control-lg">
                    </div>
                    <br>
                    <div class="form-group1">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-primary btn-lg" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 5px 25px; link-hover-color:#000">
                            <span v-if="! xhrRequest">Ingresar</span>
                            <span v-if="xhrRequest">Por favor espere</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
            </form>
    </div>
    <div class="der">
        <p>¿No tienes una cuenta?</p>
        <router-link to="/signup"><button type="button" class="btn btn-primary" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 5px 25px; link-hover-color:#000">Regístrate</button></router-link>
    </div>
    </div>
        <HomeB/>
</div>
</template>
<script>
import firebase from "firebase";
import HomeB from '@/components/Registro/HomeB.vue'
export default {
    name: "Login",
    components: {
        HomeB
  },
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
form{
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 50px;
    
}
.form-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:10px 0px;
}
.wrapper{
    display: flex;
    flex-direction: column;
    margin: 0;
}
.main{
    height: 100%;
    width: 70%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8%;
    margin-bottom: 4%;
}
.text-left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.izq{
    width: 70%;
    height: 100%;
    padding:30px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 20px;
    background: white;
}
.der{
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    
}
.footer{
    display: flex;
    padding-left: 20px;
    width: 100%;
    height: 300%;
}

.izq h1{
    
  font-family: 'Righteous';
  color: #353755;
  margin-bottom: 0;
  font-size: 35px;
}

.izq label {
  font-family: 'Righteous';
  color: #525365;
  font-size: 20px;
}

.der p {
    font-family: 'Montserrat';
    font-size: 40px;
}
</style>