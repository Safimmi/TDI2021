<template>
     <div class="navbar navbar-light" style="background-color: #fff;">
        <a class="navbar-brand" href="#"></a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-black" to="/login">Iniciar Sesión</router-link>
            </li>
        </ul>
    </div>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>Página de inicio</h1>
    </div>
</template>

<script>
export default {
    name: "Home"
};
</script>
