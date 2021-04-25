<template>
   <div class="cont">
        <List />
        <List2 />
    </div>
    
</template>

<script>
    import List from '@/components/List.vue'
    import List2 from '@/components/List2.vue'
    export default {
    name: 'Dashboard',
    components: { List, List2}
    }
</script>