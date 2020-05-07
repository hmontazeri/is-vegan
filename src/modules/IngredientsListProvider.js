import { getLanguages, getIngredientsLists } from './IngredientsListsLoader';

var validate = require('validate.js');

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
  const validationConstraints = {
    language: {
      presence: true,
      inclusion: {
        within: supportedLanguages,
        message: '^Language \'%{value}\' is currently not supported'
      }
    }
  };

  const validationErrors = validate({language: value}, validationConstraints);
  if (validationErrors !== undefined) {
    const errorMessage = Object.values(validationErrors)[0];
    throw new Error(errorMessage);
  }

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
