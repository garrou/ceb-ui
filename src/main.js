import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Solveur du compte est bon',
		url: 'https://cebapi.alwaysdata.net/api/v1/ceb'
	}
});

export default app;