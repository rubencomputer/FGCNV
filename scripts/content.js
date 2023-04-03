const text = document.querySelectorAll("body")[0];

// `document.querySelector` may return null if the selector doesn't match anything.
if (text) {
	let testString = text.innerHTML.toLowerCase();

	if (testString.includes("qcb")) {
		console.log("qcb");
	}

	//console.log(testString);
}
