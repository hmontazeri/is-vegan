from IsVegan import containsNonVeganIngredients
from CanBeVegan import containsFlaggedIngredients

def checkIngredients(ingredientsToCheck):
    filteredElements = {
        'nonvegan': containsNonVeganIngredients(ingredientsToCheck),
        'flagged': containsFlaggedIngredients(ingredientsToCheck)
    }

    return filteredElements
