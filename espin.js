(function() {
	"use strict";

	const wheelContainer = document.getElementById("wheel-container");
	const wheel = document.getElementById("wheel");
	const win = document.getElementById("win-container");
	const rick = document.getElementById("rick");

	wheel.addEventListener("click", () => {
		wheel.blur();
		
		if (wheelContainer.classList.contains("spinning")) return;
		
		// Do the spin
		const rotations = 15 + Math.random() * 20;
		const time = 10 + Math.random() * 5;
		wheelContainer.style.setProperty("--rotations", rotations + "turn");
		wheelContainer.style.setProperty("--time", time + "s");
		
		wheelContainer.classList.add("spinning");
		wheelContainer.addEventListener("animationend", () => {
			wheel.blur();
			// wheelContainer.classList.remove("spinning");
			wheelContainer.style.transform = `rotate(${rotations}turn)`;
			win.classList.remove("hidden");
		});
	});
	
	rick.addEventListener("click", (e) => {
		e.preventDefault();
		location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	})
	
	// We're ready, show Espin
	console.log("E");
	document.getElementById("espin-jsonly").id = "";
})();