// Module which input watermark to textFields
(function() {
    // Add listener for event when page load
    window.addEventListener("load", handle , false);

    // Function which is called when submit event start
    function handle() {
        // TextFields array
        let fields = document.getElementsByTagName("input");

        // Input watermark text to placeholder for every field
        for (let i = 0; i < fields.length; i++) {
            fields[i].placeholder = fields[i].getAttribute("watermark");
        }
    }
})()