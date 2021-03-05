import IngredientListLoader as ill

supportedLanguages = ill.getLanguages()
ingredientsLanguage = supportedLanguages[0]

def getIngredientsLanguage():
  return ingredientsLanguage

def validateIngredientsLanguage(value):
  if (not(isinstance(value, str)) or value == None or len(value.replace(" ", "")) == 0 or len(value.replace(" ", "")) != 2):
    return 'Language must be a two-letter code (ISO 639-1)'
  if(value.lower() not in supportedLanguages):
    return 'Language not supported'
  return None

def setIngredientsLanguage(value):
  validationError = validateIngredientsLanguage(value)
  if(validationError != None):
    raise Exception("validationError")
  ingredientsLanguage = value

def getCanBeVeganList():
  return ill.getIngredientsLists()[ingredientsLanguage][0]

def getNonVeganList():
  return ill.getIngredientsLists()[ingredientsLanguage][1]

