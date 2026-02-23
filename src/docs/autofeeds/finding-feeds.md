---
title: Finding Feeds
description: Guides to finding RSS, Atom, and JSON Feed syndication feeds across the web. Covering specifically where to find feeds for large and popular platforms including Bluesky, Reddit, GitHub, YouTube, and Steam.
og_description: Assisting documentation for finding syndication feeds.
canonical: /docs/autofeeds/finding-feeds
---

AutoFeeds supports RSS 2.0, Atom 1.0, and JSON Feed 1.0/1.1 feeds.

## Bluesky

Bluesky provides RSS feeds for user posts. All you need to do is add `/rss` to the end of a user's profile link. For example, the feed for the Bluesky account '@vale.rocks' is `https://bsky.app/profile/vale.rocks/rss`.

## Reddit

Subreddits have RSS feeds. You must add `.rss` to the end of a link to the subreddit. For example, the feed for r/StoatChat is `https://reddit.com/r/stoatchat.rss`.

Reddit users also have RSS feeds. You must add `/submitted.rss` to the end of a link to their profile. For example, the feed for u/ValenceTheHuman is `https://www.reddit.com/user/ValenceTheHuman/submitted.rss`.

## YouTube

YouTube channels have RSS feeds. They're a tad tricky to retrieve, so it can be convenient to [use a tool to fetch them](https://seotools.davidbreder.com/youtube-rss). As an example, the feed for the OuterVale YouTube channel is `https://www.youtube.com/feeds/videos.xml?channel_id=UC8hQBcgwkZiG-cqhE1TDvzA`.

## Steam

Steam games have RSS feeds for updates and news. You must add `/feed` after `store.steampowered.com` but before `/news`. For example, the feed for the news page for Terraria is `https://store.steampowered.com/news/app/105600`,

Steam groups also have RSS feeds. You must add `/rss` to the end of the URL.

## Tumblr

Tumblr blogs have RSS feeds for all posts. They're found by appending `/rss`.

## GitHub

GitHub provides an Atom feed for releases. You must append `.atom` to a releases page. For example, the feed for releases of the Stoat backend is `https://github.com/stoatchat/stoatchat/releases.atom`

## Letterboxd

Letterboxd provides an Atom feed for user activities. For example, the feed for CharliXCX's latest watches is `https://letterboxd.com/itscharlibb/rss`.

## Behance

Behance has an RSS for users. You must add the user's handle to the end of this URL: `https://www.behance.net/feeds/user?username=`.

## DeviantArt

DeviantArt fully documents their RSS feeds: <https://www.deviantart.com/developers/rss>

## Pinterest

Pinterest provides an RSS feed for user posts. You must add `/feed.rss` after their username in the URL. For example, the feed for the official Pinterest account is: `https://www.pinterest.com/pinterest/feed.rss`

## AutoMod Blog

Like many blogs, the AutoMod blog provides feeds. The RSS feed is `https://automod.vale.rocks/blog/feed.xml` and the JSON Feed is `https://automod.vale.rocks/blog/feed.json`.

## Other Sites

If you've gone looking and can't find a feed for a site, look into [Open RSS](https://openrss.org) which goes looking for you and will generate a feed for sites that don't have them.
