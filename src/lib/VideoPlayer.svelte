<script context="module">
  let allVideos = new Set();
</script>

<script>
  import { onDestroy, onMount } from 'svelte';

  export let src = undefined;

  let video;
  let paused = true;

  onMount(() => {
    allVideos.add(video);
  });
  onDestroy(() => {
    allVideos.delete(video);
  });
</script>

<video
  bind:this={video}
  class:playing={!paused}
  {src}
  controls
  muted
  bind:paused
  on:play={() => {
    allVideos.forEach((_video) => {
      if (_video !== video) _video.pause();
    });
  }}
/>

<style>
  video.playing {
    outline: 4px solid #ff3e00;
  }
</style>
