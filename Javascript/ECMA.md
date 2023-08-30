## ECMAScript

ECMAScript is the scripting language which acts as the basis of JavaScript

### Version History
- ES2015 Or ES6: `June 2015`
- ES2016 Or ES7: `June 2016`
- ES2017 Or ES8: `June 2017`
- ES2018 Or ES9: `June 2018`
- ES2019 Or ES10: `June 2019`
- ES2020 Or ES11: `June 2020`
- ES2021 Or ES12: `June 2021`
- ES2022 Or ES13: `June 2022`
- ES2023 Or ES14: `June 2023`


### ES2015 (ES6)
- [Variable Scoping](https://github.com/sudheerj/ECMAScript-features#variable-scoping)
- [Arrow function](https://github.com/sudheerj/ECMAScript-features#arrow-functions)
- [Enhanced object literals](https://github.com/sudheerj/ECMAScript-features#enhanced-object-literals)
- [Template literals](https://github.com/sudheerj/ECMAScript-features#template-literals)
- [Destructuring](https://github.com/sudheerj/ECMAScript-features#destructuring)
- [Default parameters](https://github.com/sudheerj/ECMAScript-features#default-parameters)
- [Spread Operator](https://github.com/sudheerj/ECMAScript-features#spread-operator)
- [Iterators & For..of](https://github.com/sudheerj/ECMAScript-features#iterators--forof)
- [Generators](https://github.com/sudheerj/ECMAScript-features#generators)
- [Modules](https://github.com/sudheerj/ECMAScript-features#generators)
- [Set](https://github.com/sudheerj/ECMAScript-features#set)
- [Weakset](https://github.com/sudheerj/ECMAScript-features#weakset)
- [Map](https://github.com/sudheerj/ECMAScript-features#map)
- [Weakmap](https://github.com/sudheerj/ECMAScript-features#weakmap)
- [Unicode](https://github.com/sudheerj/ECMAScript-features#unicode)
- [Symbols](https://github.com/sudheerj/ECMAScript-features#symbols)
- [Proxies](https://github.com/sudheerj/ECMAScript-features#proxies)
- [Promises](https://github.com/sudheerj/ECMAScript-features#promises)
- [Reflect](https://github.com/sudheerj/ECMAScript-features#reflect)
- [Binary and Octal](https://github.com/sudheerj/ECMAScript-features#binary-and-octal)
- [Proper Tail Calls](https://github.com/sudheerj/ECMAScript-features#proper-tail-calls)
- [Array find methods](https://github.com/sudheerj/ECMAScript-features#array-find-methods)

### ES2016 (ES7)
- [Array Includes](https://github.com/sudheerj/ECMAScript-features#array-includes)
  - Prior to ES7, use `indexOf` method
  - Whereas in ES7, `array.prototype.includes()` method is introduced as a direct approach.
  - `indexOf` does not return correct index while searching for `NaN` and `Undefined`, Whereas `includes`  is able to find that elements (NaN, Undefined).
- [Exponentiation Operator](https://github.com/sudheerj/ECMAScript-features#exponentiation-operator)
  - Prior ES7 use `Math.pow(x,y)`
  - Whereas in ES7, use `**` (`const cube = x => x ** 3`)

### ES2017 (ES8)
- [Async functions](https://github.com/sudheerj/ECMAScript-features#async-functions)
- [Object values](https://github.com/sudheerj/ECMAScript-features#object-values)
- [Object entries](https://github.com/sudheerj/ECMAScript-features#object-entries)
- [Object property descriptors](https://github.com/sudheerj/ECMAScript-features#object-property-descriptors)
- [String padding](https://github.com/sudheerj/ECMAScript-features#string-padding)
- [Shared memory and atomics](https://github.com/sudheerj/ECMAScript-features#shared-memory-and-atomics)
- [Trailing commas](https://github.com/sudheerj/ECMAScript-features#trailing-commas)

### ES2018 Or ES9
- [Async iterators](https://github.com/sudheerj/ECMAScript-features#async-iterators)
- [Object rest and spread operators](https://github.com/sudheerj/ECMAScript-features#object-rest-and-spread-operators)
- [Promise finally](https://github.com/sudheerj/ECMAScript-features#promise-finally)

### ES2019 Or ES10
- [Array flat and flatMap](https://github.com/sudheerj/ECMAScript-features#array-flat-and-flatmap)
- [Object fromEntries](https://github.com/sudheerj/ECMAScript-features#object-fromentries)
- [String trimStart and trimEnd](https://github.com/sudheerj/ECMAScript-features#string-trimstart-and-trimend)
- [Symbol description](https://github.com/sudheerj/ECMAScript-features#symbol-description)
- [Optional catch binding](https://github.com/sudheerj/ECMAScript-features#optional-catch-binding)
- [JSON Improvements](https://github.com/sudheerj/ECMAScript-features#json-improvements)
- [Array Stable Sort](https://github.com/sudheerj/ECMAScript-features#array-stable-sort)
- [Function.toString()](https://github.com/sudheerj/ECMAScript-features#functiontostring)
- [Private Class Variables](https://github.com/sudheerj/ECMAScript-features#private-class-variables)

### ES2020 Or ES11
- [BigInt](https://github.com/sudheerj/ECMAScript-features#bigint)
- [Dynamic Import](https://github.com/sudheerj/ECMAScript-features#dynamic-import)
- [Nullish Coalescing Operator](https://github.com/sudheerj/ECMAScript-features#nullish-coalescing-operator)
- [String matchAll](https://github.com/sudheerj/ECMAScript-features#string-matchall)
- [Optional chaining](https://github.com/sudheerj/ECMAScript-features#optional-chaining)
- [Promise.allSettled](https://github.com/sudheerj/ECMAScript-features#promiseallsettled)
- [globalThis](https://github.com/sudheerj/ECMAScript-features#globalthis)
- [import.meta](https://github.com/sudheerj/ECMAScript-features#importmeta)
- [for..in order](https://github.com/sudheerj/ECMAScript-features#forin-order)

### ES2021 Or ES12
- [replaceAll](https://github.com/sudheerj/ECMAScript-features#replaceall)
  ```js
	Before:
	console.log('10101010'.replace(new RegExp('0', 'g'), '1')); // 11111111
	After:
	console.log('10101010'.replaceAll('0', '1')); // 11111111
  ```
- [promise.any](https://github.com/sudheerj/ECMAScript-features#promiseany)
  -  Resolves to the value of the `first promise` which is successfully fulfilled.
  -  In case none of the promises resolved then it throws AggregateError exception.
- [weakref](https://github.com/sudheerj/ECMAScript-features#weakref)
- [Numeric Separators](https://github.com/sudheerj/ECMAScript-features#numeric-separators)
- [Logical Operators](https://github.com/sudheerj/ECMAScript-features#logical-operators)

### ES2022 Or ES13
- [Top-level await](https://github.com/sudheerj/ECMAScript-features#top-level-await)
- [Class fields](https://github.com/sudheerj/ECMAScript-features#class-fields)
- [Array .at() method](https://github.com/sudheerj/ECMAScript-features#array-at-method)
- [Error Cause](https://github.com/sudheerj/ECMAScript-features#error-cause)
- [hasOwn](https://github.com/sudheerj/ECMAScript-features#hasown)
- [Regex match indices](https://github.com/sudheerj/ECMAScript-features#regex-match-indices)

### ES2023 Or ES14
- [find-array-from-last](https://github.com/sudheerj/ECMAScript-features#find-array-from-last)
  ```js
	console.log(numbers.findLast(isOdd)); // 5
	```
- [hashbang-syntax](https://github.com/sudheerj/ECMAScript-features#hashbang-syntax)
- [symbols-as-weakmap-keys](https://github.com/sudheerj/ECMAScript-features#symbols-as-weakmap-keys)
- [change-array-by-copy](https://github.com/sudheerj/ECMAScript-features#change-array-by-copy)
	-  Provide additional methods such as `toReversed()`, `toSorted()`, `toSpliced` and `with()` methods which returns new array copies instead of mutating the original array