import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

export function initScene() {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {

        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    });

    const light = new THREE.PointLight(0xffffff, 3);

    light.position.set(5, 5, 5);

    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);

    scene.add(ambient);

    return {

        scene,

        camera,

        renderer,

        particles: null,

        targetX: 0,

        targetY: 0

    };

}