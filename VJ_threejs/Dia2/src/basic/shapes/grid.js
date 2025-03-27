import * as THREE from 'three';

const grid = new THREE.GridHelper(2000,200,0x000000,0x000000);
grid.material.opacity = 0.5;
grid.material.transparent = true;

export default grid;