var video = document.querySelector("#video-1");

video.addEventListener('canplay', function(){

    console.log("video selected");

});

video.addEventListener('play', function(){

    console.log("play");

});

video.addEventListener('pause', function(){

    console.log("pause");

});

video.addEventListener('playing', function(){

    console.log("playing");

});


video.addEventListener('ended', function(){

    console.log("ended");

});

video.addEventListener('volumechange', function(){

    console.log("volumechange");

});


