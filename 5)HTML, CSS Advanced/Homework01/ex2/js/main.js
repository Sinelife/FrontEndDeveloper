window.addEventListener("load", handle, false);

function handle() {
	document.getElementById("card-container").addEventListener("click", handle, false);
	let frame = document.getElementById("main-frame");

	function handle(e) {
		let elem = e.target;
		if(elem.getAttribute("data-src")) {
			frame.src = elem.getAttribute("data-src");
			frame.hidden = false;
		}
	}

}