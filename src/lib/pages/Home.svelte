<script>
  import Button, { getTotalButtons } from '../Button.svelte';
  let showButton = false;
  let total;
</script>

<input type="checkbox" bind:checked={showButton} />

<Button>Button</Button>
<Button>Button</Button>
{#if showButton}
  <Button>Button</Button>
{/if}

{total}
<button
  on:click={() => {
    total = getTotalButtons();
  }}>Update buttons count</button
>
