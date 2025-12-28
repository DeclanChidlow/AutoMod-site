---
title: End of Year 2025
description: AutoMod's annual report for 2025 discussing changes made throughout the year, including iterative improvements and new features, as well as financial details and plans for the coming 2026.
og_description: Another year has finished? How many of these are there going to be?
pub_time: 2025-12-28T07:00Z
author: Declan Chidlow (Vale)
---

Another year has come and gone, and AutoMod perseveres. It has been a big year for the wider Stoat platform, what with [the rebrand](/blog/revolt-is-stoat-now), launching of new apps, and assorted new features.

## Reviewing Changes

The year started with a reintroduction of [the purge command](/docs/commands/moderation/purge), which had previously been removed due to a breakage upstream in Stoat itself.

In February, I launched this site complete with a full set of documentation. Several commands, including [the logging command](/docs/commands/configuration/logs), got full overhauls. We also hit 100K users in AutoMod's cache!

In May, [the role command](/docs/commands/moderation/role) was added, the filter functionality got some significant fixes, and the ability to bulk add items to and remove items from the filter was added. May also brought about AutoFeeds, a syndication feed bot that supports RSS, Atom, and JSON feeds, which I proceeded to test off and on throughout the year.

In July, I [launched this AutoMod blog](https://automod.vale.rocks/blog/introducing-the-automod-blog), hugely improved [the infraction command](/docs/commands/moderation/infractions)'s output, and overhauled [the nickname command](docs/commands/moderation/nick).

In August, AutoMod's cache hit a significant 150K users.

Throughout the year, I also engaged in some ongoing efforts that weren't user-facing. Many commands were modified to make them more accessible to screen-readers, and more intuitive for all users. The bot's architecture was tweaked to make it easier to develop and host, and Redis was switched out in favour of Valkey following Redis' change in licence.

These changes brought about significantly improved stability, and there were plenty of tiny alterations made to fix niggles and address upstream changes.

A lot of these changes went a long way in terms of making the project reasonable to work on and set a good foundation for the upcoming year.

## Financials

This year, AutoMod cost $150.15 AUD to run. This number is entirely hosting costs and doesn't factor in my time or labour, nor the registration fees for the domain 'vale.rocks'. Throughout the year, the hosting costs slowly trended upwards as a result of fluctuations in the exchange rate between the Australian Dollar and the Euro, which is the currency chosen by the server host Hetzner.

Google Finance Australian Dollar to Euro exchange rate:

![Graph showing the exchange rate between the Australian Dollar and the Euro throughout the year. Starts at 0.60, then dives to 0.54 in April, before jumping back to 0.58 in late May, then fluctuating between 0.55 and 0.57 for the rest of the year with a slight trend up.](/assets/images/aud_to_euro_2025.avif)

In return, I received a total of $54.40 AUD in AutoMod-directed user support, which means that AutoMod cost me $95.75 AUD out of pocket to run this year. If you're so inclined and in a position to do so, [your financial support would be much appreciated](https://vale.rocks/support).

## Looking Forward

As it stands at present, AutoMod is protecting almost 6,000 servers containing some 65,000 channels and over 179,000 users. At the start of the year, these numbers were roughly 4,600 servers containing 47,000 channels and less than 100,000 users. Those are some significant numbers, and I'm grateful for everyone who uses and trusts AutoMod to protect their communities.

Back in August, I [created a project roadmap for AutoMod](https://github.com/users/DeclanChidlow/projects/1) to enable more focused, deliberate development and to ensure that efforts align with community expectations.

Goals for next year include getting AutoFeeds into a full production state and addressing points on the roadmap. I look forward to it.
