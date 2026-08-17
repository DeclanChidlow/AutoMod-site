---
title: Commands
description: Complete list of AutoFeeds commands for managing syndication feeds in your Stoat chat community. Covers adding, removing, checking, filtering, and templating feeds in a given channel.
og_description: AutoFeeds' command usage documentation.
canonical: /docs/autofeeds/commands
---

These are the commands that AutoFeeds accepts. A command is triggered by posting a message mentioning the bot, followed by the command, in a location AutoFeeds can access.

For example, you can run `@AutoFeeds help` in a server with AutoFeeds, and you should get a response.

This documentation site offers a detailed explanation of each available command. If you ever need a refresher, then you can come back here or use `@AutoFeeds help`.

## Categories

AutoFeeds' commands are split into three categories. These are:

- **[Feeds](/docs/autofeeds/commands/feeds)** \
   Commands for managing the syndication feeds in your channels.

- **[Configuration](/docs/autofeeds/commands/configuration)** \
   Commands for customising feeds with filtering and templates.

- **[Miscellaneous](/docs/autofeeds/commands/miscellaneous)** \
   Additional commands not covered by other categories.

## Permissions

Commands that modify feeds or their configuration (`add`, `remove`, `filter`, and `template`) require moderator permissions. Users with the `Manage Server` or `Manage Channel` permission, as well as the server owner, count as moderators. The remaining commands (`list`, `check`, `ping`, and `help`) can be used by anyone.

## Syntax

Commands use the following notation:

- `<argument>` indicates a required argument.
- `[argument]` indicates an optional argument.
- `[argument1|argument2]` indicates you must choose one of the options.

For example, `@AutoFeeds template <url> [template text | reset]` means that `url` is required (eg, 'https://example.com/feed.xml') and the second argument is optional. If you choose to include the second argument, you must provide either your custom template text or the exact word reset.
