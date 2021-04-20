<template>
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Registro</h1>
        </div>
        <div class="col-sm-5 m-auto">
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="signupRequest" id="signup-form">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">

                        <label for="exampleFormControlInput1" class="form-label">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="name@example.com" v-model="email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" v-model="password" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password2">Confirmar contraseña</label>
                        <input type="password" id="password2" v-model="password2" class="form-control form-control-lg">
                    </div>
                    <div>
                        <form>
                            <h2>Tipo de usuario</h2>
                            <label>Usuario
                                <input type="radio" name="gender" checked value="Usuario" v-on:click="tipoUsuario=true">
                            </label>
                            <label>Admin
                                <input type="radio" name="gender" value="Admin" v-on:click="tipoUsuario=false">
                            </label>
                        </form>
                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-primary px-4">
                            <span v-if="! xhrRequest">Regístrate</span>
                            <span v-if="xhrRequest">Por favor espere</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    name: "Signup",
    data() {
        return {
            email: "",
            password: "",
            password2: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: "",
            tipoUsuario: false ,
            dominio: "@unimilitar.edu.co"       }
    }, 
    methods: {
        signupRequest() {
            if (this.email.includes(this.dominio)) {
            console.log("dominio correcto")    
            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";
            firebase
                .auth()
                .createUserWithEmailAndPassword(v.email, v.password,).then(
                    
                    //auth.token.email.matches(/.*@unimilitar.edu.co$/)
                () => {
                    console.log(v)
                    v.successMessage = "Cuenta creada correctamente";
                    v.xhrRequest = false;
                    
                    if (this.tipoUsuario==true) {
                        console.log("true")
                        this.$router.push({name:"Dashboard"});
                    }
                    else{
                        console.log("false")
                        this.$router.push({name:"Login"});
                    }
                    
                },
                
                ( error ) => {
                    let errorResponse = JSON.parse(error.message);
                    v.errorMessage = errorResponse.error.message;
                    v.xhrRequest = false;
                }
            );
        }
        else
        {
            console.log("dominio incorrecto")   
            //v.successMessage = "Cuenta no creada correctamente";
        }
            
        }
    }
}
</script>
<style scoped>
._loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>