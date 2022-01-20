# Array API Quiz

## Part 1

Part 1 에서는 가장 기본적인 배열의 API들을 다뤄볼 것입니다.  



### `lenghtOfArrays`

`Array.length`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length

인자로 배열의 배열이 주어집니다.  각 배열의 길이를 배열로 반환하는 함수를 작성하세요. 

`arrs`이 길이가 0인 경우는 주어지지 않습니다.



#### Spec

```javascript
/**
 * @param {number[][]} arrs
 */
function lengthOfArrays(arrs) {
    
}
```



#### Example

```javascript
lengthOfArrays([[1], [2,3,4], [5,6,7], [100, 99, 98]]) // [1, 3, 3, 3]
```



### `popAndPush`

`Array.prototype.pop()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
`Array.prototype.push()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push



 배열 `arr`로부터 순서대로

1. `n`번 `pop`
2. `m`번 x를 `push`

 를 한 배열의 결과를 반환합니다.



#### Spec

```javascript
/**
 * @param {number[]} arr 
 * @param {number} x
 * @param {number} n 
 * @param {number} m 
 */
function popAndPush(arr, x, n, m) {
}
```



#### Example

```javascript
popAndPush([1,2,3], 100, 3, 3) // [100, 100, 100]
```



### `shiftAndUnShift`

`Array.prototype.shift()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
`Array.prototype.unshift()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift


배열 `arr1` 에서 `n`번 `shift`해서 배열 `arr2` 에 `unshift`합니다. 

이후 `arr2`를 반환합니다. (단, `n`이 `arr1`의 길이보다 큰 경우는 없습니다.)



#### Spec

```javascript
/** 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @param {number} n
 */
function shiftAndUnShift(arr1, arr2, n) {
}
```

#### Example

```javascript
shiftAndUnShift([100, 200, 300], [], 3) // [300, 200, 100]
```



### `concatenation`

`Array.prototype.concat()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

`arr`배열을 `n`번 이어 붙인 결과를 반환해야합니다.

### Spec

```javascript
/**
 * @param {number[]} arr 
 * @param {number} n 
 */
function concatenation(arr, n) {
}
```



### Example

```javascript
concatenation([1,2,3], 3) // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```



### `slicingArray`

`Array.prototype.slice()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


1. `arr1`에서 앞에서 `n`개를 가져오고
2. `arr1`에서 뒤에서 `m`개를 가져와서
3. 이어 붙인 결과를 반환해야합니다.

#### Spec

```javascript
/**
 * @param {number[]} arr1 
 * @param {number} n 
 * @param {number} m 
 */
function slicingArray(arr1, n, m) {
}
```

#### Example

```javascript
slicingArray([1, 2, 3, 4, 5, 6, 7], 1, 2) // [1, 6, 7]
slicingArray([1, 2, 3, 4, 5, 6, 7], 3, 3) // [1, 2, 3, 5, 6, 7]
```





### `overhalf`

`Array.prototype.indexOf()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf


>  사실 `indexOf`함수의 fullname은 아마도 firstIndexOf 일 것입니다. 즉 찾고자 하는 요소가 여러개 있더라도 가장 왼쪽에 있는 요소의 인덱스를 반환한다는 뜻입니다.



1. `arr`에서 `target `숫자의 첫번째 index를 찾고, 
2. 그것이 전체 배열의 중간 지점(길이의 반이상) 이상에 있는지 판단하는 결과를 반환하세요.



#### Spec

```javascript
/**
 * @param {number[]} arr 
 * @param {number} target
 * @returns {boolean} 
 */
function overHalf(arr, target) {
}
```

#### Example

```javascript
overhalf([1,2,3,4,5], 3) // true 
overhalf([1,2,3,4,5], 4) // true  

overhalf([1,2,3,4,5], 2) // false

overhalf([1,2,3,4], 2) // false
overhalf([1,2,3,4], 3) // true
```





### `hasUniqueTargetNumber`

