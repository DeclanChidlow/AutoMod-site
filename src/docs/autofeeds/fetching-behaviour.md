---
title: AutoFeeds Fetching Behaviour
description: Information regarding AutoFeeds checking and fetching content for feed providers. Includes information such as the user-agent, crawling behaviour, how it fetches, how it polls respectfully, and what to do if you think the bot is being unreasonable or disruptive.
og_description: Documentation of AutoFeeds' fetching of feeds for new content.
canonical: /docs/autofeeds/fetching-behaviour
---

> [!INFO]
> This page details technical information intended for feed operators who wish to understand how AutoFeeds fetches content. It is not relevant to usual end-user usage of the bot.

AutoFeeds is a bot on the chat platform Stoat, which fetches syndication feeds and posts new items as specified by users.

When fetching content, the bot identifies itself with the user-agent `AutoFeeds/1.0`.

By default, AutoFeeds checks feeds for new content every 20 minutes. However, it honours standard HTTP cache headers, as well as the RSS-specific `ttl`, `skipHours`, and `skipDays` when present. It does not attempt to fetch from JSON Feed files marked as 'expired'.

If you're here because you are finding AutoFeeds to be ill-mannered, please [contact me so we can resolve the problem](https://vale.rocks/contact).
