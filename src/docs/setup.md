---
title: Setup
description: Learn how to setup AutoMod for your Revolt server. Step-by-step guide for setting up the moderation bot to protect your community.
og_description: AutoMod's setup documentation.
---

AutoMod is a pretty easy bot to get setup and ready to help moderate your server.

1. **Add AutoMod to your server**\
   If you're on the official Revolt instance, you can [directly invite it](https://app.revolt.chat/bot/01FHGJ3NPP7XANQQH8C2BE44ZY). If you're on another instance, you'll have to [self-host](/docs/self-hosting) it.

2. **Create a role and assign it required permissions**\
   AutoMod has lots of features, so it requires lots of permissions. It is usually easiest just to enable them all, but the specific required items to get the most out of AutoMod are:

   - Kick Members
   - Ban Members
   - Timeout Members
   - Change Nickname
   - Manage Nickname
   - Change Avatar
   - Remove Avatars
   - View Channel
   - Send Messages
   - Send Embeds
   - Masquerade
   - Use Reactions

3. **Assign the role to AutoMod**\
   Give AutoMod your newly made role and test that everything is working.

If AutoMod isn't working at all, check that you saved the permissions, assigned the role, and that nothing is being overwritten by channel-specific permissions.

If it is working but complains about lacking certain permissions, check you've permitted everything outlined in step two of this guide, and consult the bot's in-chat resolution suggestions.
