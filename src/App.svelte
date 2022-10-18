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

	function handleAddTodo(event) {
		// event.preventDefault();
		todos = [
			...todos,
			{
				id: uuid(),
				title: event.detail.title,
				completed: false
			}
		];
	}
</script>

<TodoList {todos} on:addtodo={handleAddTodo} />

<style>
</style>
