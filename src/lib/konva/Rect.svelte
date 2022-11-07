<script>
  import Konva from 'konva';
  import { getContext, onDestroy, createEventDispatcher } from 'svelte';
  import { layerKey } from './context-keys';

  const dispatch = createEventDispatcher();

  //   export let x = undefined;
  //   export let y = undefined;
  //   export let width = undefined;
  //   export let height = undefined;
  //   export let fill = undefined;
  //   export let stroke = undefined;
  //   export let strokeWidth = undefined;

  const layer = getContext(layerKey);

  export const rect = new Konva.Rect($$props);
  layer.add(rect);

  rect.on('click mousedown', (e) => {
    dispatch(e.type, e);
  });

  $: rect.setAttrs($$props);

  onDestroy(() => {
    rect.destroy();
  });
</script>
