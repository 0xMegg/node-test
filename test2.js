const { invert } = require("lodash");

let result = Object.create(null);
console.log(result);
let obj = { a: 1, b: 2};
console.log(obj);
result = invert(obj);
console.log(obj);
console.log(result);
