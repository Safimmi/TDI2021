<template>
    <div class="wrapper">

        <div class="usuario">
            <!-- <img alt="usuario" style="width:30%; height:10%;" src="../../assets/usuario.png">  -->
            <img style="width:38%; height:auto; border: 20px radius; margin-top:6%"
            class="img_perfil"
            :src="getImageUrl(dataUsuario.imagen)"
            alt="imagen perfil"
            />
        </div>

        <div class="informacion" >
            <h3 id="infonombre">{{dataUsuario.nombre}}</h3>
            <h4 id="infocategoria">{{dataUsuario.categoria}}</h4> <br>
            <h4 id="infocategoria">{{dataUsuario.ocupacion}}</h4>
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

            <div class="boton1" v-if="user.displayName=='Marlon Pinto'">
                    <button class="btn-dark2"
                    type="submit" @click="mostrareditarinfo()">
                        Editar Información
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
            <div class='mas' v-if="user.uid !='d4gwmIMUkXOGz11YJi6YLBdGTF12'">
                <button class="btn-dark4" @click="mostrarformulario()" >
                    <img  alt="Formulario" style="width:4rem ; margin-right:3%" src="../../assets/Icons/PlusIcon.png">
                </button>
            </div>

            <div  class="btn-dark5" style="align=right ; margin-right:0.5%" >
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
    data() {
        return {
            usuario:[],
            user:null,
            dataUsuario: {},
            avatar: null
        }
    },
    methods:{
        getImageUrl(imageId) {
            return `${imageId}`;
        },
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
            var y = document.getElementById("InfoeditID");
            var z = document.getElementById("PerfilID");
            x.style.display = "block";
            y.style.display = "none";
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
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        },
        mostrarperfila:function() {

            var x = document.getElementById("ListaID");
            var y = document.getElementById("InfoeditID");
            var z = document.getElementById("PerfilID");
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        },
        mostrareditarinfo:function(){

            var x = document.getElementById("ListaID");
            var y = document.getElementById("InfoeditID");
            var z = document.getElementById("PerfilID");
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
        }
    },
    created(){

        this.user = firebase.auth().currentUser;
            var docRef = db.collection("usuarios").doc(this.user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    this.dataUsuario = doc.data();
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
    },

}
</script>

<style scoped>
    .wrapper{

        /* border: 5px solid red; */
        background:#353755;
        height: 100%;
        width: 20%;
        position: fixed;
        padding: 1%;

        display: flex;
        flex-direction: column;
    }
    .ondas{
        padding:0%;
        z-index: 1;
    }
    .usuario{
        /* border: 5px solid blue; */
        margin-top: 4%;
        margin-bottom: 3%;
    }
    .botones{
        /* border: 5px solid blue; */
        text-align: left;
        padding-left: 5%;
        padding-right: 10%;
    }
    .btn-dark2{
        margin-top: 5%;
        padding: 0.65em;
        width: 100%;

        background-color: #1e1f30;
        border: none;
        border-radius: 30px;
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: bold;
        text-align: center;
        
        
    }
    .btn-dark2:hover{
        background-color: #78ccac;
        color: white;
    }
    .btn-dark3{
        margin-top: 10%;
        padding: 0.65em;
        width: 100%;

        background-color: #1e1f30;
        border: none;
        border-radius: 30px;
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: bold;
        text-align: center;
    }
    .btn-dark3:hover{
        background-color: #BA605D;
        color: white;
    }
    .btn-dark4{
        background-color: rgba(255, 255, 255, 0) ;
        border:none;
        margin-top:10%;
        padding: 0;
    }
    /* .btn-dark4:hover{
        background-color: #78ccac;
        color: white;
    } */
    .btn-dark5{
        background-color: rgba(255, 255, 255, 0) ;
        border:none;
        margin-top:8%;
    }
    /* .btn-dark5:hover{
        background-color: #b4b34f;
        color: white;
    } */
    .informacion{
        /* border: 5px solid blue; */
        font-family: 'Righteous';
        color:white;
        text-align: left;
        padding: 10% 8%;
    }
    .informacion h4{
        font-family: 'Montserrat';
        font-size: 20px;
    }
    .funciones{
        /* border: 5px solid green; */
        text-align: right;
        padding: 10% 5%;

        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .mas{
        background-color: rgba(255, 255, 255, 0);
    }

</style>