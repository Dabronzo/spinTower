import * as CANNON from 'cannon';
import * as THREE from 'three';


class BallMesh extends THREE.Mesh {
    constructor({radius, map}) {
        super(
            new THREE.SphereGeometry(radius, 32, 32),
            new THREE.MeshStandardMaterial({map})
        )
        this.radius = radius;
        this.castShadow = true;
        this.map = map;
    }

}

class CannonBall extends CANNON.Body {
    constructor({radius, mass}) {
        super({mass});

        // for some reason cannon double the dimentions so here is why everythins
        // is being divided by 2
        const shape = new CANNON.Sphere(radius);
        this.addShape(shape);
    }
};

export class Ball {
    isGrounded = false
    constructor({radius, map, mass}) {
        this.meshShpere = new BallMesh({radius, map});
        this.cannonSphere = new CannonBall({radius, mass});
        this.collideSphere = new THREE.Sphere(new THREE.Vector3(), new THREE.Vector3());
        this.jumpForce = new CANNON.Vec3(0, 5, 0);
        this.dodgeSpeed = 2;
    };

    setCollide(position, radius) {
        this.collideSphere.setFromPoints(position, radius);
    }

    chechCollision(other) {
        if (!other) return;
        if (other.collideSurface.intersectsSphere(this.collideSphere)) {
            // console.log('binba');
        }       
    }

    updateCollide() {
        const position = this.meshShpere.position.clone();
        const radius = this.meshShpere.geometry.parameters.radius;

        // Set the position and radius of the collideSphere
        this.collideSphere.center.copy(position);
        this.collideSphere.radius = radius;
    }

    jump() {
        if (this.cannonSphere.position.y > 1) return;
        this.cannonSphere.applyImpulse(this.jumpForce, this.cannonSphere.position);
    };

    setVelocity(direction) {
        const currentVelocity = this.cannonSphere.velocity;
        this.cannonSphere.velocity.set(this.dodgeSpeed * direction, currentVelocity.y, currentVelocity.z);
    };

    stopMovement() {
        const currentVelocity = this.cannonSphere.velocity;
        this.cannonSphere.velocity.set(0, currentVelocity.y, currentVelocity.z);
    }

    moveRight() {
        this.setVelocity(1);
    };

    moveLeft() {
        this.setVelocity(-1);
    };

    moveForward() {
        this.cannonSphere.velocity.set(0, 0, -this.dodgeSpeed);
    };
    

}