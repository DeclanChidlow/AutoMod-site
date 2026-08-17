---
title: Managers
description: Manage which users have permission to modify AutoMod's configuration in your Stoat server with the admin command.
og_description: AutoMod's admin command usage documentation.
canonical: /docs/automod/commands/configuration/managers
---

Allows managing which users have permissions to modify AutoMod's configuration.

Required permissions: `Manage Server` permission, or existing bot manager status.

## Add

Adds a user as a bot manager, allowing them to manage AutoMod's configuration in the present server.

Usage: `/admin add @user`

## Remove

Removes a user from the bot managers.

Usage: `/admin remove @user`

## List

Lists the current bot managers.

Usage: `/admin list`

Aliases: `admins`, `manager`, `managers`
