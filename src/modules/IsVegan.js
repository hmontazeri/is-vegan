import fs from 'fs';

const blackList = JSON.parse(fs.readFileSync('src/util/nonvegan.json', 'utf8'));

/**
 * This functions takes the given ingredient
 * and checks it against the black list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is not on blacklist
 */
export function isVeganIngredient(ingredientToCheck = '') {
  // true is empty
  if (ingredientToCheck.length === 0) return true;

  if (!blackList.includes(ingredientToCheck)) {
    return true;
  } else {
    return false;
  }
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the black list of ingredients
 * @param {string} ingredientsToCheck - the lit of ingredients to check
 * @return <code>true</code> if ingredients are not on blacklist
 */
export function isVeganIngredientList(ingredientsToCheck = []) {
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
