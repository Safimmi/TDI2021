<template>
   <div class="cont">
        <Formulario/> 
    </div>

     <div class="footer">
        <HomeB/>
    </div>
    
</template>
<style scoped>
    .footer{
        display: flex;
        align-items: flex-start;
    }
</style>
<script>
    import Formulario from '@/components/DashMiembro/Formulario.vue'
    import HomeB from '@/components/Registro/HomeB.vue'
    import { useLoadproyectos} from '@/firebase'
    export default {
    name: 'Dashboard',
    components: { Formulario,HomeB},
        setup() {
            const proyectos = useLoadproyectos()
            return { proyectos}
        }
    }

</script>