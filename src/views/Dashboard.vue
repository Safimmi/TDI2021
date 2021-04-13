<template>
    <div class="row">
        <div class="col-12">
            <h1>Propuestas de Proyectos</h1>
        </div>
    </div>
   <div class="cont">
        <List />
    </div>
    
</template>

<script>
    import List from '@/components/List.vue'
    export default {
    name: 'Dashboard',
    components: { List }
    }
</script>

