// Add listener for closing page event
window.addEventListener('beforeunload', beforeUnloadHandle, false);

// Function which called when page is closed
function beforeUnloadHandle() {
    let date = new Date();
    let expireDate = getExpireDate(30);
    document.cookie = "date=" + date + ";expires=" + expireDate.toUTCString() + ";";
}

// Add listener for load page event
window.addEventListener('load', loadHandle, false);

// Function which called when page is load
function loadHandle() {
    document.getElementsByTagName("h1")[0].innerHTML = getCookieValue("date");
}

// Function which get cookie-value bu cookie-name
function getCookieValue(cookieName) {
    let allcookies = document.cookie;
    let pos = allcookies.indexOf(cookieName + "=");
    if (pos != -1) {
        let start = pos + cookieName.length + 1;
        let end = allcookies.indexOf(";", start);
        if (end == -1) {
            end = allcookies.length;
        }
        let value = allcookies.substring(start, end);
        return decodeURIComponent(value);
    }
}

// Function which get today date plus days you give as argument
function getExpireDate(days) {
    let date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * days);
    return date;
}