# Function API Quiz

`Function.prototype`에는 중요한 함수가 3가지가 있습니다.

1. `apply`
2. `call`
3. `bind`

세 함수의 공통점은, "`this`의 바인딩을 지정할 수 있다"라는 점입니다. 자세한 얘기는 하나씩 살펴보면서 하도록 하겠습니다. 



## `call`

call 함수는 첫번째 인자로 `this`로 지정될 context를 받습니다. 그리고 두번째 부터는 순서대로 arguments를 직접 명시적으로 입력해서 넣어줘야합니다.

먼저 `this`바인딩을 바꾸는 것부터 해봅시다. 예를 들어 다음과 같은 함수가 있다고 해봅시다.

```javascript
function sayHello() {
    return `I'm ${this.name}. Hello! ${this.message}`; 
}

let jaysok = {
    name: 'jaysok',
    message: 'World',
}

let eminem = {
    name: 'eminem',
    message: 'Yo',
}

sayHello.call(jaysok);
sayHello.call(eminem);
```

> 참고: Javascript Template Strings
>
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
>
> ` <- backtick character (역따옴표) 를 통해서 문자열을 감싸고 그 안에 ${변수명}을 담으면 스트링이 전체 문자열이 변수의 값으로 치환되서 평가됩니다.


아직은 감이 잘 안오실 겁니다. `call`을 왜 쓰지? 예제를 하나 더 보겠습니다.

이번에는 이미 정의된 함수에게 암묵적인 `this`바인딩이 결정되어있습니다.
```javascript
let superman = {
    name: 'superman',
    message: 'super!',
    sayHello: function() {
        return `I'm ${this.name}. Hello! ${this.message}`; 
    }
}

superman.sayHello(); // "I'm superman. Hello! super!"
superman.sayHello.call(jaysok); // "I'm jaysok. Hello! World"
superman.sayHello.call(eminem); // "I'm eminem. Hello! Yo"
```

이제 이 함수를 왜 사용해야하는지에 대해서 조금 느낌이 오실 겁니다.

`call`함수는 이미 정의되어 있는 `this`바인딩을 내가 원하는 객체를 통해서 호출하길 원할 때 사용합니다. 

이번에는 `call`함수에 원래 정의되어있는 인자가 있을 때, 이를 전달하는 방법으로 사용해보겠습니다.


```javascript
let superman = {
    name: 'superman',
    message: 'super!',
    sayHello: function(additionalMessage) {
         return `I'm ${this.name}. Hello! ${this.message}` + (additionalMessage || '') ;
    }
}

superman.sayHello(); // "I'm superman. Hello! super!"
superman.sayHello('Good!'); // "I'm superman. Hello! super!Good" 
superman.sayHello.call(jaysok, 'GAZA'); // "I'm jaysok. Hello! WorldGAZA"
superman.sayHello.call(eminem, 'ONE SHOT!'); // "I'm eminem. Hello! YoONE SHOT!"
```

이번에는 인자를 두 개 넘겨보겠습니다.

이를 위해 함수를 재정의하겠습니다.
```javascript
let superman = {
    name: 'superman',
    message: 'super!',
    sayHello: function(additionalMessage, jam) {
         return `I'm ${this.name}. Hello! ${this.message}` + (additionalMessage || '') + (jam || '');
    }
}


superman.sayHello(); 
// "I'm superman. Hello! super!"
superman.sayHello('Good!'); 
// "I'm superman. Hello! super!Good" 
superman.sayHello('Good!', 'jamjam') 
// "I'm superman. Hello! super!Good!jamjam"
superman.sayHello.call(jaysok, 'GAZA'); 
// "I'm jaysok. Hello! WorldGAZA"
superman.sayHello.call(jaysok, 'GAZA', 'GAZAGOO'); 
// "I'm jaysok. Hello! WorldGAZAGAZAGOO"
superman.sayHello.call(eminem, 'ONE SHOT!'); 
// "I'm eminem. Hello! YoONE SHOT!"
superman.sayHello.call(eminem, 'ONE SHOT!', "Once in a life time"); 
// "I'm eminem. Hello! YoONE SHOT!Once in a life time"
```

보시다시피 직접 인자를 하나씩 더 넣어주면 잘 동작하는 걸 보실 수 있습니다.

`call`은 첫번째 인자 이후로는 원래 함수의 parameter 순서를 그대로 따라갑니다.





### `callPractice1`

#### Description

이제 여러분이 구현하실 `callPractice1` 함수에 대한 얘기입니다. 이 함수에는 context가 주어집니다. 

context는 위의 설명의 `superman`처럼 이미 암묵적인 `this`의 대상이 결정되어있는 객체입니다.

이 객체에는 이미 `introduce`라는 함수가 정의되어있습니다.

`introduce` 함수는 `name`과 `age`를 이용해서 자신을 소개하는 메세지를 만들어서 반환합니다.

다시 말해서 context에는 다음과 같은 객체가 넘어올 것이라는 뜻입니다.


```javascript
let jaysok = {
    name: 'jaysok',
    age: 20,
    introduce: function(message, jam) {
        return `My name is ${this.name}, and I'm ${this.age} year-old.` + (message || '') + (jam || '');
    }
}
```

`callPractice1`함수는 추가적으로 `message`와 `jam`을 받습니다. 
`message`와 `jam`이 있을 경우 이를 소개 메세지에 추가해서 반환합니다.

그리고 두번쨰 인자인 `targetContext`는  `eminem`처럼 `introduce`의 `this`바인딩을 바꿔서 호출할 대상이 되는 객체가 들어옵니다.

예를 들면 아래와 같습니다.

```javascript
let targetContext = {
    name: 'eminem',
    age: 30
}
```

여러분은 원래 함수의 `this`바인딩을 `targetContext`로 바꾸고 `message`와 `jam`을 같이 전달해서 호출한 결과를 반환하면 됩니다.



#### Spec

```javascript
/**
  * @param {{name: string, age: number, introduce: (message: string, jam: string) => (result: string) }} context
  * @param {{name: string, age: number}} targetContext
  * @param {string} message
  * @param {string} jam
  * @returns {string} 
  */
