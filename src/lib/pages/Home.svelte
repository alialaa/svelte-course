<script>
  import { Stage, Layer, Rect } from '../konva';
  let showCanvas = true;
  let x = 20;
  let width = 300;

  let rect1, rect2;
</script>

<input type="checkbox" bind:checked={showCanvas} />
<input type="range" bind:value={x} min={0} max={300} />
<input type="range" bind:value={width} min={0} max={1000} />

<button
  on:click={() => {
    console.log(rect1.rect.getAttrs());
    console.log(rect2.rect.getAttrs());
    console.log(rect2.rect.getStage());
    rect2.rect.x(0);
  }}>Get Rect Info</button
>

<Stage {width} height={400}>
  <Layer
    draggable
    on:click={() => {
      console.log('click');
    }}
    on:dragmove={(e) => {
      console.log(e.detail);
    }}
  >
    {#if showCanvas}
      <Rect bind:this={rect1} {x} y={20} fill="blue" width={200} height={100} />
    {/if}
    <Rect x={50} y={50} fill="purple" width={100} height={100} />
  </Layer>

  <Layer {x}>
    <Rect
      on:click={() => console.log('green clicked')}
      on:mousedown={() => console.log('green mousedown')}
      bind:this={rect2}
      x={100}
      y={80}
      fill="green"
      width={100}
      height={100}
      stroke="white"
      strokeWidth={4}
    />
  </Layer>
</Stage>
