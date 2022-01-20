	# ApiQuiz

Object API에는 다양한 함수들이 정의되어있지만, 여기서는 그 중에서도 핵심적이고 정말로 자주 사용되는 것들을 다뤄보도록 하겠습니다. 



### `createObject`

#### Description

`Object.create` <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create>



`Object.create` 함수는 다음과 같은 명세를 갖습니다.

`Object.create(proto[, propertiesObject])`

- 첫번째 인자로는 `prototype`으로 지정할 객체를 넘기고,
- 두번째 인자로는 프로퍼티를 정의하고 있는 객체를 optional로 넘길 수 있습니다.

두번째 인자를 사용하는 방식은 자주 사용된다고 보기 어렵기 때문에 여기서 다루지 않겠습니다.



사용방법은 단순합니다. `Teacher`의 인스턴스 객체가 `Person.prototype`을 바라보게 만들었던 것처럼, `__proto__`로 가리키고 싶은 객체를 첫번째 인자로 전달하면 됩니다.



#### Spec

```javascript
/**
 * @param {Object} prototypeObject 
 */
function createObject1(prototypeObject) {
}
```



#### Example

```javascript
let obj = createObject1(Person.prototype);
Person.prototype.isPrototypeOf(obj); // true
```



### `createObject2`

#### Description

`Object.create`의 특수한 사용처가 하나 더 있는데, 이는 바로 완전히 빈 객체를 생성할 수 있다는 것입니다. 



무슨 말인고 하니, 일반적으로 객체 literal로 객체를 생성한 경우, 다시 말해 아래와 같이 생성한 경우를 말합니다.

`let obj = {};`

`obj`는 기본적으로 `Object.prototype`을 상속받습니다. 이는 자연스러운 현상이지요. 그런데, 이러한 기본 상속마저 안하고 싶을 때가 있습니다. 완전히 비어있고 어떠한 prototype chain도 연결되지 않은 객체를 생성하고 싶은 것이지요.

이럴 때 사용할 수 있는 방법이 `Object.create(null)`입니다.

차이를 보면, 아래와 같습니다.

```javascript
let obj = {};
let emptyObj = Object.create(null);
'toString' in obj // true
'toString' in emptyObj // false
```

차이를 아시겠나요?

여러분은 `Object.create(null)`을 이용해서 그냥 완전히 빈 객체를 return 하시기만 하면 됩니다.

#### Spec

```javascript
function createObject2() {
}
```

#### Example

```javascript
let obj = createObject2();
'toString' in obj // false
```



### `listingKeys`

`Object` API 중에 정말로 많이 쓰이는 메서드가 하나 있다면, 그것은 바로 Object.keys일 것입니다.

Object.keys가 동작하는 방식을 볼까요?

```javascript
let obj = { a: 1, b: 2 };

Object.keys(obj); // ['a', 'b']
```

쉽죠? 해당 객체가 가진 key를 배열로 반환해줍니다.

주의하실 점은, `ownProperty` + `[[Enumerable]]`이라는 점입니다.

무슨 말인고 하니, 

1. 프로토타입 체인 위에 있는 key가 아니라, 해당 객체에 선언된 키여야한다는 점입니다.
2. 그리고 해당 key가 `[[Enumerable]]`한 속성이어야합니다.

> NOTE: `[[Enumerable]]`
>
> 두번째에 대해서 간단히 설명을 드리자면, 우리가 객체에 어떤 property를 정의할 때, 해당 프로퍼티에 속성을 부여해서 선언하는 방법이 있습니다. 이 방법을 이용할 때에 `[[Enumerable]]`이라는 속성을 `false`로 선언해서 넣을 수 있습니다. 이 방법을 사용할 경우 객체에 선언되어있는데도 열거가 되지 않는 key값을 선언할 수 있습니다. 
>
> 자세한 건 아래의 문서를 읽어보시기 바랍니다.
>
> `Object.defineProperty` <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty>



이제 문제에 대한 설명입니다. 여러분은 쉽게 `Object.keys`를 이용하여 전달받은 객체의 모든 key를 반환하시기만 하면 됩니다.



#### Spec

```javascript
/**
 * @param {Object} obj
 * @returns {string[]}
 */
function listingKeys(obj) {
}
```



#### Example

```javascript
let obj = {a:1, b:2, c:3}
listingKeys(obj); // ['a', 'b', 'c']
```





### `invert`

#### Description

여러분이 구현하실 `invert`라는 함수는 key와 value를 뒤집는 함수입니다.

동작을 보시죠.

```javascript
let obj = { a: 1, b: 2 };

invert(obj); // {'1': 'a', 'b': '2'}
```

이 함수는 실제로 lodash에도 구현되어있는 함수입니다.

