<script>
  import { onDestroy } from 'svelte';
  import settings from '../stores/settings';
  let colorScheme;
  const unsubscribe = settings.subscribe((settings) => {
    console.log('settings subscribe');
    colorScheme = settings.colorScheme;
  });
  $: {
    settings.update((prevSettings) => ({ ...prevSettings, colorScheme }));
  }
  onDestroy(unsubscribe);
</script>

<h2>Settings</h2>

<label>
  <input type="radio" bind:group={colorScheme} name="colorScheme" value="dark" /> Dark
</label>
<label>
  <input type="radio" bind:group={colorScheme} name="colorScheme" value="light" /> Light
</label>
