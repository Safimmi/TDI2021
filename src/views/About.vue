<template>
  <div class="about">
    <h1>Habitacion Ciencias Basicas</h1>
    <div id="container"></div>
  </div>
</template>

<script>

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, controls, container;

export default {
  name: "about",
  data() {
    return {
    };
  },
  methods: {
    init: function () {
      container = document.getElementById("container");

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
        scene.add( gltf.scene );
      }, undefined, function ( error ) {
        console.error( error );
      } );
    },

    animate: function () {
      requestAnimationFrame(this.animate);
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
    height: 800px;
    margin: 0 auto;
  }
</style>