---
title: Filter
description: Configure AutoFeeds to filter syndication feed items in your Stoat server. Block unwanted posts by field content or existence with per-feed rules.
og_description: AutoFeeds' filter command usage documentation.
canonical: /docs/autofeeds/commands/configuration/filter
---

AutoFeeds can block feed items from being posted based on the content of an item's fields or whether a field exists at all. Rules are set per feed.

## Adding a Rule

Adds a filter rule to a feed in the current channel.

Usage: `@AutoFeeds filter <url> <field> <operator> [value]`

### Fields

The following fields can be filtered:

- `title` — the item's title
- `body` / `description` — the item's description or summary
- `link` — the item's URL
- `audio` — the URL of the item's audio (podcast feeds and JSON Feeds with audio attachments)
- `duration` — the item's duration (podcast-only)
- `episode` — the item's episode number (podcast-only)
- `season` — the item's season number (podcast-only)
- `type` — the item's episode type, eg `full`, `trailer`, or `bonus` (podcast-only)

Podcast-only fields can only be used on podcast feeds.

### Operators

- `contains` — the field contains the given value (case-insensitive). Requires a value.
- `equals` — the field equals the given value (case-insensitive). Requires a value.
- `missing` — the field is empty or absent.
- `present` — the field is not empty.

### Examples

Block items with 'sponsor' in the title: `@AutoFeeds filter https://example.com/feed.xml title contains sponsor`

Block trailers from a podcast feed: `@AutoFeeds filter https://example.com/podcast.xml type equals trailer`

Block items without audio: `@AutoFeeds filter https://example.com/podcast.xml audio missing`

## Listing Rules

Lists the filter rules for a feed in the current channel, along with each rule's ID.

Usage: `@AutoFeeds filter list <url>`

## Removing Rules

Removes a filter rule by its ID. You can get the ID of a rule by [listing rules](#listing-rules).

Usage: `@AutoFeeds filter remove <url> <rule id>`
