import { PowerUp } from "../entities/powerUp";
import { SurfaceEntity } from "../entities/surface";


const colorArr = ['#ADD8E6', '#C4A484', '#FFD580', '#CBC3E3']

export function createSurfaceEntity(scene, world, prevSurface, surfaceWidth) {
    let surface;
 
    if (prevSurface && prevSurface.meshSurface) {
        surface = new SurfaceEntity({
            width:  surfaceWidth,
            color: '#ADD8E6',
            mass: null,
        });
        
        surface.initialPosition(0, 0, prevSurface.meshSurface.position.z - 20);
    } else  {
        surface = new SurfaceEntity({
            color: '#ADD8E6',
            width:  surfaceWidth,
            mass: null,
        });
    }
    
    // scene.add(surface.meshSurface);
    world.addBody(surface.cannonSurface);

   
    return surface;
}

export function recycleSurfaceEntity(surfaceEntity, zPosition, wMode) {
    if (!surfaceEntity) return;
    surfaceEntity.initialPosition(0, 0, zPosition);
};

