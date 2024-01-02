<script>
    import { Router, createRouter } from '@roxi/routify'
    import routes from '../.routify/routes.default.js'
    import Nav from './components/Nav.svelte';
    import { client } from "./lib/client.js"

    export const router = createRouter({ routes })
    import "./style.css"
</script>

<!-- <Nav /> -->
<Router {router} />
