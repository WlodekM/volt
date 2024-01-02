<script>
    import { client } from "../lib/client.js"
	import {goto} from "@roxi/routify";
    // if(!client.user?.username) $goto("/login")
</script>

{#if client.ready}
    <h1 style="text-align: center;" class="logo">Volt</h1>
{:else}
    <a href="/login">Login</a>
{/if}