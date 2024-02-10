import { SurfaceEntity } from "../entities/surface";


export function createSurfaceEntity(scene, world, position) {

    const colorArr = ['#ADD8E6', '#C4A484', '#FFD580', '#CBC3E3']
    const surface = new SurfaceEntity({
        width: 6,
        height: 1,
        depth: 20,
        color: colorArr[position % colorArr.length],
        mass: null,
    });

    scene.add(surface.meshSurface);
    world.addBody(surface.cannonSurface);
    if (position && position > 0) {
         console.log('omg', position)
        surface.initialPosition(position*-20);
    }
   
    return surface;
}

