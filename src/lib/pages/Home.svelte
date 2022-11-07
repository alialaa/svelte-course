<script>
  import { Stage, Layer, Rect } from '../konva';
  let showCanvas = true;
</script>

<input type="checkbox" bind:checked={showCanvas} />

{#if showCanvas}
  <Stage width={300} height={400}>
    <Layer>
      <Rect x="20" y="20" fill="purple" width="100" height="100" />
    </Layer>
  </Stage>
{/if}
