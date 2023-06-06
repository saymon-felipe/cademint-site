function playVideo() {
    let aboutVideo = $(".about-video");
    let icon = aboutVideo.find("i");
    let thumb = aboutVideo.find("img");
    let video = aboutVideo.find("video")[0];
    icon.hide();
    thumb.hide();
    video.style.display = "block";
    video.play();
    video.addEventListener("ended", function () {
        stopVideo();
    })
}

function stopVideo() {
    let aboutVideo = $(".about-video");
    let icon = aboutVideo.find("i");
    let thumb = aboutVideo.find("img");
    let video = aboutVideo.find("video")[0];
    icon.show();
    thumb.show();
    video.currentTime = 0;
    video.style.display = "none";
} 