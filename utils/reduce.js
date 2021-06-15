export function reduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < arr.length; i++) {

    accumulator += callback(arr[i]);
  }
  return accumulator;
}
