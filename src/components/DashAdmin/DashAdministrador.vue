<template>
    <div class="todo">
        <div class="menu">
            <Menu />
        </div>
        <div class="cont">
            <div class="logo">
                <img alt="Logo" style="width:150px; height:100px;" src="../../assets/Brand/LogoHeader.png"> 
            </div>
            <div class="lista1">
                <List />
            </div>
        </div>

    </div>
</template>
<script>
    import List from '@/components/DashAdmin/List.vue'
    import Menu from '@/components/DashMiembro/Menu.vue'

    export default {
    name: 'DashAdministrador',
    components: { List,Menu}
    }
</script>

<style scoped>
    *{
        background: #d1d2f3;
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .logo{
        text-align: right;
        margin: 40px;
    }
    
</style>