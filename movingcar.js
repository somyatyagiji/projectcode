var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
audio.addEventListener('error', function() {
	console.error('Error loading audio file.');
});
audio.addEventListener('canplaythrough', function() {
	audio.play();
});
