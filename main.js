const YTBPlayerEmbed = document.querySelector(".ytb-video-embed");
const YTBPlayVideo = document.querySelector(".ytb-video-play");
const videoFrame = document.getElementById("qop-video-embed")

function playVideo(){
    videoFrame.src 

}

YTBPlayVideo.addEventListener ('click', () => {
        YTBPlayerEmbed.classList.add("active");
        playVideo()
    } );

function hideVideo(){
    YTBPlayerEmbed.classList.remove("active");
    document.getElementById('qop-video-embed').src = document.getElementById('qop-video-embed').src;
    
};

window.addEventListener("scroll", () => { 
    hideVideo();
});
