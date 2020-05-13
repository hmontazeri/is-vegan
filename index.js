import {
  isVeganIngredient,
  isVeganIngredientList,
  containsNonVeganIngredients
} from './src/modules/IsVegan';
import { checkIngredients } from './src/modules/IngredientChecker';
import { getIngredientsLanguage, setIngredientsLanguage } from './src/modules/IngredientsListProvider';
export {
  isVeganIngredient,
  isVeganIngredientList,
  containsNonVeganIngredients,
  checkIngredients,
  getIngredientsLanguage,
  setIngredientsLanguage
};
