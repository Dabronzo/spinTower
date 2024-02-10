// main.js or App.vue
import * as THREE from 'three';

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cylinder
const geometry = new THREE.CylinderGeometry(2, 2, 4, 32);
const material = new THREE.MeshBasicMaterial({ color: '#D3D3D3' });
const cylinder = new THREE.Mesh(geometry, material);
// scene.add(cylinder);

console.log(cylinder.position)

// create a ball
const geometrySphere = new THREE.SphereGeometry(0.5);
const materialSphere = new THREE.MeshBasicMaterial({ color: "#FFCCCB"});
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.set(0, 0, 0);
scene.add(sphere);

// Animation function
const animate = () => {
 requestAnimationFrame(animate);

 renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener('resize', () => {
 const newWidth = window.innerWidth;
 const newHeight = window.innerHeight;

 camera.aspect = newWidth / newHeight;
 camera.updateProjectionMatrix();

 renderer.setSize(newWidth, newHeight);
});

// Handle keydown events
document.addEventListener('keydown', (event) => {
 switch (event.key) {
   case 'ArrowLeft':
     // Rotate the cylinder to the left (negative rotation around the Y axis)
     cylinder.rotation.y -= 0.1;
     break;
   case 'ArrowRight':
     // Rotate the cylinder to the right (positive rotation around the Y axis)
     cylinder.rotation.y += 0.1;
     break;
   default:
     // Ignore other keys
     break;
 }
});

// Start the animation
animate();