const fs = require("fs");

function cleanSitemap(path) {
	let content = fs.readFileSync(path, "utf8");
	content = content.replace(/(https:\/\/automod\.vale\.rocks[^<\s]+)(\/|\.html)(?=<\/loc>)/g, "$1");
	fs.writeFileSync(path, content);
}

const path = process.argv[2];
cleanSitemap(path);
