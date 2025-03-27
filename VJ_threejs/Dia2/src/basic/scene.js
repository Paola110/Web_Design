import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0);
//scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

const loaderSky = new THREE.CubeTextureLoader();
const texture = loaderSky.load([
    './SkyBox/interstellar_bk.png',
    './SkyBox/interstellar_ft.png',
    './SkyBox/interstellar_up.png',
    './SkyBox/interstellar_dn.png',
    './SkyBox/interstellar_rt.png',
    './SkyBox/interstellar_lf.png'
])

scene.background = texture;

export default scene;
