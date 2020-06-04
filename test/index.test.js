import * as index from '../index';

test('should allow to use different ingredients languages', () => {
  const englishLanguageCode = 'en';
  const italianLanguageCode = 'it';

  // Default should be English
  expect(
    index.getIngredientsLanguage()
  ).toEqual(englishLanguageCode);

  expect(
    index.checkIngredients(['beef', 'pork', 'glycine', 'biotin', 'soy', 'garlic'])
  ).toEqual(
    expect.objectContaining({
      nonvegan: ['beef', 'pork'],
      flagged: ['glycine', 'biotin']
    })
  );

  // Switch to Italian
  expect(
    index.setIngredientsLanguage(italianLanguageCode)
  ).toBeUndefined();

  expect(
    index.getIngredientsLanguage()
  ).toEqual(italianLanguageCode);

  expect(
    index.isVeganIngredient('uova')
  ).toEqual(false);

  expect(
    index.checkIngredients(['manzo', 'maiale', 'glicina', 'biotina', 'soia', 'aglio'])
  ).toEqual(
    expect.objectContaining({
      nonvegan: ['manzo', 'maiale'],
      flagged: ['glicina', 'biotina']
    })
  );

  // Switch back to English
  expect(
    index.setIngredientsLanguage(englishLanguageCode)
  ).toBeUndefined();

  expect(
    index.getIngredientsLanguage()
  ).toEqual(englishLanguageCode);

  expect(
    index.isVeganIngredient('egg')
  ).toEqual(false);

  expect(
    index.checkIngredients(['milk', 'vitamin b12', 'onion'])
  ).toEqual(
    expect.objectContaining({
      nonvegan: ['milk'],
      flagged: ['vitamin b12']
    })
  );
});
