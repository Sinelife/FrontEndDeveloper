
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", init, false);

function init() {
    if (window.Worker) {
        let worker = new Worker("myWorker.js");
        let id = document.querySelector('#id');
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
           
        document.querySelector('#id').value = getRandomInt(1, 10_000);

        document.getElementById("sendButton").addEventListener("click", handle, false); 
        
        function handle() {
            worker.postMessage([id.value, name.value, age.value]); 

            worker.onmessage = function (e) {
                localStorage.setItem(e.data.id, JSON.stringify(e.data));
            };
        };
    }
}