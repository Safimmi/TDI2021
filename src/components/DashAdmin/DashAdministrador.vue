<template>

    <div class="todo">
        
            <Menu />
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
    .List{
        display:block;
    }.Perfil{
        display:none;
    }

</style>