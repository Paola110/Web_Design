import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 5, 5, 5 );  // Crea el cubo, "molde"
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } ); // Crea el material
const cube = new THREE.Mesh( geometry, material ); // Crea el objeto 3D combinando molde y material 
cube.castShadow = true; 
cube.receiveShadow = true; 
//scene.add( cube );

//camera.position.z = 5;

export default cube;