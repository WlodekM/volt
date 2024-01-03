<script>
    import { goto, getPath } from '@roxi/routify'
    import ProgressBar from '@/components/ProgressBar.svelte'
    import { client } from "../lib/client.js"
    import Sidebar from "@/components/Sidebar.svelte";
    import { readonly } from 'svelte/store'
    async function login() {
        if(!client.user?.username) {
            if (localStorage.getItem("token")) {
                console.log("Logged in from cache")
                let botToken = localStorage.getItem("token");
                client.login(botToken, "bot")
                let wait = 0
                // while (client.ws.ready != true || wait < 5000) {
                //     wait++
                // }
                console.log(wait, client.ws.ready)
                return wait
            } else {
                $goto("/login")
                return -1 // go to login page
            }
        }
    }
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    client.on("ready", () => {
        client.setup()
        console.log(`Logged in as ${client.user?.username}`)
        console.log("Server list:", client.servers.items())
        delay(100).then(() => {
            client.ready = true
            $goto(window.location.pathname)
        })
    });
    let isLoggedIn = login()
</script>
<ProgressBar />

<div>
    {#await isLoggedIn && client.ready && client.servers}
        ...
    {:then} 
        {#if isLoggedIn && client.ready && client.servers}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbumpe;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbumpe;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            READY: {isLoggedIn}
            <Sidebar/>
        {/if}
    {/await}
    <div class="side">
        {#await isLoggedIn}
            Logging in...
        {:then}
            <slot />
        {/await}
    </div>
</div>

<style>
    .side {
        margin-left: 80px;
        padding: 5px;
    }
</style>