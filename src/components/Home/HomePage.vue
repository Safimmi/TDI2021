<template>
  
  <div class="wrapper">
    <div class="header">
      <div class="informacion" id="informacionID" style=" z-index=100">
          <Informacion/>
      </div>
      <div class="imagen">
        
        <button style="border:none; background-color: #D1D2F3" @click="mostrarinformacion()"  >
          <img alt="Logo" src="../../assets/Brand/LogoHeaderX2.png">  
        </button>
      </div>
    
      <div class="boton">
        <div v-if="usuario == false" >
          <LogInB/>
        </div>
        <div v-else>
          <miembroB/>
        </div>
      </div>
    
    </div>

    <div class="main">
      <div class="modelo">
        <div id="container"></div>
        <div class="controles">
        <ControlesIconos/>
        <div class="btncambios">
        <div class="prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev" @click="ant">
          <img src="@/assets/Icons/AnteriorIconX2.png">
        </div>
        <div class="next" data-bs-target="#carouselExampleControls" data-bs-slide="next" @click="sig">
          <img src="@/assets/Icons/SiguienteIconX2.png">
        </div>
        </div>
        </div>
      </div>
      <div v-show="cont==0" class="slide"><Slide/></div>
      <div v-show="cont==1" class="slide"><Slide2/></div>
      <div v-show="cont==2" class="slide"><Slide3/></div>
    </div>
    
  </div>
</template>


<script >
import LogInB from '@/components/Home/LogInB.vue'
import miembroB from '@/components/Home/miembroB'
import Slide from '@/components/Home/Slide.vue'
import Slide2 from '@/components/Home/Slide2.vue'
import Slide3 from '@/components/Home/Slide3.vue'
import Informacion from '@/components/Home/Informacion.vue'
import firebase from 'firebase'
// import Rozasogordo from '@/components/3D/Rozasogordo.vue'
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
  import ControlesIconos from '@/components/3D/ControlesIconos.vue'
  import { InteractionManager } from "three.interactive";

let scene, camera, renderer, container, mixer, clock, interactionManager, coords, cambio, controls, modelo, cambiocam;


export default {
  name: 'Home',
  components: {
    LogInB,
    miembroB,
    Slide3,
    Slide2,
    Slide,
    Informacion,
    // Rozasogordo
    ControlesIconos
  },
  data() {
    return {
      usuario: false,
      cont:0
    };
  },
  created() {
    var user = firebase.auth().currentUser;

    if (user) {
      this.usuario = true;
    }
    else{
      this.usuario = false;
    }
  }, 
  
  
  methods: {
      mostrarinformacion(){
        var x = document.getElementById("informacionID");
        x.style.display="block";
        x.style.zIndex=100;
        console.log("funciona");
      },
      sig() {
        if (this.cont < 2){
        this.cont += 1;
        cambio = new TWEEN.Tween(modelo.position)
          .to( {x: modelo.position.x-0.125, z: modelo.position.z+0.14} , 1000); 
        cambio.start();
        coords = new THREE.Vector3(0.12,0.1,0.12);
        cambiocam = new TWEEN.Tween(camera.position)
          .to( coords , 1000); 
        cambiocam.start();
        }
      },

      ant() {
        if (this.cont > 0){
        this.cont += -1;
        cambio = new TWEEN.Tween(modelo.position)
          .to( {x: modelo.position.x+0.125 , z: modelo.position.z-0.14} , 1000); 
        cambio.start();
        coords = new THREE.Vector3(0.12,0.1,0.12);
        cambiocam = new TWEEN.Tween(camera.position)
          .to( coords , 1000); 
        cambiocam.start();
        }
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
        controls.zoomSpeed = 0.3;
        controls.minDistance = 0.1;
        controls.maxDistance = 0.21;
        controls.minAzimuthAngle = Math.PI * 0.15;
        controls.maxAzimuthAngle = Math.PI * 0.4;

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
        loader.load( '/Habitaciones/Tunion.glb', function ( gltf ) {
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

}
</script>

<style scoped>

.wrapper {
  /* border: 5px solid green; */
  margin: 0;
  background: #D1D2F3;
  height: 99.9vh;
  width: 99.9vw;
  position: relative;
}

.header {
  /* border: 5px solid yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;
  z-index: 2;
  height: 15%;
}
.informacion{
  
  position: absolute;
  left:30%;
  top:20%;
  display: none;
}
.imagen {
  /* border: 5px solid blue; */
  display: flex;
  padding: 0;
  margin:0;
  height: 100%;
  width: 50%;
}
.imagen img{
  height: 100%;
}


.main {
  /* border: 5px solid red; */
  display: flex;
  position: relative;
  height: 85%;
}

.boton{
  /* border: 5px solid blueviolet; */
  width: 100%;
}
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
    z-index: 1;
    margin-bottom: 20px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 1);
  }

  .btncambios img{
    height: 80%;
  }

  .slide{
    width: 30%;
  }
  .next{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 62px;
    padding-left: 88px;
    border-start-end-radius: 50px;
    border-end-end-radius: 50px;
    cursor: pointer;
  }
  .next:hover{
    background: rgba(0, 0, 0, 0.075);
  }
  .next:active{
    background: rgba(0, 0, 0, 0.15);
  }

  .prev{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 88px;
    padding-left: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-start-start-radius: 50px;
    border-end-start-radius: 50px;
    cursor: pointer;
  }
  .prev:hover{
    background: rgba(0, 0, 0, 0.075);
  }
  .prev:active{
    background: rgba(0, 0, 0, 0.15);
  }

  .controles{
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin-left: 0px;
    padding-right: 40px;
  }

  
</style>