import blackList from '../util/nonvegan.json';

/**
 * This functions takes the given ingredient
 * and checks it against the black list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is not on blacklist
 */
export function isVeganIngredient (ingredientToCheck = '') {
  // true is empty
  if (ingredientToCheck.length === 0) return true;

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase();

  return !blackList.includes(formattedIngredientToCheck);
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
