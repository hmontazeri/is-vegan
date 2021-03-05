from IngredientsListProvider import getNonVeganList

def isVeganIngredient(ingredientToCheck):
    if(ingredientToCheck == ''):
        return True
    ingredientToCheck = ingredientToCheck.strip().lower().replace(" ", "")
    nonVeganList = [i.lower().strip().replace(" ","") for i in getNonVeganList()]

    if (ingredientToCheck in nonVeganList):
        return False
    return True

def containsNonVeganIngredients(ingredientsToCheck):
    ingredientsToCheck = [i.strip().lower().replace(" ", "") for i in ingredientsToCheck]
    nonVeganList = [i.lower().strip().replace(" ","") for i in getNonVeganList()]
    return [i for i in ingredientsToCheck if i in nonVeganList]

def isVeganIngredientList(ingredientsToCheck):
    return not bool([i.lower().strip().replace(" ","") for i in ingredientsToCheck if i in getNonVeganList()])