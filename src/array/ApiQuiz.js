function lengthOfArrays(arrs) {
  let result = [];
  // for (let i=0, len=arrs.length; i<len; i++){
  for (let i = 0; i < arrs.length; i++) {
    result.push(arrs[i].length);
  }
  return result;
}

function popAndPush(arr, x, n, m) {
  for (let i = 0; i < n; i++) {
    arr.pop();
  }
  for (let i = 0; i < m; i++) {
    arr.push(x);
  }
  return arr;
}

function shiftAndUnShift(arr1, arr2, n) {
  for (let i = 0; i < n; i++) {
    arr2.unshift(arr1.shift());
  }
  return arr2;
}

// 
function concatenation(arr, n) {
  let arr2 = [];
  for (let i = 0; i < n; i++) {
    arr2 = arr2.concat(arr);
  }
  return arr2;
}

function slicingArray(arr1, n, m) {
    let arr2 = [];
    const arr3 = arr1.slice(0, n);
    const arr4 = arr1.slice(-m);
    arr2 = arr3.concat(arr4);
    return arr2;
}

function overHalf(arr, target) {
    const finded = arr.indexOf(target) + 1;
    const mid = (arr.length + 1) / 2;
    if(mid <= finded){
      return true;
    }
    return false;
}

function hasUniqueTargetNumber(arr, target) {
    const io = arr.indexOf(target);
    const lio = arr.lastIndexOf(target);
    if(io>0 && lio>0){
      if(io == lio){
        return true;
      }
    }
    return false;
}

function hasAnyElement(arr1, arr2) {
  let bool = false;
  for(let i=0;i<arr2.length;i++){
    if(arr1.includes(arr2[i])){
      bool = true;
    }
  }
  return bool;
}

function splicingArray(arr1, n, m) {
  let arr2 = [];
  let arr3 = []; 
  arr2 = arr1.splice(0, n);
  arr3 = arr1.splice(0, m);
  return arr2.concat(arr3);
}

function reversingArray(arr) {
  const copy = arr;
  return copy.reverse();
}

function findEvenAndOdds(arr1, arr2, isEven, isOdd) {
  let result = 0;
  const finded1 = arr1.find(isEven);
  const finded2 = arr2.find(isOdd);
  result = result + finded1 + finded2;
  return result;
}

function findFirstMultipleOf6(arr, isEven, isMultipleOf3) {
  
}

function isEveryXEvenAndYOdd(arr, isEven, isOdd) {}

function isSomeoneGeniusDongmin(arr, isDongmin, isGenius) {}

function sortByExamScoreSum(arr) {}

function mapToBooleanArray(arr) {}

function mathScoreSumWithReduce(arr) {}

function filterScoresOver80(arr) {}

function forEachSum(arr) {}

function _isEven(number) {
  return number % 2 === 0;
}

function _isOdd(number) {
  return number % 2 === 1;
}

function _isMultipleOf3(number) {
  return number % 3 === 0;
}

function _isDongmin(s) {
  return s === "dongmin";
}

function _isGenius(iq) {
  return iq >= 150;
}

var ApiQuiz = {
  lengthOfArrays,
  popAndPush,
  shiftAndUnShift,
  concatenation,
  slicingArray,
  overHalf,
  hasUniqueTargetNumber,
  hasAnyElement,
  splicingArray,
  reversingArray,
  findEvenAndOdds,
  findFirstMultipleOf6,
  isEveryXEvenAndYOdd,
  isSomeoneGeniusDongmin,
  sortByExamScoreSum,
  mapToBooleanArray,
  mathScoreSumWithReduce,
  filterScoresOver80,
  forEachSum,
};

module.exports = ApiQuiz;