`Array.prototype.lastIndexOf()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


>`indexOf`함수의 fullname은 아마도 firstIndexOf라고 말씀드린 바 있습니다.
>
>그와 반대로 `lastIndexOf `함수는 target의 가장 마지막 인덱스를 찾습니다.
>
>`lastIndexOf`역시 찾지 못할 경우, -1을 반환합니다.



arr에서 target 숫자가 유일하게 나타나는지 검사하는 함수를 만들 것입니다.

사실 for-loop를 돌리는 것이 가장 쉽고 간편한 방법이겠지만,

학습을 목적으로 `indexOf`함수와 `lastIndexOf`함수를 호출해서

작성해보시기 바랍니다.



`indexOf`의 결과값과 `lastIndexOf`의 결과값이 같으면

그 숫자는 배열에서 유일하게 나타나는 값이라고 봐도 될 것입니다.

(단, 그 숫자가 배열에 없는 경우는 처리를 해주셔야합니다)

#### Spec

```javascript
/**
 * @param {number[]} arr 
 * @param {number} target
 * @returns {boolean} 
 */
function hasUniqueTargetNumber(arr, target) {
}
```

#### Example

```javascript
hasUniqueTargetNumber([1, 2, 3], 1) // true
hasUniqueTargetNumber([1, 2, 2], 2) // false 
hasUniqueTargetNumber([1, 2, 3], 10) // false 
```



### `hasAnyElement`

`Array.prototype.includes()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


`includes` 함수는 해당 배열이 전달받은 숫자를 포함하고 있는지를 

참거짓으로 반환합니다. 

```javascript
[1,2,3].includes(1) // true 
[1,2,3].includes(10) // false
```



`arr1`이 `arr2`의 아무 요소든지 가지고 있는지 검사하는 함수

`hasAnyElement` 구현해볼 것입니다.



`arr2`의 요소 중 어떤 것이든 `arr1`이 포함하고 있으면 `true`

그렇지 않으면 `false`를 반환할 것입니다.

#### Spec

```javascript
/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @return count
 */
function hasAnyElement(arr1, arr2) {
}
```

#### Example

```javascript
hasAnyElement([1, 2, 3], [1, 2]) // true
hasAnyElement([1, 2, 3], [1, 4, 5]) // true
hasAnyElement([1, 2, 3], [4, 5, 6]) // false
```



### `splicingArray`

`Array.prototype.splice()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


> slice와 splice는 배열의 일부를 가져오는 부분은 비슷해보이지만 
>
> 배열의 요소를 삭제한다는 점에서 큰 차이점이 있습니다.
>
> 이는 원본 데이터를 유지하면서 코드를 작성하는 경우에는 
>
> splice를 주의깊게 사용해야됨을 의미합니다.



1. `arr1`에서 앞에서 `n`개를 가져오고
2. `arr1`에서 "다시 앞"에서 `m`개를 가져와서
3. 이어 붙인 결과를 반환해야합니다.



#### Spec

```javascript
/**
 * @param {number[]} arr1 
 * @param {number} n 
 * @param {number} m 
 */
function splicingArray(arr1, n, m) {
}
```

#### Example

```javascript
splicingArray([1, 2, 3, 4, 5, 6, 7], 1, 2) // [1, 2, 3] 
```



### `reversingArray`

`Array.prototype.reverse()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


> reverse는 배열을 뒤집고 그 결과를 반환하는 함수입니다.
>
> reverse 역시 원본 데이터에 영향을 준다는 점을 유의하시기 바랍니다.

여기서는 원본 배열을 뒤집어서 반환하되, 

원본 배열이 변경 되지 않도록 배열하는 함수를 구현해볼 것입니다. 



다시 말해서

```javascript
let arr = [1,2,3]
revsersingArray(arr) // [3, 2, 1]
arr // [1, 2, 3] 
```

의 결과가 나와야합니다.

*Hint)* 원본 배열의 복사본을 확보해야한다는 점을 생각하시면 됩니다.

#### Spec

```javascript
/** 
 * @param {number[]} arr 
 */
function reversingArray(arr) {
}
```

#### Example

```javascript
revsersingArray([1,2,3]) // [3, 2, 1]
```





## Part2

이제 앞으로 익혀보게 될 함수들은 인자로 함수를 전달받습니다. 또한 구현할 함수들 역시 인자로 함수를 전달 받을 수도 있습니다. 테스트 코드에서 전달해줄 것이기 구현에 집중하시면 됩니다.



