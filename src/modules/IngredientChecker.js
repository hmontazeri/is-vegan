import { containsNonVeganIngredients } from './IsVegan';
import { containsFlaggedIngredients } from './CanBeVegan';

/**
 * This functions takes a given list of ingredients
 * and checks them against the non-vegan and the can-be-vegan list of ingredients
 * @param {[string]} ingredientsToCheck - the list of ingredients to check
 * @return {nonvegan: [], flagged:[]} with nonvegan and flagged ingredients
 */
export function checkIngredients (ingredientsToCheck) {
  const filteredElements = {
    // check non vegan ingredient
    nonvegan: containsNonVeganIngredients(ingredientsToCheck),
    // check flagged ingredient
    flagged: containsFlaggedIngredients(ingredientsToCheck)
  };
  return filteredElements;
}
