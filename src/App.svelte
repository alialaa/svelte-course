<script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
</script>

<Button size="small" shadow>
	<div style:width="20px" slot="leftContent"><FaAngellist /></div>
	Button Text
</Button>

<style>
</style>
