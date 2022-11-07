<script>
  import { onMount } from 'svelte';
  import Konva from 'konva';

  let container;

  onMount(() => {
    const stage = new Konva.Stage({
      container,
      width: 300,
      height: 400
    });
    const layer = new Konva.Layer();
    const rect1 = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 60,
      fill: 'purple',
      stroke: 'white',
      strokeWidth: 4
    });
    layer.add(rect1);

    const rect2 = new Konva.Rect({
      x: 150,
      y: 20,
      width: 100,
      height: 100,
      fill: 'aqua',
      shadowColor: 'rgba(1,1,1,0.5)',
      shadowBlur: 10,
      cornerRadius: 5
    });
    layer.add(rect2);

    stage.add(layer);
  });
</script>

<div bind:this={container} />

<Stage width={300} height={400}>
  <Layer>
    <Rect x="" y="" fill="" />
  </Layer>
</Stage>
