### 1. Javascript closure là gì?

> Closure một chức năng có quyền truy cập vào phạm vi cha, ngay cả sau khi phạm vi đã đóng.

VD: 1

```js
function speak() {
  var words = "hi";
  return function logIt() {
    console.log(words);
  };
}

const hello = speak();
hello(); // 'hi'
```

Ở ví dụ trên, ta thấy function logIt vẫn truy cập được giá trị `words = 'hi'` ngay cả khi scope của function speak đã đóng.

VD 2:

```js
function name(n) {
  return function (a) {
    return `${n} likes ${a}`;
  };
}

var j = name("John");
var c = name("Cindy");

j("dogs"); // 'John likes dogs'
c("cats"); // 'Cindy likes cats'
```

VD 3:

```js
function f1() {
  var N = 0; // N luon duoc khoi tao khoi ham f1 dduowcj thuc thi
  console.log(N);
  function f2() {
    // Ham f2
    N += 1; // cong don cho bien N
    console.log("-->>", N);
  }

  return f2;
}

var result = f1();

result(); // Chay lan 1  --> 1
result(); // Chay lan 2 --> 2
result(); // Chay lan 3 ---> 3
```

#### 2. Javascript: Currying In JavaScript

> Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument. In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

```js
const movies = [
  {
    id: 1,
    name: "Matrix",
  },
  {
    id: 2,
    name: "Star Wars",
  },
  {
    id: 3,
    name: "The wolf of Wall Street",
  },
];

const series = [
  {
    id: 4,
    name: "South Park",
  },
  {
    id: 5,
    name: "The Simpsons",
  },
  {
    id: 6,
    name: "The Big Bang Theory",
  },
];

//Không tốt
console.log(series.map((serie) => serie.id)); //should return [ 1, 2, 3 ])

console.log(movies.map((movie) => movie.id)); //should return [ 1, 2, 3 ])

//Tốt
const get = (property) => (object) => object[property];

const getId = get("id"); // if need get name then get('name')

console.log(movies.map(getId)); //should return [ 1, 2, 3 ]
console.log(series.map(getId)); //should return [ 4, 5, 6 ]
```

### 3. Merge array

- Concat es5:

```js
var array1 = [1, 2];
var array2 = [3, 4, 5];
var array3 = array1.concat(array2); // returns a new array
/*
Output:
[1, 2, 3, 4, 5]
*/

Với concat multiple array javascript

var array1 = [1, 2];
var array2 = [3, 4, 5];
var array3 = [6,7,8]
var array4 = array1.concat(array2, array3); // returns a new array
/*
Output:
[1, 2, 3, 4, 5, 6, 7, 8]
*/
```

- Es6

```js
# Với 2 arrays:

var array1 = [1, 2];
var array2 = [3, 4, 5];
var array3 = [...array1, ...array2]; // returns a new array
/*
Output:
[1, 2, 3, 4, 5]
*/
 # Multiple Arrays

var array1 = [1, 2];
var array2 = [3, 4, 5];
var array3 = [6,7,8]
var arrConc = [...array1, ...array2, ...array3]
/*
Output:
[1, 2, 3, 4, 5, 6, 7, 8]
*/
 or chúng ta cũng có thể làm như sau và sẽ thay đổi giá trị array ban đầu

array1.push(...array2, ...array3);//
//Lúc này array1 sẽ có giá trị là [1, 2, 3, 4, 5, 6, 7, 8]
```

- Merge array Object

```js
var arr1 = [
  { name: "lang", value: "English" },
  { name: "age", value: "18" },
];
var arr2 = [
  { name: "childs", value: "5" },
  { name: "lang", value: "German" },
];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1);

Output: [
  { name: "lang", value: "English" },
  { name: "age", value: "18" },
  { name: "childs", value: "5" },
  { name: "lang", value: "German" },
];
```

- Lấy item của array1 làm key, lấy item của array2 làm value.

```js
var columns = ["Date", "blog", "name", "Location", "rank"];
var rows = ["2019", "javascript", "anonystick", "Vietnam", "150000"];

var result = rows.reduce(function(result, field, index) {
 result[columns[index]] = field;
 return result;
}, {})
console.log(result);

Output:
{
Date: "2019",
blog: "javascript",
name: "anonystick",
Location: "Vietnam",
rank: "150000"
}
```

### 4. Forward Proxy & Reverse Proxy

- Forward Proxy: thay mặt cho client
- Reverse Proxy: thay mặt cho server

