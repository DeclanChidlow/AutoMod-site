---
title: Commands
description: Complete list of AutoMod commands for Revolt chat moderation. Access moderation, configuration, owner, and utility commands to manage your server effectively.
og_description: AutoMod's command usage documentation.
---

These are the commands that AutoMod accepts. A command is triggered by posting a message containing a prefix (by default `/`) followed by the command's name in a location AutoMod can access.

For example, you can run `/test` in a server with AutoMod, and you should get a response.

This documentation site offers a detailed explanation of each available command. If you ever need a refresher, then you can come back here or use `/help`.

## Categories

AutoMod's commands are split into four categories. These are:

- **[Moderation](/docs/commands/moderation)** \
   Commands for enforcing server rules.

- **[Configuration](/docs/commands/configuration)** \
   Commands for setting up and customising settings.

- **[Owner](/docs/commands/owner)** \
   Exclusive commands for the bot owner to manage and control AutoMod.

- **[Miscellaneous](/docs/commands/miscellaneous)** \
   Additional commands not covered by other categories.

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
