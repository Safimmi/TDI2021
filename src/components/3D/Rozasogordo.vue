<template>
  <div class="about">
    <div id="container"></div>
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
      
      camera = new THREE.PerspectiveCamera( 30, container.clientWidth / container.clientHeight, 0.001, 10000 );
      camera.position.z = 0.15;
      camera.position.y = 0.1;
      camera.position.x = 0.15;

      scene.add( new THREE.AxesHelper(500));

      controls = new OrbitControls(camera, renderer.domElement);
      controls.screenSpacePanning = true;
      
      const hemiLight = new THREE.HemisphereLight(0xfff8de, 0x080820, 2);
      scene.add(hemiLight);
      
      const light = new THREE.SpotLight(0xfffa95c,0.5);
      light.position.set(-50,50,50);
      light.castShadow = true;
      scene.add( light );

      // const light = new THREE.PointLight(0xfce1bb, 3,1000);
      // light.position.set(0,300,500);    
      // scene.add(light);
      
      // const light2 = new THREE.PointLight(0xedf8ff,3,1000);
      // light2.position.set(500,100,0);    
      // scene.add(light2);
      
      // const light3 = new THREE.PointLight(0x2A2A2A,5);
      // light3.position.set(0,100,-500);    
      // scene.add(light3);
      
      // const light4 = new THREE.PointLight(0x2A2A2A,5);
      // light4.position.set(-500,300,0);    
      // scene.add(light4);
      
      const loader = new GLTFLoader();
      loader.load( '/Habitaciones/Cuarto1_02.glb', function ( gltf ) {
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
      if(mixer)
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
</style>