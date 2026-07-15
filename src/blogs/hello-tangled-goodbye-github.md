---
title: Hello Tangled, Goodbye GitHub
description: The plans and processes for AutoMod, AutoFeeds, AutoDice, and future bots to move from GitHub to a new Git forge, Tangled. Addresses migration and information about why the move is necessary the decision behind choosing Tangled over alternatives.
og_description: Entangled in a new Git forge.
pub_time: 2026-05-10T04:00Z
author: Declan Chidlow (Vale)
---

> [!NOTE]
> TL;DR: What does this change mean for the average AutoMod end-user? Nothing. What does this change mean for contributors and self-hosters? You'll need to [migrate some stuff](#for-contributors-and-self-hosters).

[Git](https://git-scm.com) is a version control system created by Linus Torvalds (the creator of Linux) in the mid-2000s. A version control system is fairly simple. You create/edit/delete/modify/etc files, and the changes are tracked, such that you can view what is different. A version control system (VCS) is useful because it allows one to inspect the history of modifications, revert to previous versions, and collaborate with others effectively. It helps to prevent conflicts and data loss while making projects easier to manage.

GitHub is a Git forge, meaning that it provides a hosted environment for people to collaborate on Git repositories. GitHub has been owned by Microsoft since 2018, and overall Microsoft has done a reasonable job managing it. Unfortunately, however, in recent years it has grown buggy, new feature releases have slowed, AI has been thrust upon the user base, and service availability has suffered. The past few months have been particularly bad.

Due to these reasons, and also as part of my continued effort to reduce dependency on services run and managed in the United States of America, it has come to a point where it is worth considering different options. After weighing the alternatives, I've settled on [Tangled](https://tangled.org), which is where future AutoMod, AutoFeeds, and AutoDice development will occur.

## Tangled

Tangled is a Git forge built upon the [AT Protocol](https://atproto.com) and is part of the 'Atmosphere', which includes [Bluesky](https://bsky.social/about), [npmx](https://npmx.dev), [Leaflet](https://leaflet.pub), and a plethora of other services. It is all wonderful and interoperable, so one account works across them all. It is a really exciting prospect of a social internet.

I've been weighing up options for a while and have had Tangled on my radar since it launched just over a year ago. I have faith in the project's future, and in the case it does turn out to be a dud, the nature of the AT Protocol and Tangled's construction will make moving in the future easy.

The new repositories are as follows:

- <https://tangled.org/vale.rocks/AutoMod>
- <https://tangled.org/vale.rocks/AutoFeeds>
- <https://tangled.org/vale.rocks/AutoDice>

## For Contributors and Self-Hosters

If you're looking to contribute to any of the bots, then you will note that development now takes place over on Tangled, rather than GitHub. It has the same pull request and issue system; it's just somewhere else. You will need an account on the Atmosphere to contribute. Everything is very similar to the GitHub experience.

If you're self-hosting AutoMod, AutoFeeds, or AutoDice, you'll need to point your clone of the repository to the new origin on Tangled. It is a single-command process to switch the origin, and the updating guidance in the self-hosting documentation has been amended to guide you through it:

- [AutoMod self-hosting documentation](/docs/automod/self-hosting#updating)
- [AutoFeeds self-hosting documentation](/docs/autofeeds/self-hosting#updating)
- [AutoDice self-hosting documentation](/docs/autodice/self-hosting#updating)

## Migration

Rome wasn't built in a day, and a house isn't moved in a day (a few boxes can remain unopened for years!). I'm not intending to drag out this process, but I also have no intention to rush it or bodge it. _Move slow, and better things._

The migration will occur as follows:

- [x] Place the repositories for AutoMod, AutoFeeds, and AutoDice on Tangled, but still mirror to GitHub.
- [x] Indicate on GitHub that the repositories are moving.
- [ ] Update documentation all over the web to point to Tangled rather than GitHub.
- [ ] Migrate over issues/pull requests.
- [ ] Migrate the roadmap to the AutoMod website.
- [ ] Cease mirroring of the repositories to GitHub and archive them.
