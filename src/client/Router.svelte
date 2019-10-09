<script>
    import { setContext, onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';

    export let url;

    const path = url.split('?')[0];
    const search = url.split('?')[1] || '';

    const router = writable({ url, path, search });

    setContext('router', router);

    let clickHandler = null;
    let popstateHandler = null;

    onMount(() => {
        clickHandler = e => {
            e.preventDefault();
            const a = e.target.closest('a');

            if (!a) {
                return;
            }

            const href = a.pathname + a.search;

            router.set({ url: href, path: a.pathname, search: a.search });
            history.pushState(null, null, href);
        };

        popstateHandler = () => {
            router.set({
                url: window.location.pathname + window.location.search,
                path: location.pathname,
                search: location.search,
            });
        };

        window.addEventListener('click', clickHandler);
        window.addEventListener('popstate', popstateHandler);
    });

    onDestroy(() => {
        if (clickHandler) {
            window.removeEventListener('click', clickHandler);
        }
        if (popstateHandler) {
            window.removeEventListener('popstate', popstateHandler);
        }
    });
</script>

<slot />
