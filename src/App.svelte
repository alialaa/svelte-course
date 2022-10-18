<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';

	let todos = [
		{
			id: uuid(),
			title: 'Todo 1',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo 2',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 3',
			completed: true
		}
	];
	$: console.log(todos);
</script>

<h2>{todos.length} Todos</h2>
<TodoList bind:todos />

<button
	on:click={() => {
		todos = [];
	}}>Update todos</button
>

<style>
</style>
