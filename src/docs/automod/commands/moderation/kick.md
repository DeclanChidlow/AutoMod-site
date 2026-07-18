---
title: Kick
description: Remove users temporarily from your Stoat server using AutoMod's kick command. Maintain server order without permanent restrictions.
og_description: AutoMod's kick command usage documentation.
canonical: /docs/automod/commands/moderation/kick
---

Removes a user from the server, but they can rejoin if they have an invite. Providing a reason is optional.

Usage: `/kick <user> [reason]`

Aliases: `yeet`, `vent`

## Vote

Starts a community vote to kick a user. When the vote reaches the required number of votes, the user is kicked automatically.

Any member of the server can start and participate in a vote. You cannot call a vote against yourself, bots, or server moderators.

The vote thresholds and duration is configured in [AutoMod's dashboard](/docs/automod/dashboard).

Usage: `/kick vote <user>`
