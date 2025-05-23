import { checkIngredients } from '../src/modules/IngredientChecker';

test('should contain flagged ingredients but NO non-vegan ingredients', () => {
  expect(checkIngredients(['biotin', 'glycine', 'soy', 'garlic'])).toEqual(
    expect.objectContaining({
      nonvegan: [],
      flagged: ['biotin', 'glycine']
    })
  );
});

test('should NOT contain flagged ingredients but non-vegan ingredients', () => {
  expect(checkIngredients(['beef', 'pork', 'soy', 'garlic'])).toEqual(
    expect.objectContaining({
      nonvegan: ['beef', 'pork'],
      flagged: []
    })
  );
});

test('should contain flagged and non-vegan ingredients', () => {
  expect(
    checkIngredients(['beef', 'pork', 'glycine', 'biotin', 'soy', 'garlic'])
  ).toEqual(
    expect.objectContaining({
      nonvegan: ['beef', 'pork'],
      flagged: ['glycine', 'biotin']
    })
  );
});
