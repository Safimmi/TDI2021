<template>
    <div class="cuerpo">
        <div class="usuario">
            <img alt="usuario" style="width:100px; height:100px;" src="../../assets/usuario.png"> 
        </div>

        <div class="texto">
            <div class="nombre">
                <p>Nombre</p>
                <input type="text" size="80" maxlength="40"  name="nombre" >   
            </div>
            <div class="ocupacion">
                <p>Ocupacion</p>
                <input type="text" size="80" maxlength="30"  name="ocupacion">
            </div>
            <div class="categoria">
                <p>Categoria</p>
                <input type="text" size="80" maxlength="30" >
            </div>
            <div class="contraseñaactual">
                <p>Contraseña Actual</p>
                <input type="password" size="80" maxlength="30" >   
            </div>
            <div class="nuevacontraseña">
                <p>Nueva Contraseña</p>
                <input type="password" size="80" maxlength="30" >
            </div>
            <div class="confirmarcontraseña">
                <p>Confirmar Contraseña</p>
                <input type="password" size="80" maxlength="30" >
            </div>

        </div>
        <div class="botones" >
            <div class="boton" v-if="user.displayName!='Marlon Pinto'">
            <router-link to="/dashboardM">
                <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000;margin-rigth:80px" 
                type="submit" >
                  Volver
                </button>
                
            </router-link>
            </div>
            <div class="boton2" v-else>
            <router-link to="/dashadministrador">
                <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000;margin-rigth:80px" 
                type="submit" >
                  Volver
                </button>
                
            </router-link>
            </div>
              <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000;margin-left:80px" 
              type="submit">
              Guardar
              </button>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import { db} from '@/firebase'
export default {
    data(){
        return{
            usuario:[],
            user:null
        }
    },
    created(){
        this.user = firebase.auth().currentUser;
            console.log(this.user.displayName,);
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
    }
}
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                             
<style scoped>
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