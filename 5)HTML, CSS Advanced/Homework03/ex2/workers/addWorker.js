onmessage = function (e) {
    let a = e.data[0];
    let b = e.data[1];
    setTimeout(function () {postMessage(parseFloat(a) + parseFloat(b));}, 1000);
}