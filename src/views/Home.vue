<template>
    <body>
         <div class="navbar navbar-light" style="background-color: transparent;">
            <a class="navbar-brand" href="#"></a>
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link text-black" to="/login">Iniciar Sesión</router-link>
                </li>
            </ul>
        </div>
         <Formulario />
    </body>

</template>

<script>

    import Formulario from '@/components/Formulario.vue'
    export default {
    name: 'Home',
    components: { Formulario }
    }
</script>
<style>
    body {
    margin: 0;
    background: #d2dcf5;
    }
</style>