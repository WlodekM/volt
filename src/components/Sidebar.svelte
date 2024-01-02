<script>
    // @ts-ignore
    import settings from "../lib/assets/settings.svg"
    // @ts-ignore
    import logout from "../lib/assets/logout.svg"
    import { client } from "@/lib/client"
	import {goto} from "@roxi/routify";
	let servers = client.servers.items();
    client.on("ready", () => {servers = client.servers.items()})
    console.log("AAAA", servers)
</script>

<div class="sidebar">
    <div class="servers">
        {#each servers as server}
            <button on:click={() => {
                console.log(`/servers/${server.data.id}`)
                $goto(`/servers/${server.data.id}`)
            }} class="server">
                <img src={server.data.icon.generateURL()} title={server.data.name} alt={`${server.data.name}`} class="server-icon">
            </button>
        {/each}
        <div class="padding"/>
    </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src={logout} title="Settings" alt="Settings" class="server-icon sidebar-icon" on:click={()=>{
        localStorage.removeItem("token")
        $goto("login")    
    }}>
</div>

<style>
    .server-icon {
        border-radius: 10%;
        width: 100%;
        background-color: #1b333f;
        padding: 0px;
        border-radius: 10px;
        cursor: pointer;
    }
    .sidebar {
        width: 70px;
        top: 0;
        position: absolute;
        padding: 5px;
        background-color: #070c0f;
        /*NOTE - change to NOT use calc */
        /* i forgor how to include padding in 100% */
        height: calc(100% - 10px);
    }
	.padding {
		flex-grow: 1;
		display: block;
	}
    .servers {
        display: flex;
        flex-direction: column;
        gap: 5px;
        height: 100%;
    }
    .server {
        background: none;
        border: none;
        padding: none;
        margin: none;
    }
    .sidebar-icon {
        padding: 10px;
        width: 50px;
        position: fixed;
        bottom: 0;
    }
</style>