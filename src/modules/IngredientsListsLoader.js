import enCanBeVeganList from '../i18n/en/canbevegan.json';
import enNonVeganList from '../i18n/en/nonvegan.json';
import itCanBeVeganList from '../i18n/it/canbevegan.json';
import itNonVeganList from '../i18n/it/nonvegan.json';

const ingredientsLists = {
  'en': [enCanBeVeganList, enNonVeganList],
  'it': [itCanBeVeganList, itNonVeganList]
};

/**
 * This functions returns the list of languages
 * @return {string[]} Array of language two-letter codes (ISO 639-1)
 */
export function getLanguages () {
  return Object.keys(ingredientsLists);
}

/**
 * This functions returns the ingredients lists for each language
 * @return {Object.<string, string[][]>} Dictionary of ingredients lists. The dictionary key is the two-letter code (ISO 639-1) of the ingredients language. The dictionary value is an array whose first element is the can-be-vegan list and the second element is the non-vegan list
 */
export function getIngredientsLists () {
  return ingredientsLists;
}
