<script>
	import Card from './components/Card.svelte';

	export let name;
	export let url;

	const MAX = 6;
	const MIN_VAL = 0;

	let res = undefined;
	let load = false;
	let request = initRequest();

	function initRequest() {
		return {
			operands: Array.from({length: MAX}, () => undefined),
			goal: undefined
		};
	}

	const isValidOperands = (arr) => arr.filter(e => e > MIN_VAL).length == MAX;

	const isValidInput = () => isValidOperands(request.operands) && request.goal >= MIN_VAL;

	const getSolutions = async () => {

		if (!isValidInput()) {
			return;
		}
		load = true;
		res = undefined;

		const response = await fetch(url, {
			headers: {
      			'Accept': 'application/json',
      			'Content-Type': 'application/json'
    		},
			method: 'POST',
			body: JSON.stringify(request)
		});
        
		res = await response.json();
		load = false;
	}
</script>

<main>
	<h1>{name}</h1>

	<form on:submit|preventDefault={getSolutions}>

		<p>Opérandes</p>

		<input type="number" min="1" bind:value={request.operands[0]} required>
		<input type="number" min="1" bind:value={request.operands[1]} required>
		<input type="number" min="1" bind:value={request.operands[2]} required>
		<input type="number" min="1" bind:value={request.operands[3]} required>
		<input type="number" min="1" bind:value={request.operands[4]} required>
		<input type="number" min="1" bind:value={request.operands[5]} required>

		<p>Objectif</p>

		<input type="number" bind:value={request.goal} min="0" required>

		<button on:click={getSolutions}>Résoudre</button>
	</form>

	{#if load}
		<p>Calcul des solutions...</p>
	{/if}

	{#if res}
		<p>{res.solutions.length} solutions</p>
		<p>Temps de calcul : {res.timeInSecs} secondes</p>

		<div class="grid">
			{#each res.solutions as solution}
				<Card solution={solution} />
			{/each}
		</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2.5em;
		font-weight: 100;
	}

	p, button, input {
		font-size: 1.5em;
	}

	input {
		max-width: 240px;
	}

	.grid {
		margin: 0 auto;
  		display: grid;
  		grid-gap: 1rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
		.grid { grid-template-columns: repeat(2, 1fr); }
	}

	@media (min-width: 900px) {
  		.grid { grid-template-columns: repeat(3, 1fr); }
	}
</style>