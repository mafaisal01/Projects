##### 📋 General Q&A / FAQ Table Template

> Documantation | Manual | Booklet

| Section                               | Content Format                                       |
| ------------------------------------- | ---------------------------------------------------- |
| **Question**                          | Problem Statement                                                     |
| **Answer**                            | Step1: <br> Step2: <br> Step3: <br> ... <br> Step10: |
| **Explanation (Optional)**            | Step1: <br> Step2: <br> ... <br> Step10:             |
| **Working Explanation (Optional)**    | Step1: <br> Step2: <br> ... <br> Step10:             |
| **Examples (Optional)**               | Step1: <br> Step2: <br> ... <br> Step10:             |
| **Advantages (Optional)**             | Step1: <br> Step2: <br> ... <br> Step10:             |
| **Disadvantages (Optional)**          | Step1: <br> Step2: <br> ... <br> Step10:             |
| **Conclusion Explanation (Optional)** | Step1: <br> Step2: <br> ... <br> Step10:             |

---

#### JavaScript
JavaScript is a lightweight, cross-platform, single-threaded programming language used to create dynamic and interactive web content. 

It runs on both client side (inside the browser) and server side (via Node.js). JavaScript executes code line by line, making it flexible and easy to debug.

<img width="806" height="407" alt="Variables and Datatypes in JavaScript - GeeksforGeeks - Google Chrome 14-11-2025 15_28_04" src="https://github.com/user-attachments/assets/59d3fb6d-a9f9-4591-a851-03e741ed1e54" />


---

#### JavaScript `var`, `let`, and `const`

##### **1. `var`**

**Definition:**
`var` declares a **function-scoped** or **globally-scoped** variable. Variables declared with `var` are **hoisted** and initialized with `undefined`.

**Example:**

```js
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside block)
}
testVar();
```

**Advantages:**

* Works in older browsers (ES5 compatible)
* Function-scoped (useful in some legacy code)

**Disadvantages:**

* Hoisting can lead to bugs
* No block scope → can accidentally overwrite variables


##### **2. `let`**

**Definition:**
`let` declares a **block-scoped** variable. Variables are hoisted but **cannot be accessed before declaration** (Temporal Dead Zone).

**Example:**

```js
function testLet() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // Error: y is not defined
}
testLet();
```

**Advantages:**

* Block scope prevents accidental overwrites
* Safer than `var` in modern code

**Disadvantages:**

* Cannot redeclare in the same scope
* Hoisted but not initialized (Temporal Dead Zone)


##### **3. `const`**

**Definition:**
`const` declares a **block-scoped constant**. The variable **cannot be reassigned**, but for objects/arrays, **contents can be mutated**.

**Example:**

```js
const z = 30;
// z = 40; // Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed (object is mutable)
```

**Advantages:**

* Guarantees immutability for primitive values
* Block-scoped → safer in modern code
* Encourages predictable code

**Disadvantages:**

* Cannot be reassigned
* Misconception: const object is immutable (only reference is constant)



##### **Summary Table**

| Keyword | Scope           | Hoisting                       | Reassignable | Redeclarable | Notes                             |
| ------- | --------------- | ------------------------------ | ------------ | ------------ | --------------------------------- |
| `var`   | Function/Global | Yes (initialized as undefined) | Yes          | Yes          | Legacy code, no block scope       |
| `let`   | Block           | Yes (TDZ)                      | Yes          | No           | Modern JS, safer than var         |
| `const` | Block           | Yes (TDZ)                      | No           | No           | Reference immutable, block-scoped |

---


Below is a **clear and concise set of definitions, examples, advantages, and disadvantages** for:

* **Single Thread**
* **Synchronous**
* **Multi-Thread**
* **Asynchronous**


#### 🧵 Single Thread

##### **Definition**

A *single-threaded* environment has **only one main thread** of execution. All tasks run one after another on the same thread. JavaScript in browsers is single-threaded.

##### **Example**

