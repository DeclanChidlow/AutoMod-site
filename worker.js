const url = new URL(request.url);
if (url.pathname.startsWith("/dashboard")) {
	const dashPath = url.pathname.slice("/dashboard".length) || "/";
	return fetch(`https://dash.automod.vale.rocks${dashPath}${url.search}`, request);
}
