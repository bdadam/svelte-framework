<script>
    import { afterUpdate } from 'svelte';

    afterUpdate(() => {
        console.log('the component just updated');
    });
</script>

<h1>HOME</h1>
<a href="/about?from=home">About</a>

<a href="/">home</a>
