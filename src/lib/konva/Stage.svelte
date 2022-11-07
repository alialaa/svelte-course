<script>
  import Konva from 'konva';
  import { onMount, onDestroy } from 'svelte';

  export let width;
  export let height;
  let container;
  let stage;

  onMount(() => {
    stage = new Konva.Stage({
      container,
      width,
      height
    });
  });

  onDestroy(() => {
    if (stage) stage.destroy();
  });
</script>

<div bind:this={container}>
  <slot />
</div>
