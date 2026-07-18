---
title: Ban
description: Effectively ban users from your Stoat server using AutoMod's ban command. Set ban duration, add reasons, and manage server security easily.
og_description: AutoMod's ban command usage documentation.
canonical: /docs/automod/commands/moderation/ban
---

Removes a user from the server and prevents them from rejoining. If no duration is given, the ban is permanent. This command can be undone with [unban](/docs/automod/commands/moderation/unban).

You can provide a length for the ban, such as `1h` (one hour) or `30s` (thirty seconds). Temporary bans expire automatically.

To also delete recent messages from the user, include the `p` or `purge` flag with a duration (eg `p 7d` purges messages from the last 7 days).

Multiple users can be banned at once by replying to one or more messages, or by providing a comma-separated list of usernames.

Usage: `/ban <user> [duration] [purge <purge_duration>] [reason]`

Aliases: `eject`

## Vote

Starts a community vote to ban a user. When the vote reaches the required number of votes, the user is banned automatically. The ban can be permanent or temporary, depending on the vote ban duration set via the dashboard.

Any member of the server can start and participate in a vote. You cannot call a vote against yourself, bots, or server moderators.

The vote threshold, duration, and the ban length are configured in [AutoMod's dashboard](/docs/automod/dashboard).

Usage: `/ban vote <user>`
