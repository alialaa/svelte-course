<script>
  import { spring } from 'svelte/motion';

  const boxProps = spring(
    { width: 100, height: 100 },
    {
      stiffness: 0.1,
      damping: 0.3
    }
  );
</script>

<button
  on:click={async () => {
    await boxProps.set(
      {
        width: Math.random() * 500,
        height: Math.random() * 500
      },
      {
        soft: 1
      }
    );
    console.log('done');
  }}>Random Box</button
>

<div style="width: {$boxProps.width}px; height: {$boxProps.height}px; background-color: purple;" />
