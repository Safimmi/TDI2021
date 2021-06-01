<template>
<div class="modal-backdrop">
    <div class="todo">
        <header class="header">
            <div class="logos">
                    <img alt="Logo" style="width:150px" src="../../assets/Brand/LogoHeader.png"> 
                <a href="https://www.umng.edu.co/programas/pregrados/ingenieria-multimedia">
                    <img alt="Logo" style="width:150px" src="../../assets/Brand/Logo20.png"> 
                </a>
            </div>
            <div class="cerrar">
                <button type="button" class="btn-close" @click="cerrarinformacion()">
                </button>
            </div>
        </header>
        <div class="datos" style="display:block" id="autores">
            
            <h5>Product Owner</h5>
            <h6>Marlon Steven Pinto Pinto</h6>
            <h5>Scrum Master</h5>
            
            <h6> Angie Sofia Zamora Torres</h6>
            <h5>Development Team</h5> 
            <h6> Gabriela Leon <br>
            Juan Pablo Martinez <br>
            Nicolas Rozo<br>
            Saul Palencia<br>
            </h6>

            <div class="universidad" style="font-size: 13px;"> 
                UMNG<br>
                Trayectoria Multimedia 2021
            </div>
            
        </div>
        <div class="datosu" style="display:none" id="perfil">
            <h5>Perfil del aspirante</h5>
            <h6>
                <p>
                   {{info.aspirante}}
                </p>
            </h6>
            <h5>Perfil del egresado</h5>
            <h6>
                <p>
                    {{info.egresado}}
                </p>
            </h6>
            <a style = "text-decoration: None" href="https://www.umng.edu.co/documents/20127/463311/Plan+de+Estudios+-IngMultimedia+2021-01_firmado.pdf/a53d53bf-6c81-b540-829a-9948a83d050d?t=1622135616710">
                <button class="btn-dark2"  style="display:block"
                    type="submit" >
                    Pensum
                </button>
            </a>
            
        </div>
        <div class="boton">
            <button class="btn-dark"  id="boton1" style="display:block;background-color: transparent; border:none"
                type="submit" @click="informacion()">
                   <img alt="Logo" style="width:80px" src="../../assets/Icons/ADELANTE.png"> 
            </button>
        </div>
        <div class="boton">
            <button class="btn-dark" id="boton2" style="display:none; background-color: transparent;border:none"
                type="submit" @click="informacion2()">
                   <img alt="Logo" style="width:80px" src="../../assets/Icons/atras.png"> 
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { db } from '@/firebase'

export default {
    data() {
        return {
            info: {}
        }
    },
     created(){
      
      var docRef = db.collection("informacion").doc("info");

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.info = doc.data();
              this.aspirante = this.info.aspirante;
              this.egresado = this.info.egresado;
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

    },
    methods:{
        cerrarinformacion(){
        var x = document.getElementById("informacionID");
        x.style.display="none";
        x.style.zIndex=100;
        },
        informacion:function() {

            var x = document.getElementById("autores");            
            var y = document.getElementById("boton1");
            var w = document.getElementById("boton2");
            var z = document.getElementById("perfil");
            x.style.display = "none";
            z.style.display = "block";
            y.style.display = "none";
            w.style.display = "block";
        },
        informacion2:function() {

             var x = document.getElementById("autores");            
            var y = document.getElementById("boton1");
            var w = document.getElementById("boton2");
            var z = document.getElementById("perfil");
            x.style.display = "block";
            z.style.display = "none";
            y.style.display = "block";
            w.style.display = "none";
        },
    }

}
</script>

<style scoped>
    .modal-backdrop {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .todo{
        background: #D1D2F3;
        width: 40%;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        min-height: 250px;
        border-radius: 60px;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.219);
    }
    .btn-dark2{
       margin: 1%; 
       background-color: #1e1f30; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 3%;
       color: white;
    }
    .btn-dark2:hover{
        background-color: #78ccac;
        color: white;
    }
    .header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5%;
    }
    .datos{
        color:#353755;
    }
    .logos{
        margin-left: 15%;
    }
    h6{
        margin-bottom: 7%;
    }
    h5{
        font-family: 'Righteous';

    }
</style>