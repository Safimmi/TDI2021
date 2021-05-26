<template>
<div class="modal-backdrop">
    <div class="todo">
        <header class="header">
            <div class="logos">
                    <img alt="Logo" style="width:150px" src="../../assets/Brand/LogoHeader.png"> 
                <a href="https://www.umng.edu.co/inicio">
                    <img alt="Logo" style="width:150px" src="../../assets/Brand/Logo20.png"> 
                </a>
            </div>
            <div class="cerrar">
                <button type="button" class="btn-close" @click="cerrarinformacion()">
                </button>
            </div>
        </header>
        <div class="datos">
            
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
    </div>
</div>
</template>

<script>
export default {
    methods:{
        cerrarinformacion(){
        var x = document.getElementById("informacionID");
        x.style.display="none";
        x.style.zIndex=100;
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
        width: 25%;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        min-height: 250px;
        border-radius: 60px;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.219);
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