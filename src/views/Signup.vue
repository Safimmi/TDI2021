<template>

    <div class="SignUp">

        <div class="ovl">
            <img  src="../assets/Wave/WaveSplash.png" alt="Overlay">
        </div>

        <HeadR/>

        <div class="wrapper">
                
            <div class="formRegistro">
                <form @submit.prevent="signupRequest" id="signup-form">
                    
                    <div class="formTitle">
                        <router-link to="/login">
                            <img src="../assets/Icons/BackIconX2.png" alt="back">
                        </router-link>
                        <h2>Registro</h2>
                    </div>
                    
                    <div v-if="errorMessage !== ''" class="alert-danger"  role="alert">
                        {{ errorMessage }}
                    </div>
                    <div v-if="successMessage !== ''" class="alert-success"  role="alert">
                        {{ successMessage }}
                    </div>
                    
                    <div class="row formContent">
                        
                        <div class="form-group">
                            <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
                            <input type="nombre" id="nombre" v-model="name" class="form-control form-control-lg" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlInput1" class="form-label">Correo Institucional:</label>
                            <input type="email" id="email" v-model="email" class="form-control form-control-lg" required>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1" class="form-label">Categoría:</label>
                            <select v-model="categoria" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option selected></option>
                                <option id="categoria" value="Estudiante">Estudiante</option>
                                <option id="categoria" value="Egresado">Egresado</option>
                                <option id="categoria" value="Docente">Docente</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" v-model="password" class="form-control form-control-lg" required>
                        </div>

                        <div class="form-group">
                            <label for="password2">Confirmar contraseña:</label>
                            <input type="password" id="password2" v-model="password2" class="form-control form-control-lg" required>
                        <br>
                        </div>

                    </div>
                </form>

                <div class="form-group1">
                    <button @click="signupRequest()" class="btn btn-primary btn-lg">
                        <span v-if="! xhrRequest">Regístrate</span>
                        <span v-if="xhrRequest">Regístrate</span>
                    </button>
                    <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                        <span class="sr-only"></span>
                    </div>

                </div>
            </div> 
        </div> 
        
        <HomeB/>   

    </div>

</template>

<script>
import firebase from "firebase"
import { db } from '@/firebase'
import HomeB from "@/components/Registro/HomeB.vue"
import HeadR from "@/components/Registro/HeadR.vue"

export default {
    name: "Signup",
    components: {
        HomeB,
        HeadR,
    },
    data() {
        return {
            name: "",
            categoria: "",
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
                let v = this;
                
                if (this.email.includes(this.dominio)) {
                    console.log("dominio correcto")    
                    v.xhrRequest = true;
                    v.errorMessage = "";
                    v.successMessage = "";
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            const user = firebase.auth().currentUser;
                            return user.updateProfile({
                                displayName: this.name,
                                photoURL: this.categoria
                            }),
                            db.collection("usuarios").doc(user.uid).set({
                                nombre: this.name,
                                usuario: user.email,
                                categoria: this.categoria,
                                ocupacion:'',
                                foto:'https://firebasestorage.googleapis.com/v0/b/multirush-b945a.appspot.com/o/FotosUsuarios%2Fusuario.png?alt=media&token=882444d0-c8c2-4c7b-99c5-84c74574a3de'

                            })
                            .then((docRef) => {
                                console.log("Document written with ID: ", docRef.id);
                            })
                            .catch((error) => {
                                console.error("Error adding document: ", error);
                            }); 
                        })
                    v.successMessage = "Cuenta creada correctamente"; 
                    v.errorMessage = "";
                    v.xhrRequest = false;   
                }
                else
                {
                    console.log("dominio incorrecto")   
                    v.errorMessage = "Ingrese un correo de la Universidad Militar";
                    v.successMessage = "";
                    v.xhrRequest = false;
                }
            
        }
    }
}
</script>

<style scoped>

/* All */
.SignUp{
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
    align-items:flex-start;
    justify-content: center;

    position: relative;
    width: 100%;
    height: 85%;
    padding-bottom: 3%;
    padding-top: 1%;
}
.formRegistro{
    /* border: 5px solid blue; */
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 20px;
    background: white;
    min-height: 100%;
    width: 50%;
    margin: 0;
    padding: 2% 2%;
    z-index: 1;
}
.formTitle{
    display: flex;
    margin-bottom: 3%;
    margin-top: 1%;
}
.formTitle img{
    max-height: 35px;
}
.formRegistro h2{
    font-family: 'Righteous';
    color: #353755;
    font-size: 42px;
    padding-right: 3%;
    margin: 0;
    width: 100%;
}
.formContent{
    padding: 0 8%;
}
.formRegistro label {
    font-family: 'Righteous';
    color: #353755;
    font-size: 15px;
}  
.form-group{
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:0.3rem 0px;
}

/* Boton Registro */
.boton {
    /* border: 5px solid cyan; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    padding: 0;
    margin:0;
    height: 100%;
    width: 50%;
}
.btn-primary {
    background-color: #5bd3c7;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif; 
    font-size: 20px;
    font-weight: 600;
    padding: 10px 60px;

    max-height: 100%;
}
.btn-primary:hover{
    background-color: #62e2d5;
}
/* .btn-primary:hover{
    background-color: #767DDD;
} */

/* Alertas */
._loader {
    position:relative;
    top:6px;
    left:10px;
}
.alert-success{
    background: #5bd3c744;
    margin: 1% 10%;
    padding: 5px 40px;
    border-radius: 20px;

    font-family: 'Montserrat';
    color: #353755;
    font-size: 15px;
}
.alert-danger{
    background:rgba(206, 99, 99, 0.445);
    margin: 1% 10%;
    padding: 5px 40px;
    border-radius: 20px;

    font-family: 'Montserrat';
    color: #fff;
    font-size: 15px;
}

</style>