import * as THREE from 'three';
import * as CANNON from 'cannon';
import * as TWEEN from '@tweenjs/tween.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Ball } from './src/entities/ball';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { SurfaceEntity } from './src/entities/surface';
import { createSurfaceEntity, recycleSurfaceEntity } from './src/helpers/generator';
import { ScoreDisplay } from './src/display/score';
import CannonDebugger from 'cannon-es-debugger';
import { PowerUp } from './src/entities/powerUp';


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
const powerUpsPool = [];
let obstacles;
let powerUpActive = false;
let elapsedTime = 0;




// displays
const scoreDisplay = new ScoreDisplay();


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




const ball = new Ball({
  radius: 0.5,
  color: '#90EE90',
  mass: 1,
})
ball.meshShpere.position.y = 3;
ball.cannonSphere.position.y = 3;

ball.setCollide(ball.meshShpere.position, ball.radius);

// scene.add(surface.meshSurface);
// scene.add(ball.meshShpere)
world.addBody(ball.cannonSphere);

const cannonDebugger = new CannonDebugger(scene, world, {})



window.addEventListener('resize', () => {
 const newWidth = window.innerWidth;
 const newHeight = window.innerHeight;

 camera.aspect = newWidth / newHeight;
 camera.updateProjectionMatrix();

 renderer.setSize(newWidth, newHeight);
});




const controls = new OrbitControls(camera, renderer.domElement)
let speed = 0.2

// functions

function spawnPowerUp(x, y, z) {
  const powerUp = new PowerUp();
  powerUp.meshPowerUp.position.set(x, y, z);
  powerUp.setCollide(powerUp.meshPowerUp.position, 1);
  return powerUp;
}

// Animation function
const animate = () => {
  requestAnimationFrame(animate);
  world.step(timeStep);
  TWEEN.update();
  cannonDebugger.update();
  elapsedTime += timeStep;


 


  // Update positions based on Cannon.js bodies
  ball.meshShpere.position.copy(ball.cannonSphere.position);
  ball.meshShpere.quaternion.copy(ball.cannonSphere.quaternion);
  ball.updateCollide();

  if (powerUpActive) {

    surfacePool.forEach((surface) => {
      surface.getObstacles().forEach((o) => {
        world.remove(o.cannonSurface);
      })
    })
   
  } else  {
    surfacePool.forEach((surface) => {
      surface.getObstacles().forEach((o) => {
        world.addBody(o.cannonSurface);
      })
    })
  }

  // ball.collideSphere.copy(ball.meshShpere.geometry.boundingBox).applyMatrix4(ball.meshShpere.matrixWorld);
  surfacePool.forEach((surface, index) => {
    surface.move(speed);
    

    
 

    // Check if the surface is no longer visible
    // recycle then and add obstacles and powerups
    if (surface.meshSurface.position.z >= 20) {
      // removing existing obstacles
      surface.getObstacles().forEach((o, i) => {
        world.remove(o.cannonSurface);
        scene.remove(o.meshSurface);
        scoreDisplay.incrementScore(5)
      })

      recycleSurfaceEntity(surfacePool[index], -180, true);
      // adding obstacles
      obstacles = surfacePool[index].spawObstacles(1);
      obstacles.forEach((obs) => {
        scene.add(obs.meshSurface);
        world.addBody(obs.cannonSurface);
      })

      
     
      ;
    };

    
    // adding powerups
    if (elapsedTime >= 20) {
      const xPosition = Math.random() * surface.meshSurface.width - surface.meshSurface.width / 2;
      const powerUp = spawnPowerUp(xPosition, 1, -180);
 
      scene.add(powerUp.meshPowerUp);
      powerUpsPool.push(powerUp);
     
      elapsedTime = 0; // Reset elapsed time
    }

   //  obstacles animation
    surface.getObstacles().forEach((obs, i) => {
      obs.moveObs(speed);

      obs.meshSurface.position.copy(obs.cannonSurface.position);
      obs.meshSurface.quaternion.copy(obs.cannonSurface.quaternion);
      obs.updateCollider();
      if (obs.checkCollider(ball) && powerUpActive) {
        obs.setColision();
        scoreDisplay.incrementScore(1)
      }
      ball.chechCollision(obs);
     
    })

    // powerups animation
    powerUpsPool.forEach((pU, i) => {
      pU.move(speed);
      pU.rotate(0.008);

      if (!powerUpActive && pU.checkCollision(ball)) {
        powerUpActive = true;
        speed = 0.2;
        pU.triggerCollision();
        setTimeout(() => {
          speed = 0.2;
          powerUpActive = false;
        }, 5000);
      }
      pU.updateCollide();
      if (pU.meshPowerUp.position.z >=22) {
        scene.remove(pU.meshPowerUp);
        powerUpsPool.shift();
      }
    })
   


  });

  //

  // Render the scene
  renderer.render(scene, camera);
};

//Player Controller
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'ArrowLeft':
      ball.moveLeft();
      break;
    case 'ArrowRight':
      ball.moveRight();
      break;
    case 'Space':
      ball.jump();
    // Add more cases for other controls if needed
  }

  
});

document.addEventListener('keyup', (event) => {
  
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    ball.stopMovement();
  }
});


for (let i = 0; i < 10; i++) {
  surfacePool.push(createSurfaceEntity(scene, world, surfacePool[i - 1]));
}


// Start the animation loop
animate();