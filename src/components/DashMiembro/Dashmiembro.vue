<template>
    <div class="todo">
        <div class="menu">
            <Menu />
        </div>
        <div class="formulario">
            <Formulario />
        </div>
    </div>
</template>
<script>
    import Menu from '@/components/DashMiembro/Menu.vue'
    import Formulario from '@/components/DashMiembro/Formulario.vue'

    export default {
    name: 'DashAdministrador',
    components: { Menu,Formulario},

    }  
</script>
<style scope>
    *{

        background-size: 100%,100%;
    }
    .cont{
        margin-left: 350px;
        
    }
    .menu{
        background:#353755;
        padding: 20px;
        position: fixed;
        height: 100vh;
    }
    .todo{
        background:  #d1d2f3;
        display: flex ;
        flex-direction: row;
        justify-content: space-between;
    }
    .logo{
        text-align: right;
        margin: 40px;
    }
    .formulario{
        background-color: white;

    }
   
</style>