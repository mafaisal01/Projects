
(Angular assumed **v14+ / modern Angular** concepts.)

> ⚠️ Note: “All possible questions” is not realistically finite, so this is a **thorough, interview-ready coverage** of the most **commonly asked and conceptually critical** questions.

---

# ✅ BASIC ANGULAR INTERVIEW QUESTIONS

| #  | Question                           | Definition / Answer                                                                                                                                             | Example                                             |               |
| -- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------- |
| 1  | What is Angular?                   | Angular is a **TypeScript-based frontend framework** developed by Google for building **single-page applications (SPAs)** using a component-based architecture. | Used to build dynamic web apps like dashboards      |               |
| 2  | What is a Component?               | A component controls a **part of the UI** and consists of a **TypeScript class, HTML template, and CSS styles**.                                                | `@Component({ selector: 'app-root' })`              |               |
| 3  | What is a Module?                  | A module groups related components, directives, pipes, and services. Root module is `AppModule`.                                                                | `@NgModule({ declarations: [...] })`                |               |
| 4  | What is Data Binding?              | Data binding connects the **component class and template**. Angular supports one-way and two-way binding.                                                       | `{{title}}`, `[value]="name"`, `[(ngModel)]="name"` |               |
| 5  | What is Two-Way Data Binding?      | Synchronizes data between component and template automatically.                                                                                                 | `<input [(ngModel)]="username">`                    |               |
| 6  | What is a Directive?               | Directives modify the **DOM behavior or appearance**.                                                                                                           | `*ngIf`, `*ngFor`                                   |               |
| 7  | What are Pipes?                    | Pipes transform displayed data in templates.                                                                                                                    | `{{ name                                            | uppercase }}` |
| 8  | What is Dependency Injection (DI)? | DI allows Angular to **provide services to components automatically**.                                                                                          | `constructor(private service: DataService)`         |               |
| 9  | What is a Service?                 | A service contains **business logic or shared data** across components.                                                                                         | API calls in `UserService`                          |               |
| 10 | What is Angular CLI?               | CLI is a command-line tool to **create, build, and manage Angular apps**.                                                                                       | `ng new app-name`                                   |               |



# ⚙️ INTERMEDIATE ANGULAR INTERVIEW QUESTIONS

| #  | Question                                 | Definition / Answer                                                               | Example                        |
| -- | ---------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| 1  | What is Lifecycle Hook?                  | Lifecycle hooks allow execution of code at **specific stages of component life**. | `ngOnInit()`, `ngOnDestroy()`  |
| 2  | What is `ngOnInit`?                      | Runs once after component initialization.                                         | Fetch data in `ngOnInit()`     |
| 3  | What is Routing?                         | Routing enables navigation between views without page reload.                     | `RouterModule.forRoot(routes)` |
| 4  | What is Lazy Loading?                    | Loads modules **only when required**, improving performance.                      | `loadChildren: () => import()` |
| 5  | What is Observable?                      | Observables handle **asynchronous data streams** using RxJS.                      | `this.http.get().subscribe()`  |
| 6  | Difference between Promise & Observable? | Promise emits once; Observable emits **multiple values over time**.               | HTTP calls                     |
| 7  | What is `HttpClient`?                    | Service to communicate with backend APIs.                                         | `this.http.get(url)`           |
| 8  | What is Template-driven Form?            | Form logic handled in template using `ngModel`.                                   | `<form #f="ngForm">`           |
| 9  | What is Reactive Form?                   | Form logic handled in component using `FormGroup`.                                | `this.form = new FormGroup()`  |
| 10 | What is Change Detection?                | Angular mechanism to **update the DOM when data changes**.                        | Default / OnPush strategy      |



# 🚀 ADVANCED ANGULAR INTERVIEW QUESTIONS