```javascript
console.log("Task 1");
console.log("Task 2");  // Runs only after Task 1 completes
```

##### **Advantages**

* Simple and easy to understand
* No risk of race conditions or deadlocks
* Predictable execution order

##### **Disadvantages**

* Long-running tasks can block the entire program
* Performance limitations for CPU-heavy operations
* Not ideal for parallel processing


#### 🔁 Synchronous

##### **Definition**

*Synchronous* execution means tasks run **sequentially**, one task depended to another task . A task must finish before the next one starts.

##### **Example**

```javascript
function step1() {
  console.log("Step 1 done");
}
function step2() {
  console.log("Step 2 done");
}

step1();
step2(); // Executes only after step1() finishes
```

##### **Advantages**

* Easy to read and debug
* Predictable order of execution
* Works well for small, quick tasks

##### **Disadvantages**

* Slower for tasks that require waiting (file read, network calls)
* Blocks the thread until the task is finished
* Can create a poor user experience (freezing UI)


#### 🧵🧵 Multi-Thread

##### **Definition**

A *multi-threaded* environment can run **multiple threads at the same time**, allowing parallel execution of tasks. Each thread can perform its own work independently.

JavaScript itself is single-threaded, but technologies like **Web Workers**, **Node.js Worker Threads**, and browsers allow multi-thread-like behavior.

##### **Example (Web Worker)**

**main.js**

```javascript
const worker = new Worker("worker.js");
worker.postMessage("Start");

worker.onmessage = (msg) => {
  console.log("Worker Result:", msg.data);
};
```

**worker.js**

```javascript
onmessage = () => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) sum += i;
  postMessage(sum);
};
```

##### **Advantages**

* True parallelism
* Better for CPU-intensive tasks
* Does not block the main thread
* Can significantly improve performance

##### **Disadvantages**

* More complex to implement
* Requires synchronization between threads
* Risk of race conditions and deadlocks
* Higher memory usage


#### ⚡ Asynchronous

##### **Definition**

*Asynchronous* execution means that task run parallel, one task not depended to another task. The results are handled later via callbacks, promises, or async/await.

##### **Example**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task Complete");
}, 1000);

console.log("End");
```

**Output:**

```
Start
End
Async Task Complete
```

##### **Advantages**

* Non-blocking—UI remains responsive
* Ideal for I/O tasks (API calls, database, timers)
* Better performance for real-time applications
* Efficient use of single-threaded environments like JS

##### **Disadvantages**

* Harder to debug
* Callback Hell (if not structured properly)
* Requires careful handling of promises & async flows

---

#### 1. Asynchronous JavaScript

##### **Definition**

Asynchronous JavaScript allows code to run without blocking the main thread, enabling operations like API calls, timers, and file reads to complete in the background.

##### **Example**

```js
console.log("Start");

setTimeout(() => {
  console.log("Async task done");
}, 1000);

console.log("End");
```

##### **Advantages**

* Prevents blocking of UI or main thread
* Improves performance for I/O operations
* Enables scalable applications

##### **Disadvantages**

* Harder debugging
* Complex flow control (improved with Promises/async-await)


#### 2. JavaScript Callbacks

##### **Definition**

A callback is a function passed as an argument to another function and executed after a task completes.

##### **Example**

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
```

##### **Advantages**

* Simple to implement
* Useful for small asynchronous tasks

##### **Disadvantages**

* Leads to "callback hell"
* Hard to read and maintain
* Error handling is messy


#### 3. JavaScript Promises

##### **Definition**

A Promise represents a value that will be available now, later, or never. It supports `.then()`, `.catch()`, and `.finally()` chaining.

##### **Example**

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

##### **Advantages**

* Cleaner chaining than callbacks
* Built-in error handling
* Avoids callback hell

##### **Disadvantages**

* Still can become complex with deep chains
* Requires understanding of Promise states


#### 4. Event Loop in JavaScript

##### **Definition**

