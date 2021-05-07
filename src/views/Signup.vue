<template>
    <div class="wrapper">
            <div v-if="errorMessage !== ''" class="alert-danger"  role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert-success"  role="alert">
                {{ successMessage }}
            </div>
        <div class="izq">
            <form @submit.prevent="signupRequest" id="signup-form">
                 <h1>Registro</h1>
                <div class="row text-left">
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
                            <option value="Estudiante">Estudiante</option>
                            <option value="Egresado">Egresado</option>
                            <option value="Docente">Docente</option>
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
                <button @click="signupRequest()" class="btn btn-primary btn-lg" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 5px 25px; link-hover-color:#000">
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
</template>

<script>
import firebase from "firebase"
import { db } from '@/firebase'
import HomeB from '@/components/Registro/HomeB.vue'
export default {
    name: "Signup",
    components: {
        HomeB
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
                        db.collection("usuarios").add({
                            id: user.uid,
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
                v.xhrRequest = false;   
            }
            else
            {
                console.log("dominio incorrecto")   
                v.errorMessage = "Ingrese un correo de la Universidad Militar";
                v.xhrRequest = false;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 0;

}
.alert-success{
    background: #5bd3c744;
    margin: 10px;
    padding: 5px 20px;

    font-family: 'Montserrat';
    color: #353755;
    font-size: 20px;
}
.alert-danger{
    background:rgba(206, 99, 99, 0.445);
    margin: 10px;
    padding: 5px 20px;

    font-family: 'Montserrat';
    color: #fff;
    font-size: 20px;
}
</style>