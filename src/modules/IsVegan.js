import blacklistsource from '../util/nonvegan.json';
var blacklist = blacklistsource.map(x => x.trim().toLowerCase());

/**
 * This functions takes the given ingredient
 * and checks it against the black list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is not on blacklist
 */
export function isVeganIngredient (ingredientToCheck = '') {
  // true if empty
  if (ingredientToCheck.length === 0) return true;

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase();

  return !blacklist.includes(formattedIngredientToCheck);
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the black list of ingredients
 * @param {[string]} ingredientsToCheck - the lit of ingredients to check
 * @return <code>true</code> if ingredients are not on blacklist
 */
export function isVeganIngredientList (ingredientsToCheck = []) {
  return !ingredientsToCheck.some(ingredient => !isVeganIngredient(ingredient));
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the black list of ingredients
 * @param {[string]} ingredientsToCheck - the lit of ingredients to check
 * @return Array of ingredients that are non vegan
 */
export function containsNonVeganIngredients (ingredientsToCheck = []) {
  return ingredientsToCheck.filter(
    ingredient => !isVeganIngredient(ingredient)
  );
}
