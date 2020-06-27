window.addEventListener("load", init, false);

function init() {
    if (window.Worker) {
        let workers = {
            "+" : new Worker("workers/addWorker.js"),
            "-" : new Worker("workers/subtractWorker.js"),
            "*" : new Worker("workers/multiplyWorker.js"),
            "/" : new Worker("workers/divideWorker.js"),
        }
 
        let a = document.querySelector("#field1");
        let b = document.querySelector("#field2");
        let result = document.querySelector("#result");

        document.getElementById("add").addEventListener("click", function () { getResult("+") }, false); 
        document.getElementById("subtract").addEventListener("click", function () { getResult("-") }, false); 
        document.getElementById("multiply").addEventListener("click", function () { getResult("*") }, false); 
        document.getElementById("divide").addEventListener("click", function () { getResult("/") }, false); 

        function getResult(operation) {
            workers[operation].postMessage([a.value, b.value]); 
            workers[operation].onmessage = function (e) { result.innerHTML = "Result: " + e.data; };
        }
    }
}