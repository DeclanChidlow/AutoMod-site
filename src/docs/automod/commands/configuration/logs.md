---
title: Logs
description: Configure AutoMod's logging system for your Stoat server. Track moderation actions, user infractions, and server events.
og_description: AutoMod's logs command usage documentation.
canonical: /docs/automod/commands/configuration/logs
---

Configure log collection.

Required permissions: `Manage Server` permission, or listed as a bot manager.

## Message Update

Sets a channel to log message updates, such as messages being edited or deleted.

Usage: `/logs messageupdate <channel>`

## Mod Action

Sets a channel to log moderation actions, such as a user being kicked, warned, or banned.

Usage: `/logs modaction <channel>`

## Remove

Removes a log category from the server, stopping AutoMod from logging that type of event. The categories are `messageupdate` and `modaction`.

Usage: `/logs remove <category>`
