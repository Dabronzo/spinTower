import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


  
  // Connect the vertices to create faces


class PowerUpMesh extends THREE.Mesh {
    constructor() {
        super();
        const loader = new GLTFLoader();
        loader.load('../../assets/startPowerUp.glb', (gltf) => {
          const model = gltf.scene;
    
          
        //const newMaterial = new THREE.MeshStandardMaterial({ color: '#FDCB18' });

        const newMaterial = new THREE.MeshStandardMaterial({
            color: '#FDCB18',
            metalness: 1, // Adjust as needed
            roughness: 0.5, // Adjust as needed
            emissive: '#FDCB18', // Color for emissive glow
            emissiveIntensity: 1, // Intensity of the emissive glow
            transparent: true,
          });
        model.traverse((child) => {
        if (child.isMesh) {
          child.material = newMaterial;
        }
      });

        //   model.position.set(0, 0, 0);
          model.scale.set(0.14, 0.14, 0.14);
    
          // Add the loaded model to the current object (this)
          this.add(model);
    })
}
}

export class PowerUp {
    constructor() {
        this.meshPowerUp = new PowerUpMesh();
        this.collidePowerUp = new THREE.Sphere(new THREE.Vector3(), new THREE.Vector3());
        this.activated = false;
    };

    setCollide(position, radius) {
        this.collidePowerUp.setFromPoints(position, radius);
    };


    move(speed) {
        const newZPosition = this.meshPowerUp.position.z + (speed/10);
        this.meshPowerUp.position.set(this.meshPowerUp.position.x, this.meshPowerUp.position.y, newZPosition);
    }

    checkCollision(other) {
        
        if (!other) return false;
        if (other.collideSphere.intersectsSphere(this.collidePowerUp)) {
          
            return true;
        } else return false;
    }
    updateCollide() {
        const position = this.meshPowerUp.position.clone();
        const radius = 1;

        // Set the position and radius of the collideSphere
        this.collidePowerUp.center.copy(position);
        this.collidePowerUp.radius = radius;
    }

    triggerCollision(){
        if(!this.activated) {
            // set up initial
        
        const initialScale = { x: this.meshPowerUp.scale.x, y: this.meshPowerUp.scale.y, z: this.meshPowerUp.scale.z };
            // Define the target states
        const targetScale = { x: 5 + initialScale.x, y: 5 + initialScale.y, z: 5 + initialScale.z };

            // Create a new Tween
        const scaleTween = new TWEEN.Tween(initialScale).to(targetScale, 500).onUpdate((scale) => {
            this.meshPowerUp.scale.set(scale.x, scale.y, scale.z);
        });
        scaleTween.start();
        this.activated = true
        
        }
        
    }

    rotate(rotationSpeed) {
        this.meshPowerUp.rotation.y += rotationSpeed;
    }


}