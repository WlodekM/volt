<script>
    export let style = "";
</script>
<div style={style}><slot /></div>
<style>
    div {
        width: 100%;
        max-width: 500px;
        margin-top: 50px;
        background-color: #1b333f;
        text-align: left;
        padding: 15px;
        border-radius: 10px;
    }
</style>