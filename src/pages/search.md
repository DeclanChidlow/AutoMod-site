---
title: Search
description: Search the AutoMod website and all of the documentation for details on usage.
og_description: Search the AutoMod docs.
stylesheet: "pages/search.css"
---

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script data-cfasync="false" src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>

<noscript>
<p>For full search functionality JavaScript is required. This is a fallback that will perform a site search using Google.</p>

<form class="no-js-search" role="search" action="https://google.com/search" method="GET">
  <label for="search-for">Search with Google:</label>
  <input id="search-for" type="search" name="q" required>
  <input type="hidden" name="q" value="site:automod.vale.rocks">
  <button type="submit">Search</button>
</form>
</noscript>

<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const searchString = urlParams.get("q");

        const pagefind = new PagefindUI({
            element: "#search",
            pageSize: 10,
            showSubResults: true,
            showImages: false,
            excerptLength: 30,
            autofocus: true
        });

        const updateUrlQuery = (query) => {
            const newUrl = new URL(window.location);
            if (query) {
                newUrl.searchParams.set("q", query);
            } else {
                newUrl.searchParams.delete("q");
            }
            window.history.pushState({}, '', newUrl);
        };

        if (searchString) {
            pagefind.triggerSearch(searchString);
        }

        const searchInput = document.querySelector('.pagefind-ui__search-input');
            if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                updateUrlQuery(query);
            });
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    document.querySelectorAll('.pagefind-ui__result-link').forEach(link => {
                        const url = new URL(link.href);
                        if (url.pathname.includes('.html')) {
                            url.pathname = url.pathname.replace('.html', '');
                            link.href = url.toString();
                        }
                    });
                }
            });
        });

        const searchResults = document.querySelector('#search');
        observer.observe(searchResults, {
            childList: true,
            subtree: true
        });
    });
</script>
