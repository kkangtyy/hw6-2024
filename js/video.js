var video;

// Loads the video
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// Initializes the video element
	video = document.querySelector("#player1")
	// Turns off autoplay and looping
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// Codes the play button
document.querySelector("#play").addEventListener("click", function() {
	if (video.paused==true) {
		video.play();
	}
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = (video.volume * 100)+"%"
});

// Codes the pause button
document.querySelector("#pause").addEventListener("click", function() {
	if (video.paused==false) {
		video.pause();
	}
	console.log("Pause Video");
});

// Slows down video by 10% every time button is clicked
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("Video Playback Rate is " + video.playbackRate);
});

// Speeds up the video by 10% (proportional to "Slow Down") every time the button is clicked
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("Video Playback Rate is " + video.playbackRate);
});

// Skips video by 10 seconds; resets to beginning if video has reached end
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Current Video Location is " + video.currentTime);
});

// Mute/unmute video and change the button's name accordingly
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}

	// if (document.querySelector("#mute").innerHTML=="Unmute") {
	// 	video.volume = 1;
	// 	document.querySelector("#mute").innerHTML = "Mute"
	// } else {
	// 	video.volume = 0;
	// 	document.querySelector("#mute").innerHTML = "Unmute";
	// }
});

// Change volume using slider and update volume information on the side
document.querySelector("#slider").addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100)+"%"
});

// Code oldSchool class to set a graycale filter on video
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

// Code orig class to remove oldSchool grayscale button
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});