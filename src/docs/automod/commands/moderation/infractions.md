---
title: Infractions
description: View and manage user infractions in your Stoat server with AutoMod. Track warnings, timeouts, and bans for comprehensive moderation.
og_description: AutoMod's infraction command usage documentation.
canonical: /docs/automod/commands/moderation/infractions
---

Allows viewing and removing infractions. Infractions are applied to users when they are [banned](/docs/automod/commands/moderation/ban), [kicked](/docs/automod/commands/moderation/kick), or [warned](/docs/automod/commands/moderation/warn).

Aliases: `warns`, `warnings`

Required permissions: none to view your own infractions (when enabled); `Ban Members` or `Kick Members` to view others'; moderators only for removal.

## View

If a user is specified, then only that user's infractions will be displayed. If a user isn't specified, then a list of the users with the most infractions in the current server will be returned to moderators. If you aren't a moderator, you'll receive your own infractions instead, provided the server allows users to view their own infractions (configurable in [the dashboard](/docs/automod/dashboard)).

You can append `export-csv` (or `csv`) to have a CSV spreadsheet of the infractions attached to the response.

Usage: `/infractions [user] [export-csv]`

## Remove

You can remove an infraction by specifying the ID. You can get the ID of the infraction by viewing it as detailed above.

Usage: `/infractions rm <infraction ID>`
