// Function for getting element by id 
let getElementById = function (id) {
    return document.getElementById(id);
}

window.onload = function () { 
    
    // Function which call when you click on send button
    getElementById("sendButton").onclick = function () {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "GetHandler.ashx?login=" + getElementById("login").value + "&password=" + getElementById("password").value);  // Send to C# file login and password where you put them in JSON file
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);    //get json file
                document.getElementById("output").innerHTML = "Hello, " + data.login + "!!!!";  //Put info from json in result paragraph
            }
        }
        xhr.send();
    }
}



