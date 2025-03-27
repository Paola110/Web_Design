import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; //Entradas del usuario
import Stats from 'three/addons/libs/stats.module.js'; //Ver el rendimiento
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'; //Cargar modelos FBX
import scene from "./basic/scene.js";
import camera from "./basic/camera.js";
import renderer from "./basic/render.js"; // Corrected import
import light from "./basic/light.js";
import ground from './basic/shapes/ground.js';
import grid from './basic/shapes/grid.js';

let stats;

const clock = new THREE.Clock(); // detectar los frames por segundo

let mixer, model;
let walkAction, jumpAction;
let isWalking = false;
let isJumping = false;
let verticalVelocity = 0; // Corrected typo

const gravity = -300;
const jumpStrength = 200;
const groundY = 0;

const keyPressed = {}
const speed = 100;

init()
animate()

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    scene.add(light);
    scene.add(ground);
    scene.add(grid);

    //Cargar Modelos fbx
    const loader = new FBXLoader();

    loader.load('models/ModelWalk.fbx', function (object) {
        model = object;
        mixer = new THREE.AnimationMixer(model);

        walkAction = mixer.clipAction(model.animations[0]);
        walkAction.play();
        walkAction.paused = true;

        model.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        scene.add(model); 

        // 2. Cargar animación de salto desde otro FBX
        loader.load('models/ModelJump.fbx', function (jumpAnim) {
            if (jumpAnim.animations.length > 0) {
                jumpAction = mixer.clipAction(jumpAnim.animations[0]);
                jumpAction.play();
                jumpAction.paused = true;
            }
        });
    });
   

    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.update();

    stats = new Stats();
    container.appendChild(stats.dom);

}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
}