The Event Loop is a mechanism that handles asynchronous operations by moving tasks between the call stack, Web APIs, callback queue, and microtask queue.

##### **Example (flow illustration)**

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

**Output order:**

```
Start
End
Promise
Timeout
```

##### **Advantages**

* Enables non-blocking I/O
* Efficient execution of asynchronous tasks

##### **Disadvantages**

* Requires deeper understanding of queues/timing
* Misuse can lead to performance bottlenecks

![Event-Loop-in-JavaScript](https://github.com/user-attachments/assets/50988ca7-db1d-4904-8162-47b82102c200)

#### Event-driven programming
Event-driven programming in Node.js is a way of writing programs where the code waits for events (like a request, click, or data received) and then runs a function when that event happens.

Node.js does not block or pause; it keeps listening for events and reacts when needed.

1. A callback function ( called an event handler) is called when an event is triggered.
   
2. An event loop that listens for event triggers and calls the corresponding event handler for that event.
   
```js
const EventEmitter = require('events');
const event = new EventEmitter();

// Listen for an event
event.on('sayHello', () => {
  console.log("Hello! An event happened.");
});

// Emit (trigger) the event
event.emit('sayHello');
```
![envent](https://github.com/user-attachments/assets/ed2de69f-c710-4b31-b90a-632a76be5bcf)
Three Key Concepts (Alternative Example):

1. Event Emitter (Publisher / Producer)
   This is the one who makes the event happen.--> Like someone shouting, “Dinner is ready!”

3. Event Listener (Subscriber / Consumer)
   This is the one who listens for the event.--> Like someone waiting to hear “Dinner is ready!”

5. Event Handler
   This is what happens after the listener hears the event.-->Like when someone hears “Dinner is ready” and then comes to eat.
   

#### 5. Async and Await

##### **Definition**

`async` and `await` offer a cleaner, synchronous-looking way to work with Promises.

##### **Example**

```js
async function loadData() {
  try {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve("Data loaded"), 1000)
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

loadData();
```

##### **Advantages**

* Easiest way to write asynchronous code
* Readable like synchronous code
* Great error handling with `try...catch`

##### **Disadvantages**

* Must be used inside an `async` function
* Still relies on Promises under the hood
* Potential performance issues if over-awaiting (serial vs parallel tasks)

---


#### Exception Handling

##### 1. `throw`

##### **Definition**

`throw` is used to manually raise an error in JavaScript.

##### **Example**

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

divide(4, 0); // Throws error
```


##### 2. `try`, `catch`, `finally`

##### **Definition**

Used to handle runtime errors in synchronous or async/await code.

* **`try`** — code that may throw an error
* **`catch`** — handles the error
* **`finally`** — runs regardless of success or error

##### **Example**

```js
try {
  console.log("Start");
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Error caught:", err.message);
} finally {
  console.log("Cleanup done.");
}
```

##### **Advantages**

* Handles synchronous and async/await errors
* `finally` ensures cleanup logic

##### **Disadvantages**

* Doesn’t handle Promise errors unless using `await`
* Can hide bugs if overused



#### 3. `then`, `catch`, finally` (Promise-based handling)

##### **Definition**

Promises use:

* **`.then()`** → handles resolved values
* **`.catch()`** → handles errors
* **`.finally()`** → runs after success or failure

##### **Example**

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject("Failed to load"), 1000);
})
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Error:", err))
  .finally(() => console.log("Done"));
