let getElementById = function (id) { 
    return document.getElementById(id)
}

window.addEventListener("load", handle , false)

function handle () {
    let video = getElementById("video");
    if (localStorage.getItem("src")) {
        video.src = localStorage.getItem("src");
        video.currentTime = localStorage.getItem("currentTime");
    } else {
        video.src = "video/BokuNoHeroAcademiaS2Op2.mp4"
    }

    getElementById("rewaindForward").onclick = function () {
        video.currentTime += 10;
    };

    getElementById("rewaindBack").onclick = function () {
        video.currentTime -= 10;
    };

    getElementById("volumeInc").onclick = function () {
        video.volume = video.volume == 1 ? 1 : video.volume + 0.1;
    };

    getElementById("volumeDec").onclick = function () {
        video.volume = video.volume <= 0.1 ? 0 : video.volume - 0.1;
    };

    getElementById("stopButton").onclick = function () {
        video.pause();
        video.currentTime = 0;
        getElementById("playButton").src = "img/play.png";
    };

    getElementById("fullButton").onclick = function () {
        var elem = getElementById("video");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };

    getElementById("playButton").onclick = function (e) {
        if (video.paused) {
            video.play();
            e.target.src = "img/pause.png";
        } else {
            video.pause();
            e.target.src = "img/play.png";
        }
    };

    getElementById("button-block").onclick = function(e) {
        if (e.target.className == "btn") {
            video.src = e.target.src;
            getElementById("playButton").src = "img/play.png";
        }
    }

    window.addEventListener("beforeunload", endHandle, false);

    function endHandle() {
        localStorage.setItem("src", video.src);
        localStorage.setItem("currentTime", video.currentTime);
    }
}