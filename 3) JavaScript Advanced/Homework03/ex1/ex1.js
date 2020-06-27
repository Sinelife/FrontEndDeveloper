// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function-constructor for timer object
function Timer() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.increase = function() {
        this.seconds++;
        if (this.seconds == 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if(this.minutes == 60) {
            this.minutes = 0;
            this.hours++;
        }
    }
}

// Method toString() for timer
Timer.prototype.toString = function() {
    return (this.hours < 10 ? "0" + this.hours : this.hours) 
    + ":" + (this.minutes < 10 ? "0" + this.minutes : this.minutes) 
    + ":" + (this.seconds < 10 ? "0" + this.seconds : this.seconds);
}

window.onload = function () {
    let timer = new Timer();        // Timer object
    let intervalHandler;            
    let startButtonActive = false;  // variable which check if startButoon is pressed

    // Function which show change every period of time
    function count(){
        getElementById("output").innerHTML = timer.toString();
        timer.increase();
    }

    // Function which starts when startButton is pressed
    getElementById("startButton").onclick = function () {
        if (!startButtonActive) {
            intervalHandler = setInterval(count, 1000);
            startButtonActive = true;
        } else {
            alert("The timer is already running");
        }
    }

    // Function which starts when stopButton is pressed
    getElementById("stopButton").onclick = function () {
        clearInterval(intervalHandler);
        startButtonActive = false;
    }

    // Function which starts when dropButton is pressed
    getElementById("dropButton").onclick = function () {
        timer = new Timer(); 
        getElementById("stopButton").onclick();
        getElementById("output").innerHTML = "00:00:00";
    }
}