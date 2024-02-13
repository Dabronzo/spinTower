import { Body, Sphere, Vec3 } from 'cannon';
import { SphereGeometry, Mesh, MeshPhongMaterial, BoxGeometry } from 'three';

class BallMesh extends Mesh {
    constructor({radius, color}) {
        super(
            new BoxGeometry(radius, 32, 32),
            new MeshPhongMaterial({color: color})
        )
        this.radius = radius;
        this.color = color;
    }

}

class CannonBall extends Body {
    constructor({radius, mass}) {
        super({mass});

        // for some reason cannon double the dimentions so here is why everythins
        // is being divided by 2
        const shape = new Sphere(radius);
        this.addShape(shape);
    }
};

export class Ball {
    isGrounded = false
    constructor({radius, color, mass}) {
        this.meshShpere = new BallMesh({radius, color});
        this.cannonSphere = new CannonBall({radius, mass});
        this.jumpForce = new Vec3(0, 5, 0);
        this.dodgeSpeed = 2;
    };

    jump() {
        if (this.cannonSphere.collisionResponse) {
            this.cannonSphere.applyImpulse(this.jumpForce, this.cannonSphere.position);
        }
       
    };

    setVelocity(direction) {
        const currentVelocity = this.cannonSphere.velocity;
        this.cannonSphere.velocity.set(this.dodgeSpeed * direction, currentVelocity.y, currentVelocity.z);
    };

    stopMovement() {
        const currentVelocity = this.cannonSphere.velocity;
        this.cannonSphere.velocity.set(0, 0, 0);
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