<template>
  <div class="about">
    <h1>Cuarto 1</h1>
    <div id="container"></div>
  </div>
</template>

<script>

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { setupModel } from './setupModel.js';


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

      renderer = new THREE.WebGLRenderer();
      renderer.setSize( container.clientWidth, container.clientHeight );
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      scene.background = new THREE.Color('skyblue');

      camera = new THREE.PerspectiveCamera( 40, container.clientWidth / container.clientHeight, 1, 5000 );
      camera.rotation.y = 45/180*Math.PI;
      camera.position.x = 10;
      camera.position.y = 30;
      camera.position.z = 10;

      controls = new OrbitControls(camera, renderer.domElement);
      controls.screenSpacePanning = true;

      // let geometry = new THREE.BoxGeometry(100,100,100);
      // let material = new THREE.MeshNormalMaterial();
      // cubo = new THREE.Mesh(geometry, material);
      // scene.add(cubo);

      const hlight = new THREE.AmbientLight (0x404040,100);  
      scene.add(hlight);
       
      const directionalLight = new THREE.DirectionalLight(0xffffff,100);
      directionalLight.position.set(0,1,0);
      directionalLight.castShadow = true;    
      scene.add(directionalLight);

      const light = new THREE.PointLight(0xc4c4c4,10);
      light.position.set(0,300,500);    
      scene.add(light);

      const light2 = new THREE.PointLight(0xc4c4c4,10);
      light2.position.set(500,100,0);    
      scene.add(light2);

      const light3 = new THREE.PointLight(0xc4c4c4,10);
      light3.position.set(0,100,-500);    
      scene.add(light3);

      const light4 = new THREE.PointLight(0xc4c4c4,10);
      light4.position.set(-500,300,0);    
      scene.add(light4);

      const loader = new GLTFLoader();
      loader.load( '/Habitaciones/RobotExpressive.glb', function ( gltf ) {
        scene.add( gltf.scene );
      }, undefined, function ( error ) {
        console.error( error );
      } );
    },

    animate: function () {
      requestAnimationFrame(this.animate);
      // cubo.rotation.x += 0.01
      // cubo.rotation.y += 0.02
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
    height: 1000px;
    margin: 0 auto;
  }
</style>