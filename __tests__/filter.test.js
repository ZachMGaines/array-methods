import callback from '../utils/filter';

test('Takes an array and callback of signature item => {} and creates a new array with all items whose call back returned true or truthy value', () => {
  const array = ['bob', 'belcher', 8, 'linda', true, undefined, 'tina'];
  const parameters = (item) => {
    return item[0] === 'b';
  };
  const newArray = callback(array, parameters);
  expect(newArray).toEqual(['bob', 'belcher']);

});
