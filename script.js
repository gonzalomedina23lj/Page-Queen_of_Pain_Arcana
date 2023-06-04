var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'g3yrQ-0w4aI',

        events: {
            'onReady': 'onPlayerReady',
            'onStateChange': 'onPlayerStateChange'
          },
          playerVars:{
            controls:'1',
            rel:'0',
            autoplay: '0'
          }
        });
      }

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(hideElement(), ENDED);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

function hideElement(){
    document.getElementById('player').style.display="none";
}