<template>
    <div class="todo">
        <div class="menu">
            <Menu />
        </div>
        <div class="der">
            <div class="formulario">
                <Formulario />
            </div>
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
<style scoped>


    .menu{
        background:#353755;
        padding: 20px;
        height: 100vh;
        width: 25%
    }
    .todo{
        background:  #d1d2f3;
        display: flex ;
        flex-direction: row;
    }
    .logo{
        text-align: right;
        margin: 40px;
    }

    .formulario{

        display: flex;
        height: 100%;
        width: 100%;

        flex-direction: column;
        align-items: center;

    }
   .der{
     width:100%;
   }
</style>