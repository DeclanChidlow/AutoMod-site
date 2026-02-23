---
title: Role
description: Manage the roles of a user in your Stoat server with AutoMod's role command. Apply roles to server members and create and configure reaction roles.
og_description: AutoMod's role command usage documentation.
canonical: /docs/automod/commands/moderation/role
---

Allows adding a role to, or removing a role from, a server member and managing reaction roles.

Aliases: `roles`

## Add

Grants a role to a server member.

Usage: `/role add <user> <role ID>`

## Remove

Revokes a role from a server member.

Usage: `/role remove <user> <role ID>`

## Reaction Roles

Configure a message with reactions that, when reacted to, assign a user a server role.

### Add

Create a reaction on a specified message that grants a role when the user reacts.

Usage: `/role reaction add <message ID> <emoji> <role>`

### Remove

Remove a previously created reaction role binding from a specified message.

Usage: `/role reaction remove <message ID> <emoji>`
