import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );

camera.position.set( 100, 200, 300 );

export default camera;