<script>
    import { getContext } from 'svelte';
    import { get } from 'svelte/store';

    export let path;
    export let component;
    export let currentPath;
    let currentUrl;
    let currentSearch;

    const ctx = getContext('router');

    ctx.subscribe(r => {
        currentPath = r.path;
        currentUrl = r.url;
        currentSearch = r.search;
        // console.log('CU', currentUrl);
    });

    // const router = get();
</script>

{#if currentPath === path}
    <svelte:component this={component} url={currentUrl} path={currentPath} search={currentSearch} />
{/if}
