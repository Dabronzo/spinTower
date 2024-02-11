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

export class Obstacle {
  constructor({width = 1, height = 1, depth = 1, color, mass}) {
    this.meshSurface = new SurfaceMesh({width, height, color, depth});
    this.cannonSurface = new CannonSurface({width, height, depth, mass});
  }
}

export class SurfaceEntity {
    constructor({width = 8, height = 1, depth = 20, color, mass}) {
        this.meshSurface = new SurfaceMesh({width, height, color, depth});
        this.cannonSurface = new CannonSurface({width, height, depth, mass})
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

   
}




