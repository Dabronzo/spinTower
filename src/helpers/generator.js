import { PowerUp } from "../entities/powerUp";
import { SurfaceEntity } from "../entities/surface";


const colorArr = ['#ADD8E6', '#C4A484', '#FFD580', '#CBC3E3']

export function createSurfaceEntity(scene, world, prevSurface, map) {
    let surface;
    if (prevSurface && prevSurface.meshSurface) {
        surface = new SurfaceEntity({
            textureMap: map,
            mass: null,
 
            
        });
        
        surface.initialPosition(0, 0, prevSurface.meshSurface.position.z - 20);
    } else  {
        surface = new SurfaceEntity({
            textureMap: map,
            mass: null,

        });
    }
    
    scene.add(surface.meshSurface);
    world.addBody(surface.cannonSurface);

   
    return surface;
}

export function recycleSurfaceEntity(surfaceEntity, zPosition, wMode) {
    if (!surfaceEntity) return;
    surfaceEntity.initialPosition(0, 0, zPosition);
};



export function spawnPowerUp(x, y, z) {
    const powerUp = new PowerUp();
    powerUp.meshPowerUp.position.set(x, y, z);
    powerUp.setCollide(powerUp.meshPowerUp.position, 1);
    return powerUp;
}


export  function handleTouchMove(ball) {
    const swipeThreshold = 50; // Adjust the threshold based on your preference
  
    const swipeDistance = touchEndX - touchStartX;
  
    if (swipeDistance > swipeThreshold) {
      // Right swipe
      ball.moveRight();
    } else if (swipeDistance < -swipeThreshold) {
      // Left swipe
      ball.moveLeft();
    }
}

export function handleTouchEnd(ball) {
    ball.stopMovement();
  }