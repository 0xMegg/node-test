# PrototypeQuiz

어떠한 방법을 사용해도 되지만, class keyword는 사용하지 않는 것을 권장합니다. 



### `definePersonClass`

#### description
`Person` class를 정의해보겠습니다.

person 인스턴스는 `name`과 `age`를 가져야합니다.

각 프로퍼티에 접근하는 메서드 getter과 setter을 정의하셔야합니다. 

> getter는 인스턴스의 어떤 값을 가져오는 메서드를 말합니다.
> setter는 인스턴스의 값을 셋팅하는 메서드를 말합니다.

정의하신 뒤에 `Person`클래스(function) 을 반환해주세요.

#### Spec

```javascript
function definePersonClass() {
    function Person() {}
    return Person;
}
```



#### Example
```javascript
let YourPersonClass = definePersonClass();
let jaysok = new YourPersonClass('jaysok', 20);
jaysok.getName(); // jaysok
jaysok.getAge(); // 20
jaysok.setName('jay');
jaysok.getName(); // jay
jaysok.setAge(30);
jaysok.getAge(); // 30 
```








### `defineTeacherClass`

#### description
Teacher class를 정의해보겠습니다. 
teacher 인스턴스는 `name`, `age`, `subject`를 가져야합니다.

마찬 가지로 getter/setter을 정의해주셔야합니다.
정의하신 뒤에 `Teacher`클래스(function) 을 반환해주세요.

#### Spec

```javascript
function defineTeacherClass() {
    function Teacher() {}
    return Teacher;
}
```
#### Example
```javascript
let YourTeacherClass = defineTeacherClass();
let jaysok = new YourTeacherClass('jaysok', 20, 'math');

jaysok.getName(); // jaysok
jaysok.getAge(); // 20
jaysok.getSubject(); // math

jaysok.setName('jay');
jaysok.getName(); // 'jay'
jaysok.setAge(30);
jaysok.getAge(); // 30 
jaysok.setSubject(); 
jaysok.getSubject(); // computer
```





### `defineStudentClass`

#### description

이번에는 `Student` class를 정의해보겠습니다.

student 인스턴스는 `name`, `age`, `subjects`를 가져야합니다.

다시 말하면, subject의 배열을 가져야합니다.

get, set은 모두 정의하셔야하고, 

`addSubject`를 추가로 구현해주세요.
`addSubject('computer')` 를 하시면 `subject`배열에 `'computer'`가 추가되어야합니다.

배열에 요소를 추가할 때는 `push`를 사용하시면 됩니다. 있어도 상관없게 구현해주세요. 쉽게 구현하시면 됩니다.

마지막에 `Student` class를 반환하는 걸 잊지 말아주세요.

#### Spec

```javascript
function defineStudentClass() {
    function Student() {}
    return Student;
}
```


#### Example

```javascript
let YourStudentClass = defineStudentClass();

let jaysok = new YourStudentClass('jaysok', 20, ['math', 'english']);

jaysok.getName(); // jaysok
jaysok.getAge(); // 20
jaysok.getSubjects(); // ['math', 'english']

jaysok.setName('jay');
jaysok.getName(); // 'jay'
jaysok.setAge(30);
jaysok.getAge(); // 30 
jaysok.setSubjects(['math', 'computer']); 
jaysok.getSubjects(); // ['math', 'computer']

jaysok.addSubject('english');
jaysok.getSubjects(); // ['math', 'computer', 'english']
```




### `defineTeacherClass2`

#### description

앞서 정의한 `Teacher` class가 `Person` class를 상속받게 만들어보세요.

명세는 동일합니다.

마지막에 정의한 `Teacher` class와 `Person` class를 객체로 반환해주세요.

함수안에 있는 주석 형태로 리턴하시면 됩니다.

#### Spec

```javascript
function defineTeacherClass2() {
    function Person() {}
    function Teacher() {}
    return { Person: Person, Teacher: Teacher };
}
```
#### Example

```javascript
let {Teacher, Person} = defineTeacherClass2();

let jaysok = new Teacher('jaysok', 20, 'math');

jaysok.getName(); // jaysok
jaysok.getAge(); // 20
jaysok.getSubject(); // math

jaysok.setName('jay');
jaysok.getName(); // 'jay'
jaysok.setAge(30);
jaysok.getAge(); // 30 
jaysok.setSubject(); 
jaysok.getSubject(); // computer
```



### `defineStudentClass2`

#### description

마찬가지로 앞서 정의한 Person class를 상속받는 Student 클래스를 정의해보세요.

명세는 동일하며, 마지막에 반환 형식에 주의하세요

