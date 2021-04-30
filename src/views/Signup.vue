<template>
    <div class="wrapper">
        <div class="izq">
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="signupRequest" id="signup-form">
                 <h1>Registro</h1>
                <div class="row text-left">
                    <div class="form-group">

                        <label for="exampleFormControlInput1" class="form-label">Correo Institucional</label>
                        <input type="email" id="email" v-model="email" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" v-model="password" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password2">Confirmar contraseña</label>
                        <input type="password" id="password2" v-model="password2" class="form-control form-control-lg">
                    <br>
                    </div>
                   
                    <div class="form-group1">

                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-primary btn-lg" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 5px 25px; link-hover-color:#000">
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
    <HomeB/>
</template>

<script>
import firebase from "firebase";
import HomeB from '@/components/Registro/HomeB.vue'
export default {
    name: "Signup",
    components: {
        HomeB
  },
    data() {
        return {
            email: "",
            password: "",
            password2: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: "",
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
                .createUserWithEmailAndPassword(v.email, v.password).then(
                    
                    //auth.token.email.matches(/.*@unimilitar.edu.co$/)
                () => {
                    console.log(v)
                    v.successMessage = "Cuenta creada correctamente";
                    v.xhrRequest = false;

                    this.$router.push({name:"Login"});
                   
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
.izq{
    width: 40%;
    height: 100%;
    padding:30px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 20px;
    background: white;
}
.izq h1{
    
  font-family: 'Righteous';
  color: #353755;
  margin-bottom: 30px;
  font-size: 35px;
}

.izq label {
  font-family: 'Righteous';
  color: #525365;
  font-size: 20px;
}
.form-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:10px 0px;
}
.wrapper{

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% 0;

}
</style>