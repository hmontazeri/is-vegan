import { getLanguages, getIngredientsLists } from './IngredientsListsLoader';

const supportedLanguages = getLanguages();
var ingredientsLanguage = supportedLanguages[0];

/**
 * This functions returns the currently selected ingredients language
 * @return {string} The two-letter code (ISO 639-1) of the currently selected ingredients language
 */
export function getIngredientsLanguage () {
  return ingredientsLanguage;
}

/**
 * This functions sets the ingredients language
 * @param {string} value - The two-letter code (ISO 639-1) of the ingredients language to set
 * @return {undefined}
 * @throws Will throw an error if validation fails
*/
export function setIngredientsLanguage (value) {
  const validationError = validateIngredientsLanguage(value);

  if (validationError !== null) throw new Error(validationError);

  ingredientsLanguage = value;
}

/**
 * This functions returns the can-be-vegan list of ingredients
 * @return The can-be-vegan list of ingredients
 */
export function getCanBeVeganList () {
  return getIngredientsLists()[ingredientsLanguage][0];
}

/**
 * This functions returns the non-vegan list of ingredients
 * @return The non-vegan list of ingredients
 */
export function getNonVeganList () {
  return getIngredientsLists()[ingredientsLanguage][1];
}

/**
 * This functions validates the ingredients language
 * @param {string} value - The ingredients language to validate
 * @return {string} A human readable validation error if the ingredients language is not valid. Otherwise <code>null</code>
*/
function validateIngredientsLanguage (value) {
  if (typeof value !== 'string' || value === null || value.trim().length === 0 || value.length !== 2) return 'Language must be a two-letter code (ISO 639-1)';

  if (!supportedLanguages.includes(value)) return `Language '${value}' is currently not supported`;

  return null;
}
