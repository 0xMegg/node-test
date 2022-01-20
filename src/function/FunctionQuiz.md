# FunctionQuiz



## Introduction

자바스크립트에서 함수는 1급 객체입니다.

이것이 의미하는 바는 다음의 두 가지입니다.
1. 함수를 인자로 받을 수 있다.
2. 함수를 함수의 결과값으로 반환할 수 있다.

먼저 함수를 인자로 받는 함수를 구현하는 연습을 해볼까합니다.

시작하기에 앞서, 당분간은 함수 안에서 계속 함수를 반환하는 형식으로 
문제를 푸셔야합니다. 

앞으로 계속해서 아래와 같은 형식으로 구현을 해주시기 바랍니다.

```javascript
function example() {
    return function(/* 이 부분을 지우고 구현하세요 */) {
        /**
         * 이 부분에 코드를 작성하세요.
         */
    }
}
```

함수를 인자로 받는 것을 연습해보겠습니다.

예를 들어 아래와 같은 함수가 있다고 해봅시다.

```javascript
function applyToNum(num, f) {
    return f(num);
}
```

코드를 보고 어떤 생각이 드시나요?

여러분이 충분히 익숙해지고 나면, 위의 코드를 보고 다음과 같은 생각을 하셔야합니다.

"`f`는 함수구나"

`f()`과 같이 어떤 token에 열고 닫는 괄호를 붙여서 사용한다는 것은
그걸 해당 token을 함수로 취급한다는 뜻입니다.

따라서 `f`는 함수라고 추정할 수 있는 것입니다.

위의 예제에서 `num`은 그냥 숫자입니다. f에 전달될 인자겠죠. `f`는 이 `num`을 인자로 받아서 그냥 실행할 뿐입니다.

그렇다면 `f`는 이 `num`을 처리할 수 있게끔 함수 `body`가 정의가 되어있어야겠죠.



## 함수를 인자로 받는 함수




### `functionAsParams1`

#### Description
여러분이 구현하실 `functionAsParams1` 는

1. 함수를 반환해야합니다.
2. 이 함수는 첫번째 인자로 숫자를 받고, 두번째 인자로는 함수를 받습니다. ( `function (num, f)` 형태 )
3. 그리고 해당 함수에 첫번째 인자로 전달받은 인자를 넣어서 호출한 결과를 반환합니다.

#### Spec
```javascript
/**
 * @returns {Function: (num: number, fn: Function)}
 */
function functionAsParams1() {
}
```

#### Example
```javascript
let yourFunction = functionAsParams1();
yourFunction(10, add1) // 11 
 
function add1(n) {
    return n + 1;
}
```





### `functionAsParams2`

#### Description

이번에는 함수를 두 개 받는 함수를 구현해보겠습니다.

대신에 구현이 조금 달라질 것입니다.

여러분이 구현하실 `functionAsParams2` 는
1. 함수를 반환해야합니다.
2. 이 함수는 첫번째 인자로 숫자를 받고, 두번째 세번째 인자로는 함수를 받습니다. (`function (num, f, g)` 형태 )
3. 그리고 각 함수에 `num`을 넣어서 호출한 결과를 합해서 반환하시면 됩니다.

#### Spec

```javascript
function functionAsParams2() {
}
```



#### Example

```javascript
let yourFunction = functionAsParams2();
yourFunction(10, add1, add2) // 23

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```





### `functionAsParams3`

#### Description

이번에는 위와 인자 구성은 같습니다. 

여러분이 구현하실 `functionAsParams3` 는
1. 함수를 반환해야합니다.
2. 이 함수는 첫번째 인자로 숫자를 받고, 두번째 세번째 인자로는 함수를 받습니다. (`function (num, f, g)` 형태 )
3. 그리고 `num`에 먼저 `f`를 적용하고, 그 다음에 `g`를 적용한 결과를 반환하시면 딥니다.
   ​

#### Spec

```javascript
function functionAsParams3() {
}
```



#### Example

```javascript
let yourFunction = functionAsParams3();
yourFunction(10, add1, add2) // 13

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```



### `functionAsParams4`

#### Description

이번에는 위와 거의 비슷하지만, 조건이 주어집니다.

