from IngredientsListProvider import getCanBeVeganList 

def isFlaggedIngredient(ingredientToCheck):
    if(len(ingredientToCheck) == 0):
        return true
    ingredientToCheck = ingredientToCheck.strip().lower()
    return ingredientToCheck in getCanBeVeganList()

def containsFlaggedIngredients(ingredientsToCheck):
    return [i.strip().lower() for i in ingredientsToCheck if i in getCanBeVeganList()]