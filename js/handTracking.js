import {
    HandLandmarker,
    FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";

export async function startHandTracking(app) {

    const video = document.getElementById("video");

    const stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });

    video.srcObject = stream;

    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );

    const handLandmarker = await HandLandmarker.createFromOptions(
        vision,
        {
            baseOptions: {
                modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"
            },
            runningMode: "VIDEO",
            numHands: 1
        }
    );

    function detect() {

        const now = performance.now();

        const result = handLandmarker.detectForVideo(video, now);

        if (result.landmarks.length > 0) {

            const finger = result.landmarks[0][8];

            app.targetX = (finger.y - 0.5) * 4;

            app.targetY = (finger.x - 0.5) * 4;
        }

        requestAnimationFrame(detect);
    }

    detect();
}