<script>
  import { onDestroy } from 'svelte';
  import settings from '../stores/settings';
  let colorScheme;
  const unsubscribe = settings.subscribe((settings) => {
    console.log('home subscribe');
    colorScheme = settings.colorScheme;
  });

  onDestroy(unsubscribe);
</script>

<h2>Home</h2>

{colorScheme}
