import { getNonVeganList } from './IngredientsListProvider';

/**
 * This functions takes the given ingredient
 * and checks it against the non-vegan list of ingredients
 * @param ingredientToCheck - the ingredient to check
 * @return if ingredient is in nonVeganList or if all ingredient words are in nonVeganList. Otherwise true
 */
export function isVeganIngredient (ingredientToCheck: string): boolean {
  // true if empty
  if (ingredientToCheck.length === 0) return true;

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase();

  const nonVeganListIncludesIngredient = getNonVeganList().includes(formattedIngredientToCheck);
  if (nonVeganListIncludesIngredient === true) return false;

  const ingredientWords = formattedIngredientToCheck.split(' ');
  if (ingredientWords.length > 1 && ingredientWords.every(word => !isVeganIngredient(word))) return false;

  return true;
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the non-vegan list of ingredients
 * @param ingredientsToCheck - the lit of ingredients to check
 * @return if ingredients are not in nonVeganList
 */
export function isVeganIngredientList (ingredientsToCheck: string[]): boolean {
  return !ingredientsToCheck.some(ingredient => !isVeganIngredient(ingredient));
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the non-vegan list of ingredients
 * @param ingredientsToCheck - the lit of ingredients to check
 * @return Array of ingredients that are non-vegan
 */
export function containsNonVeganIngredients (ingredientsToCheck: string[]): string[] {
  return ingredientsToCheck.filter(
    ingredient => !isVeganIngredient(ingredient)
  );
}
