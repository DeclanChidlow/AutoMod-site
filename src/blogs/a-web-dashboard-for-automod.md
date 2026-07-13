---
title: A Web Dashboard For AutoMod
description: An announcement of the web dashboard for AutoMod, which is now available for people to use to moderate and handle their servers on the chat platform Stoat. The purpose of the dashboard, some of its capabilities, and some of the details surrounding its creation.
og_description: A dashboard that dashes.
pub_time: 2026-07-13T09:00Z
author: Declan Chidlow (Vale)
---

In what some are calling 'Should we do a welfare check?' and which others are calling 'What is with that rather conspicuous puddle of blood?', AutoMod has a web dashboard now.

As with all -- or at least most -- of the outputs of your poorly and deranged young author, yes, this is the result of an ill-advised stimulant binge and a distinct lack of the fourth vitamin of the alphabet. But, dear reader, you benefit from my theme park treatment of my mortal form because, as mentioned, AutoMod now has a full-fat, high-sugar, web dashboard. Here it is:

![A Material 3 styled page in dark-mode. A collection of servers and their livery can be seen, with information presented about each.](/assets/images/dashboard_home.avif)

'A web dashboard?', you say, 'but I've already got a healthy selection of textual commands at my disposal? Why should I introduce the faff and fiddling of another web-based tool into my supreme message-based management?'. Well, people _really_ want a dashboard. In fact, long ago, AutoMod had one. It was very limited, didn't work on mobile, and frankly was just a bit iffy. I dropped that dashboard when doing a major overhaul of the bot, and the vestigial API organs have waited patiently since.

AutoMod is a large bot. Far and away the largest on Stoat, with it being present in nearly 9,000 servers, containing a total of over 100,000 channels and 230,000 users. In fact, it is so large that it sometimes hits architectural limits of the platform itself, causing issues. Each time, a series of hacks must be applied to bring it back on track and into smooth operation.

These hacks add up over time, like debt on a credit card. In the short term, no worries, but as time goes on and interest compounds, the issue becomes prudent. Performance slips, the bot begins to encounter hard-to-diagnose bugs, and each new upstream Stoat change that causes issues becomes a bigger problem. Thus, it was time for a major cleanup to address this technical debt. AutoMod has seen a massive overhaul of how it works. It is more performant, it is more stable, and it handles problems more gracefully.

Just like how it was with an overhaul that the dashboard was removed, it is with an overhaul that the dashboard is back. Not only back, but also more fully featured than it once was. It exposes a great many options, works nicely on mobile, and has a slick interface with every option explained. People like to use software in different ways, so for people looking for something more graphical, AutoMod's dashboard will provide an enhanced experience for them.

The dashboard also allows features that are too complex or finicky to manage via commands to be graphically handled. A nice, smooth, and optimal experience that allows the bot to do more and do better.

## Anti-Spam

As part of the new dashboard, there are improved anti-spam tools. You can create rules that trigger based on the number of messages being sent in a timeframe of your choosing and what happens when messages exceeding this limit are sent. You can have a message be sent in chat, you can have the spam messages deleted, and you can warn users, kick them, or even ban them. You're able to configure multiple rules to tailor it exactly to your needs.

Pair this with AutoMod's filtering functionality, and you're looking pretty good. You'll be looking even better when further goodness makes it's way off the conveyor belt and into your hands.

## Behind The Scenes

The AutoMod dashboard isn't built with any crazy frameworks or far-out libraries. AutoMod has a simple little API that provides the dashboard with everything that is needed, and the dashboard is built with core web technologies: HTML/CSS/JavaScript. Some clean server code handles putting the pages into templates and keeps the dashboard quick and nimble -- exactly as you need it. As always, bet on the web platform.

---

The dashboard is up and ready for your usage at <https://automod.vale.rocks/dashboard> and all of [AutoMod's documentation](https://automod.vale.rocks/docs/automod) has been updated to reflect the changes.
