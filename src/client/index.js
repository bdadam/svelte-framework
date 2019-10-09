import App from './App.svelte';

const app = new App({
    target: document.querySelector('#app'),
    hydrate: true,
    props: {
        url: window.location.pathname,
    },
});
