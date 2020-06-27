window.addEventListener("load", handle, false);

function handle() {
    document.body.style.background = "white";
    let sum = 0;
    let data = {};
    let prices = [12, 9, 20];
    let imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        data[imgs[i].src] = prices[i];
    }

    
	document.getElementById("card-container").addEventListener("click", handle, false);

	function handle(e) {
        let elem = e.target;
        if (elem.src) {
            let price = data[elem.src];
            increaseOrderPrice(price);
        }

        function increaseOrderPrice(price) {
            sum += price;
            document.getElementById("order-price").innerHTML = "Total: " + sum + "$";
        }
	}
}