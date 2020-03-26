// Creating object document and fill it with information
let myDocument = {
    header: "Main Header",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ab asperiores debitis consectetur labore natus, quae, odit officia eligendi dolores nihil quod, magnam exercitationem harum explicabo beatae ut quo quis!",
    footer: "Main Footer",
    data: "Main Data of Document!!!!!!!!!!!!!!!!!!!!!!!!",
    app :{
        header: "App Header",
        body: "ctetur adipisicing elit. Quasi ab asperiores debitis consectetur labore natus, quae, odit ofctetur adipisicing elit. Quasi ab asperiores debitis consectetur labore natus, quae, odit of",
        footer: "Footer",
        data: "Data of app"
    }
    
};

// Method for document output
let outputDocument = function(doc) {
    document.write("&ltheader&gt" + doc.header + "&lt/header&gt<br>");
    document.write("&ltbody&gt" + doc.body + "&lt/body&gt<br>");
    document.write("&ltdata&gt" + doc.data + "&lt/data&gt<br>");
    outputApp(doc.app);
    document.write("&ltfooter&gt>" + doc.footer + "&lt/footer&gt<br>");
}

// Method for app output
let outputApp = function(app) {
    document.write("&nbsp&nbsp&nbsp&nbsp&ltapp-header&gt" + app.header + "&lt/app-header&gt<br>");
    document.write("&nbsp&nbsp&nbsp&nbsp&ltapp-body&gt" + app.header + "&lt/app-body&gt<br>");
    document.write("&nbsp&nbsp&nbsp&nbsp&ltapp-footer&gt" + app.header + "&lt/app-footer&gt<br>");
    document.write("&nbsp&nbsp&nbsp&nbsp&ltapp-data&gt" + app.header + "&lt/app-data&gt<br>");
}

// Calling output method for our document
outputDocument(myDocument);