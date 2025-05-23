import * as ingredientsListsLoader from '../src/modules/IngredientsListsLoader';

test('should return the list of languages', () => {
  expect(ingredientsListsLoader.getLanguages()).toEqual(['en', 'it', 'es', 'fr', 'de']);
});

test('should return the English ingredients list', () => {
  const ingredientsList = ingredientsListsLoader.getIngredientsLists().en;
  expect(ingredientsList).toBeTruthy();
  expect(ingredientsList).toHaveLength(2);
  expect(ingredientsList[0]).toEqual(expect.arrayContaining(['biotin', 'vitamin b12']));
  expect(ingredientsList[1]).toEqual(expect.arrayContaining(['cheese', 'egg', 'milk']));
});

test('should return the Italian ingredients list', () => {
  const ingredientsList = ingredientsListsLoader.getIngredientsLists().it;
  expect(ingredientsList).toBeTruthy();
  expect(ingredientsList).toHaveLength(2);
  expect(ingredientsList[0]).toEqual(expect.arrayContaining(['biotina', 'vitamina b12']));
  expect(ingredientsList[1]).toEqual(expect.arrayContaining(['formaggio', 'latte', 'uova']));
});

test('should return the Spanish ingredients list', () => {
  const ingredientsList = ingredientsListsLoader.getIngredientsLists().es;
  expect(ingredientsList).toBeTruthy();
  expect(ingredientsList).toHaveLength(2);
  expect(ingredientsList[0]).toEqual(expect.arrayContaining(['biotina', 'vitamina b12']));
  expect(ingredientsList[1]).toEqual(expect.arrayContaining(['queso', 'leche', 'huevo']));
});

test('should return the French ingredients list', () => {
  const ingredientsList = ingredientsListsLoader.getIngredientsLists().fr;
  expect(ingredientsList).toBeTruthy();
  expect(ingredientsList).toHaveLength(2);
  expect(ingredientsList[0]).toEqual(expect.arrayContaining(['biotine', 'vitamine b12']));
  expect(ingredientsList[1]).toEqual(expect.arrayContaining(['fromage', 'lait', 'œuf']));
});

test('should return the German ingredients list', () => {
  const ingredientsList = ingredientsListsLoader.getIngredientsLists().de;
  expect(ingredientsList).toBeTruthy();
  expect(ingredientsList).toHaveLength(2);
  expect(ingredientsList[0]).toEqual(expect.arrayContaining(['biotin', 'vitamin b12']));
  expect(ingredientsList[1]).toEqual(expect.arrayContaining(['käse', 'milch', 'ei']));
});
