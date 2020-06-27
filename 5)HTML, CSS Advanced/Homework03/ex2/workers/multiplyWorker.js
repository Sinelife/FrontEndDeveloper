onmessage = function (e) {
    let a = e.data[0];
    let b = e.data[1];
    setTimeout(function () {postMessage(a * b);}, 1000);
}