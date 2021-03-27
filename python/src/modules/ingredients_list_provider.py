import ingredient_list_loader as ill

supported_languages = ill.get_languages()
ingredients_language = supported_languages[0]

def get_ingredients_language():
  '''Return the currently selected ingredients language.'''
  return ingredients_language

def validate_ingredients_language(value):
  '''Validates the ingredients language.'''
  if (not(isinstance(value, str)) or value == None or len(value.replace(" ", "")) == 0 or len(value.replace(" ", "")) != 2):
    return 'Language must be a two-letter code (ISO 639-1)'
  if(value.lower() not in supported_languages):
    return 'Language not supported'
  return None

def set_ingredients_language(value):
  '''
    Sets the ingredients language.
    value = two-letter lang code (ISO 639-1).
  '''
  validation_error = validate_ingredients_language(value)
  if(validation_error != None):
    raise Exception("validation_error")
  ingredients_language = value

def get_can_be_vegan_list():
  '''Return the can-be-vegan list of ingredients.'''
  return ill.get_ingredients_lists()[ingredients_language][0]

def get_non_vegan_list():
  '''Return the non-vegan list of ingredients.'''
  return ill.get_ingredients_lists()[ingredients_language][1]

