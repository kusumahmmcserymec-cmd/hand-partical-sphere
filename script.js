import { initScene } from "./js/scene.js";
import { createParticles } from "./js/particles.js";
import { startHandTracking } from "./js/handTracking.js";
import { animate } from "./js/animation.js";

const app = initScene();

createParticles(app);

startHandTracking(app);

animate(app);