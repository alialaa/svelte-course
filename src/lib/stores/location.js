import { readable } from 'svelte/store';

const location = readable(null, (set) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        set({ latitude, longitude });
      },
      (error) => {
        set({ error });
      }
    );
  }
  return () => {
    set(null);
  };
});

export default location;
