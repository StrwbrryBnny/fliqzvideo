document.addEventListener('DOMContentLoaded', function () {
    const videoInput = document.getElementById('videoInput');
    const videoPlayer = document.getElementById('videoPlayer');

    videoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file && file.type === 'video/mp4') {
            const videoURL = URL.createObjectURL(file);
            videoPlayer.src = videoURL;
        } else {
            alert('Bitte wählen Sie eine gültige MP4-Datei aus.');
            videoInput.value = ''; // Leeren Sie das Dateiinputfeld
        }
    });
});
