<script>
  import Konva from 'konva';
  import { getContext } from 'svelte';
  import { layerKey } from './context-keys';

  export let x = undefined;
  export let y = undefined;
  export let width = undefined;
  export let height = undefined;
  export let fill = undefined;
  export let stroke = undefined;
  export let strokeWidth = undefined;

  const layer = getContext(layerKey);

  const rect = new Konva.Rect({
    x,
    y,
    width,
    height,
    fill,
    stroke,
    strokeWidth
  });
  layer.add(rect);
</script>
