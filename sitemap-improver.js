export default (sitemapContent) => {
	return sitemapContent.replace(/(https:\/\/automod\.vale\.rocks[^<\s]+)(\/|\.html)(?=<\/loc>)/g, "$1");
};
