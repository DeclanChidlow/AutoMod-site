const sidebar = document.getElementById("sidebar-menu");
const toggle = document.getElementById("sidebar-toggle");
const mediaQuery = window.matchMedia("(max-width: 45rem)");

function handleDisplaySize(e) {
	if (e.matches) {
		sidebar.setAttribute("popover", "auto");
	} else {
		sidebar.hidePopover();
		sidebar.removeAttribute("popover");
		toggle.classList.remove("sidebar-toggle-active");
	}
}

mediaQuery.addEventListener("change", handleDisplaySize);
handleDisplaySize(mediaQuery);

sidebar.addEventListener("toggle", (e) => {
	if (e.newState === "open") {
		toggle.classList.add("sidebar-toggle-active");
		toggle.setAttribute("aria-expanded", "true");
		toggle.setAttribute("aria-label", "Hide sidebar navigation");
	} else {
		toggle.classList.remove("sidebar-toggle-active");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "Show sidebar navigation");
	}
});

function highlightCurrentPage() {
	const path = location.pathname.replace(/\/$/, "");
	const links = sidebar.querySelectorAll("li > a[href]");
	let best = null;

	for (const link of links) {
		const href = link.getAttribute("href");
		if (href === path || href === path + "/") {
			best = link;
			break;
		}
		if (href && path.startsWith(href + "/")) {
			if (!best || href.length > best.getAttribute("href").length) {
				best = link;
			}
		}
	}

	if (best) {
		best.parentElement.classList.add("current-page");
		expandParentDetails(best);
	}
}

function expandParentDetails(el) {
	let parent = el.parentElement;
	while (parent) {
		if (parent.tagName === "DETAILS") {
			parent.open = true;
		}
		parent = parent.parentElement;
	}
}

function closeSidebarOnNav() {
	sidebar.addEventListener("click", (e) => {
		const link = e.target.closest("a[href]");
		if (link && sidebar.hasAttribute("popover") && sidebar.matches(":popover-open")) {
			setTimeout(() => sidebar.hidePopover(), 100);
		}
	});
}

highlightCurrentPage();
closeSidebarOnNav();
