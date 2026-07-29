export function animate(app) {

    function render() {

        requestAnimationFrame(render);

        if (app.particles) {

            app.particles.rotation.x +=
                (app.targetX - app.particles.rotation.x) * 0.08;

            app.particles.rotation.y +=
                (app.targetY - app.particles.rotation.y) * 0.08;

            app.particles.rotation.z += 0.002;
        }

        app.renderer.render(
            app.scene,
            app.camera
        );
    }

    render();
}