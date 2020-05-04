import * as ingredientsListProvider from '../src/modules/IngredientsListProvider';

afterEach(() => {
  ingredientsListProvider.setSelectedLanguage('en');
});

test('should return \'en\' as the selected language by default', () => {
  expect(ingredientsListProvider.getSelectedLanguage()).toEqual('en');
});

test('should allow selecting a supported language', () => {
  ingredientsListProvider.setSelectedLanguage('it');
  expect(ingredientsListProvider.getSelectedLanguage()).toEqual('it');
});

test('should NOT allow selecting a null language', () => {
  ingredientsListProvider.setSelectedLanguage(null);
  expect(ingredientsListProvider.getSelectedLanguage()).toEqual('en');
});

test('should NOT allow selecting an undefined language', () => {
  ingredientsListProvider.setSelectedLanguage(undefined);
  expect(ingredientsListProvider.getSelectedLanguage()).toEqual('en');
});

test('should NOT allow selecting an unsupported language', () => {
  ingredientsListProvider.setSelectedLanguage('fr');
  expect(ingredientsListProvider.getSelectedLanguage()).toEqual('en');
});

test('should return list of can-be-vegan ingredients', () => {
  expect(ingredientsListProvider.getCanBeVeganList()).toEqual(expect.arrayContaining(['biotin', 'vitamin b12']));
});

test('should return list of non-vegan ingredients', () => {
  expect(ingredientsListProvider.getNonVeganList()).toEqual(expect.arrayContaining(['cheese', 'egg', 'meat']));
});
