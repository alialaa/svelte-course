<script>
  import { setContext } from 'svelte';
  import formKey from './form-key';

  export let initialValues = {};

  setContext(formKey, { values: initialValues });
</script>

<form>
  <slot />
</form>
