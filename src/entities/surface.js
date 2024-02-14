import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { Body, Box, Vec3 } from 'cannon';

/**
 * Represents a surface entity in the game.
 * @class
 * takes widith, leght and color as agruments.
 */
class SurfaceMesh extends THREE.Mesh {
  constructor({width, height, map, depth}) {
    
    super(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshStandardMaterial({map, transparent: true})
    )
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.map = map;
    this.receiveShadow = true;
  }
  

  setPosition(x, y, z) {
    this.position.set(x, y, z)
  }

 
  // Methods will be here
}

class TreadmillMesh extends THREE.Mesh {
  constructor({width, height, depth, map}) {

    super(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshStandardMaterial({ map })
    )
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.map = map;
    this.receiveShadow = true;
  }
  setPosition(x, y, z) {
    this.position.set(x, y, z)
  }
}

class CannonSurface extends Body {
    constructor({ width, height, depth, mass }) {
      super({ mass });
      
      // for some reason cannon double the dimentions so here is why everythins
      // is being divided by 2
      const shape = new Box(new Vec3(width / 2, height / 2, depth / 2));
      this.addShape(shape);
      
    }
}


export class SurfaceEntity {
    constructor({width = 8, height = 1, depth = 20, textureMap, mass}) {

        this.meshSurface = new TreadmillMesh({width, height, depth, map: textureMap});
        this.cannonSurface = new CannonSurface({width, height, depth, mass})
        this.obstacles = [];

    }
    move(speed) {
        const newZPosition = this.cannonSurface.position.z + speed;
        this.meshSurface.position.set(this.cannonSurface.position.x, 0, newZPosition);
        this.cannonSurface.position.set(this.cannonSurface.position.x, 0, newZPosition);
    };

    initialPosition(x, y, z) {
        this.meshSurface.setPosition(x, y, z);
        this.cannonSurface.position.set(x, y, z);
    };
    
    updateWidth(width) {
      this.meshSurface.width = width;
      this.cannonSurface.width = width;
    }


    spawObstacles(total, map) {
      // clear the obstacles array
      this.obstacles.splice(0, this.obstacles.length);
      for (let i=0; i < total; i++) {
      
        // find their position
        const zPosition = this.meshSurface.position.z;
    
      // Set the obstacles to spawn on the top of the surface (height of the surface)
         const yPosition = this.meshSurface.height;
    
      // Randomly determine the x position within the surface width
        const xPosition = Math.random() * this.meshSurface.width - this.meshSurface.width / 2;
        const obs = new ObstacleEntity({width: 1, height: 1, depth: 1, map, mass: 1});
        obs.meshSurface.position.set(xPosition, yPosition, zPosition);
        obs.cannonSurface.position.set(xPosition, yPosition, zPosition);
      this.obstacles.push(obs);
      }
      return this.obstacles;
    };

    getObstacles() {
      return this.obstacles;
    }
}


export class ObstacleEntity {
  constructor({width, height, depth, map, mass}) {
    this.meshSurface = new SurfaceMesh({width, height, map, depth});
    this.cannonSurface = new CannonSurface({width, height, depth, mass});
    this.collideSurface = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    this.exploded = false;
    this.isCollisionDetected = false;
  };

  moveObs(speed){
      const newZPosition = this.cannonSurface.position.z + speed;
      this.cannonSurface.position.set(this.cannonSurface.position.x, 1, newZPosition);  
      this.meshSurface.position.set(this.cannonSurface.position.x, 1, newZPosition);
  }

  updateCollider() {
    const boundingBox = this.collideSurface.setFromObject(this.meshSurface);
    this.collideSurface.copy(boundingBox);
  }

  checkCollider(ball) {
    if (!ball) return;
    if (ball.collideSphere.intersectsBox(this.collideSurface)) {
      return true;
    } else {
      return false;
    }
  }

  setColision() {
 
    if (!this.exploded) {
      // Set up initial states
     
      const initialScale = { x: this.meshSurface.scale.x, y: this.meshSurface.scale.y, z: this.meshSurface.scale.z };
      // Define the target states
      const targetScale = { x: 5 * initialScale.x, y: 5 * initialScale.y, z: 5 * initialScale.z };

      // Create a new Tween
      const scaleTween = new TWEEN.Tween(initialScale).to(targetScale, 500).onUpdate((scale) => {
        this.meshSurface.scale.set(scale.x, scale.y, scale.z);
        
      });
      this.meshSurface.material.setValues({opacity: 0.2});
      
      scaleTween.start();
      this.exploded = true;
    }

    
  };

  setTexture(newTexture) {
    if (!(newTexture instanceof THREE.Texture)) {
      console.error('Invalid texture provided.');
      return;
    }
    // update material
    this.meshSurface.material.map = newTexture;
    this.meshSurface.material.needsUpdate = true;
  }

}




