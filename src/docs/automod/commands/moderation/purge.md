---
title: Purge
description: Bulk delete messages in your Stoat server with AutoMod's purge command. Delete a specific number of messages, a range of messages, and filter deletion by user.
og_description: AutoMod's purge command usage documentation.
canonical: /docs/automod/commands/moderation/purge
---

Allows for bulk deleting messages. You can purge messages from a specific user (or users) by specifying them in an argument.

You can also delete all messages between two messages by providing the two message IDs as a range (`firstID-secondID`), or delete a single message by its ID.

The messages must have been sent within the past week.

Usage: `/purge <number|message range> [user1,user2,...]`

Aliases: `clear`

Required permissions: `Manage Messages`
