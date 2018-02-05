import blackList from '../util/nonvegan';

/**
 * This functions takes the given ingredient
 * and checks it against the black list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is not on blacklist
 */
export function isVeganIngredient (ingredientToCheck = '') {
  // true is empty
  if (ingredientToCheck.length === 0) return true;
  
  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase() ;

  return !blackList.includes(formattedIngredientToCheck);
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the black list of ingredients
 * @param {[string]} ingredientsToCheck - the lit of ingredients to check
 * @return <code>true</code> if ingredients are not on blacklist
 */
export function isVeganIngredientList (ingredientsToCheck = []) {
  // jump out if input is empty
  let ingredient = null;
  for (let index = 0; index < ingredientsToCheck.length; index++) {
    ingredient = ingredientsToCheck[index];
    if (!isVeganIngredient(ingredient)) {
      return false;
    }
  }
  return true;
}
