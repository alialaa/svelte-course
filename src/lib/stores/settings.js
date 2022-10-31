import { writable } from 'svelte/store';

const settings = writable({
  colorScheme: 'dark',
  language: 'en',
  fontSize: 12
});

export default settings;
