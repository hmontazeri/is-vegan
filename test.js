// TODO: use Mocha // Chai

const isVegan = require('./dist');

// example for single ingredient
console.log(isVegan.isVeganIngredient('soy')); // true
console.log(isVegan.isVeganIngredient('milk')); // false

// example for list of ingredients
console.log(isVegan.isVeganIngredientList(['aspic', 'albumin'])); // false
console.log(isVegan.isVeganIngredientList(['soy', 'cacao butter'])); // true
