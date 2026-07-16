async function updateAutoModStats() {
	try {
		const response = await fetch("https://automod-api.vale.rocks/stats");
		if (!response.ok) throw new Error("Network response was not ok");

		const data = await response.json();
		const { servers, users, infractions } = data;

		const serversEl = document.getElementById("servers-stat");
		serversEl.textContent = servers.toLocaleString();

		const usersEl = document.getElementById("users-stat");
		if (usersEl && users) usersEl.textContent = users.toLocaleString();

		const infractionsEl = document.getElementById("infractions-stat");
		if (infractionsEl && infractions) infractionsEl.textContent = infractions.toLocaleString();
	} catch (error) {
		console.error("Failed to fetch AutoMod stats:", error);
	}
}

document.addEventListener("DOMContentLoaded", updateAutoModStats);
