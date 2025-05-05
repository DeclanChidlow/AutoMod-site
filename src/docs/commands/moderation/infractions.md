---
title: Infractions
description: View and manage user infractions in your Revolt server with AutoMod. Track warnings, timeouts, and bans for comprehensive moderation.
og_description: AutoMod's infraction command usage documentation.
---

Allows viewing and removing infractions. Infractions are applied to users when they are [banned](/docs/commands/moderation/ban), [kicked](/docs/commands/moderation/kick), or [warned](/docs/commands/moderation/warn).

Aliases: `warns`, `warnings`

## View

If a user is specified, then only that user's infractions will be displayed. If a user isn't specified, then a list of the users with the most infractions in the current server will be returned.

Usage: `/infractions [user]`

## Remove

You can remove an infraction by specifying the ID. You can get the ID of the infraction by viewing it as detailed above.

Usage: `/infractions rm <infraction ID>`
