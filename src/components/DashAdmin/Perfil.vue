<template>
    <div class="cuerpo">
        <div class="usuario">
            <img alt="usuario" style="width:100px; height:100px;" src="../../assets/usuario.png"> 
        </div>

        <div class="texto">
            <div class="nombre">
                <p>Nombre</p>
                <input type="text" style="height:50px; width:55%"  maxlength="40"   name="nombre"  v-model="nuevoNombre" >   
            </div>
            <div class="ocupacion">
                <p>Ocupacion</p>
                <input type="text" style="height:50px; width:55%" maxlength="30"  name="ocupacion" v-model="nuevaOcupacion">
            </div>
            <div class="categoria">
                <p>Categoria</p>
                <select v-model="nuevaCategoria" style="height:50px; width:55%; margin-left:22%" class="form-select form-select-lg" aria-label="Default select example" required>
                    <option selected></option>
                    <option value="Estudiante">Estudiante</option>
                    <option value="Egresado">Egresado</option>
                    <option value="Docente">Docente</option>
                </select>
            </div>
            <div class="contraseñaactual" >
                <p>Contraseña Actual</p>
                <input type="password" style="height:50px; width:55%" maxlength="30" v-model="contraseñaActual">   
            </div>
            <div class="nuevacontraseña" >
                <p>Nueva Contraseña</p>
                <input type="password" style="height:50px; width:55%" maxlength="30" v-model="nuevaContraseña">
            </div>
            <div class="confirmarcontraseña">
                <p>Confirmar Contraseña</p>
                <input type="password" style="height:50px; width:55%" maxlength="30" v-model="confirmarContraseña">
            </div>

        </div>
        <div class="botones" >
            <div class="boton2" >
                <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000;margin-rigth:80px" 
                type="submit" @click="newName">
                    Cambiar datos
                </button>
            </div>
            <div>
                <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000;margin-left:80px" 
                type="submit" @click="newPassword">
                    Cambiar contraseña
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
import { db } from '@/firebase'


export default {
    data(){
        return{
            usuario:[],
            user:null,
            nuevaContraseña:"",
            contraseñaActual:"",
            confirmarContraseña:"",
            nuevoNombre:"",
            nuevaOcupacion:"",
            nuevaCategoria:""
        }
    },
    created(){
            this.user = firebase.auth().currentUser;
            this.usuario=[]
            db.collection("usuarios")
            .get()
            .then((r) => {
                r.docs.map((item) => {
                this.usuario.push({
                    id: item.id,
                    data: item.data(),
                });
                });
            });
    },
    methods: {
        newPassword(){
            this.user = firebase.auth().currentUser;
            var newPassword = this.nuevaContraseña;

            if (this.nuevaContraseña !="" && this.confirmarContraseña==this.nuevaContraseña  ){
                    
                const credential = firebase.auth.EmailAuthProvider.credential(
                    this.user.email,
                    this.contraseñaActual
                );
                    
                this.user
                .reauthenticateWithCredential(credential)
                .then( () => {
                    console.log(this.user.email)
                    console.log(this.contraseñaActual)
                    console.log(credential)
                    this.user.updatePassword(newPassword).then(()=> 
                    {
                        console.log('correcto');    
                    }).catch((error)=> {
                        console.log(error.menssage);
                    });
                })
                .catch( (error) => {
                    console.error("Error updating document: ", error);
                });
            }
                
        },
        newName(){
            var user = firebase.auth().currentUser;
            //const auth = db.auth();

            return user.updateProfile({
                displayName: this.nuevoNombre,
                photoURL: this.nuevaCategoria
            }),
            user.updateProfile({
                nombre: this.nuevoNombre,
                categoria: this.nuevacategoria
            })
        }
    }
}
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                             
<style scoped>
    .cuerpo{
        
        background-color: white;
        border-radius: 50px;
        margin-right: 5%;
        margin-left: 5%;
        margin-top:2%;
        padding: 1%;
    }
    p{                                                                                                                      
        margin: 10px;                                                                                                                                                                                                       
        font-family: 'Righteous';
        font-size: 20px;
    }
    .botones{
        text-align: center;
        margin:10px;
        flex-direction:row; 
    }
    .usuario{
        text-align: center;
    }
    
   

</style>