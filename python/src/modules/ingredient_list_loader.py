import os, json

script_dir = os.path.dirname(__file__)

rel_path = "i18n/en/canbevegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as en_can_be_vegan_txt:
    en_can_be_vegan = json.load(en_can_be_vegan_txt)

rel_path = "i18n/en/nonvegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as en_non_vegan_txt:
    en_non_vegan = json.load(en_non_vegan_txt)

rel_path = "i18n/it/canbevegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as it_can_be_vegan_txt:
    it_can_be_vegan = json.load(it_can_be_vegan_txt)

rel_path = "i18n/it/nonvegan.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path, 'r') as it_non_vegan_txt:
    it_non_vegan = json.load(it_non_vegan_txt)

ingredients_list = {
    'en' : [en_can_be_vegan, en_non_vegan],
    'it' : [it_can_be_vegan, it_non_vegan]
}

def get_languages():
    '''Return supported languages.'''
    return [lang for lang in ingredients_list.keys()]

def get_ingredients_lists():
    '''Return the ingredients lists for each language.'''
    return ingredients_list
