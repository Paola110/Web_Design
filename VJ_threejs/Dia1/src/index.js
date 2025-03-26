import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import scene from "./basic/scene.js";
import camera from "./basic/camera.js";
import renderer from "./basic/render.js";
import light from "./basic/light.js";

import cube from "./basic/shapes/cube.js";
import esfera from "./basic/shapes/esfera.js";


const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

scene.add(light); // Agrega la luz a la escena

scene.add (esfera);
esfera.position.x = 10;
esfera.position.y = 10;
esfera.position.z = 10;   

scene.add(cube); // Agrega el cubo a la escena
cube.position.x = 10;
cube.position.y = 27.5;
cube.position.z = 10;

camera.position.z = 50; // Mueve la cámara hacia atrás
camera.position.y = 50; // Mueve la cámara hacia arriba 
camera.position.x = 30; // Mueve la cámara hacia la derecha

camera.lookAt(esfera.position); // Hace que la cámara mire al cubo

renderer.render(scene, camera); // Renderiza la escena con la cámara

setInterval(() => {
    cube.rotation.x += 0.05;
    esfera.rotation.x -= 0.05;
    renderer.render(scene, camera);
}, 1000/60); // Actualiza la escena 60 veces por segundo

console.log(scene, camera, renderer, cube, esfera);