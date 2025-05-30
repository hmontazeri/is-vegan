import enCanBeVeganList from '../i18n/en/canbevegan.json';
import enNonVeganList from '../i18n/en/nonvegan.json';
import itCanBeVeganList from '../i18n/it/canbevegan.json';
import itNonVeganList from '../i18n/it/nonvegan.json';
import esCanBeVeganList from '../i18n/es/canbevegan.json';
import esNonVeganList from '../i18n/es/nonvegan.json';
import frCanBeVeganList from '../i18n/fr/canbevegan.json';
import frNonVeganList from '../i18n/fr/nonvegan.json';
import deCanBeVeganList from '../i18n/de/canbevegan.json';
import deNonVeganList from '../i18n/de/nonvegan.json';

const ingredientsLists = {
  en: [enCanBeVeganList, enNonVeganList],
  it: [itCanBeVeganList, itNonVeganList],
  es: [esCanBeVeganList, esNonVeganList],
  fr: [frCanBeVeganList, frNonVeganList],
  de: [deCanBeVeganList, deNonVeganList]
};

/**
 * This functions returns the list of languages
 * @return Array of language two-letter codes (ISO 639-1)
 */
export function getLanguages (): string[] {
  return Object.keys(ingredientsLists);
}

/**
 * This functions returns the ingredients lists for each language
 * @return Dictionary of ingredients lists. The dictionary key is the two-letter code (ISO 639-1) of the ingredients language. The dictionary value is an array whose first element is the can-be-vegan list and the second element is the non-vegan list
 */
export function getIngredientsLists (): Record<string, string[][]> {
  return ingredientsLists;
}
