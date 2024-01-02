<script>
    import { goto } from '@roxi/routify'
    /**
     * Basic unstyled navigation. Feel free to style it as you wish.
     *
     * $node is the current node.
     * $node.pages is the current node's children.
     * $url creates an URL from a node path.
     * $isActive checks if a node is part of the current URL.
     **/
    let nav = [
        {
            "title": "Home",
            "path": "/home"
        }
    ]
</script>

<ul>
    <!-- iterates over each child page -->
    {#each nav as childNode}
        <!-- if the child is active, adds the isActive class -->
        <!-- class:isActive={$isActive(childNode.path)} -->
        <li>
            <a on:click={$goto(childNode.path ?? "/")} href="#">
                <!-- title can be overwritten using `meta.title` -->
                {childNode.title}
            </a>
        </li>
    {/each}
</ul>
