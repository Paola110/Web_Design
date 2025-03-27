import * as THREE from 'three';

const directionalLight = new THREE.DirectionalLight( 0xffffff);
directionalLight.position.set(0, 200, 100); 
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 180;
directionalLight.shadow.camera.bottom = -100; 
directionalLight.shadow.camera.left = -120; 
directionalLight.shadow.camera.right = 120;

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);

directionalLight.add(hemiLight);

console.log(directionalLight);
export default directionalLight;