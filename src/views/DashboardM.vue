<template>
    <div class="todo">
        <div class="menu">
            <Menu />
        </div>
        <div class="contenido">
            <div class="logo">
                <img alt="Logo" style="width:150px;" src="../../src/assets/Brand/LogoHeader.png"> 
            </div>
            <div class="componentes">
                <div class="comp1" id="Lista3ID">
                    <List3/>
                </div>
                <div class="comp2" id="formularioMiembroID">
                    <Formulario/>
                </div>
                <div class="comp3" id="PerfilID">
                    <Perfil/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from '@/components/DashMiembro/Menu.vue'
    import Formulario from '@/components/DashMiembro/Formulario.vue'
    import List3 from '@/components/DashMiembro/List3.vue'
    import Perfil from '@/components/DashAdmin/Perfil.vue'
    export default {
    name: 'DashMiembro',
    components: { 
        Menu,
        List3,
        Formulario,
        Perfil
    },

    }  
</script>
<style scoped>

    .todo{
        background:  #d1d2f3;
        display: flex ;
        flex-direction: row;
        min-height: 100vh;
    }
    .menu{
        width:20%;
    }
    .contenido{
        width:80%;
    }
    .componentes{
        display: flex;
        justify-content: center;
        width: 100%;
   
    }
    .comp2 {
         width:100%;
    }
    .comp3 {
         width:60%;
    }
    .logo{
        text-align: right;
        padding-top:40px ;
        margin-right: 4%;
    }

    .Formulario{
        /* display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding-left: 100px; */
        display:block;
    }
    .List3{
        display:none;
    }.Perfil{
        display:none;
    }

</style>