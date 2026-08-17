---
title: Avatar
description: Manage and moderate user avatars in your Stoat server with AutoMod's avatar command. Remove inappropriate profile pictures and maintain server standards.
og_description: AutoMod's avatar command usage documentation.
canonical: /docs/automod/commands/moderation/avatar
---

Allows managing or returning a user's profile picture. The `reset` argument will remove the user's server-specific profile picture. Users can reset their own server avatar, while moderators can reset the avatars of others. You can also use the command in reply to a message to target its author.

Usage: `/avatar <user> [reset]`

Aliases: `pfp`

Required permissions: none to view or reset your own avatar; `Remove Avatars` to reset another user's avatar.
