---
title: Filter
description: Set up content filtering in your Revolt server with AutoMod. Block inappropriate content, spam, and unwanted messages automatically.
og_description: AutoMod's filter command usage documentation.
---

Allows for messages to be checked against a word list.

## Actions

- **Enable** \
  Enables message filtering.

  Usage: `/filter enable`

- **Disable** \
  Disables message filtering.

  Usage: `/filter disable`

- **Add** \
  Adds a word to the filter list. You can alter how strictly it'll be filtered by providing one of three options:

  - Soft - This will only match full words.
    - e.g Filtering 'cat' will not trigger on 'cat**s**'.
  - Hard - This will match even if a word is inside another word.
    - e.g Filtering 'ass` will trigger on 'cl**ass**ic'.
  - Strict - This will remove whitespace and try substitutions.
    - e.g Filtering "sex" will trigger on 's3x' and 'car**s ex**ploded'.

  If no strictness is selected, it'll default to hard.

  Usage: `/filter add (strictness) [word]`

- **Remove** \
  Removes a word from the filter list.

  Usage: `/filter remove [word]`

- **List** \
  AutoMod will directly message you a list of all the filtered words and their strictness.

  Usage: `/filter list`

- **Message** \
  Lets you set the message that AutoMod will send if a message is caught by the filter.

  Usage: `/filter message [chosen message]`

- **Action** \
  Lets you configure how AutoMod will react if a message is caught by the filter. You can select one of three options:

  - Log - The message will be logged in the mod action log channel.
  - Delete - The message will be deleted _and_ logged.
  - Warn - The message will be deleted, logged, and the user will receive a warn.

  Usage: `/filter action [log level]`

- **Test** \
  Lets you check if a message matches the block list.

  Usage: `/filter test [word]`
