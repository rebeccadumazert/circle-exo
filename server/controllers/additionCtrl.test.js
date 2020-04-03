const { sum } = require('./additionCtrl');

test('Sum 1 + 1 should be equal to 2', () => {
  expect(sum(1, 1)).toBe(2);
});
