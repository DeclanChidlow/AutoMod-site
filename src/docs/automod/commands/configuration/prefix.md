---
title: Prefix
description: Customize AutoMod's command prefix for your Stoat server. Set unique prefixes to avoid conflicts with other bots.
og_description: AutoMod's prefix command usage documentation.
canonical: /docs/automod/commands/configuration/prefix
---

Manage AutoMod's prefix. The default prefix is `/`. This is useful if you already have a bot in your server bound to the default prefix.

To make the current prefix easy to check at a glance, AutoMod sets its server pronouns to show the prefix. You can view them with [the pronouns command](/docs/automod/commands/moderation/pronouns).

Required permissions: none to view the prefix; `Manage Server` permission, or listed as a bot manager, to set or clear it.

## Set

Set a prefix that AutoMod commands should start with.

Usage: `/prefix set <prefix>`

## Get

Returns AutoMod's current prefix.

Usage: `/prefix get`

## Clear

Returns back to the default prefix.

Usage: `/prefix clear`
