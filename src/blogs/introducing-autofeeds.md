---
title: Introducing AutoFeeds
description: Introduction of the AutoFeeds bot for Stoat, which allows being notified of new content being published to RSS, Atom, and JSON syndication feeds directly in your Stoat server. The bot allows fetching posts from big social media platforms like Bluesky, YouTube, Reddit, GitHub, and many more.
og_description: Stay on Stoat and bring the web to you.
pub_time: 2026-02-11T10:30Z
author: Declan Chidlow (Vale)
---

AutoFeeds is a new syndication feed bot for Stoat that supports RSS, Atom, and JSON feeds. If you don't know what any of that means, hold on -- I'll explain it in a moment.

The main thing is that AutoFeeds lets you subscribe to all sorts of web content, such as Reddit posts, YouTube videos, blog articles, and so much more in your server. Whenever new content is posted, the bot sends a message in your server. It is a great way to keep up with happenings all over the web from the comfort of your Stoat community.

## What are syndication feeds?

RSS stands for Really Simple Syndication. It is a format that has been around since 1999 and provides a standardised way to receive updates from websites. So-called RSS feeds can be subscribed to through a range of means and allow you to stay up-to-date without jumping all over the web to check each individual site and platform you're interested in.

There are also other formats that do the same thing as RSS but slightly differently. The two other main formats are Atom and JSON Feed. AutoFeeds has support for all of these formats and you shouldn't really need to worry yourself about the format of a feed in use.

For a fuller explanation of syndication feeds, you can read the details on [my website's syndication page](https://vale.rocks/syndication).

## Examples of Feeds

AutoFeeds works with a huge number of sites. Some platforms that provide RSS, Atom, and JSON feeds include:

- YouTube (Channels)
- Bluesky (Profiles)
- Reddit (Subreddits and users)
- Tumblr
- Medium
- Mastodon
- GitHub
- SoundCloud
- Letterboxd
- Goodreads
- DeviantArt
- Ko-Fi
- Behance
- Substack
- Vimeo
- Kickstarter
- Lobsters
- Hacker News
- Flickr
- The Stoat Blog

That isn't to say AutoFeeds only works with these platforms. AutoFeeds will accept any valid RSS, Atom, or JSON feed. In many cases AutoFeeds will still be able to detect feeds associated with a site by just providing it a link to that site. It is worth noting that this does require that the site [has everything configured correctly](https://blog.jim-nielsen.com/2021/automatically-discoverable-rss-feeds/) so it doesn't work all of the time.

If a feed can't be auto-discovered, you can try to find it yourself. Keep an eye out for an orange wireless symbol (), which is the universal icon for RSS. You can also often find feed links in site footers. If you can't find feeds those ways, you can also try to perform a search for '<site name> RSS feeds' in your favourite web browser.

## Subscribing to this blog with AutoFeeds

As an example of how AutoFeeds works, I'll show you how you'd subscribe to this AutoMod blog in your server. By subscribing, AutoFeeds will send a new message each time a new blog post is released.

1. The first step is to add AutoFeeds to your server. You can use [this invite link](https://stoat.chat/bot/01HZNFJK4C23AJE95JWY0JXB18) to add it.

2. The next step is ensuring the bot has the necessary permissions required to send and receive messages in your Stoat server. You can do this by assigning the bot a role and setting the permissions of that role. This process is similar to [the steps for setting up AutoMod](/docs/setup).

3. Now you've got things configured, you may start using the bot. To get an overview of the bot's commands and check everything is working as it should be, you can run the command `@AutoFeeds help`, which will cause the bot to output some documentation.

4. As you'll see from the output of the help command, there is a command to add a feed. To add the feed of this blog, we'll need to provide it as an argument, like so: `@AutoFeeds add https://automod.vale.rocks/blog/feed.xml`. AutoFeeds should then tell us the feed has been added to our current channel.

Assuming there were no issues or errors during the process, everything should now be set up. The next time a post is published on this blog, AutoFeeds will make a post notifying you about it in the channel. Handy! To remove the feed, you'd run the removal command: `@AutoFeeds remove https://automod.vale.rocks/blog/feed.xml`

To get a list of all feeds currently subscribed to in the current channel, you can use `@AutoFeeds list`. To manually fetch new items from a specific feed, you can use `@AutoFeeds check <feed_url>`.

If something didn't work, you're stuck, or just a little bit confused, feel free to pop into [the AutoMod server](https://stt.gg/automod) so we can give you a hand.
