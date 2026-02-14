---
title: Introducing AutoDice
description: Introduction of a dice bot for Stoat that is perfect for people playing tabletop role-playing games (TTRPGs) and other role-playing or dice-oriented games. Has support for a number of complex features, including multirolls, mathematics, exploding dice, advantages and disadvantages, and most other features. Perfect for people playing games like Dungeons & Dragons.
og_description: Slice 'n' Dice
pub_time: 2026-02-13T11:10Z
author: Declan Chidlow (Vale)
---

Are you and your warlock, wizard, and bard friends off to kill a dragon? Or are you perhaps a cyborg with three arms and a wish to destroy the oligarchy controlling the current dystopia?

Regardless of your quest, you're in luck, for AutoDice is here to facilitate all your Stoat role-playing needs.

What is 'Auto' about AutoDice? Nothing, but I've evidently started a brand here, and I've got to see it through. We'll say that the dice are autonomous in that they require no physical rolling. Yeah, that's the justification.

## Rolling the Dice

AutoDice intends to cover most of the cases that tabletop role-playing games need dice for, so it is very comprehensive in functionality. However, it is also simple to get started with and use for basic needs.

Let's take a simple roll to start with. Say you want to roll a six-sided die; you'd run: `@AutoDice d6`.

If you wanted to roll ten six-sided die, you'd run: `@AutoDice 10d6`.

Say you wanted to roll ten six-sided die, five times, you'd run: `@AutoDice 5 10d6`.

If you wanted to add 5 to the result of the rolls, you can do some addition: `@AutoDice 10d6 + 5`. AutoDice also supports subtraction (`-`), multiplication (`*` or `x`), and division (`/`).

Rolling a dice multiple times and want to sort the results? Suffix `s` or `sa` to sort by ascending, or suffix `sd` to sort by descending. For example, `@AutoDice 10d6sd` to do 10 rolls of a six-sided die and sort the results by descending.

Certain games require more complex dice control, and AutoDice won't leave you hanging.

If you need to roll multiple dice and only keep the lowest result, you can suffix `kl1`. You can change that number based on how many you'd like to keep. If you'd like to only keep the highest, you can suffix `kh1`. Perfect for rolling with advantage or disadvantage in games like Dungeons and Dragons.

Exploding dice are also supported (rejoice, Shadowrun players), where rolling the highest number on a die allows for an additional roll of the same die. That can be done by suffixing `!` like so: `@AutoDice 5d10!`.

If you want to reroll any dice that exceed or don't reach a certain value, you can. To reroll if a result is less than three, you'd suffix `r<3`.

All of these features can be chained together as well. For example, you could run `@AutoDice 5d20kl2r<4`, meaning roll a twenty-sided die five times, keeping only the two lowest results above four.

And, of course, if you're in need of sneaky results away from the rest of the party's prying eyes, you can roll the dice directly into your DMs by prefixing your command with `dm`, `secret`, `priv`, or `private`. For example, `@AutoDice secret d6`.

---

To add the bot to your server, you [just have to invite it](https://stoat.chat/bot/01KHB7M1ETS332GBQVXPYH58K2). Make sure you ensure it has permission to see and send messages in required channels! If you forget any syntax, you can always get the rundown with `@AutoDice help`.

I suppose the announcement of this bot also proves good news for those of a gambling persuasion, so to such people I wish to advise responsible usage.
