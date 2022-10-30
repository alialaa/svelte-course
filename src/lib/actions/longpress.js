export default function longpress(node, options) {
  console.log(node, options);

  return {
    update(newOptions) {
      console.log(newOptions);
    },
    destroy() {
      console.log('destroyed');
    }
  };
}
