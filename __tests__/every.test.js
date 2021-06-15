import { every } from '../utils/every';

test('returns true if all values meet criteria', () => {
  const data = [4, 8, 16, 20];
  const data2 = [0, 2, 4, 6];
  const actual = every(data, (num) => { return num >= 4; });
  const notActual = every(data2, (num) => { return num >= 2; });
  expect(actual).toEqual(true);
  expect(notActual).toEqual(false);
});
