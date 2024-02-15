import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { handleTouchMove, handleTouchEnd, recycleSurfaceEntity } from './src/helpers/generator';
import { DarkLayer, GameOverUI, PlayButton, ScoreDisplay } from './src/display/score';
import CannonDebugger from 'cannon-es-debugger';
import { Game } from './src/entities/game';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';




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
const surfaceMap =textureLoader.load('./assets/textures/ice.jpg');

// ball
const ballMap = textureLoader.load('./assets/textures/beachball.jpg');
// boxes
const obstacleMapRed = textureLoader.load('./assets/textures/redWood.jpg');
const obstacleMapGreen = textureLoader.load('./assets/textures/greenWodd.jpg');


// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const darkLayer = new DarkLayer();
const gameOverText = new GameOverUI({text: 'Game Over', top: '40%', left: '38%', color: '	#FFD580'});
const playButton = new PlayButton();

const timeStep = 1 / 60;
const game = new Game({skyboxTextures, surfaceMap, ballMap});
game.gameIntro();

// const controls = new OrbitControls( game.camera, renderer.domElement );

// const cannonDebugger = new CannonDebugger(game.scene, game.world);
// Animation function
const animate = () => {
  requestAnimationFrame(animate);
  game.world.step(timeStep);
  TWEEN.update();
  // cannonDebugger.update();
  game.updateElapsedTime(timeStep);

  

  // ---------------------------------- Main Loop -------------------------------//

  game.surfacePool.forEach((surface, index) => {
    surface.move(game.gameSpeed);

    // Update positions based on Cannon.js bodies
    game.ball.meshShpere.position.copy(game.ball.cannonSphere.position);
    game.ball.meshShpere.quaternion.copy(game.ball.cannonSphere.quaternion);
    game.ball.updateCollide();


    if (surface.meshSurface.position.z >= 25) {
       // removing existing obstacles
       surface.getObstacles().forEach((o, i) => {
        game.world.remove(o.cannonSurface);
        game.scene.remove(o.meshSurface);
        // score
        // scoreDisplay.incrementScore(5)
        game.incrementScore(5);
      })
      // recycle then and add obstacles and powerups
      recycleSurfaceEntity(game.surfacePool[index], -175, true);
      // stop here if is on intro
      if (!game.introFinished) return;
       // adding obstacles
       game.spawnObstacles(surface, obstacleMapRed);
     
    };

    if (game.elapsedTime >= 40 && game.introFinished) {
      game.spawnPowerUps(surface);
    };

    // obstacles update
    surface.getObstacles().forEach((obs, i) => {
      if (!game.isplayerAlive) {
        game.scene.remove(obs.meshSurface);
        game.world.remove(obs.cannonSurface);
      }
      obs.moveObs(game.gameSpeed);

      obs.meshSurface.position.copy(obs.cannonSurface.position);
      obs.meshSurface.quaternion.copy(obs.cannonSurface.quaternion);
      obs.updateCollider();
      if (obs.checkCollider(game.ball) && game.powerUpActive) {
        obs.setColision();
        game.incrementScore(1)
      }
      game.ball.chechCollision(obs);
     
    });

    // power ups update
    game.powerUpsPool.forEach((pU, i) => {
      if (!game.isplayerAlive) {
        game.scene.remove(pU.meshPowerUp);
      }
      pU.move(game.gameSpeed);
      pU.rotate(0.008);
  
      if (!game.powerUpActive && pU.checkCollision(game.ball)) {
        game.powerUpActivate(pU);
        pU.triggerCollision();
      }
      if (pU.meshPowerUp.position.z >= 20) {
        game.scene.remove(pU.meshPowerUp)
      }
      pU.updateCollide();
    })
  })
  

  // death detector
  if (game.ball.meshShpere.position.y <= - 2 || game.ball.meshShpere.position.z >= 15) {
    game.busted();

  }

  // Changing the state of obstacles during the powerUp active
  if (game.powerUpActive) {
    game.surfacePool.forEach((surface) => {
      surface.getObstacles().forEach((o) => {
        o.setTexture(obstacleMapGreen)
        game.world.remove(o.cannonSurface);
      })
    })
   
  } else {
    game.surfacePool.forEach((surface) => {
      surface.getObstacles().forEach((o) => {
        o.setTexture(obstacleMapRed)
        if (!game.isplayerAlive) return;
        game.world.addBody(o.cannonSurface);
      })
    })
  } 
  renderer.render(game.scene, game.camera);
};


// windows
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
 
  game.camera.aspect = newWidth / newHeight;
  game.camera.updateProjectionMatrix();
 
  renderer.setSize(newWidth, newHeight);
 });

//---------------------Player Controller-----------------------------
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'ArrowLeft':
      game.ball.moveLeft();
      break;
    case 'ArrowRight':
      game.ball.moveRight();
      break;
    case 'Space':
      game.ball.jump();
    // Add more cases for other controls if needed
  }

  
});

document.addEventListener('keyup', (event) => {
  
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    game.ball.stopMovement();
  }
});

//---------------------------- moblie

let touchStartX = 0;
let touchEndX = 0;
let lastTapTime =0;

document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
  handleTouchMove(game.ball, touchEndX, touchStartX)
});

document.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
  handleTouchMove(game.ball, touchEndX, touchStartX);
});

document.addEventListener('touchend', () => {
  handleTouchEnd(game.ball, touchEndX, touchStartX);
  const currentTime = new Date().getTime();
  const tapDuration = currentTime - lastTapTime;

  if (tapDuration < 300 && tapDuration > 0) { // Adjust the threshold based on your preference
    game.ball.jump();
  }
  lastTapTime = currentTime;
});


// Start the animation loop
animate();