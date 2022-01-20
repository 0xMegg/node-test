# Promise

`Promise`가 무엇인지 구구절절하게 설명하는 대신에 한 문장으로 정의하고 출발하겠습니다.

> `Promise`는 미래에 올 값을 담을 객체입니다.

여러분은 `$.ajax` 즉, `jqXHR`이라던가 `XMLHttpRequest` 혹은 `fetch`등등으로 이미 이런 종류의 객체들을 알게 모르게 사용해오셨을 것입니다.

역시 긴 설명 대신에 코드를 보면서 설명해보겠습니다.

```javascript
// 정의하는 측
function makePromise(value) {
    return new Promise(function(resolve) {
        resolve(value);
    });
}

// 사용하는 측
makePromise('Hello World')
    .then(function(value) {
    	console.log(value);
	}); 
// Hello World
```

위 코드를 보면서 가장 기본적인 동작을 이해해보겠습니다.

###  Promise의 콜백함수

먼저 Promise 콜백함수부터 보겠습니다.

```javascript
new Promise(function(resolve) {
    resolve(value);
});
```

Promise 콜백함수는, 첫번째 인자로 `resolve`함수를 받습니다. 
이 `resolve`함수는 `Promise.prototype.then`의 콜백함수가 됩니다. 쉽게 말해서 사용하는 측에서 `then`안에다가 전달한 그 함수가 `resolve`와 같다는 뜻이 됩니다.



즉 아래와 같습니다.

```javascript
let myPromise = makePromise('abcd');

myPromise.then(printWord); // abcd

function printWord(word) {
    console.log(word);
}
```



### Promise가 값을 주고받는 형태

```javascript
new Promise(function(resolve) {
    resolve(value);
});
```

이번에는 콜백함수의 body를 보겠습니다. `resolve(value)`라고 되어있는데, 아까전에 `then`이 받은 함수가 콜백함수가 된다고 말씀드렸습니다. 따라서 `then`안에 들어온 콜백함수의 첫번째 파라메터로, `value`가 전달된다는 뜻입니다. 다시 말해서, `then`다음에 들어올 콜백함수에게 어떤 값을 전달하고 싶으면 `resolve`에게 그냥 그 값을 전달하면 된다는 뜻입니다.

```javascript
new Promise(function(resolve){
    resolve(1);
}).then(function(one) {
    console.log(1); 
}); 
// 1
```

여기까지가 가장 기본적인 동작 방식입니다. 아직은 잘 감이 안오실 겁니다. 



이번에는 시간차를 조금 줘보도록 하겠습니다.

```javascript
function delayedPromise(value, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value);
        }, delay);
    });
}
```

조금 복잡해보이지만, 추가된 동작은 시간차를 주는 것 외에는 없습니다. 

`delayedPromise`는 `then`의 콜백에게 전달할 `value`와 얼마나 시간차를 줄것인지 `delay`를 받습니다.  이후에 `delay`만큼 기다렸다가 `resolve(value)`실행합니다. 다시 말하면 `delay`만큼 기다렸다가 `then`의 콜백함수의 첫번째 파라메터에 `value`를 넣어서 실행한다는 뜻입니다.

```javascript
delayedPromise('One second after', 1000)
	.then(function(value) {
		console.log(value);
	})
// (약 1초 후에...) One second after
```

이제 조금 동작이 이해되시나요?



## fetch

`Promise`를 직접적으로 다루기에 앞서, `fetch`라는 javascript API 대해서 잠시 알아보겠습니다.

> fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



`fetch`의 사용법은 간단하게 설명하면 다음과 같습니다.

```javascript
let url = 'https://jsonplaceholder.typicode.com/posts';
let options = {};
fetch(url, options);
```

위 코드처럼 `options`에 아무것도 넘기지 않으면, 기본으로 `GET`요청이 되고, 별 다른 정보 없이 서버에 HTTP `GET`요청을 날립니다. 따라서 위의 코드는 `fetch(url)`과 다를바가 없습니다.

