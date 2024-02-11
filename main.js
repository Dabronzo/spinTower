import * as THREE from 'three';
import * as CANNON from 'cannon';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Ball } from './src/entities/ball';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { SurfaceEntity } from './src/entities/surface';
import { createSurfaceEntity, recycleSurfaceEntity } from './src/helpers/generator';

// Set up the scene
const scene = new THREE.Scene();

const loader = new GLTFLoader();
// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;
camera.position.y = 3;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//stage logic
const surfacePool = [];



// Add lights
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.castShadow = true;
light.position.y = 5;
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);


// Set up Cannon.js world
const world = new CANNON.World();
world.gravity.set(0, -9.8, 0); // Adjust gravity as needed
const timeStep = 1 / 60;

// adding the stuff
// const surface = new SurfaceEntity({
//   width: 6,
//   height: 1,
//   depth: 20,
//   color: '#ADD8E6',
//   mass: null,
// });

const ball = new Ball({
  radius: 0.5,
  color: '#90EE90',
  mass: 1,
})
ball.meshShpere.position.y = 3;
ball.cannonSphere.position.y = 3;

// scene.add(surface.meshSurface);
// scene.add(ball.meshShpere)
// world.addBody(surface.cannonSurface);
world.addBody(ball.cannonSphere);


// const surface = new SurfaceMesh({width: 6, height: 1, color: '#ADD8E6', depth: 10});
// surface.setPosition(0, 0, -1);
// surface.receiveShadow = true;
// scene.add(surface);
// const ball = new Ball({radius: 0.5, color: '#90EE90'});
// ball.setInitialPosition(0, 2, 0);
// ball.castShadow = true;
// scene.add(ball);

window.addEventListener('resize', () => {
 const newWidth = window.innerWidth;
 const newHeight = window.innerHeight;

 camera.aspect = newWidth / newHeight;
 camera.updateProjectionMatrix();

 renderer.setSize(newWidth, newHeight);
});

const controls = new OrbitControls(camera, renderer.domElement)
const surfaceMovementSpeed = 0.04;

// Animation function
const animate = () => {
  requestAnimationFrame(animate);
  world.step(timeStep);


  // Update positions based on Cannon.js bodies
  // surface.meshSurface.position.copy(surface.cannonSurface.position);
  // surface.meshSurface.quaternion.copy(surface.cannonSurface.quaternion);
  ball.meshShpere.position.copy(ball.cannonSphere.position);
  ball.meshShpere.quaternion.copy(ball.cannonSphere.quaternion);
  surfacePool.forEach((surface, index) => {

    surface.move(0.06);

    const newZPosition = surface.meshSurface.depth;
    // Check if the surface is no longer visible
    if (surface.meshSurface.position.z >= 20) {
      // Remove from the scene and world
      // scene.remove(surface.meshSurface);
      // world.remove(surface.cannonSurface);
      // Create a new surface entity and add it to the pool
      const prevSurface = surfacePool[9];
      recycleSurfaceEntity(surfacePool[index], -120);
    
    }
  });


  // Render the scene
  renderer.render(scene, camera);
};

//Player Controller
document.addEventListener('keydown', (event) => {

  switch (event.key) {
    case 'ArrowLeft':
      ball.moveLeft();
      break;
    case 'ArrowRight':
      ball.moveRight();
      break;
    // Add more cases for other controls if needed
  }

  
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    ball.stopMovement();
  }
});


for (let i = 0; i < 10; i++) {
  surfacePool.push(createSurfaceEntity(scene, world, surfacePool[i - 1], 8));
}


// Start the animation loop
animate();