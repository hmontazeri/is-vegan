// import fs from 'fs';
// const file = JSON.parse(fs.readFileSync('src/util/nonvegan.json', 'utf8'));

// function uniq(a) {
//   return a.sort().filter(function(item, pos, ary) {
//     return !pos || item != ary[pos - 1];
//   });
// }

// console.log(JSON.stringify(uniq(file)));

const isVegan = require('./dist');

console.log(isVegan.isVeganIngredient('AcId'));
// console.log(isVegan);
