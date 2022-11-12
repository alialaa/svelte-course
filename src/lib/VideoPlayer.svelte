<script context="module">
  let allVideos = new Set();

  export function playAll() {
    allVideos.forEach((video) => {
      video.play();
    });
  }
  export function pauseAll() {
    allVideos.forEach((video) => {
      video.pause();
    });
  }
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

<video bind:this={video} class:playing={!paused} {src} controls muted bind:paused />

<style>
  video.playing {
    outline: 4px solid #ff3e00;
  }
</style>
