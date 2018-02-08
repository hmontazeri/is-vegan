import flaggedList from '../util/canbevegan.json';

/**
 * This functions takes the given ingredient
 * and checks it against the flagged list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is on flaggedList
 */
export function isFlaggedIngredient (ingredientToCheck = '') {
  // true if empty
  if (ingredientToCheck.length === 0) return true;

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase();

  return flaggedList.includes(formattedIngredientToCheck);
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the flagged list of ingredients
 * @param {[string]} ingredientsToCheck - the lit of ingredients to check
 * @return Array of ingredients that are considered as flagged
 */
export function containsFlaggedIngredients (ingredientsToCheck = []) {
  return ingredientsToCheck.filter(ingredient =>
    isFlaggedIngredient(ingredient)
  );
}
