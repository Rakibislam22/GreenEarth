## 1. What is the difference between var, let, and const?

### Answer :

**`var`** : Function-scoped, redeclaration possible, reassignment possible, initialized as undefined.

**`let`** : Block-scoped, redeclaration not possible, reassignment possible, not initialized.

**`const`** : Block-scoped, redeclaration not possible, reassignment not possible,not initialized.


## 2. What is the difference between map(), forEach(), and filter()?

### Answer:

**`forEach()`** : Iterates over array, executes a function, returns `undefined`.

**`forEach()`** : Transforms each element and returns array, returns New array.

**`forEach()`** : Filters elements based on a condition, returns New array.


## 3. What are arrow functions in ES6?

### Answer :

**ES6** Arrow functions enable us to write functions with simpler and shorter syntax and make our code more readable and organized. The arrow functions are introduced in the **ES6** version. Arrow functions provides us with a more precise approach to writing JavaScript Functions.

Example :

```js
// Traditional function
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;
```

## 4. How does destructuring assignment work in ES6?

### Answer :

Destructuring in JavaScript allows extract values from arrays or objects and assign them to variables in a concise and readable way. It simplifies code, making it shorter and easier to understand.

Example :

```js
const obj = { name: 'Rakib', age: 21 };
const { name, age } = obj;
console.log(name); 
console.log(age);
```

## 5. What are arrow functions in ES6?

### Answer :

Template literals are string literals that allow embedded expressions (variables) into your code. They are enclosed by backticks ( ` ) instead of single ( ' )  or double ( " ) quotes.

Examole : 

```js
// Old way
const oldGreeting = "Hello, " + name + "! Welcome.";

// Template literal
const newGreeting = `Hello, ${name}! Welcome.`; // cleaner & readable
```

It was introduced in ES6, which provides a more flexible and readable way to work with strings. Unlike traditional string concatenation, template literals simplify the process of embedding expressions, multi-line strings, and variable interpolation.