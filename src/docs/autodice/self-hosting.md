---
title: Self-Hosting AutoDice
description: Learn how to self-host AutoDice for Stoat. Step-by-step guide for setting up and maintaining your own instance of the fully-featured random dice bot.
og_description: AutoDice's self-hosting documentation.
canonical: /docs/autodice/self-hosting
---

If you are hosting your own instance, or wish to run a modified version of the bot, you can self-host it.

> [!IMPORTANT]
> Due to limited time and resources, I can _not_ offer free self-hosting support. If you'd like paid assistance, or to have AutoDice hosted on your behalf in a paid capacity, please [contact Vale](https://vale.rocks/contact).

> [!IMPORTANT]
> This is a technical guide intended for people who wish to setup their own Stoat instance.
>
> It is _not_ for the average end user. If you wish to add AutoDice to your server, you can [invite it](https://stoat.chat/bot/01KHB7M1ETS332GBQVXPYH58K2).

## Prerequisites

Ensure you have the following:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com)
- A capable server

## Installation

1.  **Clone the AutoDice repository**\
    `git clone https://tangled.org/vale.rocks/AutoDice`

2.  **Enter the AutoDice directory**\
    `cd AutoDice`

3.  **Setup configurations**\
    Copy the example configuration files to create the actual configuration files:\
    `cp compose.yml.example compose.yml`\
    `cp .env.example .env`

    You will need to edit `.env` to populate it with the relevant details. While the default `compose.yml` will work out of the box in most situations, you might need to tweak it depending on your specific configuration.

4.  **Build AutoDice**\
    `docker compose build`

5.  **Run it with Docker**\
    Start AutoDice with `docker compose up` and consult the logs. Assuming it runs without issues and nothing seems amiss, you can stop it, and restart it to run in the background (detached mode) with `docker compose up -d`.

## Updating

1. **Ensure you are in the AutoDice directory**\
   `cd AutoDice`

2. **Stop AutoDice**\
   `docker compose stop`

3. **Pull the latest changes**

   > [!IMPORTANT]
   > If you originally cloned AutoDice from GitHub, run the following command once to switch to Tangled then continue with the guide. There is no harm in running this command again if you're unsure if you cloned from GitHub.
   > `git remote set-url origin https://tangled.org/vale.rocks/AutoDice`

   This will copy the latest changes from Tangled to your local machine.\
    `git pull`

4. **Build AutoDice**\
   `docker compose build`

5. **Start AutoDice**\
   Start AutoDice with `docker compose up` and consult the logs. Assuming it runs without issues and nothing seems amiss, you can stop it, and restart it to run in the background (detached mode) with `docker compose up -d`.
