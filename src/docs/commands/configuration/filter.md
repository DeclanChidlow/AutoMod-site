---
title: Filter
description: Set up content filtering in your Stoat server with AutoMod. Block inappropriate content, spam, and unwanted messages automatically.
og_description: AutoMod's filter command usage documentation.
canonical: /docs/commands/configuration/filter
---

Allows for messages to be checked against a word list and then action to be taken based on infractions.

## Enable/Disable

Enables message filtering.

Usage: `/filter <enable|disable>`

## Add

Adds a word to the filter list. You can alter how strictly it'll be filtered by providing one of three strictness levels:

- Soft
  - This will only match full, exact words.
  - e.g Filtering 'cat' will not trigger on 'cat**s**'.
- Hard
  - This will match even if a string is within another word.
  - e.g Filtering 'ass` will trigger on 'cl**ass**ic'.
- Strict
  - This will remove whitespace and try substitutions.
  - e.g Filtering "sex" will trigger on 's3x' and 'car**s ex**ploded'.
  - The substitution list is:
    - 0 : o
    - 1 : i
    - 4 : a
    - 3 : e
    - 5 : s
    - 6 : g
    - 7 : t
    - 8 : b
    - 9 : g
    - @ : a
    - ^ : a
    - Д : a
    - ß : b
    - ¢ : c
    - © : c
    - < : c
    - € : e
    - ƒ : f
    - ท : n
    - И : n
    - Ø : o
    - Я : r
    - ® : r
    - $ : s
    - § : s
    - † : t
    - บ : u
    - พ : w
    - ₩ : w
    - × : x
    - ¥ : y

If no strictness is selected while adding a word, it'll default to hard.

Usage: `/filter add [strictness] <word1, word2, ...>`

## Remove

Removes a word from the filter list.

Usage: `/filter remove <word1, word2, ...>`

## List

AutoMod will directly message you a list of all the filtered words and their strictness.

Usage: `/filter list`

## Message

Lets you set the message that AutoMod will send if a message is caught by the filter.

Usage: `/filter message <string>`

## Action

Lets you configure how AutoMod will react if a message is caught by the filter. You can select one of three options:

- Log: The message will be logged in the mod action log channel.
- Delete: The message will be deleted _and_ logged.
- Warn: The message will be deleted and logged, and the user will receive a warn.

Usage: `/filter action <level>`

## Test

Lets you check if a message matches the block list.

Usage: `/filter test <word>`