![proxy_server](./images/proxy.png)

### 5. Defer và async hiệu quả khi load javascript

- Cả async và defer đều là các thuộc tính boolean. Cách sử dụng của chúng là tương tự nhau:

```js
<script async src="script.js"></script>
<script defer src="script.js"></script>
```

Các attribute này chỉ có ý nghĩa khi sử dụng tập lệnh trong `<head>` của trang và chúng sẽ vô dụng nếu bạn đặt tập lệnh vào phần `</body>`

--> Điều tốt nhất cần làm để tăng tốc độ tải trang của bạn khi sử dụng tập lệnh là đặt chúng vào thẻ <head> và thêm thuộc tính defer vào thẻ script của bạn:

```js
<script defer src="script.js"></script>
```

using `defer`:
![defer_tag](https://flaviocopes.com/javascript-async-defer/with-defer.png)

### 6. Try catch

- try catch chỉ hoạt động (bắt lỗi) khi 1 function được gọi thực thi trong try
- Không hoạt động với hàm setTimeout (vì khi đó try catch đã chạy xong thì setTimeout mới chạy)

### 7. Xử lý relative imports với jsconfig

- create file jsconfig.json in `root path` of project
- should know how to use include, exclude...
- example config:

```js
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "baseUrl": "./src"
  },
  "include": [
    "src/**/*"
  ]
}
```

### 8. Create custom field using `formik`

- Source: <a href='https://github.com/paulnguyen-mn/redux-photo-app/pull/3/files'>Link code demo</a>

#### 9. Swap 2 value

let a = 3
let b = 4
[a,b] = [b,a]

#### 10. New feature in ES11/ES2020

##### 10.1. Optional Chaining

As a JavaScript developer, you must have come across this error a thousand times.
TypeError: Cannot read property ‘z’ of undefined
--> It happens because you tried to access a property on something that is not an object.

```js
const smartphones = {
  brands: {
    apple: true,
  },
};
console.log(smartphones.brands.apple); // output is: ‘true’

console.log(smartphones.companies.motorola); // output is: TypeError: Cannot read property 'motorola' of undefined
```

--> `New feature`: using a question mark immediately followed by a dot (“?.”). It commands the JavaScript engine to not throw an error but return “undefined” as output.

Example:
**Accessing an Object**

```js
const smartphones = {
  brands: {
    apple: true,
  },
};
console.log(smartphones.companies?.motorola); // output is: undefined
```

**Accessing an Array**

```js
let smartphones = ["apple", "samsung", "motorola"];
console.log(smartphones[1]); // output is: samsung

smartphones = null;
console.log(smartphones[1]); // output is: TypeError: Cannot read property '1' of null

console.log(smartphones?.[1]); // output is: undefined
```

**Accessing a Function**

```js
let phoneApple = () => {
  return "11 Pro Max";
};

console.log(phoneApple()); // output is: 11 Pro Max

phoneApple = null;

console.log(phoneApple()); // output is: TypeError: phoneApple is not a function

console.log(phoneApple?.()); // undefined
```

#### 10.2 Nullish Coalescing
Example
```js
let theNumber = 7
let number = theNumber || 5
console.log(number) // output is: 7
```

In case `theNumber = 0`
```js
let theNumber = 0
let number = theNumber || 5
console.log(number) // output is 5
```

Since 0 is not a positive/natural number, it is a falsy value. As a result, the ‘number’ variable will now get the right-hand value assigned to it, which is 5. Anyway, that is not what we want.
--> you can use the nullish coalescing operator that can be written using two question marks – ‘??’.
```js
let theNumber = 0
let number = theNumber ?? 5
console.log(number) // output is: 0
```

--> The right-hand side value will only be assigned if the left-hand side value is equal to undefined or null. 

#### 10.3 Private Fields
Since ES6, JavaScript started supporting class syntax, but private fields are now supported. To define a private property in JavaScript, it should have the hashtag symbol ('#') in the prefix.
```js
class Smartphones {
  #phone_color = "silver";
  designer(name) {
    this.name = name;
  }

get_color() {
    return this.#phone_color;
  }
}
const iPhone = new Smartphones("iPhone");
console.log(iPhone.get_color()); // output is: silver
console.log(iPhone.#phone_color) // output is: Private field '#phone_color' must be declared in an enclosing class
```
If you try to access a private property from outside, the JavaScript engine will return an error.

#### 10.4 Static Field
To use a class method, a class had to be instantiated first, as shown below.
```js
class Smartphone {
  add_color() {
    console.log("Adding Colors");
  }
}
const apple = new Smartphone();
apple.add_color(); // output is: Adding Colors

Smartphone.add_color() // TypeError: Smartphone.add_color is not a function
```

With the help of static fields, you can now declare a class method using static keyword and call it from outside of a class.

```js
class Smartphone {
  designer(color) {
    this.color = color;
  }
  static create_smartphone(color) {
    return new Smartphone(color);
  }
}
const silver = Smartphone.create_smartphone("silver"); // output is: undefined
```

#### 10.5 Top level await
To wait for a Promise to complete, a function with await operator should be defined within async function.
```js
const Smartphone = async () => {
    const color = await fetch(silver)
}
```
With the help of Top Level Await, you don’t have to wrap code in an async function. Instead, the below code will work:
`const color = await fetch(silver)`

It is very useful when it comes to using a fallback source when the initial one fails or resolving module dependencies.
```js
let Vue
try {
    Vue = await import('silver_1_to_vue')
} catch {
    Vue = await import('silver_2_to_vue')
} 
```

#### 10.6 Promise.allSettled
When you want multiple Promises to complete, you can use Promise.all ([promise_1, promise_2]). 
--> In this process, if one of the promises fails, the JavaScript engine will throw an error. 

*There are cases in which the failure of one promise doesn’t matter, and the rest would resolve. 
To achieve that, the new JavaScript ES11 unpacks `Promise.allSettled`.

```js
promise_1 = Promise.resolve('hi')
promise_2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'world'))

Promise.allSettled([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result) // output is: {status: 'fulfilled', value: 'hi'}
        console.log(promise_2_result) // output is: {status: 'rejected', reason: 'world'}
    })
```

Hence, only a resolved Promise returns an object with status and value; whereas, rejected Promise returns an object with status and reason.

#### 10.7 Dynamic Import
While using webpack for module bundling, you may have used dynamic imports. With JavaScript ES11, you get native support for this feature.
```js
// Alert.js file
export default {
    show() {
        // Your alert
    }
}
// Some other file
import('/components/Alert.js')
    .then(Alert => {
        Alert.show()
    })
```

#### 10.8 Match All
matchAll in contrast, returns additional information, such as the index of the string found.
```js
const regex = /\b(iPhone)+\b/g;
const smartphones = "S series, iPhone, note series, iPhone, A series, iPhone, moto phones";
for (const match of smartphones.matchAll(regex)) {
  console.log(match);
}
```
Output
```
0: “iPhone”
1: “iPhone”
groups: undefined
index: 10
input: “S series, iPhone, note series, iPhone, A series, iPhone, Moto phones”

0: “iPhone”
1: “iPhone”
groups: undefined
index: 31
input: “S series, iPhone, note series, iPhone, A series, iPhone, Moto phones”

0: “iPhone”
1: “iPhone”
groups: undefined
index: 49
input: “S series, iPhone, note series, iPhone, A series, iPhone, Moto phones”
```

### 10.9. globalThis
You can execute JavaScript codes in different environments, such as browsers or Node.js. In browsers, a global object is available under the window variable; whereas, in Node.js, it is an object called global. With globalThis, it is now easy to use a global object regardless of the environment in which the code is running.
```js
// In a browser
window == globalThis // true

// In node.js
global == globalThis // true
```

#### 10.10. BigInt
2^53 – 1 is the maximum number you can represent in JavaScript
But with JavaScript ES11 update, BigInt will support the creation of numbers that are bigger than that. 

```js
console.log(Number.MAX_SAFE_INTEGER); // output is: 9007199254740991

// Case (i): When you add 1 to this number:
const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum +1); // output is: 9007199254740992  

// Case (ii): When you add 10 to this number:
const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum +10); // output is: 9007199254741000 which is wrong.
```

when you implement BigInt by adding the alphabet ‘n’ at the end of your number, you will get the correct output/result.
```js
const maxNum = 9007199254740991n;

// Case (i): When you add 1 to this number:
const maxNum = 9007199254740991n;
console.log(maxNum +1n); // output is: 9007199254740992n

// Case (ii): When you add 10 to this number:
const maxNum = 9007199254740991n;
console.log(maxNum +10n); // output  is: 9007199254741001n
```

Also, it is important to not mix BigInt with other types:
```js
const maxNum = 9007199254740991n;
console.log(maxNum +10); // output is: Cannot mix BigInt and other types, use explicit conversions
```

