window.onload = function () {

    // Function which send two requests to get info from two pages
    document.getElementById("btnGet").onclick = function () {
        sendRequest("testfile.html");
        sendRequest("testfile2.html");
    }

    // Function which send request to get info from page
    function sendRequest(fileName) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", fileName, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) { // если получен ответ
                if (xhr.status == 200) { // и если статус код ответа 200
                    document.getElementById("output").innerHTML += xhr.responseText; // responseText - текст ответа полученного с сервера.
                }
            }
        }
        xhr.send();
    }
}