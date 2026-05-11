---
title: Self-Hosting AutoMod
description: Learn how to self-host AutoMod for Stoat. Step-by-step guide for setting up and maintaining your own instance of the moderation bot.
og_description: AutoMod's self-hosting documentation.
canonical: /docs/automod/self-hosting
---

If you are hosting your own instance, or wish to run a modified version of the bot, you can self-host it.

> [!IMPORTANT]
> Due to limited time and resources, I can _not_ offer free self-hosting support. If you'd like paid assistance, or to have AutoMod hosted on your behalf in a paid capacity, please [contact Vale](https://vale.rocks/contact).

> [!IMPORTANT]
> This is a technical guide intended for people who wish to setup their own Stoat instance.
>
> It is _not_ for the average end user. If you wish to add AutoMod to your server, you can [invite it](https://stoat.chat/bot/01FHGJ3NPP7XANQQH8C2BE44ZY).

## Prerequisites

Ensure you have the following:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com)
- A capable server

## Installation

1.  **Clone the AutoMod repository** \
    `git clone https://tangled.org/vale.rocks/AutoMod`

2.  **Enter the AutoMod directory** \
    `cd AutoMod`

3.  **Setup configurations** \
    Copy the example configuration files to create the actual configuration files: \
    `cp compose.yml.example compose.yml` \
    `cp .env.example .env`

    While the default `compose.yml` will work out of the box in most situations, you might need to tweak it depending on your specific configuration. You will need to edit `.env` to populate it with the relevant details.

4.  **Build AutoMod** \
    `docker compose build`

5.  **Run it with Docker** \
    Start AutoMod with `docker compose up` and consult the logs. Assuming it runs without issues and nothing seems amiss, you can stop it, and restart it to run in the background (detached mode) with `docker compose up -d`.

## Updating

1. **Ensure you are in the AutoMod directory**\
   `cd AutoMod`

2. **Stop AutoMod**\
   `docker compose stop`

3. **Pull the latest changes**

   > [!IMPORTANT]
   > If you originally cloned AutoMod from GitHub, run the following command once to switch to Tangled then continue with the guide. There is no harm in running this command again if you're unsure if you cloned from GitHub.
   > `git remote set-url origin https://tangled.org/vale.rocks/AutoMod`

   This will copy the latest changes from Tangled to your local machine.\
    `git pull`

4. **Build AutoMod**\
   `docker compose build`

5. **Start AutoMod**\
   Start AutoMod with `docker compose up` and consult the logs. Assuming it runs without issues and nothing seems amiss, you can stop it, and restart it to run in the background (detached mode) with `docker compose up -d`.
