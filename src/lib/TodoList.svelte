<svelte:options immutable={true} />

<script>
  import Button from './Button.svelte';
  import { createEventDispatcher, afterUpdate } from 'svelte';
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';

  afterUpdate(() => {
    if (autoscroll) listDiv.scrollTo(0, listDivScrollHeight);
    autoscroll = false;
  });

  export let todos = null;
  export let error = null;
  export let isLoading = false;

  let prevTodos = todos;
  let inputText = '';
  let input, listDiv, autoscroll, listDivScrollHeight;

  const dispatch = createEventDispatcher();

  $: {
    autoscroll = todos && prevTodos && todos.length > prevTodos.length;
    prevTodos = todos;
  }

  export function clearInput() {
    inputText = '';
  }
  export function focusInput() {
    input.focus();
  }

  function handleAddTodo() {
    const isNotCancelled = dispatch(
      'addtodo',
      {
        title: inputText
      },
      {
        cancelable: true
      }
    );
    if (isNotCancelled) {
      inputText = '';
    }
  }

  function handleRemoveTodo(id) {
    dispatch('removetodo', {
      id
    });
  }

  function handleToggleTodo(id, value) {
    dispatch('toggletodo', {
      id,
      value
    });
  }
</script>

<div class="todo-list-wrapper">
  {#if isLoading}
    <p class="state-text">Loading...</p>
  {:else if error}
    <p class="state-text">{error}</p>
  {:else if todos}
    <div class="todo-list" bind:this={listDiv}>
      <div bind:offsetHeight={listDivScrollHeight}>
        {#if todos.length === 0}
          <p class="state-text">No todos yet</p>
        {:else}
          <ul>
            {#each todos as { id, title, completed } (id)}
              <li class:completed>
                <label>
                  <input
                    on:input={(event) => {
                      event.currentTarget.checked = completed;
                      handleToggleTodo(id, !completed);
                    }}
                    type="checkbox"
                    checked={completed}
                  />
                  {title}
                </label>
                <button
                  class="remove-todo-button"
                  aria-label="Remove todo: {title}"
                  on:click={() => handleRemoveTodo(id)}
                >
                  <span style:width="10px" style:display="inline-block">
                    <FaRegTrashAlt />
                  </span>
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/if}
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:this={input} bind:value={inputText} placeholder="New Todo" />
    <Button class="add-todo-button" type="submit" disabled={!inputText}>Add</Button>
  </form>
</div>

<style lang="scss">
  .todo-list-wrapper {
    background-color: #424242;
    border: 1px solid #4b4b4b;
    .state-text {
      margin: 0;
      padding: 15px;
      text-align: center;
    }
    .todo-list {
      max-height: 200px;
      overflow: auto;
      ul {
        margin: 0;
        padding: 10px;
        list-style: none;
        li {
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          background-color: #303030;
          border-radius: 5px;
          padding: 10px;
          position: relative;
          label {
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: baseline;
            padding-right: 20px;
            input[type='checkbox'] {
              margin: 0 10px 0 0;
              cursor: pointer;
            }
          }
          &.completed > label {
            opacity: 0.5;
            text-decoration: line-through;
          }
          .remove-todo-button {
            border: none;
            background: none;
            padding: 5px;
            position: absolute;
            right: 10px;
            cursor: pointer;
            display: none;
            :global(svg) {
              fill: #bd1414;
            }
          }
          &:hover {
            .remove-todo-button {
              display: block;
            }
          }
        }
      }
    }
    .add-todo-form {
      padding: 15px;
      background-color: #303030;
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #4b4b4b;
      // :global(.add-todo-button) {
      //   background-color: aqua;
      // }
      input {
        flex: 1;
        background-color: #424242;
        border: 1px solid #4b4b4b;
        padding: 10px;
        color: #fff;
        border-radius: 5px;
        margin-right: 10px;
      }
    }
  }
</style>
