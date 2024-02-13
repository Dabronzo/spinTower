import * as THREE from 'three';
import { Body, Box, Vec3 } from 'cannon';

/**
 * Represents a surface entity in the game.
 * @class
 * takes widith, leght and color as agruments.
 */
class SurfaceMesh extends THREE.Mesh {
  constructor({width, height, color, depth}) {
    super(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshPhongMaterial({ color: color })
    )
    this.width = width;
    this.height = height;
    this.color = color;
    this.depth = depth;
  }

  setPosition(x, y, z) {
    this.position.set(x, y, z)
  }
  // Methods will be here
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
    constructor({width = 8, height = 1, depth = 20, color, mass}) {
        this.meshSurface = new SurfaceMesh({width, height, color, depth});
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

    // spawObstacles() {
    //   // clear the obstacles array
    //   this.obstacles.splice(0, this.obstacles.length);

    //   // find their position
    //   const zPosition = this.meshSurface.position.z;
    //   const xPosition = Math.floor(Math.random() * (3 - (-3)) - 3);
    //   const obs = new ObstacleEntity({width: 1, height: 1, depth: 1, color: '#CBC3E3', mass: 1});
    //   obs.meshSurface.position.set(xPosition, 1, zPosition);
    //   obs.cannonSurface.position.set(xPosition, 1, zPosition);
    //   this.obstacles.push(obs);
    //   return this.obstacles;
    // }

    spawObstacles() {
      // clear the obstacles array
      this.obstacles.splice(0, this.obstacles.length);
    
      // find their position
      const zPosition = this.meshSurface.position.z;
    
      // Set the obstacles to spawn on the top of the surface (height of the surface)
      const yPosition = this.meshSurface.height;
    
      // Randomly determine the x position within the surface width
      const xPosition = Math.random() * this.meshSurface.width - this.meshSurface.width / 2;
    
      const obs = new ObstacleEntity({width: 1, height: 1, depth: 1, color: '#CBC3E3', mass: 1});
      obs.meshSurface.position.set(xPosition, yPosition, zPosition);
      obs.cannonSurface.position.set(xPosition, yPosition, zPosition);
      this.obstacles.push(obs);
      return this.obstacles;
    };

    getObstacles() {
      return this.obstacles;
    }
}


export class ObstacleEntity {
  constructor({width, height, depth, color, mass}) {
    this.meshSurface = new SurfaceMesh({width, height, color, depth});
    this.cannonSurface = new CannonSurface({width, height, depth, mass});
  };

  moveObs(speed){
    const newZPosition = this.cannonSurface.position.z + speed;
    this.meshSurface.position.set(this.cannonSurface.position.x, 1, newZPosition);
    this.cannonSurface.position.set(this.cannonSurface.position.x, 1, newZPosition);
  }

}




