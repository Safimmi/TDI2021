<template>
    <div v-if="successMessage !== ''" class="mensaje"  >
        <h4>{{ successMessage }}</h4>
    </div>
    <div class="cuerpo">
       
        <div class="texto">
             <div class="avatar">
            <!-- <img alt="usuario" style="width:100px; height:100px;" src="../../assets/usuario.png">  -->
                <div v-for="imagen in avatares" v-bind:key="imagen.id">
                  <label @click="avatar = imagen.data.imagen">
                    <input type="radio" name="test" value="small" />
                    <img style="width:80%; height:50%;"
                      class="img_perfil_selector"
                      :src="getImageUrl(imagen.data.imagen)"
                      alt="imagen perfil"
                    />
                  </label>
                </div>
        </div>
            <div class="formulario">
                <p>Nombre:</p>
                <input v-model="nuevoNombre" class="form-control form-control-lg"   id="nombre">   
            </div>
            <div class="formulario">
                <p>Ocupacion:</p>
                <input v-model="nuevaOcupacion"  class="form-control form-control-lg" >
            </div>
             <div v-if="userid == 'd4gwmIMUkXOGz11YJi6YLBdGTF12'"  class="formulario">
                 <p>Categoría:</p>
                <select v-model="nuevaCategoria" class="form-select form-select-lg " aria-label="Default select example" required>
                <option value="Administrador">Administrador</option>
                </select>
            </div>
            <div v-else class="formulario">
                <p>Categoría:</p>
                <select v-model="nuevaCategoria" class="form-select form-select-lg " aria-label="Default select example" required>
                <option value="Estudiante">Estudiante</option>
                <option value="Egresado">Egresado</option>
                <option value="Docente">Docente</option>
                </select>
            </div>
            <div class="formulario" >
                <p>Contraseña Actual:</p>
                <input v-model="contraseñaActual" type="password"  class="form-control form-control-lg">   
            </div>
            <div class="formulario" >
                <p>Nueva Contraseña:</p>
                <input v-model="nuevaContraseña" type="password"   class="form-control form-control-lg">
            </div>
            <div class="formulario">
                <p>Confirmar Contraseña:</p>
                <input v-model="confirmarContraseña" type="password"   class="form-control form-control-lg">
            </div>

        </div>
        <div class="boton" >
            <button @click="update()" class="btn btn-dark2">
               Guardar
            </button>
            <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                <span class="sr-only"></span>
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
            dataUsuario: {},
            nuevaContraseña: null,
            contraseñaActual:"",
            confirmarContraseña:"",
            nuevoNombre:'',
            nuevaOcupacion:'',
            nuevaCategoria:'',
            userid:'',
            xhrRequest: false,
            successMessage: '',
            avatares:[],
            avatar:null

        }
    },
    created(){


            this.user = firebase.auth().currentUser;
            var docRef = db.collection("usuarios").doc(this.user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    this.dataUsuario = doc.data();
                    this.nuevoNombre = this.dataUsuario.nombre;
                    this.nuevaOcupacion = this.dataUsuario.ocupacion;
                    this.nuevaCategoria = this.dataUsuario.categoria;
                    this.userid = this.user.uid;
                    
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            this.avatares = [];
            db.collection("avatar")
            .get()
            .then((r) => {
                r.docs.map((imagen) => {
                this.avatares.push({
                    id: imagen.id,
                    data: imagen.data(),
                });
                });
            });
    },
    methods: {
        getImageUrl(imageId) {
            return `${imageId}`;
        },
        update(){
            
            let v = this;
            v.successMessage = ""; 
            this.xhrRequest = true;
            this.user = firebase.auth().currentUser;


            if(this.nuevaContraseña){

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
            }
            db.collection("usuarios").doc(this.userid).set({
                nombre: this.nuevoNombre,
                categoria: this.nuevaCategoria,
                ocupacion: this.nuevaOcupacion,
                foto: this.dataUsuario.foto,
                imagen: this.avatar
            })
            .then(() => {
                console.log(this.usuario.uid)
                this.updateproyecto();
                this.updateuser();
                this.nuevaContraseña= null;
                this.contraseñaActual="",
                this.confirmarContraseña="",
                this.xhrRequest = false;
                v.successMessage = "Datos guardados correctamente. Recargue la página para ver los cambios."; 
            })    
        },
        updateproyecto(){

            var proyectosL = db.collectionGroup('proyectos').where('usuario', '==', this.userid);
            proyectosL.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                        db.collection("proyectos").doc(doc.id).update({
                            nombre: this.nuevoNombre,
                            categoria: this.nuevaCategoria

                        })
                });
            });
        },
        updateuser(){
            const user = firebase.auth().currentUser;
            return user.updateProfile({
                displayName: this.nuevoNombre,
                photoURL: this.nuevaCategoria
            })
        }
        
    }
}
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                             
<style scoped>
    [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    }
    /* IMAGE STYLES */
    [type="radio"] + img {
    cursor: pointer;
    }
    /* CHECKED STYLES */
    [type="radio"]:checked + img {
    box-shadow: 0 -2px 5px 0 rgba(0, 55, 138, 0.6),
        0 2px 5px 0 rgba(0, 55, 138, 0.6);
    }
    .avatar{
        display: flex;
        justify-content: flex-start;
        margin: 1rem 0;
    }
    .cuerpo{ 
        background-color: white;
        border-radius: 50px;
        margin-right: 5%;
        margin-left: 5%;
        margin-top:2%;
        margin-bottom: 10%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* width: 800px; */
    }
    .btn-dark2{
         background-color: #484A6D;
        border: none;
        border-radius: 30px;
        font-family: 'Montserrat', sans-serif; 
        font-size: 20px;
        font-weight: 600;
        padding: 15px 60px;
        max-height: 100%;
        color: white;
    }
    .btn-dark2:hover{
        background-color: #5d5f88;      
    }
   
    .boton {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px;
    }
    .boton button{
        margin-right: 10px;
    }
    p{                                                                                                                      
        margin: 10px;                                                                                                                                                                                                       
        font-family: 'Righteous';
        font-size: 20px;
    }


    .usuario{
        text-align: center;
    }
    .texto{
        /* border: 2px solid blue; */
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .texto p{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .formulario{
        width: 100%;
    }
    .avatar{
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .alert-success{
    background: #5bd3c744;
    margin: 1% 10%;
    padding: 5px 40px;
    border-radius: 20px;

    font-family: 'Montserrat';
    color: #202233;
    font-size: 15px;
    }
     .mensaje{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 80px;
    background: rgba(255, 255, 255,0.3);
    padding: 20px;
    border-radius: 30px;
  }
    .mensaje h4{
    font-family: 'Montserrat', sans-serif;
    color: #000;
    font-weight: bolder;
    margin-bottom: 0;
    font-size: 20px;
    /* border:2px solid blue; */
    width: 100%;
    text-align: center;
    }

</style>