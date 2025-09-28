import * as THREE from 'three';
import { Rotor } from './classes/rotor';
import { Drawer } from './classes/drawer';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

renderer.render(scene, camera);

const r = new Rotor(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(0, 0, 0.01), 0x00ff00);
const r1 = new Rotor(r.endPoint, new THREE.Vector3(0, 8, 0), new THREE.Vector3(0.00, 0.00, 0.2), 0x00ff00);
const r2 = new Rotor(r1.endPoint, new THREE.Vector3(0, 3, 0), new THREE.Vector3(0.00, 0.00, 0.3), 0x00ff00);
const r3 = new Rotor(r2.endPoint, new THREE.Vector3(0, 8, 0), new THREE.Vector3(0.00, 0.00, 0.6), 0x00ff00);

const drawer = new Drawer(0x00ff00)

scene.add(r.GetLine());
scene.add(r1.GetLine());
scene.add(r2.GetLine());
scene.add(r3.GetLine());

scene.add(drawer.GetLine());

function animate() {
    renderer.render(scene, camera);
    r.Update()
    r1.SetOrigin(r.endPoint)
    r1.Update()
    r2.SetOrigin(r1.endPoint)
    r2.Update()
    r3.SetOrigin(r2.endPoint)
    r3.Update()
    drawer.Update(r3.endPoint)
}

renderer.setAnimationLoop(animate);