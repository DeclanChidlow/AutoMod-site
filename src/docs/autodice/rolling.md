---
title: Rolling
description: Complete documentation of how to roll a dice with AutoDice, including full coverage of all the modifiers and features possible to do as part of your roll.
og_description: AutoDice's rolling modifiers documentation.
canonical: /docs/autodice/rolling
---

AutoDice uses a simple command syntax to handle everything from basic rolls to complex tabletop mechanics. To trigger the bot, start your message with `@AutoDice`.

This documentation site offers a detailed explanation of building a command. If you ever need a refresher, then you can come back here or use `/help`.

### Basic Rolls

The core syntax follows the standard `[quantity]d[sides]` format.

- Single Die: `@AutoDice d6` (Rolls one 6-sided die)
- Multiple Dice: `@AutoDice 10d6` (Rolls ten 6-sided dice)
- Repeated Sets: `@AutoDice 5 10d6` (Rolls ten 6-sided dice, repeating five times)

### Arithmetic & Modifiers

You can apply math to your total results using standard operators: `+`, `-`, `*` (or `x`), and `/`.

For example, `@AutoDice 10d6 + 5`.

### Advanced Mechanics

Suffixes allow you to modify how dice behave or how results are displayed. These can be chained together: `5d20kl2r<4`.

- Sorting: Use `s` or `sa` to sort results in ascending order, or `sd` for descending order. For example, `@AutoDice 10d6sd`.

- Keep Highest/Lowest: Use `kh[n]` to keep the highest n results or `kl[n]` to keep the lowest n results. For example, `@AutoDice 2d20kh1 (Advantage)`.

- Exploding Dice: Use `!` to roll an additional die whenever the maximum value is rolled. For example, `@AutoDice 5d10!`.

- Rerolling: Use `r<[n]` or `r>[n]` to reroll any dice that fall below or exceed a specific value. For example, `@AutoDice 5d6r<3`.

### Privacy

If you need to hide your rolls from the channel, use a privacy prefix. The bot will send the results directly to your DMs. The supported prefixes are: `dm`, `secret`, `priv`, or `private`.

For example, `@AutoDice secret 10d6`.
