---
title: No Text, Only Emojis 
description: Some notes on the AutoMod-adjacent Emoji Enforcer bot, which only permits sending emojis and deletes any text sent in the channels it monitors. It is used on the Emoji Only server on Revolt.
og_description: "&#10060;&#128288;"
pub_time: 2025-08-26T03:00Z
author: Declan Chidlow (Vale)
---

Working on AutoMod is a fair effort, and while rewarding, not exactly the most joyous experience of my life. While working on AutoMod's [filter functionality](/docs/commands/configuration/filter), I found myself thinking of fun filter possibilities.

Thus, the idea for a server that only permits emoji was born. But how to enforce it? AutoMod isn't quite tailored for this sort of filtering unless I were to manually add every single potential allowed emoji, so I decided to spin the concept off into something separate. Chucking it together over the course of an hour or so, I made a quick little bot which I dubbed 'Emoji Enforcer' and an associated server titled 'Emoji Only'.

## Why?

It is a fun little experiment to have people communicate with only emojis, and it is a great chance for people to show off their favourite emojis from across Revolt. Revolt doesn't lock animated emotes behind paywalls, and all emotes are global, so it is a perfect platform in that regard.

While the idea of only permitting emojis in a communication context certainly isn't a new one ([Emojli](https://emoj.li) pops to mind), I believe mine is the first of its kind on Revolt. There is a certain fun to trying to convey meaning with _only_ emojis. Take, for example, the rules in the Emoji Only server. I conveyed them entirely with emoji:

> 🟥❌ 🔡\
> 🟥❌ 😠\
> 🟥❌ 🔞
>
> 🟩✔ 🙂\
> 🟩✔ ♥

Perhaps a little bit more difficult to understand than text, but certainly legible. When the bot had a short outage recently, I posted '🤖 ⬇', which can quite plainly be interpreted as 'bot down'. It is interesting to see people use emojis as a language of its own and the issues the subtle inconsistencies between emojis across platforms cause.

## Overzealous Handling

I've received many complaints and confused messages from users unsure why their carefully constructed emoji correspondence was deleted by the bot. The usual culprit was whitespace. When sending emojis, both Revolt and most touch keyboards attempt to add a space after them to ensure things don't look too cluttered. As spaces aren't emojis, the messages were deleted. It was a very similar case for new lines.

This proved annoying for people trying to post large batches of emojis or trying to make art over multiple lines. People have tried all sorts: putting eyes on one line, a nose and ears on the next, and then lips, with them all aligned with spaces. Unfortunately, the bot didn't take kindly to this.

Thus, I'm happy to announce that with the publication of this post, the bot now tolerates whitespace and new lines. I'm looking forward to seeing what emoji creations people make, _and I better not get any hate mail from emoji purists._

---

If you're interested in inspecting the bot's code, you can do so [on GitHub](https://github.com/DeclanChidlow/emoji-enforcer).

If you want to get in on the emoji action, [join the server](https://stt.gg/Dm4F4ctA).

Now go forth and express yourselves! 🎨🔤🚫
