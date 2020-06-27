window.onload = function () {
    let intervalHandler;  
    let startButtonActive = false;          
    let list = document.getElementsByTagName("ul")[0];
    let counter = 1;

    // Function which called every time period
    function count(){
        let elem = document.createElement("li");
        elem.innerHTML = "Element " + counter++;
        elem.style.color = "red";
        list.appendChild(elem);
    }

    // Function which is called when startButton clicked
    document.getElementById("startButton").onclick = function () {
        if (!startButtonActive) {
            intervalHandler = setInterval(count, 3000);
            startButtonActive = true;
        } else {
            alert("The timer is already running");
        }
    }

    // Function which is called when stopButton clicked
    document.getElementById("stopButton").onclick = function () {
        clearInterval(intervalHandler);
        startButtonActive = false;
    }
}