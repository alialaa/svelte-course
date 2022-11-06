<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import formKey from './form-key';

  const dispatch = createEventDispatcher();

  export let initialValues = {};
  const formStore = writable({ values: initialValues, errors: {}, showErrors: false });

  setContext(formKey, formStore);
</script>

<pre>
{JSON.stringify($formStore, null, 2)}
</pre>
<form
  on:submit|preventDefault={() => {
    if (Object.keys($formStore.errors).length === 0) {
      dispatch('submit', $formStore.values);
    } else {
      $formStore.showErrors = true;
    }
  }}
>
  <slot
    hasErrors={Object.keys($formStore.errors).length > 0}
    values={$formStore.values}
    errors={$formStore.errors}
  />
</form>
