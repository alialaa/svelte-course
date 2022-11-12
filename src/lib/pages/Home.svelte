<script>
  import VideoPlayer, { playAll, pauseAll } from '../VideoPlayer.svelte';
</script>

<button on:click={playAll}>Play All</button>
<button on:click={pauseAll}>Pause All</button>

<VideoPlayer src="mov_bbb.mp4" />
<VideoPlayer src="mov_bbb.mp4" />
<VideoPlayer src="mov_bbb.mp4" />
