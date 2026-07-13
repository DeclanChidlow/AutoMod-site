export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/dashboard")) {
			return fetch(`https://dash.automod.vale.rocks${url.pathname}${url.search}`, request);
		}

		return env.ASSETS.fetch(request);
	},
};
