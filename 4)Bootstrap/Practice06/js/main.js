window.addEventListener("load", handle, false);

function handle() {
	document.getElementById("user").addEventListener("click", userHandle, false);

	function userHandle() {
		window.location.replace("user.html");
	}

	document.getElementById("admin").addEventListener("click", adminHandle, false);

	function adminHandle() {
		window.location.replace("admin.html");
	}
}