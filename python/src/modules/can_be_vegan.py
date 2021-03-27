from ingredients_list_provider import get_can_be_vegan_list 

def is_flagged_ingredient(ingredient_to_check):
    '''
    Takes an ingredient as an argument and checks it agains the can-be-vegan list.
    If found return false, else return true.
    '''
    if(len(ingredient_to_check) == 0):
        return true
    ingredient_to_check = ingredient_to_check.strip().lower()
    return ingredient_to_check in get_can_be_vegan_list()

def contains_flagged_ingredients(ingredients_to_check):
    '''
    Takes an ingredients list as an argument and checks it agains the can-be-vegan list.
    If found returns a list with the can-be-vegan ingredients.
    '''
    return [i.strip().lower() for i in ingredients_to_check if i in get_can_be_vegan_list()]