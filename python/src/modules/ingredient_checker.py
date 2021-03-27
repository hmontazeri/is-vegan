from is_vegan import contains_non_vegan_ingredients
from can_be_vegan import contains_flagged_ingredients

def check_ingredients(ingredients_to_check):
    '''
    This functions takes a list of ingredients
    and checks them against both the non-vegan and the can-be-vegan list of ingredients
    returns {nonvegan: [], flagged:[]} with nonvegan and flagged ingredients
    '''
    filtered_elements = {
        'nonvegan': contains_non_vegan_ingredients(ingredients_to_check),
        'flagged': contains_flagged_ingredients(ingredients_to_check)
    }

    return filtered_elements
