<template>
    <div class="todo">
        <header class="header">
            <div class="logos" style="padding-left:35% ;padding-bottom:10%">
                    <img alt="Logo" style="width:150px" src="../../assets/Brand/LogoHeader.png"> 
            </div>
            <div class="cerrar" style="padding-left:10%">
                <button @click="cerrarinformacion()" style="border:none; background-color: #D1D2F3">
                    <img alt="Logo" style="width:40px" src="../../assets/Icons/CloseIcon.png">
                </button>
            </div>
        </header>
        <div class="datos">
            
            <h5 style="font-weight: bold;">Product Owner</h5>
            <h6>Marlon Steven Pinto Pinto</h6> 
            <h5 style="font-weight: bold;">Scrum Master</h5>
            
            <h6> Angie Sofia Zamora Torres</h6>
            <h5 style="font-weight: bold;">Development Team</h5> 
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
    .todo{
        background: #D1D2F3;
        width: 150%;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        min-height: 250px;
        border-radius: 50px;
        
    }
    .header{
        display: flex;
        flex-direction: row;
        
    }
    .datos{
        height: 50%;
    }
</style>