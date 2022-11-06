<script>
  import Button from '../Button.svelte';
  import { Field, Form } from '../Form';
  import { validateEmail, validateRequiredField } from '../../lib/utils/validation';
</script>

<Form
  on:submit={(e) => {
    console.log(e.detail);
  }}
  initialValues={{ username: 'Test', email: 'test@test.com' }}
  let:hasErrors
  let:values
  let:errors
>
  {JSON.stringify(values)}
  {JSON.stringify(errors)}
  <Field label="Username" name="username" type="text" validate={validateRequiredField}>
    <p style:color="green" slot="error" let:error>{error}</p>
  </Field>
  <Field
    label="Email"
    name="email"
    type="email"
    validate={(value, label) => {
      return validateRequiredField(value, label) || validateEmail(value, label);
    }}
  />
  <Field label="password" name="password" type="password" validate={validateRequiredField} />
  <Button type="submit" disabled={hasErrors}>Submit</Button>
</Form>
<Form
  on:submit={(e) => {
    console.log(e.detail);
  }}
  let:hasErrors
>
  <Field label="Username" name="username2" type="text" validate={validateRequiredField}>
    <p style:color="green" slot="error" let:error>{error}</p>
  </Field>
  <Field label="password" name="password2" type="password" validate={validateRequiredField} />
  <Button type="submit" disabled={hasErrors}>Submit</Button>
</Form>
