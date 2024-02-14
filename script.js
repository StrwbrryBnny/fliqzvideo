const videoElement = document.querySelector('.video');

videoElement.addEventListener('loadedmetadata', () => {
    const videoWidth = videoElement.videoWidth;
    const videoHeight = videoElement.videoHeight;
    const frameWidth = document.querySelector('.frame').clientWidth;
    const frameHeight = document.querySelector('.frame').clientHeight;

    // Berechnen Sie das Verhältnis von Video zu Rahmen
    const videoRatio = videoWidth / videoHeight;
    const frameRatio = frameWidth / frameHeight;

    // Bestimmen Sie, ob das Video breiter oder höher ist als der Rahmen
    if (videoRatio > frameRatio) {
        // Das Video ist breiter als der Rahmen
        videoElement.style.width = frameWidth + 'px';
        videoElement.style.height = 'auto';
    } else {
        // Das Video ist höher als der Rahmen
        videoElement.style.width = 'auto';
        videoElement.style.height = frameHeight + 'px';
    }
});
