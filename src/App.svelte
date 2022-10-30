<script>
  import tippy from './lib/actions/tippy';

  let content = 'Hello';
</script>

<input bind:value={content} />

<button use:tippy={{ content, placement: 'right', theme: 'light' }}>Button</button>

<style>
</style>
