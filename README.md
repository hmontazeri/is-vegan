# is-vegan

Is-Vegan helps you to find out which food ingredients are vegan / non-vegan. It can answer that on 1 ingredient or on a list of ingredients. It uses the 850+ entries black list of non-vegan ingredients.

[How to use?](#usage)

## Why?

We are aware that 'veganism' and the definition of it can be a hot topic. We created the blacklist keeping in mind that veganism in dietary terms, it denotes the practice of dispensing with all products derived wholly or partly from animals.

Our first step is the approach to help people understand, which products, and where applicable its ingredients, do not involve, or have involved, the use of any animal product, by-product or derivative. It is not driven about any vegan lifestyle choice or stereotype.
We welcome and appreciate any help and concerence regarding the blacklist/canbevegan list.

Currently we are unfortunatly not adressing any other forms of exploitation of, and cruelty to, animals for clothing, cosmetics or any other purpose.

**Thank you all for your comments, we appreciate the discussion, as we grow and learn from your input.**

## Sources

We want to make sure that you understand how is-vegan is implemented. We analyzed as many good information websites for vegan / non-vegan ingredients as we found to get a very accurate list of ingredients. **However, feel free to send a pull request with an updated version of the list.**

Websites we parsed:

* [veganpeace](http://www.veganpeace.com/ingredients/ingredients.htm)
* [peta](https://www.peta.org/living/food/animal-ingredients-list/)
* [veganwolf](http://www.veganwolf.com/animal_ingredients.htm)

**and we added also a few ourselves...**

## Usage

### Add

``` bash
yarn add is-vegan
```

or

``` bash
npm install is-vegan --save
```

### example

```javascript
const isVegan = require('is-vegan');

// or

import * as isVegan from 'is-vegan';

// example for single ingredient
isVegan.isVeganIngredient('soy'); // true
isVegan.isVeganIngredient('milk'); // false

// example for list of ingredients
isVegan.isVeganIngredientList(['aspic', 'albumin']); // false
isVegan.isVeganIngredientList(['soy', 'cacao butter']); // true

// example for list of ingredients
isVegan.containsNonVeganIngredients(['aspic', 'albumin', 'soy']); // ['aspic', 'albumin']
isVegan.containsNonVeganIngredients(['soy', 'cacao butter']); // []

// or

import {
  isVeganIngredient,
  isVeganIngredientList,
  containsNonVeganIngredients
} from 'is-vegan';

// example for single ingredient
isVeganIngredient('soy'); // true
isVeganIngredient('milk'); // false

// example for list of ingredients
isVeganIngredientList(['aspic', 'albumin']); // false
isVeganIngredientList(['soy', 'cacao butter']); // true

// example for list of ingredients
containsNonVeganIngredients(['aspic', 'albumin', 'soy']); // ['aspic', 'albumin']
containsNonVeganIngredients(['soy', 'cacao butter']); // []
```

### real world example

[Products searched on USDA Food Composition Databases](https://ndb.nal.usda.gov/ndb/search/list)

```javascript
const isVegan = require('is-vegan');

// MOSER ROTH, DARK CHOCOLATE
isVegan.isVeganIngredientList([
  'COCOA LIQUOR',
  'SUGAR',
  'COCOA BUTTER',
  'ALKALIZED REDUCED FAT COCOA POWDER',
  'SOY LECITHIN EMULSIFIER',
  'GROUND VANILLA'
]); // returns true

// MISSION PIZZA CO., THIN CRUST PIZZA, COMBINATION
isVegan.isVeganIngredientList([
  'WATER',
  'WHEAT FLOUR',
  'PASTEURIZED MILK',
  'PORK',
  'TOMATOES',
  'LIQUID & HYDROGENATED SOYBEAN OIL',
  'CONTAINS 2% OR LESS OF THE FOLLOWING: PALM OIL',
  'YEAST',
  'SALT',
  'MECHANICALLY SEPARATED CHICKEN',
  'CORN MEAL',
  'DEHYDRATED POTATOES',
  'SUGAR',
  'SPICES & SPICE EXTRACTIVES (INCLUDING PAPRIKA)',
  'BEEF',
  'CHEESE CULTURES',
  'WHEAT GLUTEN',
  'CULTURED WHEY',
  'WHEY',
  'ENZYMES',
  'SODIUM ASCORBATE',
  'VINEGAR',
  'NATURAL & ARTIFICIAL FLAVOR',
  'DEXTROSE',
  'LACTIC ACID STARTER CULTURE',
  'OLEORESIN OF PAPRIKA',
  'LECITHIN',
  'SODIUM NITRITE',
  'CORN STARCH',
  'MONOCALCIUM PHOSPHATE',
  'SODIUM ACID PYROPHOSPHATE',
  'SODIUM BICARBONATE',
  'PROCESSING AIDS',
  'CITRIC ACID',
  'BETA CAROTENE',
  'DIMETHYLPOLYSILOXANE',
  'SOY LECITHIN',
  'TBHQ',
  'ONION POWDER',
  'GRALIC POWDER',
  'BHA',
  'BHT',
  'SOYBEAN OIL (PROCESSING AID)',
  'ASCORBIC ACID',
  'FERROUS SULFATE',
  'FOLIC ACID',
  'NIACIN',
  'RIBOFLAVIN',
  'THIAMINE MONONITRATE'
]); // returns false

// MISSION PIZZA CO., THIN CRUST PIZZA, COMBINATION
isVegan.containsNonVeganIngredients([
  'WATER',
  'WHEAT FLOUR',
  'PASTEURIZED MILK',
  'PORK',
  'TOMATOES',
  'LIQUID & HYDROGENATED SOYBEAN OIL',
  'CONTAINS 2% OR LESS OF THE FOLLOWING: PALM OIL',
  'YEAST',
  'SALT',
  'MECHANICALLY SEPARATED CHICKEN',
  'CORN MEAL',
  'DEHYDRATED POTATOES',
  'SUGAR',
  'SPICES & SPICE EXTRACTIVES (INCLUDING PAPRIKA)',
  'BEEF',
  'CHEESE CULTURES',
  'WHEAT GLUTEN',
  'CULTURED WHEY',
  'WHEY',
  'ENZYMES',
  'SODIUM ASCORBATE',
  'VINEGAR',
  'NATURAL & ARTIFICIAL FLAVOR',
  'DEXTROSE',
  'LACTIC ACID STARTER CULTURE',
  'OLEORESIN OF PAPRIKA',
  'LECITHIN',
  'SODIUM NITRITE',
  'CORN STARCH',
  'MONOCALCIUM PHOSPHATE',
  'SODIUM ACID PYROPHOSPHATE',
  'SODIUM BICARBONATE',
  'PROCESSING AIDS',
  'CITRIC ACID',
  'BETA CAROTENE',
  'DIMETHYLPOLYSILOXANE',
  'SOY LECITHIN',
  'TBHQ',
  'ONION POWDER',
  'GRALIC POWDER',
  'BHA',
  'BHT',
  'SOYBEAN OIL (PROCESSING AID)',
  'ASCORBIC ACID',
  'FERROUS SULFATE',
  'FOLIC ACID',
  'NIACIN',
  'RIBOFLAVIN',
  'THIAMINE MONONITRATE'
]); // returns ['MECHANICALLY SEPARATED CHICKEN','PASTEURIZED MILK', 'PORK', 'BEEF', 'WHEY']
```

## TODO

* add tests
* extend list

## Authors

* Hamed Montazeri
* Meike Rittmeier
