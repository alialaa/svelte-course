<script>
	import Counter from './lib/Counter.svelte';

	const props = {
		maxCount: 10,
		initialCount: 5
	};
</script>

<Counter {...props} x="y" />

<style>
</style>
