<script>
    import {
        isBot,
        token
    } from "../lib/stores.js"
    import { client } from "../lib/client.js"
    import Container from "@/components/Container.svelte";
	import { goto } from "@roxi/routify";
    let botToken = ""
    let bot = true
    if (localStorage.getItem("token")) {
        console.log("Logged in from cache")
        botToken = localStorage.getItem("token");
        client.loginBot(botToken)
    }
</script>
<center>
<Container>
    <label for="bot">Bot?</label>
    <input type="checkbox" name="bot" id="bot" bind:checked={bot} disabled><br>
    {#if bot}
        <label for="token">Token(Bot)</label>
        <input type="text" name="token" id="token" bind:value={botToken}><br>
    {/if}
    <button on:click={()=>{
        if(botToken) {
            console.log("h")
            client.loginBot(botToken);
            $token = botToken
            localStorage.setItem("token", botToken)
        } else {console.log("please enter bot token!")}
    }}>Submit</button>
</Container>
<button on:click={()=>{$goto("/home")}}>Home</button>
</center>