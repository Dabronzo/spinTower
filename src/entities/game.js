import * as THREE from 'three';
import * as CANNON from 'cannon';
import { Skybox } from './skybox';
import { GameOverUI, PlayButton, DarkLayer, ScoreDisplay, Tutorial } from '../display/score';
import { createSurfaceEntity } from '../helpers/generator';
import { Ball } from './ball';
import { PowerUp } from './powerUp';

export class Game {
    constructor({skyboxTextures, surfaceMap, ballMap}) {
        //logic variables
        this.surfacePool = [];
        this.powerUpsPool = [];
        this.powerUpActive = false;
        this.isplayerAlive = true;
        this.gameSpeed = 0.16;
        this.surfaceMap = surfaceMap;
        this.skyboxTextures = skyboxTextures;
        this.introFinished = false;
        this.obstacles = [];
        this.score = 0;
        this.elapsedTime = 0;
        this.obstacleLevel = 1;

        // set up objects
        this.scene = new THREE.Scene();
        this.skybox = new Skybox(this.skyboxTextures);
        this.world = new CANNON.World();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.directionalLight =  new THREE.DirectionalLight(0xffffff, 0.5);
        this.ambientLight = new THREE.AmbientLight(0x404040);
        this.ball = new Ball({radius: 0.5, map: ballMap, mass: 1});
        this.darkLayer = new DarkLayer();
        this.scoreDisplay = new ScoreDisplay();
        this.instructions = new Tutorial('Avoid the obstacles and do not fall from the ice. Scroll left or right to move the ball, tap two times to perform a jump. Right and Left arrows on keyboard and space to jump');

        // media

        this.soundtrack = document.getElementById('gameSoundtrack');
        this.bustedSound = document.getElementById('bustedSound');

        // inits
        this.world.gravity.set(0, -9.8, 0);
        this.camera.position.z = 13;
        this.camera.position.y = 4;
        this.camera.quaternion.set(-0.15, 0.003, 0.00, 0.98)
        this.directionalLight.position.set(3, 2, 1);
        this.directionalLight.castShadow = true;
        this.ball.meshShpere.position.set(0, 3, 2);
        this.ball.cannonSphere.position.set(0, 3, 2);
        this.soundtrack.volume = 0.35;
        for (let i = 0; i < 10; i++) {
            this.surfacePool.push(createSurfaceEntity(this.scene, this.world, this.surfacePool[i - 1], this.surfaceMap));
        } 
    };

    mainGame(replay) {
        this.soundtrack.play();
        this.darkLayer.removelayer();
        this.scoreDisplay.setScore(0);
        if (replay) {
            this.score = 0;
            this.obstacleLevel = 1;
            this.isplayerAlive = true;
            this.powerUpActive = false;
            this.ball.meshShpere.position.set(0, 3, 1);
            this.ball.cannonSphere.position.set(0, 3, 1);
            this.ball.cannonSphere.velocity.set(0, 0, 0);
            this.ball.cannonSphere.angularVelocity.set(0, 0, 0);
            this.scoreDisplay.freezeScore(false);
            this.gameSpeed = 0.1;
            this.surfacePool.forEach((surface) => {
                surface.clearObstacles();
            })
            this.powerUpsPool = [];
        } else {
            this.ball.setCollide(this.ball.meshShpere.position, this.ball.radius);
            this.scoreDisplay.addScoreDisplay();
            this.instructions.removeCenteredText();
        }
        document.getElementById('Title').remove();
        this.scene.add(this.ball.meshShpere);
        this.world.addBody(this.ball.cannonSphere);
       
        
        
        
        
    }

    gameIntro() {
        // add light
        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
        this.scene.add(this.skybox.mesh);
        this.gameTitle = new GameOverUI({text: 'BeachBall SpaceRunner', top: '40%', left: '38%', color: '#FFD580', id: 'Title'})
        this.gameTitle.addText();
        this.instructions.addCenteredText();
        this.darkLayer.addLayer();
        this.playButton = new PlayButton(() => {
            this.introFinished = true;
            this.mainGame();
        });
        this.playButton.addButton('Play');
    }

    incrementScore(score) {
        this.scoreDisplay.incrementScore(score);
        this.score += score;
    }

    busted() {
        if (!this.isplayerAlive) return;
        this.soundtrack.pause();
        this.bustedSound.play();
        this.scoreDisplay.freezeScore(true);
        this.gameSpeed = 0.01;
        this.darkLayer.resetCreation();
        this.darkLayer.addLayer();
        this.gameTitle = new GameOverUI({text: 'Game Over', top: '40%', left: '38%', color: '#FFD580', id: 'Title'});
        this.gameTitle.addText();
        this.playButton = new PlayButton(() => this.mainGame(true));
        this.playButton.addButton('Play');
        this.scene.remove(this.ball.meshShpere);
        this.world.remove(this.ball.cannonSphere);
        this.isplayerAlive = false;
    };

    spawnPowerUps(surface) {
        const xPosition = Math.random() * surface.meshSurface.width - surface.meshSurface.width / 2;
        const powerUp = new PowerUp();
        powerUp.meshPowerUp.position.set(xPosition, 1, -180);
        powerUp.setCollide(powerUp.meshPowerUp.position, 1);
        this.scene.add(powerUp.meshPowerUp);
        this.powerUpsPool.push(powerUp);
        this.elapsedTime = 0;
    }

    powerUpActivate(powerUp) {
        const prevSpeed = this.gameSpeed;
        this.powerUpActive = true;
        this.gameSpeed = 0.25;
        setTimeout(() => {
            this.scene.remove(powerUp.meshPowerUp);
            this.powerUpsPool.shift();
        }, 1000);
        setTimeout(() => {
            this.gameSpeed = prevSpeed;
            this.powerUpActive = false;
          }, 5000);
    };


    spawnObstacles(surface, map) {
        if (this.score >= 300) {
            this.obstacleLevel = 2;
        };

        if (this.score >= 600) {
            this.obstacleLevel = 2;
            this.gameSpeed = 0.17;
        }

        if (this.score >= 1000) {
            this.obstacleLevel = 3;
            this.gameSpeed = 0.2;
        }
      

        this.obstacles = [...surface.spawObstacles(this.obstacleLevel, map)];
      
          // Add obstacles to the scene and world
        this.obstacles.forEach((obs) => {
            this.scene.add(obs.meshSurface);
            this.world.addBody(obs.cannonSurface);
        });
        console.log(this.obstacleLevel);
      
      }

    updateElapsedTime(time) {
        if (!this.introFinished) return;
        this.elapsedTime += time;
    };
   
}