인자로 전달받을 함수를 테스트에 이용하고 싶으실 경우 가장 아래 쪽에 구현되어있는 함수를 이용하시면 됩니다단, 테스트 코드에서 전달된 함수의 호출 횟수를 체크하기 때문에, 반드시 호출을 하셔야 테스트 코드를 통과하실 수 있습니다. 



### `findEvenAndOdds`

`Array.prototype.find`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find



`Array.prototype.find` 함수는 인자로 전달된 판별함수의 결과를 참으로 만드는 첫번째 요소를 반환합니다.



예를 들면 아래와 같습니다.

```javascript
[1, 2, 3, 100, 5].find(isNumberOver10) // 100


function isNumberOver10(elem) {
    return elem > 10;
}
```

위에서 판별함수는 `isNumberOver10` 됩니다. `isNumberOver10` 의 `elem`자리에는 배열의 각 요소가 들어오게 됩니다.



위 함수를 익명함수로 표현하면 아래와 같습니다.

```javascript
[1, 2, 3, 100, 5].find(function(elem) {
	return elem > 10;
}
```

> 단, Array.prototype.find는 찾지 못할 경우는 `undefined`를 반환하니 주의하세요.





이제 부터 작성할 `findEvenAndOdds`함수는 

`arr1`에서 첫번째 짝수를 찾고,

`arr2`에서 첫번째 홀수를 찾아서,

각 숫자를 더한 결과를 반환하는 함수입니다. 

만약 각 배열에서 짝수와 홀수를 못 찾은 경우는 0을 반환해야합니다.



이 과정에서 짝수와 홀수를 판별하는 함수를 이용해서 구현하시기 바랍니다.



#### Spec

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2 
 * @param (x: number) => boolean isEven 
 * @param (x: number) => boolean isOdd
 * @returns result: number 
 */
function findEvenAndOdds(arr1, arr2, isEven, isOdd) {
}
```

#### Example

```javascript
findEvenAndOdds([1, 2, 3], [4, 5, 6], isEven, isOdd) // 6 
// arr1에서 1, arr2에서 5

findEvenAndOdds([1, 2, 3], [4, 4, 4], isEven, isOdd) // 2
// arr1에서 2, arr2에서 못찾았으니 0
```



### findFirstMultipleOf6

`Array.prototype.findIndex`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex



`findIndex`함수와 마찬가지로 이 함수는 판별함수를 인자로 전달받습니다. 판별하는 첫번째 요소를 반환하는 것이 아니라 그 요소의 인덱스값을 반환합니다. `indexOf` 함수 처럼 찾지 못할 경우 `-1`을 반환합니다. 



이번에는 `findFirstMultipleOf6` 함수를 구현해볼 것입니다.



이 함수는 배열에서 첫번째 6의 배수를 찾는 함수입니다. `isEven`은 짝수인지 판별해주는 함수이고,  `isMultipleOf3`는 3의 배수인지 판별해주는 함수입니다.



여러분은 `findIndex`함수의 콜백함수에 `isEven`과 `isMultipleOf3`을 이용해서 6의 배수인지 판별하시고, 이 판별함수에 걸린 첫번째 요소의 인덱스를 반환하고 못 찾은 경우 `-1`을 반환하시면 됩니다.



#### Spec

```javascript
/** 
 * @param {number[]} arr 
 * @param (x: number) => boolean isEven 
 * @param (x: number) => boolean isMultipleOf3
 * @return index: number 
 */ 
function findFirstMultipleOf6(arr, isEven, isMultipleOf3) {
}
```

#### Example

```javascript
findFirstMultipleOf6([1,2,3,4,5,6], isEven, isMultipleOf3) // 5
```





### `isEveryXEvenAndYOdd`

`Array.prototype.every`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every


`every`함수 역시 인자로 판별함수를 받습니다.



모든 요소들이 판별함수를 통과하면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.



> `every`함수는 배열의 길이가 0이면 어떠한 그 결과로
>
> 판별함수가 무엇이든지 `true`를 반환합니다.





구현하실 `isEveryXEvenAndYOdd`함수는 배열의 각 요소인 Object `{}`의 `x`가 짝수이고 `y`가 홀수인지 판별해서, (주의: 배열의 각 요소는 숫자가 아니라 Object입니다)

모든 요소가 이를 통과하면 `true`를 반환하고 그렇지 않으면 `false`를 반환할 것입니다. 

#### Spec

```javascript
/**
 * @param {x: number, y: number} arr 
 * @param (x: number) => boolean isEven 
 * @param (x: number) => boolean isOdd
 * @return result: boolean
 */
