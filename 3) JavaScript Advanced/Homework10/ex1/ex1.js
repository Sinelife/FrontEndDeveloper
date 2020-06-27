// Function for getting element by id 
let getElementById = function (id) {
    return document.getElementById(id);
}

window.onload = function () {

    // Function which call when you click on send button
    document.getElementById("sendButton").onclick = function () {

        let xhr = new XMLHttpRequest();          // Создание объекта для HTTP запроса.
        xhr.open("GET", "CalcHandler.ashx?a=" + getElementById("a").value + "&b=" + getElementById("b").value, true);  // Настройка объекта для отправки асинхронного GET запрос

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("sum").innerHTML = xhr.responseText;
            }
        }
        xhr.send();           
    }
}



