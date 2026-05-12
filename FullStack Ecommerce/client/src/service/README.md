How To Connect Node with React / Frontend & Backend?

---

# 2. Backend Implementation (Node.js + Express)

### Install Dependencies

```bash
npm init -y
npm install express cors
```

### `server.js`

```js
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory datastore (for demonstration only)
const users = [];

/**
 * Signup Endpoint
 */
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });

  return res.status(201).json({
    message: "User registered successfully"
  });
});

/**
 * Login Endpoint
 */
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    user => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  return res.status(200).json({
    message: "Login successful"
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
```

---

# 3. Frontend Implementation (React)

### Install Axios

```bash
npm install axios
```

---

## Option A: Configure Proxy (Recommended for Development)

In `package.json`:

```json
{
  "proxy": "http://localhost:5000"
}
```

This allows API calls without specifying the full backend URL.

---

## Option B: Use Explicit Backend URL (CORS)

```js
axios.post("http://localhost:5000/api/signup", data);

or 
url = http://localhost:5000/api/

axios.post(`${url/signup}`, data);

```

---

# 4. React Example (Signup & Login)

### `App.js`

```jsx
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/signup", formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Authentication</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
```

---

# 5. Using Fetch API (Alternative to Axios)

```js
const signup = async () => {
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = await response.json();
  console.log(data);
};
```

---

# 6. GraphQL Alternative (Conceptual Overview)

Instead of REST endpoints (`/api/signup`, `/api/login`), GraphQL uses a single endpoint:

```graphql
mutation {
  signup(username: "john", password: "123") {
    message
  }
}
```