`options` 에 들어갈 내용은 HTTP 스펙을 따라가기 때문에, HTTP 요청을 어떻게 만들어내는지 알아야하므로 다뤄야할 내용이 너무 많아서 깊게는 다루지 않겠습니다.

`fetch`는 그 결과로 `Promise`객체를 반환합니다. 따라서 `fetch`의 결과에 접근하려면, `jQuery.ajax`가 콜백을 통해서 data에 접근했던 것처럼 데이터가 도착한 시점에 처리할 수 있는 수단을 활용해야합니다. 여기서는 Promise를 다루고 있으므로, `then`을 이용해서 요청의 결과에 접근해보겠습니다.



```javascript
let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url).then(x => {
    console.log(x);
});
```

위의 코드를 실행해보면, `Reponse`라는 객체가 찍히는 것을 확인하실 수 있습니다. 이 객체는 HTTP 요청의 결과(Response)를 담고 있는 객체로, 요청의 결과를 상세하게 담고 있으므로, 필요에 따라 사용하시면 됩니다. 

또한, `Response.prototype`을 `__proto__`로 가지는 객체이므로, 어떤 것을 사용해야할지 모를 때는, `console.dir(Response.prototype)`로 사용가능한 API를 골라서 활용하시면 됩니다. 



가장 먼저 `Response.prototype.text()`를 활용해보겠습니다. 이제는 `x`가 `Response`객체라는 것을 알았으니 `response`로 쓰겠습니다.

```javascript
fetch(url).then(response => response.text()).then(text => {
    console.log(text);
});
```

결과를 보시면 아시겠지만, 요청한 결과가 문자열로 온 것을 확인하실 수 있습니다. 여기서 유념하실 부분은 결과가 JSON이라는 점입니다.  정말로 JSON인지 확인해보겠습니다.



```javascript
fetch(url).then(response => response.headers).then(headers => {
	headers.forEach((value, key) => {
		console.log({key, value});
	});
})
// Promise {<pending>}
// {key: "cache-control", value: "public, max-age=14400"}
// {key: "content-type", value: "application/json; charset=utf-8"}
// {key: "expires", value: "Tue, 26 Mar 2019 21:38:04 GMT"}
// {key: "pragma", value: "no-cache"}
```

위으 코드에서는, `response`, 즉 요청의 결과 객체에 달려있는 HTTP 헤더 정보를 읽어서, 서버가 어떤 방식으로 우리에게 결과를 반환했는지 확인하는 코드입니다.

우리가 여기서 확인할 부분은 Content-Type이  `application/json`이라는 부분입니다. 서버는 클라이언트가 이 정보를 JSON으로 읽어들이길 바라면서 결과를 반환한 것입니다.



그러면, 이제 이 정보를 text가 아니라 json으로 받아보겠습니다. 추가적으로 이번에는 코드에 들여쓰기를 해서 `then`으로 chaining했다는 것을 강조해보겠습니다.

```javascript
fetch(url)
    .then(response => response.json())
    .then(json => {
    	console.log(json);
	});
```

마지막 `then`에서는 `json`이라는 이름으로, 활용이 쉬운 형태로 변환된 것을 보실 수 있습니다. 



그럼 이제 실전에 들어가보겠습니다.



> NOTE
>
> 이제부터 사용할 서버는 `https://jsonplaceholder.typicode.com`이라는 곳에서 제공하는 가짜 REST API 제공서버입니다. 이곳에서 저희가 사용해볼 API endpoint는 주로 `https://jsonplaceholder.typicode.com/posts/...` 입니다. 여기서 post는 블로그 게시글을 상상하시면 됩니다.

### `getPosts`

#### Description

`getPosts`함수는 모든 게시글을 가져오는 요청을 만들어내는 함수입니다. 아래와 같이 구현해주세요.