#### Spec

```javascript
function defineStudentClass2() {
    function Person() {}
    function Student() {}
    return { Person: Person, Student: Student };
}
```



#### Example

```javascript
let {Student, Person} = defineStudentClass2();

let jaysok = new Student('jaysok', 20, ['math', 'english']);

jaysok.getName(); // jaysok
jaysok.getAge(); // 20
jaysok.getSubjects(); // ['math', 'english']

jaysok.setName('jay');
jaysok.getName(); // 'jay'
jaysok.setAge(30);
jaysok.getAge(); // 30 
jaysok.setSubjects(['math', 'computer']); 
jaysok.getSubjects(); // ['math', 'computer']

jaysok.addSubject('english');
jaysok.getSubjects(); // ['math', 'computer', 'english']
```



### `defineEmployeeClass`

#### description

마찬가지로 이번에는 Person을 상속받는 Employee클래스를 정의해주세요.

`employee`가 가지는 property는 `id`, `name`, `age`, `department`입니다. 

각 프로퍼티 별로 getter/setter를 정의해주세요.

#### Spec

```javascript
function defineEmployeeClass() {
    function Person() {}
    function Employee() {}
    return { Person: Person, Employee: Employee };
}
```



#### Example

```javascript
let {Employee, Person} = defineEmployeeClass();

let jaysok = new Employee('emp-01', jaysok', 20, 'development');

jaysok.getId(); // emp-01
jaysok.getName(); // jaysok
jaysok.getAge(); // 20
jaysok.getDepartment(); // 'department'

jaysok.setId('emp-02');
jaysok.getId(); // emp-02
jaysok.setName('jay');
jaysok.getName(); // jay
jaysok.setAge(30);
jaysok.getAge(); // 30 
jaysok.setDepartment('HR');
jaysok.getDepartment(); // HR
```



### `defineRatingClass`

#### description

어린왕자            ★★★★☆
나의 라임오렌지 나무 ★★★☆☆

점수를 기억하고 있는 `Rating`이라는 클래스를 정의해보겠습니다.

`Rating` 클래스의 인스턴스는 다음과 같은 property를 가져야합니다. 단, 점수 단위는 1점으로 하겠습니다.

1. `bookId` 작품의 ID
2. `rating` 현재 점수(최대 5, 최소 0)
3. `ratingStatus` 각 모양의 현재 상태 배열(활성화모양/비활성화모양)
4. `activeShape` 활성화모양     
5. `inactiveShape` 비활성화모양   

생성자는 다음과 같이 해주세요.

```javascript
function Rating(bookId, activeShape, inactiveShape){
    ...
}
```



> 단, rating은 초기 값이 null이어야합니다. 



각각에 대한 getter가 정의가 되어야합니다.

set은 `rating`에 대해서만 정의합니다.

한편, `setRating`의 경우, 조금 다릅니다. 
예를 들어서, ★★★★☆ 상태일 때, `setRating(2)`를 할 경우, ★★☆☆☆ 의 상태로 변해야합니다. 
다시 말해서 rating에 따라서 배열을 보여줄 수 있는 처리가 되어야 있어야한다는 뜻입니다.

추가로, `isTouched` 메서드를 구현해주세요. 이 메서드는, 점수가 매겨진 적 있는지 검사하는 함수입니다.

예를 들어 방금 새로 나온 책 같은 경우는 다음과 같겠죠.

새로나온 책 ☆☆☆☆☆

이 책은 별점이 받은 적이 없기 때문에 `rating`이 `null`이어야합니다.
그리고 만약 별점을 받아서 점수가 생기면, 절대로 `null`일 수 없기 때문에,
`isTouched`는 `true`를 반환해야합니다.

다 정의하시고 나면 `Rating` class를 반환해주세요.

#### Spec

```javascript
function defineRatingClass() {
    function Rating(bookId, activeShape, inactiveShape){}
    return Rating;
}
```

#### Example

```javascript
let Rating = defineRatingClass();

let theLittlePrinceRating = new Rating('어린왕자', '★', '☆');

theLittlePrinceRating.getBookId(); // 어린왕자
theLittlePrinceRating.getRating(); // null
theLittlePrinceRating.getRatingStatus(); ['☆', '☆', '☆','☆','☆',];
theLittlePrinceRating.getActiveShape(); // ★
theLittlePrinceRating.getInactiveShape(); // ☆
theLittlePrinceRating.isTouched(); // false

theLittlePrinceRating.setRating(3);
theLittlePrinceRating.getRatingStatus(); ['★', '★', '★','☆','☆',]
theLittlePrinceRating.isTouched(); // true
```

