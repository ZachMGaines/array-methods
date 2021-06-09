import callback from '../utils/findindex';

test('takes an array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value', () => {
  const array = ['tom', 'timmy', 7, 'larry', undefined, true, 'billy'];
  const parameters = (item) => {
    return item.charAt(0) === 't';
  };
  const actual = callback(array, parameters);
  expect(actual).toEqual(0);
});