(https://lodash.com/docs/4.17.11#invert)

이 함수는 실무에서는, 다음과 같은 용도로 사용이 된다고 보시면 됩니다.

```javascript
let personImageMap = {
    jaysok001: 'imageId001',
    eminem001: 'imageId002',
}
```

위와 같이 person의 아이디로 이미지의 아이디를 담고 있는 객체가 있다고 한다면, 때로는 이미지 아이디로 `jaysok001`이라는 `key`를 알아야할 때가 있습니다. 

이럴 때 아래와 같이 뒤집어진 객체를 사용해서 원래의 사용자 아이디를 불러올 수 있는 객체를 만들 수 있습니다.

```javascript
let mapImageIdToPersonId = invert(personImageMap);

mapImageIdToPersonId['imageId001']; // 'jaysok001'
```

위와 같이 역으로 맵핑하는 객체를 만드는 용도라고 보시면 됩니다.

여러분이 구현하실 `invert`함수는 아래와 같이 동작하면 됩니다.

단 구현시에, 반드시 `Object.keys`를 사용하셔야합니다.

```javascript
let obj = { a: 1, b: 2 };

invert(obj); // {'1': 'a', 'b': '2'}

let personImageMap = {
    jaysok001: 'imageId001',
    eminem001: 'imageId002',
}

invert(personImageMap); // {'imageId001':'jaysok001', 'imageId002':'eminem001'}
```

단, 주의하실 점이 있습니다.

이 객체는 완전히 key-mapping용으로만 사용될 것이기 때문에, 어떠한 객체의 prototype도 상속받지 않는 완전히 빈 객체로 부터 만들어져야합니다. 

힌트가 됐을까요?



#### Spec

```javascript
/**
 * @param {EmptyObject} obj 
 */
function invert(obj) {
}
```



#### Example

```javascript
let obj = { a: 1, b: 2 };

invert(obj); // {'1': 'a', 'b': '2'}

let personImageMap = {
    jaysok001: 'imageId001',
    eminem001: 'imageId002',
}

invert(personImageMap); // {'imageId001':'jaysok001', 'imageId002':'eminem001'}
```



### `sumOfEvenValues`

#### Description

`Object.values` - <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values>

이번에 사용해볼 API는 `Object.values` 입니다.

`Object.values`는 키의 값들만 배열로 가져옵니다.

예를 들면 아래와 같습니다.

```javascript
let x = {a:1, b:2, c:3};
Object.values(x); // [1,2,3];
```

여러분이 구현하실 함수인 `sumOfValues`는 객체의 key에 할당된 value들 중 짝수인 값들만 더해서

반환하는 함수를 구현하시면 됩니다. 단, `Object.values`를 반드시 호출하셔야합니다.



#### Spec

````javascript
/**
 * @param {{[key: string]: number}} obj 
 */
function sumOfEvenValues(obj) {
}
````



#### Example

```javascript
sumOfEvenValues({a:1, b:2, c:3, d:4}); // 6
sumOfEvenValues({a:1, b:3, c:5, d:7}); // 0
sumOfEvenValues({}); // 0
```





### `sumOfValuesOfUpperCasedKey`

#### Description

이번에 사용해볼 API는 `Object.entries`입니다. 

`Object.entries`는 [key, value] 쌍으로 만들어진 배열의 배열을 반환합니다.

예를 들면 아래와 같습니다.

```javascript
let x = {a:1, b:2, c:3};

Object.entries(x); // [['a', 1], ['b', 2], ['c', 3]];
```

여러분이 구현하실 함수인 `sumOfValuesOfUpperCasedKey`는,

key가 대문자로만 이루어진 key의 값들만 더해서 반환하는 함수입니다.

예를 들면,

```javascript
let obj = {'A': 1, 'a': 2, 'c': 3, 'd': 4};

sumOfValuesOfUpperCasedKey(obj); // 1 
// 'A'만 대문자로만 이루어진 key임

let obj2 = {'Aa': 1, 'a': 2, 'c': 3, 'd': 4};
sumOfValuesOfUpperCasedKey(obj2); // 0 
// 'Aa'는 대문자가 있긴하지만, 소문자도 포함하고 있음.
// 따라서 만족하는 key가 없음 

let obj3 = {'AA': 1, 'BB': 2, 'CC': 3, 'DD': 4};
sumOfValuesOfUpperCasedKey(obj3); // 10
// 모두 대문자이므로 모두 더해서 10
```



단, entries함수를 반드시 호출하셔야합니다.

>  HINT: string을 배열로 바꾸려면, 다음과 같이 하시면 됩니다
>
> `'abc'.split(''); // ['a', 'b', 'c']`



#### Spec

```javascript
/**
 * 
 * @param {[key: string]: number} obj 
 */
function sumOfValuesOfUpperCasedKey(obj) {
}
```



#### Example

```javascript
let obj = {'A': 1, 'a': 2, 'c': 3, 'd': 4};
sumOfValuesOfUpperCasedKey(obj); // 1 

let obj2 = {'Aa': 1, 'a': 2, 'c': 3, 'd': 4};
sumOfValuesOfUpperCasedKey(obj2); // 0 

let obj3 = {'AA': 1, 'BB': 2, 'CC': 3, 'DD': 4};
sumOfValuesOfUpperCasedKey(obj3); // 10
```



### `assignObject`

#### Description

이번에 사용해볼 API는 `Object.assign`입니다.

`Object.assign` 명세는 다음과 같습니다.

`Object.assign(target, ...sources)` 

이는 `target`객체의 key와 value에

1. `sources`에 있는 객체들을 하나씩 순회하면서,
2. `target[key] = source[key]`를 한다고 생각하시면 됩니다.

예를 들면, 아래와 같습니다.

```javascript
let target = {};

let source1 = {a:1};

let source2 = {b:2};

Object.assign(target, source1, source2); // {a:1, b:2};
```





Object.assign은 다음과 같이 정의되어있다고 생각하시면 됩니다.

```javascript
Object.assign = function(target, ...sources) {
   sources.forEach(source => {
       Object.keys(source).forEach(key => {
           target[key] = source[key];
       })
   })
   return target;
}
```

여기서 중요한 점은, 뒤에 나온 source들의 key로 앞에 이미 나온 key가 덮어쓰여진다는 점입니다.

```javascript
let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
Object.assign(target, source); // { a:1, b:4, c: 5 }
```

보시다시피 `b`가 이미 `target`에 있었지만, 뒤에 있는 `source`의 `b`의 값으로 덮어쓰여집니다.



이제부터는 구현에 대한 얘기입니다.

가장 첫번째로 해볼 것은, `Object.assign`의 가장 주된 쓰임새 중에 하나입니다.

바로 객체의 shallow copy를 확보하는데 쓰일 수 있다는 점입니다.

예를 들어, `target`을 빈 객체, `source`를 하나만 전달한다면 어떻게 될까요?

```javascript
let target = {};
let source = {a:1, b:2};
Object.assign(target, source); // {a:1, b:2}
```

객체를 복사하는 행위를 Object.assign을 통해서 할 수 있습니다.

단, shallow copy라는 점을 유념하셔야합니다. 

즉 소위 말하는 primitive type(string, number, boolean, null, undefined, Symbol)들만 복사가 됩니다. 예를 들어, 아래와 같이 source의 value안에 객체가 있는 경우에는, 해당 객체의 참조가 전달되기 때문에, 완전한 복사가 아닙니다.

```javascript
let target = {};
let source = {a:1, b:2, c: {x:1, y:2}};
let copy = Object.assign(target, source); // {a:1, b:2, c: {x:1, y:2}}
copy.c.x = 10; // <-- 원본의 x를 변경해버림
source.c.x // 10 <-- 원본이 영향을 받았다는 것을 확인할 수 있음
```

어쩄든, 여러분은 그저 `Object.assign`을 이용해서 객체를 복사해보시기 바랍니다.

이 문제에서는 위에처럼 참조가 전달되는 일이 없을 것이기 떄문에,

그냥 쉽게 따라서 만드시면 됩니다.

단, `Object.assign`을 반드시 호출하셔야합니다.

#### Spec

```javascript
/**
 * @param {Object} obj
 */
function assignObject(obj) {
}
```



#### Example

```javascript
let obj = {a:1, b:2};
let copy = assignObject(obj) // {a:1, b:2}
copy.a = 10;
obj.a == copy.a // false
```





### `assignMultipleObjects`

#### Description

다음은, `Object.assign`을 이용해서 객체들을 합쳐보는 예제입니다.

동작은 아래와 같습니다.



#### Spec
```javascript
/**
 * @param {Object[]} obj
 */
function assignMultipleObjects(objectArr) {
}
```




#### Example
```javascript
let target = {};
let source1 = {a:1, b:2};
let source2 = {c:3, d:4};
let source3 = {x:1, y:2};
let source4 = {a:10, y:22}

assignMultipleObjects([source1, source2]); // {a:1, b:2, c:3, d:4}
assignMultipleObjects([source2, source3]); // {c:3, d:4, x:1, y:2}
assignMultipleObjects([source1, source4]); // {a:10, b:2, y:22}
assignMultipleObjects([source3, source4]); // {x:1, y:22, a:10 }

assignMultipleObjects([]); // {}
```