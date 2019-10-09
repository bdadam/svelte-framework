<script>
    import { getContext } from 'svelte';
    import { get } from 'svelte/store';

    export let path;
    export let component;
    export let currentPath;

    const ctx = getContext('router');

    ctx.subscribe(r => {
        currentPath = r.path;
    });

    // const router = get();
</script>

{#if currentPath === path}
    <svelte:component this={component} />
{/if}
