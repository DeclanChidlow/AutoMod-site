---
title: Timeout
description: Temporarily restrict user activity in your Stoat server with AutoMod's timeout command. Set duration and manage disruptive behavior.
og_description: AutoMod's timeout command usage documentation.
canonical: /docs/automod/commands/moderation/timeout
---

Set a timeout on a user, making them unable to send messages for a given duration, such as 1h (one hour) or 30s (thirty seconds).

Running the command without duration or reason arguments will clear the timeout.

Usage: `/timeout <user> [duration] [reason]`

Aliases: `mute`, `silence`

## Vote

Starts a community vote to timeout a user. When the vote reaches the required number of votes, the user is timed out automatically for the duration configured via the dashboard.

Any member of the server can start and participate in a vote. You cannot call a vote against yourself, bots, or server moderators.

The vote threshold, duration, and the timeout length are configured in [AutoMod's dashboard](/docs/automod/dashboard).

Usage: `/timeout vote <user>`
