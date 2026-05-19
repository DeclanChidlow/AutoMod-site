---
title: Commands
description: Complete list of AutoFeeds commands for managing syndication feeds in your Stoat chat community. Covers adding, removing, fetching, and listing feeds in a given channel.
og_description: AutoFeeds' command usage documentation.
canonical: /docs/autofeeds/commands
---

These are the commands that AutoFeeds accepts. A command is triggered by posting a message mentioning the bot, followed by the command, in a location AutoFeeds can access.

For example, you can run `@AutoFeeds help` in a server with AutoFeeds, and you should get a response.

This documentation site offers a detailed explanation of each available command. If you ever need a refresher, then you can come back here or use `/help`.

## Available Commands

### Add

Add an RSS/Atom/JSON feed to the current channel.

Usage: `@AutoFeeds add <url>`

### Remove

Remove a previously added feed from the current channel. You must provide the exact URL of the feed. You can use [the list command](#list) to retrieve it if needed.

Usage: `@AutoFeeds remove <url>`

### List

List all feeds currently added to the current channel.

Usage: `@AutoFeeds list`

### Check

Manually check an added feed for new items. The bot will automatically fetch new content every 20 minutes, but if you know there is a new item in a feed and want to fetch it sooner, you can use this command to manually check.

Usage: `@AutoFeeds check <url>`

### Ping

Checks AutoFeeds' latency and uptime.

Usage: `@AutoFeeds ping`

### Help

Sends a message providing information about how to use the bot.

Usage: `@AutoFeeds help`

## Syntax

Commands use the following notation:

- `<argument>` indicates a required argument.
- `[argument]` indicates an optional argument.
- `[argument1|argument2]` indicates you must choose one of the options.
- `[argument,...]` indicates you can provide multiple values separated by commas.

For example:
`/purge <amount> [user1,user2,...]`

This means:

- `amount` is required (eg, '100').
- `user1,user2,...` is optional and can include multiple users.
