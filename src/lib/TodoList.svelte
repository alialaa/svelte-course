<script>
	import Button from './Button.svelte';

	export let todos = [];
	let inputText = '';

	function handleAddTodo() {
		console.log(inputText);
	}
</script>

<div class="todo-list-wrapper">
	<ul>
		{#each todos as { id, title }, index (id)}
			{@const number = index + 1}
			<li>{number}- {title}</li>
		{/each}
	</ul>
	{inputText}
	<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
		<input bind:value={inputText} />
		<Button type="submit">Add</Button>
	</form>
</div>
