var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  });

        document.getElementById('seek-video').onclick = function(){
            const currentTime = Math.round(player.getCurrentTime()); 
            player.seekTo(currentTime + 30 , true); 
        };
}


function onPlayerReady(event) {
    console.log('event data'); 
    console.log(event); 
  document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
}
function changeBorderColor(playerStatus) {
                var color;
                if (playerStatus == -1) {
                    color = "#37474F"; // unstarted = gray
                } else if (playerStatus == 0) {
                    color = "#FFFF00"; // ended = yellow
                } else if (playerStatus == 1) {
                    color = "#33691E"; // playing = green
                } else if (playerStatus == 2) {
                    color = "#DD2C00"; // paused = red
                } else if (playerStatus == 3) {
                    color = "#AA00FF"; // buffering = purple
                } else if (playerStatus == 5) {
                    color = "#FF6DOO"; // video cued = orange
                }
                if (color) {
                    document.getElementById('existing-iframe-example').style.borderColor = color;
                }
}
function getOnreadyStatus(event){


}

function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}