| #  | Question                                          | Definition / Answer                                             | Example                     |
| -- | ------------------------------------------------- | --------------------------------------------------------------- | --------------------------- |
| 1  | What is AOT Compilation?                          | Converts Angular HTML and TS into **JavaScript at build time**. | Faster rendering            |
| 2  | What is JIT Compilation?                          | Compiles code **at runtime in browser**.                        | Used in development         |
| 3  | What is ChangeDetectionStrategy.OnPush?           | Improves performance by checking only **when input changes**.   | `changeDetection: OnPush`   |
| 4  | What is RxJS?                                     | Reactive programming library used for Observables.              | `map()`, `switchMap()`      |
| 5  | What is `Subject`?                                | Multicast Observable allowing manual value emission.            | `subject.next(value)`       |
| 6  | Difference between `Subject` & `BehaviorSubject`? | BehaviorSubject stores **last emitted value**.                  | Initial state handling      |
| 7  | What is ViewChild?                                | Access child component or DOM element.                          | `@ViewChild('input')`       |
| 8  | What is Content Projection?                       | Allows inserting content into component using `ng-content`.     | `<ng-content></ng-content>` |
| 9  | What is Angular Universal?                        | Enables **Server-Side Rendering (SSR)**.                        | SEO optimization            |
| 10 | What is Zone.js?                                  | Manages async operations to trigger change detection.           | Automatically updates UI    |
| 11 | What is TrackBy in `ngFor`?                       | Improves performance by tracking items by unique ID.            | `trackBy: trackById`        |
| 12 | What are Interceptors?                            | Modify HTTP requests/responses globally.                        | Auth token injection        |
| 13 | What is State Management?                         | Centralized app state handling.                                 | NgRx, Akita                 |
| 14 | What is NgRx?                                     | Redux-inspired **state management library**.                    | Store, Actions, Reducers    |
| 15 | What is Standalone Component?                     | Component without NgModule (Angular 14+).                       | `standalone: true`          |

---


# 🛠️ ANGULAR CLI COMMANDS – INTERVIEW QUESTIONS & ANSWERS

| #  | Command                 | Purpose / Definition                                                                    | Example Usage                      |
| -- | ----------------------- | --------------------------------------------------------------------------------------- | ---------------------------------- |
| 1  | `ng new`                | Creates a **new Angular project** with default configuration and installs dependencies. | `ng new my-app`                    |
| 2  | `ng serve` / `ng s`     | Compiles the application and **runs a local development server**.                       | `ng serve` or `ng s`               |
| 3  | `ng serve --open`       | Runs the app and **automatically opens the browser**.                                   | `ng s -o`                          |
| 4  | `ng generate component` | Generates a **new component** with HTML, CSS, TS, and spec files.                       | `ng g c user`                      |
| 5  | `ng generate module`    | Creates a new Angular module.                                                           | `ng g m admin`                     |
| 6  | `ng generate service`   | Creates a service class for business logic or API calls.                                | `ng g s auth`                      |
| 7  | `ng generate directive` | Creates a custom directive.                                                             | `ng g d highlight`                 |
| 8  | `ng generate pipe`      | Creates a custom pipe.                                                                  | `ng g p capitalize`                |
| 9  | `ng generate guard`     | Generates a route guard for authentication/authorization.                               | `ng g g auth`                      |
| 10 | `ng generate interface` | Creates a TypeScript interface.                                                         | `ng g i user`                      |
| 11 | `ng build`              | Compiles the application into the `dist/` folder.                                       | `ng build`                         |
| 12 | `ng build --prod`       | Creates a **production-optimized build** (AOT, minified).                               | `ng build --prod`                  |
| 13 | `ng test`               | Runs unit tests using **Karma + Jasmine**.                                              | `ng test`                          |
| 14 | `ng e2e`                | Runs end-to-end tests.                                                                  | `ng e2e`                           |
| 15 | `ng add`                | Adds external libraries and configures them automatically.                              | `ng add @angular/material`         |
| 16 | `ng update`             | Updates Angular packages to the latest version.                                         | `ng update @angular/core`          |
| 17 | `ng lint`               | Checks code quality using lint rules.                                                   | `ng lint`                          |
| 18 | `ng config`             | Retrieves or sets Angular configuration values.                                         | `ng config cli.cache.enabled true` |
| 19 | `ng version`            | Displays Angular, CLI, Node, and package versions.                                      | `ng version`                       |
| 20 | `ng help`               | Displays available Angular CLI commands.                                                | `ng help`                          |


# 📌 COMMON INTERVIEW SHORT QUESTIONS (CLI)

| Question                                      | Answer                                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------------------- |
| Difference between `ng serve` and `ng build`? | `ng serve` runs app in memory for development; `ng build` creates deployable files |
| What does `ng g c` do?                        | Generates a component with required files                                          |
| Is `ng start` valid?                          | ❌ No, Angular uses `ng serve` (React uses `npm start`)                             |
| What happens when `ng new` runs?              | Creates project structure, installs packages, configures environment               |
| What is shorthand of `ng generate`?           | `ng g`                                                                             |

---


