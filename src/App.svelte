<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';

	const todos = [
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
</script>

<TodoList {todos} />

<style>
</style>
