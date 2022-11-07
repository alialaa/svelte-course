<script>
  import Konva from 'konva';
  import { getContext, onDestroy, setContext } from 'svelte';
  import { stageKey, layerKey } from './context-keys';

  export let draggable = undefined;

  const { getStage } = getContext(stageKey);
  const stage = getStage();
  const layer = new Konva.Layer({
    draggable
  });

  onDestroy(() => {
    layer.destroy();
  });

  setContext(layerKey, layer);

  stage.add(layer);
</script>

<slot />