```

##### **Advantages**

* Cleaner async flow than nested callbacks
* Centralized error handling using `.catch()`
* `.finally()` works just like in try/catch

##### **Disadvantages**

* Can get messy with long Promise chains
* Harder to read compared to async/await



#### Summary Table

| Feature                | Works With         | Error Handling Method | Cleanup      |
| ---------------------- | ------------------ | --------------------- | ------------ |
| **throw**              | Any JS code        | Raises error manually | No           |
| **try/catch/finally**  | Sync & async/await | `catch` block         | `finally`    |
| **then/catch/finally** | Promises           | `.catch()`            | `.finally()` |

---

#### Functions in JavaScript


Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They help organize code, improve reusability, and make programs modular. A function can take inputs (parameters), perform actions, and return outputs.

##### 📌 Understanding Functions

In functions, **parameters** are placeholders defined in the function, while **arguments** are the actual values passed during the function call.

##### Example

```javascript
function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument
```

* **Parameter →** `name`
* **Argument →** `"Alice"`


##### 📌 Default Parameters

Default parameters are used when no argument is provided during the function call.

```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();        // Hello, Guest
greet("Aman");  // Hello, Aman
```


##### 📌 Return Statement

The `return` statement sends a result back from a function and stops the function's execution.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 10);
console.log(result); // 15
```


##### Types of Functions in JavaScript

##### 1. Named Function

```javascript
function greet() {
  return "Hello!";
}
console.log(greet()); // Hello!
```


##### 2. Anonymous Function

```javascript
const greet = function() {
  return "Hi there!";
};
console.log(greet()); // Hi there!
```


##### 3. Function Expression

```javascript
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
```


##### 4. Arrow Function (ES6)

```javascript
const square = n => n * n;
console.log(square(4)); // 16
```


##### 5. Immediately Invoked Function Expression (IIFE)

```javascript
(function () {
  console.log("This runs immediately!");
})();
```


##### 6. Callback Function

```javascript
function num(n, callback) {
  return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double)); // 10
```


##### 7. Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Neha", 22);
console.log(user.name); // Neha
```


##### 8. Async Function

```javascript
async function fetchData() {
  return "Data fetched!";
}

fetchData().then(console.log);
```


##### 9. Generator Function

```javascript
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```


##### 10. Recursive Function

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```


##### 11. Higher-Order Function

```javascript
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```


##### 12. Nested Functions

```javascript
function outerFun(a) {
  function innerFun(b) {
    return a + b;
  }
  return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5)); // 15
```


##### 13. Pure Functions

```javascript
function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(2, 3)); // 5
```


##### 14. Default Parameter Function

```javascript
function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet());      // Hello, Guest
console.log(greet("Aman")); // Hello, Aman
```


##### 15. Rest Parameter Function

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```
---
In JavaScript, the this keyword refers to the object that owns the current execution context. Its value is determined by how a function is called, making it a dynamic reference rather than a fixed one. 

#### `this` Behavior in JavaScript

| Context                                      | Node.js (console.log(this))       | Browser (V8/Chrome) (console.log(this)) | Function Declaration   | Function Expression    | Arrow Function                                           |
| -------------------------------------------- | --------------------------------- | --------------------------------------- | ---------------------- | ---------------------- | -------------------------------------------------------- |
| Global Scope                                 | `{}` (empty object)               | `window` (global object)                | `this` → global object | `this` → global object | `this` → inherited from enclosing scope (lexical `this`) |
| Inside Function (non-strict)                 | `this` → global object (`global`) | `this` → global object (`window`)       | `this` → global object | `this` → global object | `this` → lexically inherited (from outer scope)          |
| Inside Function (strict mode `'use strict'`) | `this` → `undefined`              | `this` → `undefined`                    | `this` → `undefined`   | `this` → `undefined`   | `this` → lexically inherited                             |
| Inside Object Method                         | `this` → object itself            | `this` → object itself                  | `this` → object itself | `this` → object itself | `this` → lexically inherited (not object itself)         |
| Constructor Function                         | `this` → newly created object     | `this` → newly created object           | `this` → new object    | `this` → new object    | ❌ Arrow function **cannot be used as constructor**       |



##### Key Points:

1. **Global Context**:

   * Node.js: `{}`
   * Browser: `window`
2. **Function Declaration / Expression**:

   * In global scope, `this` points to **global object** in non-strict mode.
   * In strict mode, `this` → `undefined`.
3. **Arrow Functions**:

   * Do **not have their own `this`**.
   * `this` is lexically inherited from the surrounding context.
4. **Object Methods**:

   * Normal functions: `this` → the object.
   * Arrow functions: `this` → parent scope (not the object itself).


---

#### JavaScript `call`, `apply`, and `bind`

##### **1. `call`**

**Definition:**
`call` invokes a function with a specified `this` context and individual arguments.

**Example:**

```js
const person = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
  }
};