1. `fetch`로 `https://jsonplaceholder.typicode.com/posts` 라는 곳에 GET 요청을 보내야합니다.
2. 그 결과를 json으로 변환해야합니다.
3. 2의 결과를 담고 있는 `Promise`객체를 반환해야합니다.



#### Spec

```javascript
function getPosts() {
}
```

#### Example

```javascript
getPosts();
// Promise {<pending>}

getPosts().then(jsonData => console.log(jsonData));
// post의 배열을 출력
```



### `getPostById`

`getPostById`함수는 게시글의 `id`로 게시글 하나를 가져오는 요청을 만들어내는 함수입니다. 아래와 같이 구현해주세요.

1. `fetch`로 `https://jsonplaceholder.typicode.com/posts/:postId`라는 곳에 요청을 보내야합니다. `:postId` 대신에 전달받은 `postId` 인자를 넣어줘야합니다. 예를 들어서 `postId`가 1이면 `https://jsonplaceholder.typicode.com/posts/1` 로 요청을 던져야합니다.
2.  그 결과를 json으로 변환해야합니다.
3. 2의 결과를 담고 있는 `Promise`객체를 반환해야합니다.

> Path Variable, Path Parameter
>
> 위에 요청처럼 어떤 http요청 주소의 path의 일부분으로 parameter를 전달하는 방식을 Path Variable 혹은 Path Parameter라고 말합니다. 예를 들어, `https://jsonplaceholder.typicode.com/posts/1` 의 경우, Path Variable 가 1이다라고 얘기합니다.

#### Spec

```javascript
function getPostById(postId) {
}
```

#### Example

```javascript
getPostById(1);
// Promise {<pending>}

getPostById(1).then(jsonData => console.log(jsonData));
// {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}
```



### `getPostsByUserId`

#### Description

이번에는 게시글의 list를 가져오되, 게시글을 작성한 사람의 id(`userId`)로 가져오고 싶습니다. 즉, 아래와 같이 구현해주세요.

1. `fetch`로 `https://jsonplaceholder.typicode.com/posts?userId=${userId}`라는 곳에 요청을 보내야합니다. `:userId` 대신에 전달받은 `userId` 인자를 넣어줘야합니다. 예를 들어서 `userId`가 1이면 `https://jsonplaceholder.typicode.com/posts?userId=1` 로 요청을 던져야합니다.
2. 그 결과를 json으로 변환해야합니다.
3. 2의 결과를 담고 있는 `Promise`객체를 반환해야합니다.

> Request Parameter, Query Parameter
>
> 위에 요청처럼, url뒤에 `?key=value` 형식으로 요청을 던질 때, Request Parameter 혹은 Query Parameter라고 말합니다. 예를 들어 `https://jsonplaceholder.typicode.com/posts?userId=1`의 경우, `userId`의 Request/Query parameter값이 1이다 라고 얘기합니다. 
>
> 파라메터가 두 개 이상인 경우는 `&`로 이어붙이면 됩니다.
>
> `https://jsonplaceholder.typicode.com/posts?userId=1&example=3`

#### Spec

```javascript
function getPostsByUserId(userId) {
}
```

#### Example

```javascript
getPostsByUserId(1);
// Promise {<pending>}

getPostsByUserId(1).then(jsonData => console.log(jsonData));
// (10) [{...},{...},{...},{...},{...},{...},{...},{...},{...},{...}]
```


## POST Request

이번에는 서버에 데이터를 생성하는 요청을 만들어보겠습니다. 계속 진행하기에 앞서, `fetch`에 대해 조금 더 알아보겠습니다. 위에서 아래와 같이 `options`를 `fetch`의 두번째 파라메터로 넘겼던 것이 기억날 것입니다.

```javascript
let url = 'https://jsonplaceholder.typicode.com/posts';
let options = {};
fetch(url, options);
```

`options`에 `method` 라는 key값을 지정해주면, 해당 HTTP method로 요청을 보낼 수 있습니다. 예를 들면, 아래와 같습니다.

