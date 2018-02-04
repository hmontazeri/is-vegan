# is-vegan

is-vegan helps you to find out which ingridiends are not vegan. It can answer that on 1 ingredient or on a list of ingredients. [How to use?](#Usage)

## Sources

We want to make sure that you understand how is-vegan is implemented. We analyzed as many good information websites for vegan / non-vegan ingredients as we found to get a very accurate list of ingredients. However, do not hesitate to send a pull request with an updated version of the list.

Websites we parsed:

* [veganwolf](http://www.veganwolf.com/animal_ingredients.htm)
* [peta](https://www.peta.org/living/food/animal-ingredients-list/)
* [veganpeace](http://www.veganpeace.com/ingredients/ingredients.htm)

**and we added also a few ourselves...**

## Usage

### Add

`yarn add is-vegan`

or

`npm install is-vegan --save`

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

// or

import { isVeganIngredient, isVeganIngredientList } from 'is-vegan';

// example for single ingredient
isVeganIngredient('soy'); // true
isVeganIngredient('milk'); // false

// example for list of ingredients
isVeganIngredientList(['aspic', 'albumin']); // false
isVeganIngredientList(['soy', 'cacao butter']); // true

```

## TODO

* add tests
* extend list
