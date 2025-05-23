import { getCanBeVeganList } from './IngredientsListProvider';

/**
 * This functions takes the given ingredient
 * and checks it against the can-be-vegan list of ingredients
 * @param ingredientToCheck - the ingredient to check
 * @return if ingredient is on can-be-vegan list
 */
export function isFlaggedIngredient (ingredientToCheck: string): boolean {
  // true if empty
  if (ingredientToCheck.length === 0) return true;

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase();

  return getCanBeVeganList().includes(formattedIngredientToCheck);
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the can-be-veagn list of ingredients
 * @param ingredientsToCheck - the list of ingredients to check
 * @return Array of ingredients that are considered as flagged / can-be-vegan
 */
export function containsFlaggedIngredients (ingredientsToCheck: string[]): string[] {
  return ingredientsToCheck.filter(ingredient =>
    isFlaggedIngredient(ingredient)
  );
}
