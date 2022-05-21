<script>
    export let solution;
</script>

<div class="card">
    {#each solution.operations as operation}
        <p>{operation}</p>
    {/each}
</div>

<style>
    .card {
        border: 1px solid black;
        margin-bottom: 0.5em;
		padding: 0.5em;
    }

    p {
        font-size: 1.5em;
    }
</style>