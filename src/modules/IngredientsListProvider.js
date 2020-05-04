import enCanBeVeganList from '../i18n/en/canbevegan.json';
import enNonVeganList from '../i18n/en/nonvegan.json';

var validate = require('validate.js');

const supportedLanguages = ['en', 'it'];
var selectedLanguage = supportedLanguages[0];

/**
 * This functions returns the selected language
 * @return {string} The ISO 639-1 code of the selected language
 */
export function getSelectedLanguage () {
  return selectedLanguage;
}

/**
 * This functions sets the selected language
 * @param {string} value - The ISO 639-1 code of the language to select
 * @return {undefined}
 */
export function setSelectedLanguage (value) {
  const validationConstraints = {
    language: {
      presence: true,
      inclusion: {
        within: supportedLanguages,
        message: '^Language \'%{value}\' is currently not supported'
      }
    }
  };

  const validationResult = validate({language: value}, validationConstraints);
  if (validationResult !== undefined) {
    console.log(validationResult);
    return;
  }

  selectedLanguage = value;
}

/**
 * This functions returns the can-be-vegan list of ingredients
 * @return The can-be-vegan list of ingredients
 */
export function getCanBeVeganList () {
  return enCanBeVeganList;
}

/**
 * This functions returns the non-vegan list of ingredients
 * @return The non-vegan list of ingredients
 */
export function getNonVeganList () {
  return enNonVeganList;
}