function callPractice1(context, targetContext, message, jam) {
}
```



#### Example

```javascript
let jaysok = {
    name: 'jaysok',
    age: 20,
    introduce: function(message, jam) {
        return `My name is ${this.name}, and I'm ${this.age} year-old.` + (message || '') + (jam || '');
    }
}

let eminem = {
    name: 'eminem',
    age: 30
}
 
callPractice1(jaysok, eminem); // My name is eminem, and I'm 30 year-old.
callPractice1(jaysok, eminem, 'gogo'); // My name is eminem, and I'm 30 year-old.gogo 
callPractice1(jaysok, eminem, 'gogo', 'dino!'); // My name is eminem, and I'm 30 year-old.gogodino
```



### `callPractice2`

#### Description

위의 함수와 거의 동일합니다. 

하지만 이번에는 함수의 이름인 `fnKey`가 전달이 됩니다.

위의 함수를 예로 들면, `'introduce'`라는 문자열이 넘어온다는 뜻입니다.
그런데, `'introduce'`가 아니라 `'sayHello'`와 같은 이름으로 넘어올 수도 있다는 뜻입니다.

여러분은 해당 함수를 대상으로 `this`의 바인딩을 바꿔서 호출한 결과를 반환하시면 됩니다.

#### Spec

```javascript
/**
 * 
 * @param {{name: string, age: number, [key: string]: Function}} context 
 * @param {{name: string, age: number}} targetContext 
 * @param {string} fnKey
 * @returns {string}
 */
function callPractice2(context, targetContext, fnKey) {
}
```



#### Example

```javascript
let superman = {
    name: 'superman',
    age: 30,
    sayHello: function() {
         return `Hi, I'm ${this.name}.`;
    },
    introduce: function() {
         return `Hi, I'm ${this.name}, ${this.age} years old.`;
    }
}

let jasok = {
    name: 'jasok',
    age: 20,
}

callPractice2(superman, jaysok, 'sayHello'); // "Hi, I'm jasok."
callPractice2(superman, jaysok, 'introduce'); // "Hi, I'm jasok, 20 years old"
```



### `applyPractice1`

#### Description

`apply`함수를 이용해볼 차례입니다.

`apply`함수는 인자를 배열로 넘긴다는 것을 제외하면, `call`과 동일합니다.

`callPractice1`의 기능을 `apply`를 활용해서 똑같이 구현해보도록 하겠습니다.

단, `apply`를 반드시 사용하셔야 모든 테스트를 통과합 겁니다. 이외에는 동일합니다. 

이하의 설명은 위와 동일하지만 편의를 위해 복붙해놨습니다.



context로는 다음과 같은 객체가 넘어옵니다.
```javascript
let jaysok = {
    name: 'jaysok',
    age: 20,
    introduce: function(message, jam) {
        return `My name is ${this.name}, and I'm ${this.age} year-old.` + (message || '') + (jam || '');
    }
}
```
targetContext로는 다음과 같은 객체가 넘어옵니다.
```javascript
let targetContext = {
    name: 'eminem',
    age: 30
}
```
그리고 추가적으로 `message`와 `jam`을 인자로 받습니다.



#### Spec

```javascript
/**
 * 
 * @param {{name: string, age: number, introduce: (message: string, jam: string) => (result: string) }} context
 * @param {{name: string, age: number}} targetContext
 * @param {string} message
 * @param {string} jam
 * @returns {string} 
 */
function applyPractice1(context, targetContext, message, jam) {
    return context.introduce.apply(targetContext, [message, jam]);
}
```



#### Example

```javascript
let jaysok = {
    name: 'jaysok',
    age: 20,
    introduce: function(message, jam) {
        return `My name is ${this.name}, and I'm ${this.age} year-old.` + (message || '') + (jam || '');
    }
}

