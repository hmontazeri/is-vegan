import * as ingredientsListProvider from '../src/modules/IngredientsListProvider';

const englishLanguageCode = 'en';

afterEach(() => {
  ingredientsListProvider.setIngredientsLanguage(englishLanguageCode);
});

test('should return English as the ingredients language selected by default', () => {
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should allow setting a supported ingredients language', () => {
  const italianLanguageCode = 'it';
  ingredientsListProvider.setIngredientsLanguage(italianLanguageCode);
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(italianLanguageCode);
});

test('should NOT allow setting a null ingredients language', () => {
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage(null);
  }).toThrow(new Error('Language can\'t be blank'));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should NOT allow setting an undefined ingredients language', () => {
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage(undefined);
  }).toThrow(new Error('Language can\'t be blank'));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should NOT allow setting an unsupported ingredients language', () => {
  const frenchLanguageCode = 'fr';
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage(frenchLanguageCode);
  }).toThrow(new Error(`Language '${frenchLanguageCode}' is currently not supported`));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should return list of can-be-vegan ingredients', () => {
  expect(ingredientsListProvider.getCanBeVeganList()).toEqual(expect.arrayContaining(['biotin', 'vitamin b12']));
});

test('should return list of non-vegan ingredients', () => {
  expect(ingredientsListProvider.getNonVeganList()).toEqual(expect.arrayContaining(['cheese', 'egg', 'meat']));
});
