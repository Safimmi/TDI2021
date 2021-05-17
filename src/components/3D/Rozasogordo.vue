<template>
  <div class="modelo">
    <div id="container"></div>
    <ControlesIconos/>
    <div class="btncambios">
    <input type="button" id="btn1" name="btn1" value="Anterior" @click="ant" />
    <input type="button" id="btn1" name="btn1" value="Siguiente" @click="sig" /> 
    </div>
  </div>
</template>

<script>
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
  import ControlesIconos from '@/components/3D/ControlesIconos.vue'
  import { InteractionManager } from "three.interactive";
  //import func from 'vue-editor-bridge';

  let scene, camera, renderer, container, mixer, clock, interactionManager, coords, cambio, controls, modelo;
  
  export default {
  
  name: "about",
  components: {
    ControlesIconos
  },
  data() {
    return {
      
    };
  },
  
  methods: {

      sig() {
        coords = new THREE.Vector3( -0.12,0.1,-0.12 );
        cambio = new TWEEN.Tween(modelo.position)
          .to( coords , 1000); 
        cambio.start();
      },

      ant() {
        coords = new THREE.Vector3( 0,-0.012,0 );
        cambio = new TWEEN.Tween(modelo.position)
          .to( coords , 1000); 
        cambio.start();
      },

      init: function () {
        
        //Scene-Render
        container = document.getElementById("container");
        clock = new THREE.Clock();
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( container.clientWidth, container.clientHeight );
        container.appendChild(renderer.domElement);
        scene = new THREE.Scene();
        scene.background = new THREE.Color('#D1D2F3');
        
        //Camera
        camera = new THREE.PerspectiveCamera( 30, container.clientWidth / container.clientHeight, 0.001, 5000 );
        camera.position.z = 0.12;
        camera.position.y = 0.1;
        camera.position.x = 0.12;
        
        //Controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.screenSpacePanning = true;
        controls.maxPolarAngle = Math.PI / 2;
        controls.rotateSpeed = 0.1;
        controls.zoomSpeed = 0.2;
        controls.minDistance = 0.1;
        controls.maxDistance = 0.24;

        //cubos
        // const geometry = new THREE.BoxGeometry( 0.004, 0.004, 0.004 );
        // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        // const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        // const material3 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
        // const cube = new THREE.Mesh( geometry, material );
        // const cube2 = new THREE.Mesh( geometry, material2 );
        // const cube3 = new THREE.Mesh( geometry, material3 );
        // cube.position.z = 0.036;
        // cube.position.x = -0.032;
        // cube3.position.z = -0.036;
        // cube3.position.x = 0.032;
        // scene.add( cube );
        // scene.add( cube2 );
        // scene.add( cube3 );

        //Lights
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

        interactionManager = new InteractionManager(
          renderer,
          camera,
          renderer.domElement
        );

        //Loader
        const loader = new GLTFLoader();
        loader.load( '/Habitaciones/Union.glb', function ( gltf ) {
          modelo = gltf.scene;
          mixer = new THREE.AnimationMixer(modelo);
          mixer.clipAction(gltf.animations[0]).play();
          scene.add( modelo );
          modelo.position.y = -0.012;
        }, undefined, function ( error ) {
          console.error( error );
        } );

      },

      animate: function () {
        requestAnimationFrame(this.animate);
        const delta = clock.getDelta();
        interactionManager.update();
        TWEEN.update(this.time);
        controls.update();
        if(mixer)
        {
          mixer.update( delta );
        }
        renderer.render(scene, camera);
      },

      resize: function () {

      }

    },
    
    mounted() {
      this.init();
      this.animate();
    },

  };
</script>

<style scoped>
  .modelo{
    /* border: 5px solid magenta; */
    display: flex;
    align-items: flex-end;
    width: 70%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  #container {
    /* border: 5px dotted cyan; */
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .btncambios{
    display: flex;
        align-content: center;
        align-items: flex-end;
  }

</style>