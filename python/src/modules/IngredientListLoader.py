import os, json

script_dir = os.path.dirname(__file__)

rel_path = "i18n/en/canbevegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as enCanBeVeganTxt:
    enCanBeVegan = json.load(enCanBeVeganTxt)

rel_path = "i18n/en/nonvegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as enNonVeganTxt:
    enNonVegan = json.load(enNonVeganTxt)

rel_path = "i18n/it/canbevegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as itCanBeVeganTxt:
    itCanBeVegan = json.load(itCanBeVeganTxt)

rel_path = "i18n/it/nonvegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as itNonVeganTxt:
    itNonVegan = json.load(itNonVeganTxt)

ingredientsList = {
    'en' : [enCanBeVegan, enNonVegan],
    'it' : [itCanBeVegan, itNonVegan]
}

def getLanguages():
    return [lang for lang in ingredientsList.keys()]

def getIngredientsLists():
    return ingredientsList