const user = { firstName: "John", lastName: "Doe" };

console.log(person.fullName.call(user, "New York", "USA")); 
// John Doe from New York, USA
```

**Advantages:**

* Immediately invokes the function
* Allows borrowing methods from other objects

**Disadvantages:**

* Arguments must be passed individually



##### **2. `apply`**

**Definition:**
`apply` is like `call`, but it accepts **arguments as an array**.

**Example:**

```js
console.log(person.fullName.apply(user, ["Los Angeles", "USA"])); 
// John Doe from Los Angeles, USA
```

**Advantages:**

* Useful for variable-length argument arrays
* Immediate function invocation

**Disadvantages:**

* Arguments must be in array form


##### **3. `bind`**

**Definition:**
`bind` creates a **new function** with a fixed `this` context and optionally preset arguments. Unlike `call` or `apply`, it does **not invoke the function immediately**.

**Example:**

```js
const boundFunc = person.fullName.bind(user, "Chicago");
console.log(boundFunc("USA")); 
// John Doe from Chicago, USA
```

**Advantages:**

* Creates reusable functions with preset context
* Useful in event handlers and callbacks

**Disadvantages:**

* Does not execute immediately; may need extra call
* Can lead to extra memory usage if overused


#### **Summary Table**

| Method  | Invokes Immediately? | Arguments Type                 | Usage                                                 |
| ------- | -------------------- | ------------------------------ | ----------------------------------------------------- |
| `call`  | Yes                  | Individual arguments           | Borrowing functions, invoking immediately             |
| `apply` | Yes                  | Array of arguments             | Borrowing functions, invoking immediately with arrays |
| `bind`  | No                   | Individual arguments or preset | Creates reusable functions with fixed `this`          |



---
#### Objects in JavaScript

An **object** in JavaScript is a dynamic data structure that stores related data as **key–value pairs**, where each key uniquely identifies a value.

##### Key Characteristics:

* Values can be **primitives**, **objects**, or **functions** (called **methods** when inside objects).
* Objects are **mutable** — you can add, modify, or delete properties at any time.
* They help in **data grouping**, **encapsulation**, and organizing related information and behavior.



##### 📌 Ways to Create Objects in JavaScript


##### **1. Object Literal**

The simplest and most commonly used method.

```javascript
let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);
```

**Output**

```
{ name: 'Sourav', age: 23, job: 'Developer' }
```



##### **2. Using new Object() Constructor**

```javascript
let obj = new Object();
obj.name = "Sourav";
obj.age = 23;
obj.job = "Developer";

console.log(obj);
```

**Output**

```
{ name: 'Sourav', age: 23, job: 'Developer' }
```



##### 📌 Basic Operations on JavaScript Objects



##### **1. Accessing Properties**

```javascript
let obj = { name: "Sourav", age: 23 };

// Dot Notation
console.log(obj.name);

// Bracket Notation
console.log(obj["age"]);
```

**Output**

```
Sourav
23
```



##### **2. Modifying Properties**

```javascript
let obj = { name: "Sourav", age: 22 };
console.log(obj);

obj.age = 23;
console.log(obj);
```

**Output**

```
{ name: 'Sourav', age: 22 }
{ name: 'Sourav', age: 23 }
```



##### **3. Adding New Properties**

```javascript
let obj = { model: "Tesla" };
obj.color = "Red";

console.log(obj);
```

**Output**

```
{ model: 'Tesla', color: 'Red' }
```



##### **4. Deleting Properties**

```javascript
let obj = { model: "Tesla", color: "Red" };
delete obj.color;

