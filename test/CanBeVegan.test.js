import * as canBeVegan from '../src/modules/CanBeVegan';

test('should be true for empty string', () => {
  expect(canBeVegan.isFlaggedIngredient('')).toBe(true);
});

test('should be flagged ingredient', () => {
  expect(canBeVegan.isFlaggedIngredient('biotin')).toBe(true);
});

test('should NOT be flagged ingredient', () => {
  expect(canBeVegan.isFlaggedIngredient('soy')).toBe(false);
});

test('should NOT contain flagged ingredients', () => {
  expect(
    canBeVegan.containsFlaggedIngredients(['soy', 'cacao butter'])
  ).toEqual(expect.arrayContaining([]));
});

test('should contain flagged ingredients', () => {
  expect(
    canBeVegan.containsFlaggedIngredients(['biotin', 'glycine', 'soy'])
  ).toEqual(expect.arrayContaining(['biotin', 'glycine']));
});