function isEveryXEvenAndYOdd(arr, isEven, isOdd) {
}
```

#### Example

```javascript
isEveryXEvenAndYOdd([{x:2, y:1}, {x:2, y:3}], isEven, isOdd) // true
isEveryXEvenAndYOdd([{x:2, y:1}, {x:2, y:4}], isEven, isOdd) // false
```





### `isSomeoneGeniusDongmin`

`Array.prototype.some`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some



`some`함수는 역시 인자로 판별함수를 전달받습니다. 전체 요소 중에 판별함수를 하나라도 통과하는 함수가 있다면, `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.



구현하실 `isSomeoneGeniusDongmin` 함수는 요소를 보면서,

1. 동민이인지 확인하고,
2. 동민이라면 `iq`가 150이상인지 확인하고,
3. `iq`가 `150`이상인 동민이가 한 명이라도 있다면 `true`를 반환하고 아니면 `false`를 반환합니다.
   ​

> 이 함수는 every와는 다르게 빈 배열이 전달되면 false를 반환합니다.



#### Spec

```javascript
/** 
 * 
 * @param {{name: string, iq: number}} arr 
 * @param {string => boolean} isDongmin 
 * @param {number => boolean} isGenius 
 */
function isSomeoneGeniusDongmin(arr, isDongmin, isGenius) {
}
```

#### Example

```javascript
let dongmin = {name: 'dongmin', iq: 150};
let sangmu = {name: 'sangmu', iq: 80};

let arr = [dongmin, sangmu];

isSomeoneGeniusDongmin([dongmin, sangmu], isDongmin, isGenius); // true
isSomeoneGeniusDongmin([], isDongmin, isGenius); // false
isSomeoneGeniusDongmin([sangmu], isDongmin, isGenius); // false

function isDongmin(s) {
    return s === 'dongmin';
}

function isGenius(iq) {
    return iq >= 150;
}
```



### `sortByExamScoreSum`

`Array.prototype.sort()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

`sort` 함수는 인자로 비교 함수(compareFn)를 전달받습니다. `sort` 함수는 비교함수의 첫번째 인자와 두번째 인자로 비교 대상 요소를 전달해줍니다.



따라서 `sort`함수를 이용하는 사람은 어떻게 비교를 할지만 결정하면 됩니다. 다시 말해서 compareFn만 작성하면 됩니다.



compare함수는 다음과 같습니다. 

```javascript
function compareFn(a, b) {}
```

비교 함수가 음수를 반환하면, a는 b 앞 쪽으로 배열되고,

0을 반환하면, 순서를 바꾸지 않고, 다른 배열의 결과에 따라 배열됩니다.

양수를 반환하면, a를 오른쪽으로 배열됩니다.

수를 정렬하는 것은 빼서 정렬하는 방법이 가장 일반적으로 사용됩니다.

```javascript
let arr = [1, 10, 2, 3, 4, 5];
arr.sort(function(a, b) {
    return a - b;
});
```



만약 역순으로 배열하고 싶으시다면, 

```javascript
let arr = [1, 10, 2, 3, 4, 5];
arr.sort(function(a, b) {
    return b - a;
});
```



여기서 구현하실 함수는 `sortByExamScoreSum` 입니다.  각 요소는 객체로 수학점수인 `math`와 영어점수인 `english`를 가지고 있습니다. 가지고 있지 않은 경우는 없다고 봐도 됩니다.



각 점수의 합을 기준으로 내림차순 정렬을 하는 함수를 구현하시면 됩니다.

#### Spec

```javascript
/**
 * @param {{math: number, english: number}[]} arr 
 */
function sortByExamScoreSum(arr) {
}
```

#### Example

```javascript
let arr = [{math: 100, english: 80}, {math: 90, english: 70}, {math: 100, english: 100}];

