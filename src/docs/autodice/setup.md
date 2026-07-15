---
title: AutoDice Setup
description: Learn how to setup AutoDice for your Stoat server. Step-by-step guide for setting up the dice bot to enhance your community.
og_description: AutoDice's setup documentation.
canonical: /docs/autodice/setup
---

AutoDice is nice and simple, so it isn't difficult to get setup and ready to start rolling.

1. **Add AutoDice to your server**\
   If you're on the official Stoat instance, you can [directly invite it](https://stoat.chat/bot/01KHB7M1ETS332GBQVXPYH58K2). If you're on another instance, you'll have to [self-host](/docs/autodice/self-hosting) it.

2. **Create a role and assign it the required permissions**\
   AutoDice is pretty simple, so it doesn't require many permissions to use. The permissions it does need are:
   - View Channel
   - Send Messages
   - Bypass Slowmode

3. **Assign the role to AutoDice**\
   Give AutoDice your newly made role and test that everything is working. A good way to test is by running `@AutoDice help` and seeing if it responds. If it does, you're good to go.

If AutoDice isn't working at all, check that you saved the permissions, assigned the role, and that nothing is being overwritten by channel-specific permissions.

If it is working but complains about lacking certain permissions, check you've permitted everything outlined in step two of this guide, and consult the bot's in-chat resolution suggestions.
