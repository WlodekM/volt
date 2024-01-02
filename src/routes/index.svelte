<script>
    import { client } from "../lib/client.js"
	import {goto} from "@roxi/routify";
    if(!client.user?.username) {$goto("/login")} else {$goto("/home")}
</script>

