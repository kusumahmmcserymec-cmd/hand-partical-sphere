import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

export function createParticles(app) {

    const count = 12000;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

        const radius = 1;

        const theta = Math.random() * Math.PI * 2;

        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] =
            radius * Math.sin(phi) * Math.cos(theta);

        positions[i * 3 + 1] =
            radius * Math.sin(phi) * Math.sin(theta);

        positions[i * 3 + 2] =
            radius * Math.cos(phi);

    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({

        color: 0x00ff99,

        size: 0.02

    });

    const points = new THREE.Points(

        geometry,

        material

    );

    app.scene.add(points);

    app.particles = points;

}