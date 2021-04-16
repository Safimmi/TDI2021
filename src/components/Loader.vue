<template>
    <div id="loading-wrapper">
      <div id="loading-content">
          <img alt="Logo" src="../assets/logo.png">
      </div>
    </div>
</template>

<style>
      #loading-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: white;
        opacity: 1;
        animation: anima 3s 1 linear forwards; 
      }

      #loading-content {
        display: flex;
        position: center;
        width: 800px;
        height: 475px;
      }

      @keyframes anima {
          0% {
              left: 0%;
              opacity: 1;
          }
          50% {
              opacity: 1;
          }
          99% {
              left: 0%;
          }
          100% {
              opacity: 0;
              left: 100%;
          }
      }
    </style>