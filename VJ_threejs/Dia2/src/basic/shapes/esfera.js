import * as THREE from 'three';

const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } ); 
const sphere = new THREE.Mesh( geometry, material );
sphere.castShadow = true; 
sphere.receiveShadow = true; 
//scene.add( sphere );

//camera.position.z = 5;

export default sphere;