## What is middleware?

`Middleware` functions are functions that have access to the request object(req) , the response object(res), and the next middleware function in the application's requests-response cycle. 

The next middleware function commanly denoted by variable `next`.

### Middleware functions can perform:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.

If the current middleware is not functioning then it must call next middle ware otherwise request will be left hanging.

---
Here’s a **clean, well-structured README** based on everything you provided.
I’ve rewritten it for clarity, formatting, and professionalism—perfect for GitHub or documentation.

---

### Middleware in Express.js

Middleware in Express.js refers to functions that run **during the request–response cycle**, before the final route handler is executed. These functions can:

* Modify the `req` and `res` objects
* Execute custom logic
* End the request–response cycle
* Pass control to the next middleware using `next()`

Middleware helps maintain clean code, modularity, separation of concerns, and scalability.

<img width="302" height="162" alt="middleware" src="https://github.com/user-attachments/assets/1eaac3c4-aa4a-4885-8159-ab478bfeb7d5" />



#### 🔧 How Middleware Works

```js
app.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});
```

* `(req, res, next) | (req, res, next) => {}:` → middleware function
* `next()` → forwards the request to the next middleware
* If a middleware sends a response, the cycle ends and no further middleware is executed.

#### Request Flow in Express

1. Request hits the server
2. Express checks middleware **in order**
3. Each middleware may:

   * End the cycle by sending a response
   * Call `next()`
4. If no middleware ends the cycle, the route handler runs
5. Response is sent to the client



#### 🧩 Types of Middleware in Express.js


#### 1. **Application-level Middleware**

Applies to **all routes** in the application:

```js
app.use(express.json());

app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});
```

Useful for:
✔ Logging
✔ Parsing
✔ Authentication
✔ Global headers



#### 2. **Router-level Middleware**

Scoped to a specific router:

```js
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-specific middleware');
  next();
});

router.get('/dashboard', (req, res) => {
  res.send('Dashboard Page');
});

app.use('/user', router);
```

Useful for grouping route-related logic (e.g., `/user`, `/auth`, `/admin`).



#### 3. **Error-handling Middleware**

Express recognizes it by **4 parameters**:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

Used for:
✔ Logging errors
✔ Sending consistent error responses
✔ Preventing server crashes



#### 4. **Built-in Middleware**

Provided by Express:

```js
app.use(express.static('public'));
app.use(express.json());
```

Common uses:
✔ Serve static files
✔ Parse JSON
✔ Parse URL-encoded data


#### 5. **Third-party Middleware**

Installed via npm:

```js
const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
```

Examples:

* `morgan` → logging
* `helmet` → security
* `cors` → CORS handling
* `body-parser` → request parsing



### 🚀 Steps to Implement Middleware in Express

#### **Step 1: Initialize Node.js Project**

```bash
npm init -y
```

#### **Step 2: Install Express**

```bash
npm install express
```

#### **Step 3: Create Application**

**index.js**

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<div><h2>Welcome to GeeksforGeeks</h2><h5>Tutorial on Middleware</h5></div>');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

#### **Step 4: Run the App**

```bash
node index.js
```

Visit:
`http://localhost:3000/`



### 🔗 Middleware Chaining

Multiple middleware functions can be chained before a response is sent.

```js
const express = require('express');
const app = express();

// Middleware 1: Log request details
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Middleware 2: Add a custom header
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'Middleware Chaining Example');
    next();
});

// Final Route Handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

**What Happens?**

* Log request → add custom header → send response
* Output at `/`:

  ```
  Hello, World!
  ```

<img width="591" height="275" alt="MiddlewareChaining" src="https://github.com/user-attachments/assets/047380c5-33e6-4ac8-ad49-e8ebf22e0a95" />



### ⭐ Advantages of Using Middleware

#### ✔ **Modularity**

Breaks complex functionality into smaller, manageable units.

#### ✔ **Reusability**

Middleware can be reused across apps or route groups.

#### ✔ **Maintainability**

Cleaner and more organized code.

#### ✔ **Error Handling**

Centralized error handling increases app reliability.

#### ✔ **Performance Optimization**

Perfect for caching, compression, and security checks.

