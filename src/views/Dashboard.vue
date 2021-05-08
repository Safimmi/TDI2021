<template>
   <div class="cont">
        <List />
        <List2 />
    </div>
    <div class="footer">
        <HomeB2/>
    </div>
    
</template>
<style scoped>
    .footer{
        display: flex;
        align-items: flex-start;
    }
</style>
<script>
    import List from '@/components/DashAdmin/List.vue'
    import List2 from '@/components/DashAdmin/List2.vue'
    import HomeB2 from '@/components/Registro/HomeB2.vue'
    export default {
    name: 'Dashboard',
    components: { List, List2,HomeB2}
    }
</script>