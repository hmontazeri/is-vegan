import * as ingredientsListProvider from '../src/modules/IngredientsListProvider';

test('should return list of can-be-vegan ingredients', () => {
  expect(ingredientsListProvider.getCanBeVeganList()).toEqual(expect.arrayContaining(['biotin', 'vitamin b12']));
});

test('should return list of non-vegan ingredients', () => {
  expect(ingredientsListProvider.getNonVeganList()).toEqual(expect.arrayContaining(['cheese', 'egg', 'meat']));
});
