import { SurfaceEntity } from "../entities/surface";


const colorArr = ['#ADD8E6', '#C4A484', '#FFD580', '#CBC3E3']

export function createSurfaceEntity(scene, world, prevSurface, surfaceWidth) {
    let surface;
 
    if (prevSurface && prevSurface.meshSurface) {
        surface = new SurfaceEntity({
            width:  surfaceWidth || Math.floor(Math.random() * 8) + 1,
            color: '#ADD8E6',
            mass: null,
        });
       

        surface.initialPosition(0, 0, prevSurface.meshSurface.position.z - 20);
        console.log('creating', prevSurface.meshSurface.position.z)
    } else  {
        surface = new SurfaceEntity({
            color: '#ADD8E6',
            width:  surfaceWidth,
            mass: null,
        });
    }
    
    scene.add(surface.meshSurface);
    world.addBody(surface.cannonSurface);

   
    return surface;
}

export function recycleSurfaceEntity(surfaceEntity, zPosition) {
    if (surfaceEntity) {
        surfaceEntity.initialPosition(0, 0, zPosition);
    }
}

export function createObstacle(numberOfObs) {
    for (obs of numberOfObs) {
      const obstacle = new Obstacle({color: '#FFD580'})
      const randomX =  Math.floor(Math.random() * (3 - (-3) + 1)) + min;
      obstacle.meshSurface.position.set(randomX, 0, 0);
      obstacle.cannonSurface.position.set();
    }

  }

