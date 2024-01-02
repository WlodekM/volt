<script>
    import {params} from '@roxi/routify'
    import { client } from '@/lib/client'
    import A from '../../../../.routify/components/[...404].svelte'
    let server;
    let serverExists;
    if (client.ws.ready) serverExists = client.servers.has($params.server)
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    let categories;
    client.on("ready", () => {
        console.log("loaded, i think")
        delay(100).then(() => {
            serverExists = client.servers.has($params.server)
        })
    })
</script>
{#if serverExists}
    {#await serverExists}
        Loading...
    {:then} 
        <h1 style="margin-top: none;">{server?.name ?? "uh the server.name is nonexistent, try reloading idk"}</h1>
        <ul>
            {#await server.categories}
                Loading...
            {:then}
                
                {#each server.categories as category}
                    {(()=>{console.log(category)})()}
                    <details open>
                        <summary>{category.title}</summary>
                        {(()=>{console.log(category.channelObjects)})()}
                        {#each category.channelObjects as channel}
                            {#await channel?.title}
                                Loading...
                            {:then} 
                                {channel?.title}
                                <div class="channel">
                                    {#if channel.iconURL}
                                        <img src={channel.iconURL} alt={channel.name} width="24px" class="channel-icon">
                                    {:else}
                                        #
                                    {/if}
                                    <span class="channel-name">
                                        {channel.name}
                                    </span>
                                </div>
                                <br>
                            {/await}
                            <!-- {channelID} -->
                        {/each}
                    </details>
                {/each}
            {/await}
        </ul>
    {/await}
{:else}
    <p>404 - server {$params.server} not found</p>
{/if}