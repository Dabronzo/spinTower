import { MeshBasicMaterial, BoxGeometry, Mesh, BackSide } from "three";


export class Skybox {
    constructor(textures) {
      const skyBoxMaterial = [];
      for (const texture of textures) {
        skyBoxMaterial.push(new MeshBasicMaterial({ map: texture, side: BackSide }));
      }
  
      const skyboxGeometry = new BoxGeometry(1000, 1000, 1000);
      this.mesh = new Mesh(skyboxGeometry, skyBoxMaterial);
    }
  
    getMesh() {
      return this.mesh;
    }
  }