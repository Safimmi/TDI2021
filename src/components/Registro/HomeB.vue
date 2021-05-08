<template>
    <div class="home">
        <router-link to="/">
        <img alt="Inicio" src="../../assets/Icons/HomeIconOG.png">  
        </router-link>
    </div>    
</template>

<style scoped>

.home{
    /* border: 5px solid orange; */
    background: none;
    display:flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 3%;
    padding-bottom: 2%;
}

.home img{
    max-height: 82px;
    padding: none;
}

</style>