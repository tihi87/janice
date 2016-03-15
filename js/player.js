// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });

      console.log("baipl!");
  
    player2 = new YT.Player('video2', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });

      console.log("baipl2!");
}


function onPlayerReady(event) {
    
  var pauseButton = document.getElementById("pausebutton");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
    console.log("bai!");
  });
  
    var pauseButton = document.getElementById("pausebutton2");
  pauseButton.addEventListener("click", function() {
    player2.pauseVideo();
    console.log("bai2!");
  });
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

