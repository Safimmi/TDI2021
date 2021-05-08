<template>

    <div class="containerCtrl">
        <div class="controles">
            <div class="ctrls">
                <img src="../../assets/Controls/Rotar.png">
                <h5>Rotar</h5>
            </div>
            <div class="ctrls">
                <img src="../../assets/Controls/Zoom.png">
                <h5>Zoom</h5>
            </div>
            <div class="ctrls">
                <img src="../../assets/Controls/Mover.png">
                <h5>Mover</h5>
            </div>
        </div>
    </div>

</template>

<style >
    .containerCtrl {
        /* border: 5px solid yellow; */
        position: absolute;
        width: 16%;
        height: 15%;
        display: flex;
        align-items: flex-end;
        margin: 1% 3%;
        padding: 0;
        z-index: 1;
    }
    .controles {
        /* border: 5px solid red; */
        display: flex;
        align-content: center;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        margin: 1% 3%;
    }
    
    .ctrls {
        /* border: 5px solid green; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .ctrls img {
        max-height: 50px;
    }
    .ctrls h5{
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        font-size: 16px;
        color: #353755;
        padding-top: 10px;
    }
</style>