```javascript
let options = {
    method: 'POST'
}
fetch(url, options);
```

위와 같이 요청을 해도 응답을 하도록 서버를 만들어 놓을 수 있지만, 저희가 요청을 던질 곳인 `https://jsonplaceholder.typicode.com/posts`는 그렇게 만들어져있지 않습니다. 즉, 어떻게 요청을 던져야하는가에 대한 답은 전적으로 서버가 결정합니다. 

>  GET vs POST
>
> GET과 POST의 가장 큰 차이는 "일반적"으로 다음과 같습니다.
>
> 1. parameter에 해당하는 데이터가 url에 드러나는지 여부
> 2. body에 데이터를 싣는지 여부
>
> GET요청의 경우, 앞서 설명드린데로 url에 parameter 정보가 드러납니다. 따라서 로그인이나 회원가입등의 절차에 GET요청을 사용하는 경우는 없다고 봐도 무방합니다. 왜냐하면, ID나 password등의 기밀정보가 url에 드러나면 안되기 때문입니다.
>
> POST요청의 경우, parameter를 url에 싣는 대신에, body에 담습니다. 따라서, url에 parameter 정보가 들어가는 대신에 body에 들어갑니다. 그 결과로 parameter 정보를 숨기는 효과를 얻을 수 있습니다.



`https://jsonplaceholder.typicode.com/posts`는 POST 메서드로 요청을 받을 때, body에 json 스트링을 받게끔 만들어져있습니다. 

따라서 이를 위해, `fetch`에 이러한 정보를 전달해주어야하고, HTTP요청을 이에 맞게 만들어줘야합니다. 아래 코드를 보시죠.

```javascript
let options = {
    method: 'POST',
    body: JSON.stringify({
        a:1,
        b:2
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};
```

위 코드에서 유의하실 부분은

1. `body`
2. `headers`

body의 경우 javascript객체가 아닌, JSON string으로 만들어줘야합니다. 왜냐하면, HTTP protocol은 javascript를 모릅니다. 따라서 HTTP protocol에 실려갈 수 있는 문자열 값으로 변환해줘야합니다. 이를 위해 javascript객체를, 문자열로 변환해주는 `JSON.stringify`함수를 사용합니다.

다음은 헤더 정보로, 저희가 json 형태로 데이터를 보낸다는 것을 서버에 알려주기 위해, `content-type: application/json; chatset=UTF-8`을 붙입니다. `charset`은 인코딩에 대한 정보로, `UTF-8` 문자열이 들어있으니, 서버에서 이를 변환할 때 `UTF-8`을 디코딩할 수 있는 모듈을 사용하라는 뜻입니다.



### `createPost`

#### Description

`createPost`함수는 서버에 게시글(post)을 생성하는 요청을 만들어내는 함수입니다. 전달받은 `title`, `body`, `userId`를 이용해서 요청을 만들어보세요. 아래와 같이 구현하시면 됩니다.

1. `https://jsonplaceholder.typicode.com/posts`에 POST 메서드로 요청을 던져야합니다. 전달받은 파라메터로 javascript 객체를 만든 후, 이를 문자열로 변환해서 `option`에 key:value 형식으로 담아주셔야합니다.
2. 서버에 우리가 `application/json; chatset=UTF-8`이라는 content-type으로 요청을 보낸다는 사실을 `headers`에 담아주세요.
3. 이렇게 요청을 보내면 서버는 새로 만들어진 데이터를 반환할 것입니다.
4. 이 결과를 json으로 변환해주세요.
5. 4의 결과를 담고 있는 Promise객체를 반환해주세요.

#### Spec

```javascript
function createPost(title, body, userId) {
}
```

#### Example

```javascript
createPost({
  title: 'foo',
  body: 'bar',
  userId: 1
});
// Promise {<pending>}

createPost({
  title: 'foo',
  body: 'bar',
  userId: 1
}).then(post => console.log(post));
// {  id: 101,   title: 'foo', body: 'bar', userId: 1  }
```



