<script>
  import { Stage, Layer, Rect } from '../konva';
  let showCanvas = true;
</script>

<input type="checkbox" bind:checked={showCanvas} />

<Stage width={300} height={400}>
  <Layer draggable>
    {#if showCanvas}
      <Rect x={20} y={20} fill="blue" width={200} height={100} />
    {/if}
    <Rect x={50} y={50} fill="purple" width={100} height={100} />
  </Layer>

  <Layer>
    <Rect x={100} y={80} fill="green" width={100} height={100} stroke="white" strokeWidth="4" />
  </Layer>
</Stage>
