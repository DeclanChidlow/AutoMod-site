---
title: Search
description: Search the AutoMod website and all of the documentation for details on usage.
og_description: Search the AutoMod docs.
stylesheet: "pages/search.css"
canonical: /search
---

<link href="/pagefind/pagefind-component-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-component-ui.js" type="module"></script>

<div class="search">
	<pagefind-input></pagefind-input>
	<span>
		<pagefind-summary></pagefind-summary>
		<pagefind-keyboard-hints></pagefind-keyboard-hints>
	</span>
	<pagefind-results>
		<script type="text/pagefind-template">
			<li class="pf-result">
				<div class="pf-result-card">
					<div class="pf-result-content">
						<p class="pf-result-title">
							<a class="pf-result-link" href="{{ meta.url | default(url) | replace(".html", "")}}">{{ meta.title }}</a>
						</p>
						{{#if excerpt}}
						<p class="pf-result-excerpt">{{+ excerpt +}}</p>
						{{/if}}
					</div>
				</div>
				{{#if sub_results}}
				<ul class="pf-heading-chips">
					{{#each sub_results as sub}}
					<li class="pf-heading-chip">
						<a class="pf-heading-link" href="{{ sub.url | safeUrl | replace(".html", "") }}">{{ sub.title }}</a>
						<p class="pf-heading-excerpt">{{+ sub.excerpt +}}</p>
					</li>
					{{/each}}
				</ul>
				{{/if}}
			</li>
		</script>
		<script type="text/pagefind-template" data-template="placeholder">
			<li class="pf-result" aria-hidden="true">
				<div class="pf-result-card">
					<div class="pf-result-content">
						<p class="pf-result-title pf-skeleton pf-skeleton-title"></p>
						<p class="pf-result-excerpt pf-skeleton pf-skeleton-excerpt"></p>
					</div>
				</div>
			</li>
		</script>
	</pagefind-results>
</div>

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