#### `delayedPromise`

#### Description

이번에는 앞서 설명드렸던 `delayedPromise`를 구현해주세요. 설명은 위에 있으니 생략하겠습니다. 따라서 작성해보시면서, 어떻게 동작하는지 머리 속에서 그려보세요.



#### Spec

```javascript
function delayedPromise(value, ms) {
}
```



#### Example

```javascript
delayedPromise('One second after', 1000)
	.then(function(value) {
		console.log(value);
	})
// (약 1초 후에...) One second after
```



### `sumAfterAllPromise`

#### Description

`Promise.all` - <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all>

이번에는 `Promise.all`이라는 함수를 사용해보겠습니다. `Promise.all`은 모든 `Promise`가 결과를 받아온 시점을 캐치해서 작업을 등록할 수 있도록 만든 함수입니다.



예를 들어서 위에서 정의한 `delayedPromise`를 활용하여 설명드리면,

```javascript
Promise.all([delayedPromise(1, 1000), delayedPromsie(2, 2000)])
    .then(values => {
        console.log(values);    
	});
// [1, 2] 출력
```

위 코드에서, 첫번째 `Promise`는 약 1초 후에 값이 들어옵니다. 두번째 `Promise`는 약 2초후에 값이 들어옵니다. 그러면 두번째 `Promise`가 해결되는데 시간이 더 오래걸리겠죠? 따라서 두번째 `Promise`가 완료된 시점 이후에, `[1, 2]`가 출력될 것입니다.



보시면 아시겠지만, `Promise.all`은 배열을 인자로 받고, 다음 `then`에게 넘겨주는 값 역시 배열로 넘겨줍니다.



그럼 문제에 대한 설명입니다.

`sumAfterAllPromise`는 `Promise`의 배열인 `promiseArray`를 첫번째 인자로 받습니다. 여러분은 여기에 포함되어있는 모든 `Promise`가 결과를 받아온 시점에 각 `Promise`가 반환해주는 값을 모두 더해서 반환하는 `Promise`를 만드시면 됩니다.



#### Spec

```javascript
function sumAfterAllPromise(promiseArray) {
}
```



#### Example

```javascript
sumAfterAllPromise([delayedPromise(1, 1000), delayedPromsie(2, 2000)])
// Promise {<pending>}

sumAfterAllPromise([delayedPromise(1, 1000), delayedPromsie(2, 2000)])
	.then(x => console.log(x));
// 3
```





### `pickFastestValue`

이번에는 `Promise.race`함수를 사용해보겠습니다. `race`는 `all`과 다르게 가장 먼저 값이 결정된 `Promise`의 결과를 `then`에게 전달해줍니다.  아래 코드를 보시죠.



```javascript
Promise.race([delayedPromise(1, 1000), delayedPromsie(2, 2000)])
    .then(value => {
        console.log(value);    
	});
// 1 출력
```

위 코드에서 먼저 끝나는 `Promise`는 1초(1000ms) 걸리는 첫번째 `Promise`일 것입니다. 따라서 1이라는 값이 출력될 것입니다.

`Promise.race`역시 여러개의 `Promise`를 받아야하므로 인자는 배열로 받습니다. 하지만 `then`에게 넘겨주는 값은 배열이 아니라 객체 하나입니다.



이제 문제에 대한 설명입니다.

`pickFastestValue`는 `Promise`의 배열인 `promiseArray`를 인자로 받습니다. 그리고 가장 빨리 값이 결정된 `Promise`의 값을 받는 `Promise`객체를 반환해주세요.

#### Spec

```javascript
function pickFastestValue(promiseArray) { 
}
```



#### Example

```javascript
pickFastestValue([delayedPromise(1, 1000), delayedPromsie(2, 2000)])
// Promise {<pending>}

pickFastestValue([delayedPromise(1, 1000), delayedPromsie(2, 2000)])
	.then(x => console.log(x));
// 1
```





