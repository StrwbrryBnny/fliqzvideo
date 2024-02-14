const videoElement = document.querySelector('.video');

videoInput.addEventListener('change', () => {
    if (videoInput.files.length > 0) {
        const file = videoInput.files[0];

        // Analysieren Sie die Videodatei, um die Vorschau zu generieren
        // ...

        // Vorschau anzeigen
        videoElement.src = previewURL;
        videoElement.style.display = 'block';

        // Entfernen Sie den Button, nachdem das Video angezeigt wird (optional).
        button.style.display = 'none';
    }
});
