<template>
   <div class="cont">
        <List />
        <List2 />
    </div>
    <div class="footer">
        <HomeB/>
    </div>
    
</template>

<script>
    import List from '@/components/DashAdmin/List.vue'
    import List2 from '@/components/DashAdmin/List2.vue'
    import HomeB from '@/components/Registro/HomeB.vue'
    export default {
    name: 'Dashboard',
    components: { List, List2,HomeB}
    }
</script>