여러분이 구현하실 `functionAsParams4` 는
1. 함수를 반환해야합니다.
2. 이 함수는 첫번째 인자로 숫자를 받고, 두번째 인자로를 boolean값인 `condition`을 받습니다.
3. 세번째, 네번째 인자로는 함수를 받습니다. (`function (num, condition, f, g)` 형태 )
4. 만약 `condition`이 참이면, `f`-`g` 순서로 적용하고, 거짓이면 `g`-`f` 순서로 적용한 결과를 반환합니다.



#### Spec

```javascript
function functionAsParams4() {
}
```



#### Example

```javascript
let yourFunction = functionAsParams4();

yourFunction(10, true, add1, multiply2) // 22
yourFunction(10, false, add1, multiply2) // 21

function add1(n) { return n + 1; } 
function multiply2(n) { return n*2; } 
```





### `functionAsParams5`

#### Description

이번에는 함수를 받긴하지만 함수의 배열을 받습니다.

여러분이 구현하실 `functionAsParams5`는
1. 함수를 반환해야합니다.
2. 이 함수는 첫번째 인자로는 숫자를 받고, 두번째 인자로는 함수를 함수의 배열을 받습니다. 
   `function (num, fns)`의 형태
3. 그리고 각 함수에 대해서 차례대로 `num`을 넣고 호출한 결과를 "배열"로 반환하시면 됩니다.

#### Spec

```javascript
function functionAsParams5() {
}
```

#### Example

```javascript
let yourFunction = functionAsParams5();

yourFunction(10, [add1, add2]) // [11, 12]

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```



### `functionAsParams6`

#### Description

이번에 함수의 인자형식은 위와 같습니다. 

단 이번에는 결과가 배열이 아니라 하나의 값입니다.

여러분이 구현하실 `functionAsParams6`는
1. 함수를 반환해야합니다.
2. 이 함수는 첫번째 인자로는 숫자를 받고, 두번째 인자로는 함수를 함수의 배열을 받습니다. 
   (`function (num, fns)`의 형태)
3. 이번에는 시작을 `num`으로 해서 각 함수의 결과를 다음 함수의 인자로 넘겨서 호출한 결과를 반환해야합니다.

#### Spec

```javascript
function functionAsParams6() {
}
```



#### Example

```javascript
let yourFunction = functionAsParams6();

yourFunction(10, [add1, add2, add3]) // 16

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
function add3(n) { return n + 3; }

// 즉 add3(add2(add1(10))) 을 한 것과 같은 결과를 반환해야합니다. 
```





## 함수를 결과로 반환하는 함수

이제 당분간은 함수를 반환하는 함수를 구현해보겠습니다.

따라서 여러분이 구현하실 함수의 형태는 아래와 같이 될 것입니다.

복잡해보일 수 있지만, 익숙해지셔야합니다! 

```javascript
function example2() {
    return function(/* 바깥함수 인자 */) {
        /**
         * 바깥 함수에 대한 내용은 여기에
         */
        return function(/* 안쪽 함수 인자*/) {
            /**
             * 안쪽 함수에 대한 내용은 여기에 
             */
        }
    }
}
```



### `returnFunctionAsResult1`

#### Description

여러분이 구현하실 `returnFunctionAsResult1` 함수는

1. 함수를 반환해야합니다.
2. 이 함수는 함수를 반환하는 함수입니다.
3. 반환하실 함수는 `num`을 받아서 `1` 더해서 반환하는 함수입니다.

#### Spec

```javascript
function returnFunctionAsResult1() {
}
```



#### Example

```javascript
let outerFn = returnFunctionAsResult1();
let add1 = outerFn();

let num = 10;
add1(num) // 11
```



### `returnFunctionAsResult2`

#### Description

위에서 우리는 1을 더하는 함수를 반환하는 함수를 구현했습니다.

이번에는 10을 더하는 함수를 반환해주세요. 

위의 형태와 완전히 똑같지만 10을 더하는 부분만 달라질 것입니다.

#### Spec

```javascript
function returnFunctionAsResult2() {
}
```



#### Example

```javascript
let outerFn = returnFunctionAsResult2();
let add10 = outerFn();

let num = 10;
add10(num) // 20
```



### `returnFunctionAsResult3`

#### Description

앞서서,

