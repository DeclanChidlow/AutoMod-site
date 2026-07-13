export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === "/dashboard-debug") {
			try {
				const res = await fetch("https://4669eaa1-e993-4d73-bf2f-14cea3f1f19d.cfargotunnel.com/dashboard/", request);
				const body = await res.text();
				return new Response(`status: ${res.status}\nfirst 500 chars: ${body.slice(0, 500)}`);
			} catch (e) {
				return new Response(`fetch error: ${e.message}\n${e.stack}`);
			}
		}
		if (url.pathname.startsWith("/dashboard")) {
			return fetch("https://4669eaa1-e993-4d73-bf2f-14cea3f1f19d.cfargotunnel.com" + url.pathname + url.search, request);
		}
		return env.ASSETS.fetch(request);
	},
};
