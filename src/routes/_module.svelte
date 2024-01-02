<script>
    import { goto, getPath } from '@roxi/routify'
    import ProgressBar from '@/components/ProgressBar.svelte'
    import { client } from "../lib/client.js"
    import Sidebar from "@/components/Sidebar.svelte";
    async function login() {
        if(!client.user?.username) {
            if (localStorage.getItem("token")) {
                console.log("Logged in from cache")
                let botToken = localStorage.getItem("token");
                await client.loginBot(botToken)
                let wait = 0
                // while (client.ready != true || wait < 5000) {
                //     wait++
                // }
                console.log(wait, client.ready)
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
        console.log(`Logged in as ${client.user?.username}`)
        console.log("Server list:", client.servers.toList())
        delay(100).then(() => $goto(window.location.pathname))
    });
    let isLoggedIn = login()
</script>
<ProgressBar />

<div>
    {#if client.ready}
        <Sidebar/>
    {/if}
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