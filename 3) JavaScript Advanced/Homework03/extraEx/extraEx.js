window.onload = function () {
    setTimeout(openWindow, 5000);
    // первый параметр - html страница, которая будет загружена в новом окне.
    // второй параметр - имя окна
    // третий параметр - список дополнительных параметров (необязательный)
    
    // Function which open window after 5 seconds
    function openWindow() {
        let w = window.open("window.html", "Window Name", "width=1200,height=400,status=yes,resizable=no");
    }
}