sortByExamScoreSum(arr); 
// [{math: 100, english: 100}, {math: 100, english: 80}, {math: 90, english: 70}]
```





## Part 3

이제부터 익힐 함수들은 아주 대표적인 High Order Function들입니다. 위에서 저희가 익혀본 함수들 역시 High Order Function입니다. HOF는 다른 게 아니라 여러 기초적인 함수들을 엮어서 더 큰 작업을 하는 하나의 프로시져로 만들어놓은 함수를 말합니다. 

다만 좀 더 일반적인 의미로는 HOF는 어떤 엮어놓은 함수에 

1. 함수를 전달하여 작업을 처리하거나, 
2. 값이나 함수를 넣어서 새로운 함수를 전달받아서 작업을 처리하기위해 사용합니다. 


여기서는 가장 기본적인 네가지 함수에 대해서 알아보겠습니다. `map`, `reduce`, `filter`, `forEach`입니다.





### `mapToBooleanArray`

`Array.prototype.map()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map


수학에서 mapping이라 함은 공간의 요소를 다른 공간의 요소에 매칭시키는 함수를 의미합니다. 



그냥 코드로 보면, `[1, 2, 3, 4]` 를 `[2, 4, 6, 8]`로 만들고 싶다면 어떻게 해야할까요?

2를 곱하면 됩니다. 여기서 2를 곱하는 함수를 *mapping function*이라고 합니다.



javascript의 `map`함수는 *mapping function*을 인자로 받습니다.



맵핑 함수는 아래와 같습니다.

```javascript
function mappingFunction(currentValue, index?, array?) {...}
```

첫번째 인자로는 그간의 다른 함수들과 마찬가지로 



1. 해당 배열의 각 요소가 들어옵니다.
2. 두번째 요소로는 현재 순회 중인 배열의 인덱스가 들어옵니다.
3. 세번째로는 현재 순회 중인 전체 배열이 들어옵니다.



위에서 요소 뒤의 물음표는 optional argument라는 뜻입니다. (단, `array`를 받으려면 앞의 `index`도 반드시 있어야합니다)



사용법은 간단합니다.

```javascript
[1, 2, 3, 4].map(function(elem) {
	return x * 2;
});  // [2,4,6,8]

```



지금부터는 문제에 대한 설명입니다.



작성하실 `mapToBoolean` 함수는, 



`map`함수를 이용해서, 

각 요소가 `0`보다 크거나 같으면 `true` 그렇지 않으면 `false`를 반환하여,

각 요소가 boolean으로 된 배열을 반환하시면 됩니다.



> map, filter, reduce, flat, flatMap 등의 함수는 원본 배열의 shallow copy를 반환합니다. 

#### Spec

```javascript
/* 
 * @param {number[]} arr 
 * @return {boolean[]} 
 */
function mapToBooleanArray(arr) {
}
```

#### Example

```javascript
mapToBooleanArray([1, 2, 3, -1]) // [true, true, true, false]
```





### `mathScoreSumWithReduce`

`Array.prototype.reduce()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce



`reduce`함수는 다른 언어에서 accumulate, fold, inject, reduce등의 이름으로도 사용되는 함수입니다. 

뭔가 난해해보이지만, 몇 번 사용해보면 금방 감이 잡히실 겁니다.



`map`함수는 *mapping function*을 받은 것 처럼,



`reduce`함수는 

1) *reducer function*과 

2) *initialValue*를 하나 받습니다.

```javascript
function reducer(accumulator , currentValue, index?, array?) {...}
```

 * `accumulator`는 다음에 실행될 reducer함수에게 전달되는 값입니다.

 * `currentValue`는 현재 순회 중인 요소의 값입니다.

 * `index`는 현재 순회 중인 요소의 인덱스값입니다.

 * `array`는 현재 순회 중인 전체 배열입니다.


마지막으로 initialValue는 accumulator의 첫번째 값으로 사용이 됩니다. 만약 initialValue가 없으면 배열의 첫번째 요소가 사용됩니다. 

일반적으로는 아래와 같이 작성합니다.

```javascript
[1, 2, 3, 4].reduce(function(acc, c){ 
   return acc + c;
}, 0) // 10
```

위와 같이 `accumulator`와 currentValue`만을 이용해서 하고, `index`나 `array`는 필요한 경우에 전달받습니다.



