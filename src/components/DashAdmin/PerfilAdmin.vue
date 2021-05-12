<template>
    <div class="todo">
        <div class="menu">
            <Menu />
        </div>
        <div class="cont">
            <div class="logo">
                <img alt="Logo" style="width:150px; height:100px;" src="../../assets/Brand/LogoHeader.png"> 
            </div>
            <div class="perfil">
                <Perfil/>
            </div>
        </div>

    </div>
</template>

<script>


import Menu from '@/components/DashMiembro/Menu.vue'
import Perfil from '@/components/DashAdmin/Perfil.vue'

export default {
    name: 'PerfilAdmin',
    components: {Menu,Perfil}
}

</script>

<style scooped>

    .cont{
        margin-left: 350px;
    }
    .menu{
        background:#353755;
        padding: 20px;
        padding-right: 100px;
        position: fixed;
        height: 100vh;
    }
    .todo{
        background: #d1d2f3;
        flex-direction: row;
        justify-content: space-between;
    }
    .logo{
        text-align: right;
        margin-bottom:40px;   
    }
    .perfil{
        background-color: white;
        border-radius: 50px;
        margin-right: 120px;
        margin-left: 120px;
        padding-top:20px ;
        padding-bottom:20px ;
        

    }
</style>