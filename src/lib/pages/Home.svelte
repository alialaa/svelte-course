<script>
  import { Stage, Layer, Rect } from '../konva';
  let showCanvas = true;
  let x = 20;
  let width = 300;
</script>

<input type="checkbox" bind:checked={showCanvas} />
<input type="range" bind:value={x} min={0} max={300} />
<input type="range" bind:value={width} min={0} max={1000} />

<Stage {width} height={400}>
  <Layer draggable>
    {#if showCanvas}
      <Rect {x} y={20} fill="blue" width={200} height={100} />
    {/if}
    <Rect x={50} y={50} fill="purple" width={100} height={100} />
  </Layer>

  <Layer {x}>
    <Rect x={100} y={80} fill="green" width={100} height={100} stroke="white" strokeWidth="4" />
  </Layer>
</Stage>
