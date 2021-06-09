import { callBack3000 } from '../utils/array-methods.js';
describe('rgrefactor routes', () => {
  test('array methods', () => {
    const array = [1, 2, 3];
    const actual = callBack3000(array, (n) => n + 1);
    expect(actual).toEqual([2, 3, 4]);
  });
});
