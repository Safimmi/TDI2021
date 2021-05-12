<template>
<body>
    <div class="todo">
        <div class="menu">
            <Menu />
        </div>
        <div class="cont">
            <div class="logo">
                <img alt="Logo" style="width:150px" src="../../assets/Brand/LogoHeader.png"> 
            </div>
            <div class="lista1">
                <List />
            </div>
        </div>

    </div>
</body>
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
    body{
        
        background: #D1D2F3;
        height:100vh;
        margin: 0;
      
    }
    .cont{
        margin-left: 23%;
        width: 70%;
    }
    .menu{
        background:#353755;
        padding: 20px;
        position: fixed;
        height: 100vh;
        width: 20%;
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