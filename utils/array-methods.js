export function callBack3000(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {

    newArray[i] = callback(array[i]);

  }
  return newArray;
}

