document.addEventListener("DOMContentLoaded", () => {
    const cameraFeed = document.getElementById("camera-feed");
    const captureButton = document.getElementById("capture-button");
    const capturedPhotoCanvas = document.getElementById("captured-photo");
    const context = capturedPhotoCanvas.getContext("2d");

    // Check for webcam access
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            cameraFeed.srcObject = stream;
        })
        .catch((error) => {
            console.error("Error accessing webcam:", error);
        });

    // Capture photo on button click
    captureButton.addEventListener("click", () => {
        context.drawImage(cameraFeed, 0, 0, capturedPhotoCanvas.width, capturedPhotoCanvas.height);
        // You can now save or process the captured photo as needed
    });
});
