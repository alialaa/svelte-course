<script>
  import TodoList from './lib/TodoList.svelte';
  import { v4 as uuid } from 'uuid';
  import { tick } from 'svelte';

  let todoList;
  let showList = true;

  let todos = null;
  let promise = loadTodos();

  function loadTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('An error has occurred.');
      }
    });
  }

  async function handleAddTodo(event) {
    event.preventDefault();
    todos = [
      ...todos,
      {
        id: uuid(),
        title: event.detail.title,
        completed: false
      }
    ];
    await tick();
    todoList.clearInput();
  }

  function handleRemoveTodo(event) {
    todos = todos.filter((t) => t.id !== event.detail.id);
  }

  function handleToggleTodo(event) {
    todos = todos.map((todo) => {
      if (todo.id === event.detail.id) {
        return { ...todo, completed: event.detail.value };
      }
      return { ...todo };
    });
  }
</script>

<label>
  <input type="checkbox" bind:checked={showList} />
  Show/Hide list
</label>
{#if showList}
  {#await promise}
    <p>Loading...</p>
  {:then todos}
    <div style:max-width="400px">
      <TodoList
        {todos}
        bind:this={todoList}
        on:addtodo={handleAddTodo}
        on:removetodo={handleRemoveTodo}
        on:toggletodo={handleToggleTodo}
      />
    </div>
  {:catch error}
    <p>{error.message || 'An error has occurred'}</p>
  {/await}
  <button
    on:click={() => {
      promise = loadTodos();
    }}>Refresh</button
  >
{/if}

<style>
</style>
