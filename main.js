import * as THREE from 'three';
import * as CANNON from 'cannon';
import * as TWEEN from '@tweenjs/tween.js';
import { Ball } from './src/entities/ball';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { createSurfaceEntity, recycleSurfaceEntity, spawnPowerUp } from './src/helpers/generator';
import { DarkLayer, GameOverUI, PlayButton, ScoreDisplay } from './src/display/score';
import CannonDebugger from 'cannon-es-debugger';
import { Skybox } from './src/entities/skybox';




//loading textures

const textureLoader = new THREE.TextureLoader();
// skybox
const skyboxTextures = [
  textureLoader.load('./assets/skybox/bkg1_right.png'),
  textureLoader.load('./assets/skybox/bkg1_left.png'),
  textureLoader.load('./assets/skybox/bkg1_top.png'),
  textureLoader.load('./assets/skybox/bkg1_bot.png'),
  textureLoader.load('./assets/skybox/bkg1_front.png'),
  textureLoader.load('./assets/skybox/bkg1_back.png'),
];



// surface
const surfaceMap =textureLoader.load('./assets/textures/treadmill.jpg');

// ball
const ballMap = textureLoader.load('./assets/textures/beachball.jpg');
// boxes
const obstacleMapRed = textureLoader.load('./assets/textures/redWood.jpg');
const obstacleMapGreen = textureLoader.load('./assets/textures/greenWodd.jpg');



// Set up the scene
const scene = new THREE.Scene();
// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;
camera.position.y = 3;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// instantiating skybox
const skybox = new Skybox(skyboxTextures)

//stage logic
const surfacePool = [];
const powerUpsPool = [];
let obstacles;
let powerUpActive = false;
let elapsedTime = 0;
let isplayerAlive = true;
let gameSpeed = 0.2




// displays
const scoreDisplay = new ScoreDisplay();
const darkLayer = new DarkLayer();
const gameOverText = new GameOverUI({text: 'Game Over', top: '40%', left: '38%', color: '	#FFD580'});
const playButton = new PlayButton();

// Add lights
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.castShadow = true;
light.position.y = 5;
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040); // Set the color as needed
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

scene.add(skybox.mesh);


// Set up Cannon.js world
const world = new CANNON.World();
world.gravity.set(0, -9.8, 0); // Adjust gravity as needed
const timeStep = 1 / 60;

// the player (ball)
const ball = new Ball({
  radius: 0.5,
  map: ballMap,
  mass: 1,
})
ball.meshShpere.position.y = 3;
ball.cannonSphere.position.y = 3;


ball.setCollide(ball.meshShpere.position, ball.radius);
scene.add(ball.meshShpere)
world.addBody(ball.cannonSphere);

// debug
const controls = new OrbitControls(camera, renderer.domElement)



// Animation function
const animate = () => {
  requestAnimationFrame(animate);
  world.step(timeStep);
  TWEEN.update();
  // cannonDebugger.update();
  elapsedTime += timeStep;

  // Death logic
  if (!isplayerAlive) {
    gameSpeed = 0.01;
    darkLayer.addLayer();
    gameOverText.addText();
    playButton.addButton();
    scoreDisplay.freezeScore();
  }

  // Update positions based on Cannon.js bodies
  ball.meshShpere.position.copy(ball.cannonSphere.position);
  ball.meshShpere.quaternion.copy(ball.cannonSphere.quaternion);
  ball.updateCollide();

  // death detector
  if (ball.meshShpere.position.y <= - 2 || ball.meshShpere.position.z >= 15) {
    isplayerAlive = false;
  }

  // Changing the state of obstacles during the powerUp active
  if (powerUpActive) {

    surfacePool.forEach((surface) => {
      surface.getObstacles().forEach((o) => {
        o.setTexture(obstacleMapGreen)
        world.remove(o.cannonSurface);
      })
    })
   
  } else  {
    surfacePool.forEach((surface) => {
      surface.getObstacles().forEach((o) => {
        o.setTexture(obstacleMapRed)
        world.addBody(o.cannonSurface);
      })
    })
  }

  //----------------------- Handling the Surfaces and obstacles spawning system ----------------//
  surfacePool.forEach((surface, index) => {
    surface.move(gameSpeed);

    //-------------------------- Surface Loop 
    
    if (surface.meshSurface.position.z >= 20) {
      // removing existing obstacles
      surface.getObstacles().forEach((o, i) => {
        world.remove(o.cannonSurface);
        scene.remove(o.meshSurface);
        // score
        scoreDisplay.incrementScore(5)
      })
      // recycle then and add obstacles and powerups
      recycleSurfaceEntity(surfacePool[index], -180, true);
      // adding obstacles
      obstacles = surfacePool[index].spawObstacles(1, obstacleMapRed);
      obstacles.forEach((obs) => {
        scene.add(obs.meshSurface);
        world.addBody(obs.cannonSurface);
      });
    };

    //------------------------- PowerUp Spawning
    
    // adding powerups
    if (elapsedTime >= 20) {
      const xPosition = Math.random() * surface.meshSurface.width - surface.meshSurface.width / 2;
      const powerUp = spawnPowerUp(xPosition, 1, -180);
 
      scene.add(powerUp.meshPowerUp);
      powerUpsPool.push(powerUp);
     
      elapsedTime = 0; // Reset elapsed time
    }


    //---------------------- Obstacles Aanimation

    surface.getObstacles().forEach((obs, i) => {
      obs.moveObs(gameSpeed);

      obs.meshSurface.position.copy(obs.cannonSurface.position);
      obs.meshSurface.quaternion.copy(obs.cannonSurface.quaternion);
      obs.updateCollider();
      if (obs.checkCollider(ball) && powerUpActive) {
        obs.setColision();
        scoreDisplay.incrementScore(1)
      }
      ball.chechCollision(obs);
     
    })

    // ---------------------- PowerUp Animations

    powerUpsPool.forEach((pU, i) => {
      pU.move(gameSpeed);
      pU.rotate(0.008);

      if (!powerUpActive && pU.checkCollision(ball)) {
        powerUpActive = true;
        gameSpeed = 0.2;
        pU.triggerCollision();
       
        setTimeout(() => {
          gameSpeed = 0.2;
          powerUpActive = false;
        }, 5000);  // time that the powerup will be active
      }
      pU.updateCollide();
      // removing
      if (pU.meshPowerUp.position.z >=22) {
        scene.remove(pU.meshPowerUp);
        powerUpsPool.shift();
      }
    })

  });

  // -------------------------------- Render ------------------------------
  renderer.render(scene, camera);
};


// listeners
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
 
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
 
  renderer.setSize(newWidth, newHeight);
 });

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
  surfacePool.push(createSurfaceEntity(scene, world, surfacePool[i - 1], surfaceMap));
}

// moblie

document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
  handleTouchMove(ball);
});

document.addEventListener('touchend', () => {
  handleTouchEnd(ball);
});


// Start the animation loop
animate();