<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import formKey from './form-key';

  const dispatch = createEventDispatcher();

  export let initialValues = {};
  const form = writable({ values: initialValues, errors: {} });

  setContext(formKey, form);
</script>

<pre>
{JSON.stringify($form, null, 2)}
</pre>
<form
  on:submit|preventDefault={() => {
    dispatch('submit', $form.values);
  }}
>
  <slot />
</form>
