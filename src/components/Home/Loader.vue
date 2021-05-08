<template>
    <div id="loading-wrapper">
      <div id="loading-content">
          <img alt="Logo" src="../../assets/Brand/LogoSplash.png">
      </div>
      <div class="ovl">
        <img  src="../../assets/Wave/WaveSplash.png" alt="Overlay">
      </div>
    </div>

</template>

<style scoped>

  #loading-wrapper {
    /* border: 5px solid blue; */
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #D1D2F3;
    
    opacity: 1;
    z-index: 1;
    display: block;
    animation: anima 3s 1 linear forwards;
  }

  #loading-content {
    /* border: 5px dotted green; */
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  #loading-content img{
    width: 40%;
    /* height: 40%; */
  }

  .ovl{
    /* border: 5px solid red; */
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    z-index: 2;
  }

  .ovl img{
    min-width: 100%;
    /* height: 36%; */
  }

  @keyframes anima {
      0% {
          left: 0%;
          opacity: 1;
      }
      50% {
          opacity: 1;
      }
      98% {
          left: 0%;
      }
      99% {
          opacity: 0;
          left: 100%;
          z-index: 100;
      }
      100% {
          opacity: 0;
          left: 0%;
          position:absolute;
          z-index: -1;
      }
  }

</style>