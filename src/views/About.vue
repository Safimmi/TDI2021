<template>
  <div class="about">
    <div id="container"></div>
    <div class="controles">
      <div class="ctrls">
        <img src="../assets/izq.png">
        <h1>Camera rotate</h1>
      </div>
      <div class="ctrls">
        <img src="../assets/rueda.png">
        <h1>Zoom</h1>
      </div>
      <div class="ctrls">
        <img src="../assets/der.png">
        <h1>Camera move</h1>
      </div>
      <div class="botones"> 
        <button id="button">Anterior</button>
        <button id="button2">Siguiente</button>
      </div>
    </div>
  </div>
</template>

<script>

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, controls, container, mixer, clock;

export default {
  name: "about",
  data() {
    return {

    };
  },
  methods: {
    init: function () {
      container = document.getElementById("container");

      clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize( container.clientWidth, container.clientHeight );
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      scene.background = new THREE.Color('skyblue');

      camera = new THREE.PerspectiveCamera( 40, container.clientWidth / container.clientHeight, 0.00001, 5000 );
      camera.position.z = 0.15;
      camera.position.y = 0.1;
      camera.position.x = 0.15;

      controls = new OrbitControls(camera, renderer.domElement);
      controls.screenSpacePanning = true;

      const light = new THREE.PointLight(0x2A2A2A,5);
      light.position.set(0,300,500);    
      scene.add(light);

      const light2 = new THREE.PointLight(0x2A2A2A,5);
      light2.position.set(500,100,0);    
      scene.add(light2);

      const light3 = new THREE.PointLight(0x2A2A2A,5);
      light3.position.set(0,100,-500);    
      scene.add(light3);

      const light4 = new THREE.PointLight(0x2A2A2A,5);
      light4.position.set(-500,300,0);    
      scene.add(light4);

      const loader = new GLTFLoader();
      loader.load( '/Habitaciones/Habitacion1.glb', function ( gltf ) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        mixer.clipAction(gltf.animations[0]).play();
        scene.add( gltf.scene );
        console.log(mixer);
      }, undefined, function ( error ) {
        console.error( error );
      } );
      this.animate();
    },

    animate: function () {
      requestAnimationFrame(this.animate);
      const delta = clock.getDelta();
      if(mixer.length != 0)
      {
        mixer.update( delta );
      }
      renderer.render(scene, camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>
<style >
#container {
  width: 1500px;
  height: 750px;
}
body {
  display: flex;
  margin: 0;
  background: #e0e4ee;
}
.controles {
  display: flex;
  padding-left: 30px;
  justify-content: space-between;
  flex-direction: flex-start;
  width: 40px;
  height: 70px;
  bottom: 10px;
  color: #999;
}
.botones {
  display: flex;
  padding-top: 20px;
  padding-left: 300px;
  justify-content: center;
  bottom: 10px;
  color: #999;
}

.ctrls {
  display: flex;
  padding-top: 15px;
  flex-direction: column;
  width: 80px;
  height: 60px;
  text-align: center;
}
#button{
  color: #4F4F4F;
  min-width: 180px;
  height: 44px;
  background: #F2E651;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
  text-decoration: none;
  display: inline-flex;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
#button2{
  color: #4F4F4F;
  min-width: 180px;
  height: 44px;
  background: #5BD3C7;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
  text-decoration: none;
  display: inline-flex;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
h1{font-size: 10px; color: black;}
</style>