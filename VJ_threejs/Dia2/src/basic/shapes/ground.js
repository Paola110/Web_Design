import * as THREE from 'three';

const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(2000,2000),
    new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
);

ground.rotation.x = -Math.PI/2;
ground.receiveShadow = true;

export default ground;