1. "1을 더하는 함수"를 반환하는 함수를 구현했습니다.
2. "10을 더하는 함수"를 반환하는 함수를 구현했습니다.

그런데 내가 만약 200을 더하는 함수를 만들고 싶으면 어떻게 해야할까요?
300을 더하는 함수는요?

매번 그러한 함수를 다시 만들어야할까요? 당연히 아니겠죠.

이번에는 "x를 더하는 함수"를 반환하는 함수를 구현해보겠습니다.

그래서 100을 더하는 함수를 만들고 싶으면 100을 넣으면 되고,
200을 더하는 함수를 만들고 싶으면 200을 넣으면 되게끔 구현하고 싶은 것입니다.

그러면 어떻게 "x를 더하는 함수를 만들 수 있을까요?"

바로 x를 바깥 함수에서 받을 수 있게 만드는 것입니다.

상상히 잘 안되시나요? 앞에서 `example2`에서 함수의 형태를 보셨을 텐데,

아래 코드를 보시기 바랍니다.

```javascript
function example2() {
  return function(x) { // <-- 이 자리에 x가 들어가면 됩니다.
    return function(...) {
      // inner body
    }
  }
}
```

바깥 함수에서 x를 받도록 만들면 이 함수는 x를 이용해서
함수를 정의하고 반환하겠죠? 
따라서 저희가 의도한 x를 반환하는 함수의 결과에 이용할 수 있게됩니다.


여러분이 구현하실 `returnFunctionAsResult3` 함수는
1. 함수를 반환해야합니다.
2. 이 함수는 함수를 반환하는 함수입니다.
3. 반환하실 함수는 `num`을 받아서 `x`를 더해서 반환하는 함수입니다.



즉, 여러분이 구현하신 함수를 호출할 때  

- `100`을 넣고 호출하면, `100`을 더하는 함수가 만들어지고,
- `200`을 넣고 호출하면, `200`을 더하는 함수가 만들어지고,
- `x`를 넣고 호출하면, `x`를 더하는 함수가 만들어지는 것입니다.

#### Spec

```javascript
function returnFunctionAsResult3() {
}
```



#### Example

```javascript
let outerFn = returnFunctionAsResult3();
let x = 100;
let add100 = outerFn(x);  // <-- 이 부분이 바깥 함수 부분에 x를 넣는 부분입니다.

let num = 3;
add100(num) // 103
```



## Practice

이제부터는 양쪽이 복합된 형태의 함수들을 다루게 될 것입니다.  함수를 받기도 하고, 반환하기도 할 것입니다. 





### `practice1`

#### Description

앞서 구현했던 `functionAsParams1` 안에서, 
"여러분이 반환한 함수와 동일한 일을 하는 함수"를 반환하는 함수를 구현해보겠습니다.

말이 복잡한 것 같으니 코드로 이해해보겠습니다.
```javascript
let yourFunction = functionAsParams1();
yourFunction(10, add1) // 11 

function add1(n) {
    return n + 1;
}
```

위 코드가 원래 `functionAsParams1`를 사용하던 방식이었습니다. 

그런데 이번에 구현하실 `practice1` 안 쪽이 호출되는 방식을 보면,
```javascript
let outerFn = practice1();
let innerFn = outerFn(); // <-- (!)

innerFn(10, add1); // 11

function add1(n) {
   return n + 1;
}
```
차이가 느껴지시나요? 

원래 함수는 그냥 그 결과를 호출하여 바로 반환했지만, 이번에는
그러한 작업을 하는 함수를 반환할 뿐인 것입니다.

#### Spec

```javascript
function practice1() {
}
```




#### Example

```javascript
let outerFn = practice1();
let innerFn = outerFn(); // <-- (!)

innerFn(10, add1); // 11
pracetice1()()(100, add1); // 101

function add1(n) {
   return n + 1;
}
```





### `practice2`

#### Description

이번에는 `functionAsParams2`를 같은 형태로 바꿔보겠습니다.

```javascript
let outerFn = functionAsParams2();
outerFn(num, add1, add2) // 23

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```
위는 `functionAsParams2`를 사용하던 방식이었습니다.

