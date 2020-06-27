onmessage = function (e) {
    let resultObject = new Object();
    resultObject.id = e.data[0];
    resultObject.name = e.data[1];
    resultObject.age = e.data[2];
    setTimeout(function () {postMessage(resultObject);},2000);
}