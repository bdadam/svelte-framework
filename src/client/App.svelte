<script>
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';

    import Router from './Router.svelte';
    import Route from './Route.svelte';

    export let url;
</script>

<Router {url}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
</Router>

<!-- {#if url === '/'}
    <Home />
{:else if url === '/about'}
    <About />
{/if} -->
