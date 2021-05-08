<template>

    <div class="LogIn">

        <div class="ovl">
            <img  src="../assets/Wave/WaveSplash.png" alt="Overlay">
        </div>

        <HeadR/>

        <div class="wrapper">

                <div class="formInicio">
                
                    <div class="formContent">

                        <div class="formTitle">
                            <h2>Iniciar Sesión</h2>
                        </div>

                        <div class="msg">
                            <div v-if="errorMessage !== ''" class="alert-danger" role="alert">
                                {{ errorMessage }}
                            </div>
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
                                    <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-primary btn-lg" >
                                        <span v-if="! xhrRequest">Ingresar</span>
                                        <span v-if="xhrRequest">Ingresar</span>
                                    </button>
                                    <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>
                        </form>
                    </div>

                </div>

                <div class="registroLink">
                    <p>¿No tienes una cuenta?</p>
                    <router-link to="/signup"><button type="button" class="btn btn-secondary">Regístrate</button></router-link>
                </div>
                
        </div>

        <HomeB/>   

    </div>

    <!-- <div class="wrapper">
        <div class="ovl">
            <img  src="../assets/Wave/WaveSplash.png" alt="Overlay">
        </div>
        
        <div class="main">
            <div class="form">
                <div v-if="errorMessage !== ''" class="alert-danger" role="alert">
                    {{ errorMessage }}
                </div>
                <div class="izq">
                    <h1>Iniciar Sesión</h1>
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
                                    <span v-if="xhrRequest">Ingresar</span>
                                </button>
                                <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
            <div class="der">
                <p>¿No tienes una cuenta?</p>
                <router-link to="/signup"><button type="button" class="btn btn-primary" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 5px 25px; link-hover-color:#000">Regístrate</button></router-link>
            </div>
        </div>  

        <div class="buttonHome">
            <HomeB/>
        </div>    

    </div>   -->
</template>

<script>
import firebase from "firebase";
import HeadR from "@/components/Registro/HeadR.vue"
import HomeB from '@/components/Registro/HomeB.vue'
export default {
    name: "Login",
    components: {
        HomeB,
        HeadR
    },
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: ""
        }
    },
    methods: {
        loginRequest() {
            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";

            firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
                () => {
                    if (v.email == 'admin@unimilitar.edu.co') {
                        this.$router.replace('dashboard')
                    }
                    else{
                        this.$router.replace('dashboardM')
                    }

                    v.xhrRequest = false;
                    
                }, 
                (error) => {
                    v.errorMessage = error.message;
                    v.xhrRequest = false;
                    v.errorMessage = "Correo o contraseña incorrecta";
                }
                
            )
        }
    }
}
</script>

<style scoped>

/* All */
.LogIn{
    /* border: 5px solid green; */
    background: none;
    display:flex;
    position: relative;
    height: 99.9vh;
    width: 99.9vw;
    flex-direction: column;
}

/* Overlay*/
.ovl{
    /* border: 5px solid magenta; */
    background: #D1D2F3;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    z-index: -1;
}
.ovl img{
    min-width: 100%;
    /* height: 36%; */
}

/* Formulario */
.wrapper{
    /* border: 5px solid red; */
    background: none;
    display:flex;
    align-items:center;
    justify-content: space-around;

    position: relative;
    width: 100%;
    height: 85%;
    padding-bottom: 3%;
    /* z-index: 1; */
}
.formInicio{
    /* border: 5px solid blue; */
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 20px;
    background: white;
    
    width: 35%;
    height: 75%;
    margin: 0 10% 0 15%; 
    z-index: 1;
}
.formTitle{
    margin-bottom: 5%;
    margin-top: 3%;
}
.formInicio h2{
    font-family: 'Righteous';
    color: #353755;
    margin-bottom: 3.5rem;
    font-size: 45px;
}
.formInicio label {
    font-family: 'Righteous';
    color: #525365;
    font-size: 20px;
}
.form-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:1.5rem 0px;
}
.formContent{
     /* border: 5px solid blueviolet; */
    padding:  10%;
}


.registroLink{
    /* border: 5px solid blue; */
    width: 45%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 8%;
    z-index: 1;
}
.registroLink p {
    font-family: 'Montserrat';
    color: #353755;
    margin-bottom: 2rem;
    font-size: 50px;
    font-weight: normal;
}

/* Boton Sesion */
.btn-primary {
    background-color: #5bd3c7;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif; 
    font-size: 20px;
    font-weight: 600;
    padding: 15px 60px;

    max-height: 100%;
}
.btn-primary:hover{
    background-color: #62e2d5;
}
/* .btn-primary:hover{
    background-color: #767DDD;
} */
.btn-secondary {
    background-color: #484A6D;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif; 
    font-size: 20px;
    font-weight: 600;
    padding: 15px 60px;
    max-height: 100%;
}
.btn-secondary:hover {
    background-color: #5d5f88;
}

/* Alertas */
.alert-danger{
    background:rgba(206, 99, 99, 0.445);
    margin-left: 55px;
    padding: 5px 20px;
    border-radius: 20px;
    
    font-family: 'Montserrat';
    color: #fff;
    font-size: 20px;
    width: 80%;
}

</style>