const sidebar = document.getElementById("sidebar-menu");
const contentsButton = document.getElementById("contents-button");
const mediaQuery = window.matchMedia("(max-inline-size: 45rem)");

function handleDisplaySize(e) {
	if (e.matches) {
		contentsButton.style.display = "flex";
		sidebar.setAttribute("popover", "auto");
	} else {
		sidebar.removeAttribute("popover");
		contentsButton.style.display = "none";
	}
}

mediaQuery.addEventListener("change", handleDisplaySize);
handleDisplaySize(mediaQuery);
