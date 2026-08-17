---
title: Rolling
description: Complete documentation of how to roll a dice with AutoDice, including full coverage of all the modifiers and features possible to do as part of your roll.
og_description: AutoDice's rolling modifiers documentation.
canonical: /docs/autodice/rolling
---

AutoDice uses a simple command syntax to handle everything from basic rolls to complex tabletop mechanics. To trigger the bot, start your message with `@AutoDice`.

This documentation site offers a detailed explanation for building a command. If you ever need a refresher, then you can come back here or use `@AutoDice help`.

### Basic Rolls

The core syntax follows the standard `[quantity]d[sides]` format.

- Single Die: `@AutoDice d6` (Rolls one 6-sided die)
- Multiple Dice: `@AutoDice 10d6` (Rolls ten 6-sided dice)
- Repeated Sets: `@AutoDice 5 10d6` (Rolls ten 6-sided dice, repeating five times)

#### Special Dice

- Percentile: `@AutoDice d%` acts as shorthand for `d100`.
- Fate/Fudge Dice: `@AutoDice 4dF` rolls four Fate dice, each returning `+`, `▯`, or `−` (−1 to +1). Fate dice don't support modifiers.

### Arithmetic

You can apply maths to your total results using the standard operators: `+`, `-`, `*`, and `/`, along with `**` for exponents. Decimals are supported in the maths itself, and results are rounded to two decimal places. Dice counts and sides must still be whole numbers.

For example, `@AutoDice 10d6 + 5`, `@AutoDice d20**2`, or `@AutoDice d540*0.7`.

Whenever maths is involved, AutoDice will display the full calculation in a KaTeX block alongside the result.

#### Plain Maths

You don't even need dice; AutoDice can evaluate plain maths expressions too. For example, `@AutoDice 2+2` or `@AutoDice (2+3)*2`.

### Advanced Mechanics

Modifiers are short suffixes appended directly to the end of a dice expression (with no spaces), like the `kl2` in `5d20kl2`. They change how dice behave or how results are displayed, and can be chained together: `5d20kl2r<4`.

- **Sorting:** Use `s` or `sa` to sort results in ascending order, or `sd` for descending order. For example, `@AutoDice 10d6sd`.

- **Keep Highest/Lowest:** Use `kh[n]` to keep the highest n results or `kl[n]` to keep the lowest n results. For example, `@AutoDice 2d20kh1` (Advantage).

- **Drop Highest/Lowest:** Use `dh[n]` to drop the highest n results or `dl[n]` to drop the lowest n results. For example, `@AutoDice 4d6dl1` (the classic D&D stat roll).

- **Exploding Dice:** Use `!` to roll an additional die whenever the maximum value is rolled. Explosions can chain up to 10 times. For example, `@AutoDice 5d10!`.

- **Rerolling:** Use `r<[n]` or `r>[n]` to reroll any dice that fall below or exceed a specific value. Use `r[n]` to reroll an exact value. For example, `@AutoDice 5d6r<3`.

- **Success Counting:** Use `>[n]` to count how many dice meet or exceed a target. Each success becomes 1, each failure 0. For example, `@AutoDice 5d10>7`.

- **Fail Counting:** Use `<[n]` to count how many dice fall below a target. Each failure becomes 1, each success 0. For example, `@AutoDice 5d10<3`.

- **Nested Dice:** Use `d(...)` to have the sides of a die determined by another roll or formula. The nested expression is rounded to a whole number of sides. For example, `@AutoDice d(d20+20)` or `@AutoDice 2d(3d6)`. Modifiers aren't supported on nested dice.

### Advantage & Disadvantage

As a convenience, `adv` and `dis` are shorthand for the most common keep expressions. The full words `advantage` and `disadvantage` work too:

- `@AutoDice adv` expands to `2d20kh1`
- `@AutoDice dis` expands to `2d20kl1`
- Modifiers carry through: `@AutoDice adv + 5` becomes `2d20kh1 + 5`

### Labeled Rolls

Add descriptive text after your roll formula to label the result. Everything after the formula is treated as the label:

```
@AutoDice 1d20+5 Stealth check
@AutoDice 4d6dl1 Fireball
```

### Privacy

If you need to hide your rolls from the channel, use a privacy prefix. The bot will send the results directly to your DMs. The supported prefixes are: `dm`, `secret`, `priv`, or `private`.

For example, `@AutoDice secret 10d6`.

### Limits

To keep things reasonable, AutoDice enforces a few limits:

- Up to 1000 dice per roll.
- Repeats are capped at 100 sets per command.
- Expressions are limited to 1000 characters.
- Dice expressions can be nested up to 10 levels deep.
- Explosions chain up to 10 times per die.
