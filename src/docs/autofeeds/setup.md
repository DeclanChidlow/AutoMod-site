---
title: AutoFeeds Setup
description: Learn how to setup AutoFeeds for your Stoat server. Step-by-step guide covering everything from inviting the bot, to setting up permissions, to testing it works. 
og_description: AutoFeeds' setup documentation.
canonical: /docs/autofeeds/setup
---

AutoFeeds is a pretty easy bot to get setup and ready to start posting in your server. 

1. **Add AutoFeeds to your server**\
   If you're on the official Stoat instance, you can [directly invite it](https://stoat.chat/bot/01HZNFJK4C23AJE95JWY0JXB18). If you're on another instance, you'll have to [self-host](/docs/autofeeds/self-hosting) it.

2. **Create a role and assign it the required permissions**\
   AutoFeeds doesn't require much in the way of permissions. The specific items required to use the bot are:
   - View Channel
   - Send Messages
   - Send Embeds
   - Masquerade
   - Bypass Slowmode
   - Mention Everyone
   - Mention Roles

3. **Assign the role to AutoFeeds**\
   Give AutoFeeds your newly made role and it should be good to go. You can test this by running `@AutoFeeds help`. If it responds, you're ready to go.

If AutoFeeds unfortunately isn't working, check that you saved the permissions, assigned the role, and that nothing is being overwritten by channel-specific permissions.

If it is working but complains about lacking certain permissions, check you've permitted everything outlined in step two of this guide, and consult the bot's in-chat resolution suggestions.
