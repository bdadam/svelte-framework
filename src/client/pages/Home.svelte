<script>
    import { afterUpdate } from 'svelte';

    export let search = '';

    afterUpdate(() => {
        console.log('S', search);
        console.log('the component just updated');
    });
</script>

<h1>HOME: {search}</h1>
<a href="/about?from=home">About</a>

<a href="/">home</a>
