import checkIngredients from '../src/modules/ingredientChecker';

test('should contain flagged ingredients but NO non-vegan ingredients', () => {
  expect(
    checkIngredients(['biotin', 'calciumphosphate', 'soy', 'garlic'])
  ).toEqual(
    expect.objectContaining({
      nonvegan: [],
      flagged: ['biotin', 'calciumphosphate']
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
    checkIngredients([
      'beef',
      'pork',
      'calciumphosphate',
      'biotin',
      'soy',
      'garlic'
    ])
  ).toEqual(
    expect.objectContaining({
      nonvegan: ['beef', 'pork'],
      flagged: ['calciumphosphate', 'biotin']
    })
  );
});
