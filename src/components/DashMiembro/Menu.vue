<template>
    <div class="wrapper">

        <div class="usuario">
            <img alt="usuario" style="width:30%; height:10%;" src="../../assets/usuario.png"> 
        </div>

        <div class="informacion" >
            <h3>{{user.displayName}}</h3>
            <h4>{{user.photoURL}}</h4>
        </div>

        <div class="botones">
            <div class="boton3" v-if="user.displayName!='Marlon Pinto'">
                <button class="btn-dark2" 
                type="submit" @click="mostrarlista3()">
                        Mis Proyectos
                </button>
            </div>
             <div class="boton3" v-else>
                <button class="btn-dark2" 
                type="submit" @click="mostrarlista()">
                        Proyectos
                </button>
            </div>
            <div class="boton1" v-if="user.displayName!='Marlon Pinto'">
                    <button class="btn-dark2"  
                    type="submit" @click="mostrarperfilm()">
                        Editar Perfil
                    </button>
            </div>
            <div class="boton1" v-else>
                    <button class="btn-dark2"  
                    type="submit" @click="mostrarperfila()">
                        Editar Perfil
                    </button>
            </div>

            <div class="boton2">
                <button class="btn-dark3" @click="salir()"  
                type="submit" >
                    Cerrar sesión
                </button>
            </div>
            
            
        </div>

        <div class="funciones">
            <div class='mas' v-if="user.displayName!='Marlon Pinto'">
                <button class="btn-dark4" @click="mostrarformulario()" >
                    <img  alt="Formulario" style="width:70px " src="../../assets/Icons/PlusIcon.png">
                </button>
            </div>

            <div  class="btn-dark5" style="align=right" >
                <HomeB2/>
            </div>
        </div>

    </div>

</template>

<script>
import HomeB2 from '@/components/Registro/HomeB2.vue'
import firebase from "firebase";
import { useLoadusuarios} from '@/firebase'
import { db} from '@/firebase'
export default {
    name: 'DashAdministrador',
    components: {HomeB2},
    methods:{
        setup() {
        const usuarios = useLoadusuarios()
        return { usuarios }
        },
        salir(){
            firebase.auth().signOut().then(() => {
                this.$router.replace('/')
            }).catch((error) => {
               console.log(error)
            });
        },
        mostrarlista:function() {

            var x = document.getElementById("ListaID");
            var z = document.getElementById("PerfilID");
            x.style.display = "block";
            z.style.display = "none";
        },
        mostrarlista3:function() {

            var x = document.getElementById("Lista3ID");
            var y = document.getElementById("formularioMiembroID");
            var z = document.getElementById("PerfilID");
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
        },
        mostrarformulario:function() {

            var x = document.getElementById("Lista3ID");
            var y = document.getElementById("formularioMiembroID");
            var z = document.getElementById("PerfilID");
            y.style.display = "block";
            x.style.display = "none";
            z.style.display = "none";
        },
        mostrarperfilm:function() {

            var x = document.getElementById("Lista3ID");
            var y = document.getElementById("formularioMiembroID");
            var z = document.getElementById("PerfilID");
            y.style.display = "none";
            x.style.display = "none";
            z.style.display = "block";
        },
        mostrarperfila:function() {

            var x = document.getElementById("ListaID");
            var z = document.getElementById("PerfilID");
            x.style.display = "none";
            z.style.display = "block";
        },
    },
    data(){
        return{
            usuario:[],
            user:null
        }
    },
    created(){
        this.user = firebase.auth().currentUser;
        console.log(this.user.displayName);
        console.log(this.user)
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
    
}
</script>

<style scoped>
    .wrapper{
        
        background:#353755;
        height: 100%;
        width: 20%;
        position: fixed;
        padding: 1%;
    }
    .usuario{
        margin-top: 4%;
        margin-bottom: 3%;
    }
    .botones{
        text-align: left;
    }
    .btn-dark2{
       margin: 1%; 
       background-color: #1e1f30; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 6%;
       color: white;
    }
    .btn-dark2:hover{
        background-color: #78ccac;
        color: white;
    }
    .btn-dark3{
       margin: 1%; 
       background-color: #1e1f30; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 6%;
       color: white;
    }
    .btn-dark3:hover{
        background-color: #BA605D;
        color: white;
    }
    .btn-dark4{
      background-color: rgba(255, 255, 255, 0) ;
       border:none;
        margin-top:10%;
    }
    /* .btn-dark4:hover{
        background-color: #78ccac;
        color: white;
    } */
    .btn-dark5{
        background-color: rgba(255, 255, 255, 0) ;
        border:none;
        margin-top:20%;
        padding-right: 3%;
      
    }
    /* .btn-dark5:hover{
        background-color: #b4b34f;
        color: white;
    } */
    .informacion{
        font-family: 'Righteous';
        color:white;
        text-align: left;
        padding: 10%;
       
    }
    .funciones{
        text-align: right;
        margin-top:20%;
    }
    .mas{
        background-color: rgba(255, 255, 255, 0);
    }

</style>