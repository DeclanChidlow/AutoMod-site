document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;
	const button = document.getElementById("palette-switch");
	const modes = ["light", "dark", "default"];

	button.style.display = "block";

	function setTheme(mode) {
		body.classList.remove("light", "dark");
		if (mode === "light") {
			body.classList.add("light");
			button.textContent = "dark_mode";
		} else if (mode === "dark") {
			body.classList.add("dark");
			button.textContent = "routine";
		} else {
			button.textContent = "light_mode";
		}
		localStorage.setItem("themeMode", mode);
	}

	function getNextMode(currentMode) {
		const currentIndex = modes.indexOf(currentMode);
		return modes[(currentIndex + 1) % 3];
	}

	let currentMode = localStorage.getItem("themeMode") || "default";
	setTheme(currentMode);

	button.addEventListener("click", () => {
		currentMode = getNextMode(currentMode);
		setTheme(currentMode);
	});
});
