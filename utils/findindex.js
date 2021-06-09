export default (arr, callback) => {

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] !== undefined) && callback(arr[i])) return i;

  }
  return -1;
};
