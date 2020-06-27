// Add event listener which starts when page loaded
window.addEventListener("load", handle, false);

// Function-handler
function handle() {
    Module.createBarChart("chartContainer", [1, 2, 3, 20, 50 , 60], 800, 500, "green");
}