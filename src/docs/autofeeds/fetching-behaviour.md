---
title: AutoFeeds Fetching Behaviour
description: Information regarding AutoFeeds checking and fetching content for feed providers. Includes information such as the user-agent, crawling behaviour, how it fetches, how it polls respectfully, and what to do if you think the bot is being unreasonable or disruptive.
og_description: Documentation of AutoFeeds' fetching of feeds for new content.
canonical: /docs/autofeeds/fetching-behaviour
---

> [!NOTE]
> This page details technical information intended for feed operators who wish to understand how AutoFeeds fetches content. It is not relevant to usual end-user usage of the bot.

AutoFeeds is a bot on the chat platform [Stoat](https://stoat.chat), which fetches syndication feeds and posts new items as specified by users. It supports RSS 2.0, Atom 1.0, JSON Feed 1.0/1.1, and podcast feeds. When fetching content, the bot identifies itself with the user-agent `AutoFeeds/1.0`.

## Checking Feeds

By default, AutoFeeds checks feeds for new content every 20 minutes. It honours standard HTTP cache headers, including `ETag`, `Last-Modified`, `Cache-Control` (via `max-age`), and `Expires`, as well as the RSS-specific `ttl`, `skipHours`, and `skipDays` when present. Feeds that return `304 Not Modified` are not re-processed.

## Posting Items

When a feed is first added, existing items are recorded without being posted, so only new items trigger posts. Each check posts at most the five newest previously unseen items. Feeds returning `429 Too Many Requests` are treated as rate-limited and skipped until the next check.

## Feeds Marked Expired

AutoFeeds does not attempt to fetch from JSON Feed files marked as 'expired'. It also respects publishers requiring payment, removing feeds that return `402 Payment Required` and notifying the server owner.

If you're here because you are finding AutoFeeds to be ill-mannered, please [contact me so we can resolve the problem](https://vale.rocks/contact). My apologies for any impolite fetching behaviour.
