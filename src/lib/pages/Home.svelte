<script>
  import Button from '../Button.svelte';
  import { Field, Form } from '../Form';
</script>

<Form on:submit={() => {}} initialValues={{ username: 'Test', email: 'test@test.com' }}>
  <Field label="Username" name="username" type="text" validate={() => {}} />
  <Field label="Email" name="email" type="email" validate={() => {}} />
  <Field label="password" name="password" type="password" validate={() => {}} />
  <Button type="submit">Submit</Button>
</Form>