let eminem = {
    name: 'eminem',
    age: 30
}
applyPractice1(jaysok, eminem); // My name is eminem, and I'm 30 year-old.
applyPractice1(jaysok, eminem, 'gogo'); // My name is eminem, and I'm 30 year-old.gogo 
applyPractice1(jaysok, eminem, 'gogo', 'dino'); // My name is eminem, and I'm 30 year-old.gogodino
```



### `applyPractice2`

#### Description

이번에는 `arguments`와 `Array.prototype.slice`를 이용해서,
함수의 인자들을 배열로 받는 `apply` 패턴을 사용해보겠습니다.

`Array.prototype.slice.apply(arguments)` 를 할 경우 `arguments`를 배열로 바꿔서 받을 수 있습니다.

>  NOTE: 
>  `Array.prototype.slice.call(arguments)` 로도 가능합니다.

`applyPractice`에는 숫자가 다음과 같이 전달될 것입니다.


모든 숫자의 합과 마지막 숫자만 한 번 더 더해서 반환하는 함수를 작성해주세요.

#### Spec

```javascript
function applyPractice2() {
}
```



#### Example

```javascript
applyPractice2(1, 2, 3, 4, 5); // 20
```





### `bindPractice1`

#### Description

`bind`는 원래 객체의 `this`바인딩을 내가 지정한 객체로 바꾼 함수를 반환합니다.

`bind`를 사용할 때 주의할 점은,
1. 바인딩을 바꾼 함수를 계속 사용해야하는 경우, 바꾼 함수가 계속 동작하게 처리를 해주야한다는 점입니다. 
   즉, 바인딩을 바꾼 함수를 반환하는 것이지, 원래 함수의 바인딩을 바꾼다는 뜻이 아닙니다. 따라서 아래와 같은 처리를 해줘야한다는 뜻입니다.

`context.fn = context.fn.bind(targetContext);`

2. `bind`로 `this`바인딩을 바꾸면, 그 함수의 `this`바인딩은 바꿀 수 없게 됩니다.
   다시 말해서 다시 `bind`를 호출해서 `this`바인딩을 바꾸려 해도, 바꿀 수 없다는 뜻입니다.

첫번째 예제인 `bindPractice1`은 `callPractice1`의 변형입니다.

context에 암묵적(implicit)으로 `this`바인딩 되어있는 함수가, 전달받은 `targetContext`를 `this`로 참조하는 함수를 반환하는 문제입니다. 

context에는 `introduce`라는 함수가 있을 것입니다. 이 `introduce`함수가 `targetContext`의 `this`를 참조하게 만들어보세요 this바인딩이 바뀌어있는 *함수*를 반환해야한다는 점 잊지 마세요.



#### Spec

```javascript
function bindPractice1(context, targetContext) {
    return context.introduce.bind(targetContext);
}
```

#### Example

```javascript
let jaysok = {
    name: 'jaysok',
    age: 20,
    introduce: function(message, jam) {
        return `My name is ${this.name}, and I'm ${this.age} year-old.` + (message || '') + (jam || '');
    }
}
let eminem = {
    name: 'eminem',
    age: 30
}

bindPractice1(jaysok, eminem);
// ƒ (message, jam) { ... }
```



### `bindPractice2`

#### Description

이번에는 `bind`의 다른 용도에 대해 알려드리고자 합니다.

`bind`는 첫번째 인자로는 `this`가 될 객체를 받지만, 이후로는 원래 함수에 전달할 인자들을 차례대로 받습니다.

예를 들면, `Math.min`를 조금 커스터마이징해서, 기본으로 0을 포함한 상태에서 최소값을 구하는 함수를 만들려고합니다.

예를 들면,

```javascript 
defaultZeroMin(1, 2, 3, 4); // 0
defaultZeroMin(-1, -2, 30, 40); // -2 
```
과 같이 동작하게 하고 싶습니다.

이럴 때,
```javascript
let defaultZeroMin = Math.min.bind(null, 0);
```
과 같이 인자를 전달하여 만들면 됩니다.

`defaultZeroMin(1, 2, 3, 4)`는 `Math.min(0, 1, 2, 3, 4)`와 동일하게 동작한다고 생각하시면 됩니다.

`defaultZeroMin(-100, 200, 500)`은 `Math.min(0, -100, 200, 500)`과 동일하게 동작한다고 생각하시면 됩니다.

위와 같이 인자의 일부를 미리 전달하여, 새로운 함수를 구성하는 방식을 partial 혹은 partial application(부분적용)이라고 말합니다.

그럼 이제 문제에 대한 설명입니다.

여러분이 작성하실 `bindPractice2`에서는

`defaultZeroMax` 함수를 반환하시면 됩니다.
다시 말해서 기본으로 0을 포함한 상태에서 최대값을 구하는 함수입니다.



#### Spec

```javascript
function bindPractice2() {
}
```



#### Example

```javascript
let defaultZeroMax = bindPractice2();

defaultZeroMax(1, 2, 3, 4); // 4
defaultZeroMax(-1, -2, -3, -4); // 0
```

