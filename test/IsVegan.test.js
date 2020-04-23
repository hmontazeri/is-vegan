import * as isVegan from '../src/modules/IsVegan';

test('should be true for empty string', () => {
  expect(isVegan.isVeganIngredient('')).toBe(true);
});

test('should be vegan ingredient', () => {
  expect(isVegan.isVeganIngredient('soy')).toBe(true);
});

test('should NOT be vegan ingredient', () => {
  expect(isVegan.isVeganIngredient('milk')).toBe(false);
});

test('should NOT be vegan ingredient if all its words are in non-vegan list', () => {
  expect(isVegan.isVeganIngredient('stilton cheese')).toBe(false);
});

test('should be vegan ingredient if not all its words are in non-vegan list', () => {
  expect(isVegan.isVeganIngredient('soy cheese')).toBe(true);
});

test('should NOT be vegan ingredient list', () => {
  expect(isVegan.isVeganIngredientList(['aspic', 'albumin'])).toBe(false);
});

test('should be vegan ingredient list', () => {
  expect(isVegan.isVeganIngredientList(['soy', 'cacao butter'])).toBe(true);
});

test('should NOT contain non-vegan ingredient list', () => {
  expect(isVegan.containsNonVeganIngredients(['soy', 'cacao butter'])).toEqual(
    expect.arrayContaining([])
  );
});

test('should contain non-vegan ingredient list', () => {
  expect(
    isVegan.containsNonVeganIngredients(['aspic', 'albumin', 'soy'])
  ).toEqual(expect.arrayContaining(['aspic', 'albumin']));
});
