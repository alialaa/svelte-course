<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { interpolateRgb } from 'd3-interpolate';

  const boxProps = tweened(
    { width: 100, height: 100, color: 'purple' },
    {
      duration: 500,
      easing: cubicOut,
      interpolate: (a, b) => (t) => {
        const deltaWidth = b.width - a.width;
        const deltaHeight = b.height - a.height;
        const color = interpolateRgb(a.color, b.color)(t);
        return {
          width: a.width + deltaWidth * t,
          height: a.height + deltaHeight * t,
          color
        };
      }
    }
  );
</script>

<button
  on:click={async () => {
    await boxProps.set(
      {
        width: Math.random() * 500,
        height: Math.random() * 500,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
      },
      {
        duration: 4000
      }
    );
    console.log('done');
  }}>Random Box</button
>

<div
  style="width: {$boxProps.width}px; height: {$boxProps.height}px; background-color: {$boxProps.color};"
/>