console.log(obj);
```

**Output**

```
{ model: 'Tesla' }
```



##### **5. Checking if a Property Exists**

```javascript
let obj = { model: "Tesla" };

console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));
```

**Output**

```
false
true
```


##### **6. Iterating Through Object Properties**

```javascript
let obj = { name: "Sourav", age: 23 };

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

**Output**

```
name: Sourav
age: 23
```


##### **7. Merging Objects**

```javascript
let obj1 = { name: "Sourav" };
let obj2 = { age: 23 };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
```

**Output**

```
{ name: 'Sourav', age: 23 }
```


##### **8. Getting Object Length**

```javascript
let obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);
```

**Output**

```
2
```


##### 📌 Recognizing a JavaScript Object

```javascript
let obj = { name: "Sourav" };
console.log(typeof obj === "object" && obj !== null);
```

**Output**

```
true
```

#### 📌 Common Mistakes & Key Concepts

##### **{} vs new Object()**

| Feature     | `{}` (Object Literal)          | `new Object()` Constructor |
| ----------- | ------------------------------ | -------------------------- |
| Ease of Use | ✔ Simple & concise             | ❌ Less concise             |
| Performance | ✔ Faster                       | ❌ Slight overhead          |
| Inheritance | Direct from `Object.prototype` | Same but more abstract     |
| Use Case    | Default choice                 | Rarely needed              |

##### ✔ Example

```javascript
// Object literal
const obj1 = { key: "value" };

// Object constructor
const obj2 = new Object();
obj2.key = "value";

console.log(obj1);
console.log(obj2);
```


#### 📌 Map vs Object — Key Differences

| Feature     | **Map**                                | **Object**                       |
| ----------- | -------------------------------------- | -------------------------------- |
| Key Types   | Any type (object, function, primitive) | Mostly strings or symbols        |
| Order       | Maintains insertion order              | Not guaranteed                   |
| Size        | `map.size` available                   | Must use `Object.keys().length`  |
| Iteration   | Easy → `for...of`, `.forEach()`        | Uses `for...in`, `Object.keys()` |
| Performance | Better for frequent insert/remove      | Slower for frequent changes      |
| Use Case    | Perfect for dynamic key-value storage  | General-purpose data structure   |


##### 📌 Why {} is Preferred

* ✔ **Cleaner syntax**
* ✔ **Better performance**
* ✔ **Fewer risks** (constructor may be overridden)
* ✔ **More commonly used and readable**

---


#### JavaScript Core Concepts — Quick Guide


##### 1. Closure & Lexical Scope

##### **Lexical Scope — Definition**

The innerFunction being able to access the variables in the outer function is called "lexical scoping".


> Outer function:

> Inner function: inner function have access to outer function scope due to lexical scope

##### **Example**

```js
function outerFunction() {
    const outerVariable = "outer scope";

    function innerFunction () {
        console.log(outerVariable);
    ｝

    innerFunction ();
}


outerFunction()

// outer scope
```

##### **Closure — Definition**

A closure in JavaScript is a combination of a function and the lexical environment. Normally a function within a function. Outer function returns another inner function (a function is part function/ part object).

> Outer function return inner function with lexical scope.

##### **Example**

```js
function createCounter() {
   let count = 0


   return function() {
       count++

       console.log(count)
   }
}


const closure1 = createCounter()
const closure2 = createCounter()

closure1()
closure1()
// 1
// 2

closure2()
// 1
```

##### **Advantages**

* Data privacy (encapsulation)
* Preserves state between calls
* Useful in callbacks, modules, and event handlers

##### **Disadvantages**

* Can cause unintended memory retention
* Harder debugging if misused



##### 2. JavaScript Hoisting

##### **Definition**

Hoisting is JavaScript's behavior of **moving declarations (not initializations)** to the top of their scope during compilation.

##### **Example**

```js
console.log(x); // undefined
var x = 10;

sayHi(); // Works
function sayHi() {
  console.log("Hello");
}
```

