<template>
    <div class="cuerpo">
        <div class="usuario">
            <img alt="usuario" style="width:100px; height:100px;" src="../../assets/usuario.png"> 
        </div>
        <div class="texto">
            <div class="nombre">
                <p>Nombre</p>
                <input type="text" style="height:50px; width:55%"  maxlength="40"   name="nombre"  v-model="nuevoNombre" id="nombre">   
            </div>
            <div class="ocupacion">
                <p>Ocupacion</p>
                <input type="text" style="height:50px; width:55%" maxlength="30"  name="ocupacion" v-model="nuevaOcupacion" id="ocupacion"  readonly>
            </div>
            <div class="categoria">
                <p>Categoria</p>
                <input type="text" style="height:50px; width:55%" maxlength="30"  name="categoria" v-model="nuevacategoria" id="categoria">
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
                <button class="btn-dark2" 
                type="submit" id="boton" @click="nombrefirebase" >
                    Llenar informacion
                </button>
                <button class="btn-dark3" 
                type="submit" id="botonc" @click="newName">
                    Cambiar en codigo
                </button>
            </div>
            <div>
                <button class="btn-dark2" 
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
            var boton=document.getElementById('boton');
            var x = document.getElementById("botonc");

            //const auth = db.auth();

            return user.updateProfile({
                displayName: this.nuevoNombre,
                photoURL: document.getElementById('categoria').value
            }),
            user.updateProfile({
                nombre: this.nuevoNombre,
                categoria: document.getElementById('categoria').value
            })
            .then(()=>{
                
                boton.innerHTML='Llenar Informacion';
                x.style.display = "none";
                boton.style.display="block";
                document.getElementById('nombre').value='';
                document.getElementById('categoria').value='';
                document.getElementById('ocupacion').value='';
            }
            )
        },
        //datos
        
        nombrefirebase(){

            var user = firebase.auth().currentUser;
            //var nombre1=document.getElementById('nombre');
            //var boton=document.getElementById('boton');
            console.log(user.displayName);
            db.collection("usuarios").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data().nombre}`);
                    //nombre1.innerHTML ='todo';
                    if (`${doc.data().nombre}`== user.displayName) {
                        console.log('funciona');
                        document.getElementById('nombre').value=`${doc.data().nombre}`;
                        document.getElementById('categoria').value=`${doc.data().categoria}`;
                        document.getElementById('ocupacion').value=`${doc.data().ocupacion}`;
                        var boton=document.getElementById('boton');
                        
                        //z.style.display = "none";
                        boton.innerHTML='Cambiar en firebase';
                        //console.log(`${doc.id} => ${doc.data()}`)
                        boton.onclick=function(){

                            var x = document.getElementById("botonc");
                            x.style.display = "block";
                            boton.style.display="none";
                            console.log('entro');
                            var washingtonRef = db.collection("usuarios").doc(`${doc.id}`);

                            
                            var nombre = document.getElementById('nombre').value;
                            var categoria = document.getElementById('categoria').value;
                            var ocupacion = document.getElementById('ocupacion').value;
                            console.log(nombre);
                            console.log(categoria);
                            console.log(ocupacion);
                            // Set the "capital" field of the city 'DC'
                            return washingtonRef.update({
                                nombre: nombre,
                                categoria: categoria,
                                ocupacion: ocupacion,
                            })

                            .then(() => {
                                console.log("Document successfully updated!");
                            })
                            .catch((error) => {
                            // The document probably doesn't exist.
                                console.error("Error updating document: ", error);
                            });
                        }
                    }
                    
                });
            });
           
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
    .btn-dark2{
       margin: 1%; 
       background-color: #353755; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 6%;
       color: white;
       display:block;
    }
    .btn-dark2:hover{
        background-color: #78ccac;
        color: white;
    }
    .btn-dark3{
       margin: 1%; 
       background-color: #353755; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 6%;
       color: white;
       display:none;
       margin-top:10%
    }
    .btn-dark3:hover{
        background-color: #78ccac;
        color: white;
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