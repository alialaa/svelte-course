import { readable } from 'svelte/store';

const location = readable(null, (set) => {
  let watchId;
  if (navigator.geolocation && navigator.geolocation.watchPosition) {
    watchId = navigator.geolocation.watchPosition(
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
    if (navigator.geolocation && navigator.geolocation.clearWatch) {
      navigator.geolocation.clearWatch(watchId);
    }
    set(null);
  };
});

export default location;