##### **Key Notes**

* `var` → hoisted as *undefined*
* `let` & `const` → hoisted but *not accessible* until initialized (Temporal Dead Zone)
* Function declarations are fully hoisted

---


##### **1. Overview of Hoisting**

| Concept               | Description                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Definition            | JavaScript moves **declarations** (variables, functions, classes) to the top of their scope during compilation. |
| What gets hoisted?    | **Declarations** only (not initializations).                                                                    |
| var                   | Hoisted and initialized with **undefined**.                                                                     |
| let / const           | Hoisted but left **uninitialized** (in TDZ).                                                                    |
| Function Declarations | Fully hoisted with their bodies.                                                                                |
| Function Expressions  | Variable is hoisted, but function value is **not**.                                                             |



##### **2. Temporal Dead Zone (TDZ)**

| Concept           | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| Definition        | Time between entering a scope and executing the let/const declaration. |
| Behavior          | Accessing let/const before initialization → **ReferenceError**.        |
| Applies to        | `let`, `const`, and `class`.                                           |
| Does NOT apply to | `var` (initialized to `undefined`).                                    |



##### **3. Variable Hoisting Behavior**

###### **A. Using `var`**

| Code                         | Behavior                                         | Output / Note       |
| ---------------------------- | ------------------------------------------------ | ------------------- |
| `console.log(a); var a = 5;` | `var a` hoisted, initialized with **undefined**. | Prints `undefined`. |



##### **B. Using `let` and `const`**

| Code                          | Behavior                                 | Output / Note              |
| ----------------------------- | ---------------------------------------- | -------------------------- |
| `console.log(b); let b = 10;` | b hoisted but in TDZ until line reached. | Throws **ReferenceError**. |



##### **4. Function Hoisting**

##### **A. Function Declarations**

| Code                              | Behavior                 | Output / Note  |
| --------------------------------- | ------------------------ | -------------- |
| `greet(); function greet() {...}` | Entire function hoisted. | Runs normally. |

##### **B. Function Expressions**

| Code                                   | Behavior                           | Output / Note                           |
| -------------------------------------- | ---------------------------------- | --------------------------------------- |
| `hello(); var hello = function(){...}` | `hello` is hoisted as `undefined`. | **TypeError: hello is not a function**. |



##### **5. Hoisting in Functions**

| Code                                           | Explanation             | Result          |
| ---------------------------------------------- | ----------------------- | --------------- |
| Inside function: `console.log(x); let x = 50;` | let hoisted but in TDZ. | ReferenceError. |



##### **6. Class Hoisting**

| Code                                 | Behavior                  | Output / Note   |
| ------------------------------------ | ------------------------- | --------------- |
| `new MyClass(); class MyClass {...}` | Class hoisted but in TDZ. | ReferenceError. |



##### **7. Re-declaring Variables with `var`**

| Code                      | Behavior                     | Output |
| ------------------------- | ---------------------------- | ------ |
| `var a = 10; var a = 20;` | `var` allows re-declaration. | `20`   |



##### **8. Hoisting in Loops**

| Code                                                       | Behavior                                           | Output    |
| ---------------------------------------------------------- | -------------------------------------------------- | --------- |
| `for (var i=0;i<3;i++){ setTimeout(()=>console.log(i)); }` | `var i` function-scoped → shared across callbacks. | `3, 3, 3` |



##### **9. Hoisted Function with Parameters**

| Code                                | Behavior                       | Output       |
| ----------------------------------- | ------------------------------ | ------------ |
| `test(10); function test(num){...}` | Function + parameters hoisted. | Prints `10`. |



##### **10. Hoisting in Nested Functions**

| Code                                                                     | Behavior                             | Output                   |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| `outer(): console.log(a); var a = 5; inner(): console.log(b); var b=10;` | Each `var` hoisted in its own scope. | `undefined`, `undefined` |

---



#### 3. Scope of Variables

##### **Types of Scope**

