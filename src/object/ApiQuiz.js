var ApiQuiz = {};

function createObject1(prototypeObject) {
    return Object.create(prototypeObject);
}
 
function createObject2() {
    return Object.create(null);
}

function listingKeys(obj) {
    return Object.keys(obj);
}

function invert(obj) {
    let result = Object.create(null);
    result = invert(obj);
    return result;
}

function sumOfEvenValues(obj) {
  let result = obj.values(obj);
  return result;
}

function sumOfValuesOfUpperCasedKey(obj) {
  return Object.entries(obj);
}

function assignObject(obj) {
}

function assignMultipleObjects(objectArr) {
}

var ApiQuiz = {
    createObject1,
    createObject2,
    listingKeys,
    invert,
    sumOfEvenValues,
    sumOfValuesOfUpperCasedKey,
    assignObject,
    assignMultipleObjects,
}

module.exports = ApiQuiz;