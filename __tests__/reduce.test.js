import { reduce } from '../utils/reduce';

test('accumulates everything in the array', () => {
  const data = [10, 2, 3];

  const actual = reduce(data, (num) => { return num; }, 0);
  expect(actual).toEqual(15);
});