| Scope Type         | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| **Global**         | Accessible everywhere                                                |
| **Function Scope** | Variables declared in a function available only inside that function |
| **Block Scope**    | `let` & `const` restricted to `{ }` blocks                           |
| **Module Scope**   | Variables in ES modules isolated to the module                       |

##### **Example**

```js
function test() {
  var a = 10;       // Function scoped
  let b = 20;       // Block scoped
  if (true) {
    let c = 30;     // Block scoped
  }
  // c is not accessible here
}
```
<img width="534" height="333" alt="1" src="https://github.com/user-attachments/assets/1ea15251-250a-41ed-970b-fc2bd20f1101" />



#### 4. JavaScript Higher-Order Functions (HOF)

##### **Definition**

A higher-order function is a function that:

* takes another function as an argument, **or**
* returns a function.

##### **Example**

```js
function greet(name) {
  return `Hello, ${name}`;
}

function executor(fn, value) {
  return fn(value);  // HOF
}

console.log(executor(greet, "Alice"));
```

##### **Common HOFs**

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* Event listeners (`addEventListener`)
* Promise handlers (`then`, `catch`)

##### **Advantages**

* More modular code
* Encourages functional programming
* Easier transformations on arrays

##### **Disadvantages**

* Can be harder to understand at first
* Overuse may reduce readability


##### **JavaScript Higher-Order Functions (HOF)**

| HOF              | Purpose                                       | Example Code                                  | What It Does                |
| ---------------- | --------------------------------------------- | --------------------------------------------- | --------------------------- |
| **map()**        | Transform each element and return a new array | `arr.map(x => x * 2)`                         | Doubles every element       |
| **filter()**     | Keep only items that match a condition        | `arr.filter(x => x > 5)`                      | Keeps values greater than 5 |
| **reduce()**     | Reduce array to a single value                | `arr.reduce((a,b) => a + b, 0)`               | Sums all elements           |
| **forEach()**    | Run a function for each item (no return)      | `arr.forEach(x => console.log(x))`            | Logs each item              |
| **find()**       | Returns the *first* matching element          | `arr.find(x => x === 5)`                      | Finds value equal to 5      |
| **some()**       | Checks if **any** element matches             | `arr.some(x => x < 0)`                        | true if any negative        |
| **every()**      | Checks if **all** elements match              | `arr.every(x => x > 0)`                       | true if all positive        |
| **sort()**       | Sort array with custom compare function       | `arr.sort((a,b) => a-b)`                      | Sorts ascending             |
| **flatMap()**    | Map then flatten 1 level                      | `arr.flatMap(x => [x, x * 2])`                | Expands and transforms      |
| **setTimeout()** | Accepts a callback to run later               | `setTimeout(() => console.log("Done"), 1000)` | Runs after 1s               |


##### **Example With Real Data**

```js
const users = [
  { name: "Aarav", age: 21 },
  { name: "Meera", age: 17 },
  { name: "Raj", age: 30 }
];

const adults = users
  .filter(u => u.age >= 18)
  .map(u => u.name);

console.log(adults); // ["Aarav", "Raj"]
```

---


#### 5. Debugging in JavaScript

##### **Definition**

Debugging is the process of finding and fixing errors in code using tools, logs, and techniques.

##### **Common Debugging Tools**

* **`console.log()`** → quick value inspection
* **Browser DevTools**

  * Breakpoints
  * Step into / step out
  * Watch variables
  * Network tab
* **Debugger Keyword**

```js
function test() {
  let x = 5;
  debugger; // pauses JS execution
  return x;
}
test();
```

##### **Techniques**

* Use meaningful logs
* Break problems into smaller parts
* Validate inputs and outputs
* Check stack traces for error location
* Use linters (ESLint)

##### **Advantages**

* Helps track down logical and runtime errors
* Improves code quality and reliability

##### **Disadvantages**

* Can be time-consuming
* Hard-to-debug issues (like closures or async code) require deeper knowledge

---


