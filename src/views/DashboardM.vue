<template>
    <div class="todo">
        
        <Menu />
        <div class="contenido">
            <div class="logo">
                <img alt="Logo" style="width:150px;" src="../../src/assets/Brand/LogoHeader.png"> 
            </div>
            <div class="componentes">
                <div class="List3" id="Lista3ID">
                    <List3/>
                </div>
                <div class="Formulario" id="formularioMiembroID">
                    <Formulario/>
                </div>
                <div class="Perfil" id="PerfilID">
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
        min-height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        /* display: flex ; */
        /* flex-direction: row; */
    }
    .contenido{
        width:80%;
        margin-left: 20%;
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