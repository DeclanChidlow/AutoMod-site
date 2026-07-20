---
title: Understanding Stoat's IDs (ULIDs)
description: Stoat chat uses ULIDs for identifying and referencing data, including users, emojis, roles, and more. This post informs on the technical details of ULIDs and their usage in Stoat, as well as briefly touching on how AutoMod can make use of ULIDs.
og_description: 01FHGJ3NPPAVT0M0D4211FEE42
pub_time: 2026-07-20T04:00Z
author: Declan Chidlow (Vale)
---

If you use Stoat, you've likely seen a ULID. They look like this: `01G6A2YMHED2TFTEMNKKMKFGH0`. Short for 'Universally Unique Lexicographically Sortable Identifier', a ULID is exactly what it says on the tin:

1. It is universally unique, meaning no two are alike.
2. It is lexicographically sortable, meaning they naturally sort in chronological order.
3. It is an identifier, because they are always 26 characters long and can be used to label and reference specific bits of data.

Stoat uses ULIDs to identify different pieces of information so they can be referenced easily. The average user never needs to interact with them directly, but it is good to know if you're developing for Stoat or getting into the weeds.

You should keep in mind that ULIDs are _not_ the discriminator after your name (eg AutoMod*#0800*) and are also distinct from other types of IDs, like UUIDs, which are a separate system not used by Stoat.

ULIDs are in use everywhere on Stoat, even if you don't always see them. When you mention a user, like `@Vale`, what is technically written behind the scenes is `<@01G6A2YMHED2TFTEMNKKMKFGH0>`, which is the ULID preceded by `@` and wrapped in angle brackets (`<>`). The case is very similar for other content types:

- Custom emoji: `:01KAFYF2T83RFZZ14EBC6B71Q2:`.
- Role mentions: `<%01HSJQEY7NKE1B6TRWQ0JCDSWQ>`.
- Channel links: `<#01HSJPNS9H3SG2CTQXVSH7QJZ8>`.

You can see ULIDs exposed elsewhere in Stoat, too. When chatting in a server via Stoat for Web, for instance, you might see the page has an address like `https://stoat.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01F92C5ZXBQWQ8KY7J8KY917NM`. The first ULID is the server ID, and the second is the channel ID. Many Stoat clients also have the option to copy IDs directly. Stoat for Web and Stoat for Desktop have an option under the advanced settings to allow copying IDs easily.

The first ten characters of a ULID are a timestamp indicating when the ULID was generated. This timestamp uses Unix epoch time, which is the amount of time passed since January 1<sup>st</sup>, 1970. In most contexts, the time since 1970s' start is measured in seconds. If we want to be pedantic, it is technically the number of days since January 1<sup>st</sup>, 1970, multiplied by 86,400 (the number of seconds in a normal day) plus the number of seconds since midnight, which means it ignores leap seconds. Crucially, ULIDs don't use full seconds but milliseconds.

This means that, on Stoat, you can easily get the creation time of a user, channel, role, server, emoji, or anything else that uses a ULID down to millisecond accuracy. Once you have the ID, the timestamp can be inspected in a number of ways, including with online tools or with AutoMod's own [`/info`](/docs/automod/commands/miscellaneous/info) command.

Beyond the timestamp, the following 16 characters are cryptographically secure random characters that use Crockford's Base32 character set, which is a collection of numbers and letters. A ULID can use numbers `0` to `9` and letters `A` to `Z`, with the exception of `I`, `L`, `O`, and `U` because they look too similar to other characters which can be confusing -- you don't want to confuse `O` with `0`.
