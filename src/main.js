import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Solveur du compte est bon',
		url: 'http://localhost:8080/api/compute'
	}
});

export default app;