# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

### **React & Next.js Interview Cheat Sheet**

| Level            | Topic / Question                      | Definition                                                                                     | Example / Notes                                                  |
| ---------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Basic**        | What is React?                        | A JavaScript library for building fast, interactive user interfaces using reusable components. | `const App = () => <h1>Hello React</h1>;`                        |
| **Basic**        | What is JSX?                          | A syntax extension that allows writing HTML-like code inside JavaScript.                       | `const el = <h1>Hello</h1>;`                                     |
| **Basic**        | What is a Component?                  | A reusable, independent piece of UI in React.                                                  | `function Button() { return <button>Click</button>; }`           |
| **Basic**        | What are Props?                       | Read-only data passed from parent to child components.                                         | `<User name="Alex" />`                                           |
| **Basic**        | What is State?                        | An object that holds data that can change over time and affects rendering.                     | `const [count, setCount] = useState(0);`                         |
| **Basic**        | What is `useState`?                   | A hook that allows functional components to manage local state.                                | `const [value, setValue] = useState("");`                        |
| **Basic**        | What is `useEffect`?                  | A hook for performing side effects like data fetching or subscriptions.                        | `useEffect(() => { fetchData(); }, []);`                         |
| **Intermediate** | Controlled vs Uncontrolled Components | Controlled components use state; uncontrolled use refs to access DOM values.                   | `<input value={name} onChange={e => setName(e.target.value)} />` |
| **Intermediate** | What is Virtual DOM?                  | A lightweight in-memory representation of the real DOM used for performance optimization.      | React updates only changed nodes                                 |
| **Intermediate** | Conditional Rendering                 | Rendering UI based on conditions.                                                              | `{isLoggedIn && <Dashboard />}`                                  |
| **Intermediate** | What are Keys in React?               | Keys help React identify list items efficiently during reconciliation.                         | `items.map(i => <li key={i.id}>{i.name}</li>)`                   |
| **Intermediate** | What is `useContext`?                 | A hook that allows components to consume context without prop drilling.                        | `const theme = useContext(ThemeContext);`                        |
| **Intermediate** | What is `useRef`?                     | Creates a mutable reference that persists across renders.                                      | `const inputRef = useRef(null);`                                 |
| **Intermediate** | What is `useReducer`?                 | Manages complex state logic using a reducer function.                                          | `useReducer(reducer, initialState);`                             |
| **Intermediate** | What is `useMemo`?                    | Memoizes expensive calculations to improve performance.                                        | `useMemo(() => heavyCalc(a), [a]);`                              |
| **Intermediate** | What is `useCallback`?                | Returns a memoized function to prevent unnecessary re-renders.                                 | `useCallback(() => handleClick(), []);`                          |
| **Advanced**     | What is Context API?                  | Used to share global data without passing props manually.                                      | `const ThemeContext = createContext();`                          |
| **Advanced**     | Higher Order Component (HOC)          | A function that takes a component and returns an enhanced component.                           | `withAuth(Component)`                                            |
| **Advanced**     | What is `useLayoutEffect`?            | Runs synchronously after DOM mutations, before the browser paints.                             | `useLayoutEffect(() => { measure(); }, []);`                     |
| **Advanced**     | What is `useImperativeHandle`?        | Customizes the instance value exposed when using refs.                                         | `useImperativeHandle(ref, () => ({ focus }));`                   |
| **Advanced**     | What is `useDeferredValue`?           | Defers updating non-urgent values to improve UI responsiveness.                                | `const deferred = useDeferredValue(value);`                      |
| **Advanced**     | What is `useTransition`?              | Marks state updates as non-blocking transitions.                                               | `startTransition(() => setState())`                              |
| **Advanced**     | What is `useId`?                      | Generates unique IDs for accessibility and SSR compatibility.                                  | `const id = useId();`                                            |
| **Advanced**     | What are Custom Hooks?                | Reusable functions that encapsulate hook logic.                                                | `function useFetch(url) { ... }`                                 |
| **Advanced**     | Server-Side Rendering (SSR)           | Rendering components on the server for better SEO and performance.                             | Used in **Next.js**                                              |
| **Next.js**      | What is Next.js?                      | A React framework for production with SSR, SSG, routing, and API support.                      | Built on top of React                                            |
| **Next.js**      | File-Based Routing                    | Routes are created based on the folder structure.                                              | `app/page.tsx` or `pages/index.js`                               |
| **Next.js**      | Server Components                     | Components that run on the server by default (Next.js App Router).                             | No client-side JS by default                                     |
| **Next.js**      | Client Components                     | Components that run in the browser and support hooks & events.                                 | `"use client"`                                                   |
| **Next.js**      | Static Site Generation (SSG)          | Pages generated at build time for fast performance.                                            | `generateStaticParams()`                                         |
| **Next.js**      | API Routes                            | Backend endpoints built inside the Next.js app.                                                | `/api/users`                                                     |
| **Next.js**      | Image Optimization                    | Automatic image optimization for better performance.                                           | `next/image`                                                     |
| **Next.js**      | Metadata & SEO                        | Built-in SEO support with metadata API.                                                        | `export const metadata = { title: "Home" }`                      |

---


