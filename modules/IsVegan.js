/**
 * This functions takes the given ingredient
 * and checks it against the black list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @
 */
export function isVeganIngredient(ingredientToCheck = '') {
  // jump out if input is empty
  if (ingredientToCheck.length === 0) return true;

  // lower case it to match black list
  ingredientToCheck = ingredientToCheck.toLowerCase();

  //TODO: load list and check it against it
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the black list of ingredients
 * @param {string} ingredientsToCheck - the lit of ingredients to check
 */
export function isVeganIngredientList(ingredientsToCheck = []) {
  // jump out if input is empty
  if (ingredientsToCheck.length === 0) return true;

  // lower cases all to match black list
  ingredientsToCheck = ingredientsToCheck.map(ingredient =>
    ingredient.toLowerCase()
  );

  //TODO: load list and check it against it
}