마찬가지로 말로 표현하면, 복잡하니 그냥 코드를 봅시다.
```javascript
let outerFn = practice2();
let innerFn = outerFn(); // <-- (!)

let num = 10;
let f = add1;
let g = add2;

innerFn(10, add1, add2) // 23

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```

#### Spec

```javascript
function practice2() {
}
```



#### Example

```javascript
let outerFn = practice2();
let innerFn = outerFn(); // <-- (!)

let num = 10;
let f = add1;
let g = add2;

innerFn(10, add1, add2); // 23
practice2()()(100, add1, add2); // 203

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```





### `practice3`

#### Description

이번에도 역시 동일합니다.

`functionAsParams3`를 같은 형태로 바꿔보겠습니다.
```javascript
let outerFn = functionAsParams3();
outerFn(10, add1, add2); // 13

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```
위는 `functionAsParams3`를 사용하던 방식이었습니다.

여러분이 작성하실 코드는 아래와 같이 동작해야합니다.
```javascript
let outerFn = practice3();
let innerFn = outerFn(); // <-- (!)

let num = 10;
let f = add1;
let g = add2;

innerFn(num, f, g); // 13

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```

#### Spec
```javascript
function practice3() {
}
```

#### Example
```javascript
let outerFn = practice3();
let innerFn = outerFn(); // <-- (!)

let num = 10;
let f = add1;
let g = add2;

innerFn(num, f, g); // 13
practice3()()(num, f, g); // 13
practice3()()(100, f, g); // 103

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```




### `practice4`

#### Description

practice1, 2, 3에서는 그냥 함수를 반환하게끔 바꾼것일 뿐입니다.

사실 함수를 전달하는 것을 연습한 것은 아니었던 것이죠.

앞서서 `x`를 더하는 함수를 반환하는 함수를 구현했던 것 기억나시나요?

바깥함수에서 `x`를 받도록 만들고 안쪽함수에서 그 `x`를 사용하도록 구현하면 됐습니다.

이번에는 `x` 자리에 오는 것이 숫자가 아니라 함수가 될 것입니다.

이번에 구현하실 `practice4`는 `practice3`의 변형입니다.

단지 함수 하나를 바깥함수에서 전달받게끔 바꾼 것입니다.

여러분이 구현하실 `practice4`는
1. 함수를 반환해야합니다.
2. 그 함수(바깥함수)는 함수(`g`)를 인자로 받고 안쪽함수를 리턴합니다.
3. 안쪽 함수는 숫자(`num`)와 함수(`f`)를 인자로 받습니다.
4. 안쪽 함수안에서는 `f`에 `num`을 넣어서 호출하고 그 결과를 `g`에 다시 넣어서 호출한 후 반환합니다.


#### Spec

```javascript
function practice4() {
}
```




#### Example
```javascript
let outerFn = practice4();

let g = add2;
let innerFn = outerFn(g);
let num = 10;
let f = add1;

innerFn(num, f); // 13

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```



### `practice5`

#### Description

이 문제는 `functionAsParams5`의 변형입니다. `functionAsParams5` 함수는 숫자 하나와 함수의 배열을 통해서 숫자에 각 함수가 적용된 결과를 반환하는 역할을 했습니다. 

이 함수는 함수의 배열을 미리 특정해놓고, 그 함수들에 적용할 숫자하나만 내부 함수에 전달하는 식으로 바꾼 형태입니다. 역시 말로 하면 복잡하니 동작해야하는 예제를 확인하시죠.

#### Spec

```javascript
function practice5() {
}
```



#### Example

```javascript
let outerFn = practice5();

let fns = [add1, add2];
let num = 10;
let innerFn = outerFn(fns); 

innerFn(num); // [11, 12];
practice5()(fns)(num); // [11, 12]

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
```





### `practice6`

#### Description

이 문제는 `functionAsParams6`의 변형입니다. 

역시 그냥 코드로 동작방식을 Example에서 확인하세요.



#### Spec

```javascript
function practice6() {
}
```



#### Example

```javascript
let outerFn = practice6();

let fns = [add1, add2, add3];

let num = 10;

let innerFn = outerFn(fns); 

innerFn(num); // 16
practice6()(fns)(num); // 16

function add1(n) { return n + 1; }
function add2(n) { return n + 2; }
function add3(n) { return n + 3; }
```