> reduceRight함수도 있는데, 이 함수는 배열을 역으로 순회한다는 점만을 reduce와 동일합니다. 

작성하실 `mathScoreSumWithReduce`함수는

배열을 순회하면서 수학점수의 합만을 더해서 반환하면 됩니다.

(단, 수학점수가 없는 경우도 있으니 이 경우를 처리해주셔야합니다)


#### Spec

```javascript
/**
 * @param {{math: number, english: number}[]} arr
 * @return {number} sum 
 */
function mathScoreSumWithReduce(arr) {
    /* @ANSWER_STARTS */
    return arr.reduce((acc, c) => {
        if (c.math) {
            return acc + c.math;
        }
        return acc;
    }, 0);
    /* @ANSWER_ENDS */
}
```

#### Example

```javascript
let arr = [{math: 100, english: 80}, {math: 90, english: 70}, {math: 100, english: 100}];

mathScoreSumWithReduce(arr); // 290
```



### `filterScoresOver80`

`Array.prototype.filter()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


`filter`함수는 판별함수를 인자로 받습니다.

판별함수의 결과를 "만족"하는 인자만 걸러서 배열로 받습니다. `map`이나 `reduce`와 마찬가지로 원본 배열의 shallow copy를 반환하기 때문에, 배열의 영향을 주지 않습니다.



판별함수는 아래와 같습니다.

```javascript
function filterFunction(value, index?, array?) {...}
```

앞서 익힌 `map`이나 `reduce`에 비하면 훨씬 단순합니다. 마찬가지로 현재 순회중인 요소의 값이 들어옵니다. 그저 각 요소를 `every`나` some`에서 했던 것 처럼 포함시킬 것인지 말지만 결정해주는 판별 함수를 짜면 됩니다.



> 판별함수의 결과값의 타입이 boolean이 아니면,  강제하여 boolean으로 변환한다는 사실에 유의하세요.



작성하실 `filterScoresOver80`함수에 대한 설명은 아래와 같습니다.



`arr`은 요소로 수학점수를 들고 있는 객체로 이루어져있습니다. 여기서 `math`값이 80점 이상인 객체들만을 걸러서 반환합니다. 단, 수학점수가 없는 경우도 있으니 이를 고려하시기 바랍니다.

#### Spec

```javascript
/**
 * @param {math: number, english: number}[] arr 
 * @return result: Object[]
 */
function filterScoresOver80(arr) {
}
```

#### Example

```javascript
let arr = [{math: 79, english: 80}, {math: 90, english: 70}, {math: 70, english: 100}];

filterScoresOver80(arr); // [{math: 90, english: 70}]
```



### `forEachSum`

`Array.prototype.forEach()`
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

`forEach` 함수 `map`함수와 비슷하지만, `map`과는 다르게 배열을 반환하지 않습니다. 따라서 `forEach`함수는 배열의 각 요소를 이용해서, 어떤 연산만을 하고 싶을 때 사용합니다.



`map`함수는 의미론적으로  `mapping`된 결과를 반환해서 새로운 걸 만든다는 의미를 내포하고 있지만, forEach는 그냥 반복 작업의 의미만을 가지고 있습니다. 

`forEach`는 for-loop와는 다르게 중간에 `break`를 하는 기능은 없습니다.
대신에 `continue`는 callback으로 받은 함수 안에서 `return`하는 것으로 가능합니다.



작성하실 함수로 전달받은 배열의 각 요소의 수학점수를 모두 더해서 반환하는 함수를 작성해보세요.

이번에는 수학점수가 없는 경우는 없으니 이렇게 사용하는구나~ 정도로 이해하고 넘어가시면 될 것 같습니다.

#### Spec

```javascript
/**
 * @param {math: number}[] arr 
 * @return {number} sum
 */
function forEachSum(arr) {
}
```

#### Example

```javascript
let arr = [{math: 100, english: 80}, {math: 90, english: 70}, {math: 100, english: 100}];

forEachSum(arr); // 290
```





##### Functions

```javascript
function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 === 1;
}

function isMultipleOf3(number) {
    return number % 3 === 0;
}

function isDongmin(s) {
    return s === 'dongmin';
}

function isGenius(iq) {
    return iq >= 150;
}
```

