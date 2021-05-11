<template>
   <div class="cont">
        <DashAdministrador />
    </div>
    
</template>

<script>
    import DashAdministrador from '@/components/DashAdmin/DashAdministrador.vue'
    export default {
    name: 'Dashboard',
    components: { DashAdministrador }
    }
</script>