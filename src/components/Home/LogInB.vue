<template>
    <div class="boton">
        <router-link to="/login">
            <button type="button" class="btn btn-primary">Iniciar Sesión</button>
        </router-link>
    </div>
</template>

<style scoped>

.boton {
    /* border: 5px solid cyan; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    padding: 0;
    margin:0;
    height: 100%;
    width: 50%;
}

.btn-primary {
    background-color: #5bd3c7;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif; 
    font-size: 20px;
    font-weight: 600;
    padding: 15px 40px;

    max-height: 100%;
}
.btn-primary:hover{
    background-color: #62e2d5;
}

</style>
