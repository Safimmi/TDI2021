<template>
  <div class="about">
    <div id="container"></div>
    <div class="controles">
      <div class="ctrls">
        <img src="../assets/izq2.png">
        <h5>Camera rotate</h5>
      </div>
      <div class="ctrls">
        <img src="../assets/rueda2.png">
        <h5>Zoom</h5>
      </div>
      <div class="ctrls">
        <img src="../assets/der2.png">
        <h5>Camera move</h5>
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
      scene.background = new THREE.Color('#d2dcf5');
      camera = new THREE.PerspectiveCamera( 30, container.clientWidth / container.clientHeight, 0.00001, 5000 );
      camera.position.z = 0.15;
      camera.position.y = 0.1;
      camera.position.x = 0.15;
      controls = new OrbitControls(camera, renderer.domElement);
      controls.screenSpacePanning = true;
      controls.maxPolarAngle = Math.PI / 2;
      controls.rotateSpeed = 0.2;
      controls.zoomSpeed = 0.2;
      controls.minDistance = 0.1;
      controls.maxDistance = 0.2;
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
      }, undefined, function ( error ) {
        console.error( error );
      } );
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
    width: 1400px;
    height: 750px;
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

.ctrls {
  display: flex;
  padding-top: 5px;
  width: 82px;
  height: 82px;
  flex-direction: column;
  text-align: center;
}
h5{
  font-size: 12px;
  color: black;
  opacity: .6;
}
</style>