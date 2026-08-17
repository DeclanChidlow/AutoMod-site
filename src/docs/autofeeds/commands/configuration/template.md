---
title: Template
description: Customise how AutoFeeds posts syndication feed items in your Stoat server. Use per-feed templates with variables to control the format of posts.
og_description: AutoFeeds' template command usage documentation.
canonical: /docs/autofeeds/commands/configuration/template
---

AutoFeeds lets you customise how feed items are posted using templates. Templates are set per feed.

## Setting a Template

Sets the template used when posting new items from a feed. Running the command without a template text shows the currently set template (or notes that the default format is in use). Use `reset` to return to the default format.

Usage: `@AutoFeeds template <url> [template text | reset]`

### Variables

The following variables are available:

- `{title}` — the item's title
- `{body}` — the item's description or summary
- `{bodyHtml}` — the item's HTML content
- `{link}` — the item's URL
- `{id}` — the item's unique ID
- `{author}` — the item's author
- `{categories}` — the item's categories or tags, comma-separated
- `{audio}` — the URL of the item's audio (podcast feeds and JSON feeds with audio attachments)
- `{audioType}` — the MIME type of the item's audio
- `{audioLength}` — the size of the item's audio in bytes
- `{feedTitle}` — the title of the feed itself
- `{feedLink}` — the URL of the feed itself
- `{pubTime}` — the item's publication time, formatted by default as `YYYY-MM-DD HH:mm`
- `{pubTimeUnix}` — the item's publication time as a Unix timestamp

Podcast-only variables:

- `{duration}` — the item's duration (eg `1:12:34`)
- `{episode}` — the item's episode number
- `{season}` — the item's season number
- `{type}` — the item's episode type (eg `full`, `trailer`, or `bonus`)

Podcast-only variables can only be used on podcast feeds. Use `\n` for newlines. Unknown variables are left as-is in the output.

### Date Formatting

`{pubTime}` accepts an optional format: `{pubTime:YYYY-MM-DD HH:mm}`. The available tokens are `YYYY`, `MM`, `DD`, `HH`, `mm`, and `ss`, all in UTC.

### Example

```
@AutoFeeds template https://example.com/feed.xml **{title}**\nby {author} | {pubTime:YYYY-MM-DD}\n{link}
```
