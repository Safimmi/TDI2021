<template>

    <div class="todo">
        <div class="menu">

            <Menu />
        </div>
        <div class="contenido">
            <div class="logo">
                <img alt="Logo" style="width:150px" src="../../assets/Brand/LogoHeader.png"> 
            </div>
            <div class="componentes">
                <div class="lista1" id="ListaID">
                    <List />
                    
                </div>
                <div class="Perfil" id="PerfilID">
                    <Perfil/>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import List from '@/components/DashAdmin/List.vue'
    import Menu from '@/components/DashMiembro/Menu.vue'
    import Perfil from '@/components/DashAdmin/Perfil.vue'

    export default {
    name: 'DashAdministrador',
    components: { 
        List,
        Menu,
        Perfil
        }
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

    .logo{
        text-align: right;
        padding-top:40px ;
        margin-right: 4%;
    }

    .Lista1{
        display:block;
    }
    .Perfil{
        display:none;
        width:60%;
    }

</style>