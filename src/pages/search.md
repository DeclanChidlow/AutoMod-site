---
title: Search
description: Search the AutoMod website and all of the documentation for details on usage.
og_description: Search the AutoMod docs.
stylesheet: "pages/search.css"
canonical: /search
---

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script data-cfasync="false" src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>

<noscript>
<p>For full search functionality JavaScript is required. This is a fallback that will perform a site search using DuckDuckGo.</p>

<form class="no-js-search" role="search" action="https://duckduckgo.com" method="GET">
  <label for="search-for">Search with DuckDuckGo:</label>
  <input id="search-for" type="search" name="q" required>
  <input type="hidden" name="sites" value="automod.vale.rocks">
  <button type="submit">Search</button>
</form>
</noscript>

<script data-cfasync="false" src="/assets/scripts/search.js"></script>
