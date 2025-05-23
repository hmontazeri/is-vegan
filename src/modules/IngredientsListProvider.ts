import { getLanguages, getIngredientsLists } from './IngredientsListsLoader';

const supportedLanguages = getLanguages();
let ingredientsLanguage = supportedLanguages[0];

/**
 * This functions returns the currently selected ingredients language
 * @return The two-letter code (ISO 639-1) of the currently selected ingredients language
 */
export function getIngredientsLanguage (): string {
  return ingredientsLanguage;
}

/**
 * This functions sets the ingredients language
 * @param value - The two-letter code (ISO 639-1) of the ingredients language to set
 * @throws Will throw an error if validation fails
 */
export function setIngredientsLanguage (value: string | null | undefined): void {
  const validationError = validateIngredientsLanguage(value);

  if (validationError !== null) throw new Error(validationError);

  ingredientsLanguage = value as string;
}

/**
 * This functions returns the can-be-vegan list of ingredients
 * @return The can-be-vegan list of ingredients
 */
export function getCanBeVeganList (): string[] {
  return getIngredientsLists()[ingredientsLanguage][0];
}

/**
 * This functions returns the non-vegan list of ingredients
 * @return The non-vegan list of ingredients
 */
export function getNonVeganList (): string[] {
  return getIngredientsLists()[ingredientsLanguage][1];
}

/**
 * This functions validates the ingredients language
 * @param value - The ingredients language to validate
 * @return A human readable validation error if the ingredients language is not valid. Otherwise null
 */
function validateIngredientsLanguage (value: any): string | null {
  if (
    typeof value !== 'string' ||
    value === null ||
    value.trim().length === 0 ||
    value.length !== 2
  ) { return 'Language must be a two-letter code (ISO 639-1)'; }

  if (!supportedLanguages.includes(value)) { return `Language '${value}' is currently not supported`; }

  return null;
}
