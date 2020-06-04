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
  }).toThrow(new Error('Language must be a two-letter code (ISO 639-1)'));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should NOT allow setting an undefined ingredients language', () => {
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage(undefined);
  }).toThrow(new Error('Language must be a two-letter code (ISO 639-1)'));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should NOT allow setting an empty ingredients language', () => {
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage('');
  }).toThrow(new Error('Language must be a two-letter code (ISO 639-1)'));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should NOT allow setting an ingredients language longer than two characters', () => {
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage('italian');
  }).toThrow(new Error('Language must be a two-letter code (ISO 639-1)'));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should NOT allow setting an unsupported ingredients language', () => {
  const frenchLanguageCode = 'fr';
  expect(() => {
    ingredientsListProvider.setIngredientsLanguage(frenchLanguageCode);
  }).toThrow(new Error(`Language '${frenchLanguageCode}' is currently not supported`));
  expect(ingredientsListProvider.getIngredientsLanguage()).toEqual(englishLanguageCode);
});

test('should return list of English can-be-vegan ingredients', () => {
  expect(ingredientsListProvider.getCanBeVeganList()).toEqual(expect.arrayContaining(['biotin', 'vitamin b12']));
});

test('should return list of English non-vegan ingredients', () => {
  expect(ingredientsListProvider.getNonVeganList()).toEqual(expect.arrayContaining(['cheese', 'egg', 'meat']));
});

test('should return list of Italian can-be-vegan ingredients', () => {
  ingredientsListProvider.setIngredientsLanguage('it');
  expect(ingredientsListProvider.getCanBeVeganList()).toEqual(expect.arrayContaining(['biotina', 'vitamina b12']));
});

test('should return list of Italian non-vegan ingredients', () => {
  ingredientsListProvider.setIngredientsLanguage('it');
  expect(ingredientsListProvider.getNonVeganList()).toEqual(expect.arrayContaining(['formaggio', 'uova', 'carne']));
});
