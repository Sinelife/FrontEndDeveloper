window.addEventListener("load", handle, false);

function handle() {
    let sum = 0;
    
	document.getElementById("card-container").addEventListener("click", handle, false);

	function handle(e) {
        let elem = e.target;
        if (elem.id == "add-button") {
            let price = elem.getAttribute("data-price");
            increaseOrderPrice(price);
        }

        function increaseOrderPrice(price) {
            sum += parseFloat(price);
            document.getElementById("order-price").innerHTML = "Total: " + sum + "$";
        }
	}
}