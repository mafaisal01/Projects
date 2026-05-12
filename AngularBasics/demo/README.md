# Demo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


------------------------------------------------------------------------------------------------------------------------
Components

Data Binding, One-way Data Binding (Interpolation, Property binding, Event binding), Two-way binding (ngModel)

signals, computed signals , read and change value

control flow - @if, @else, @if-else, @for

routing - routes, router outlet, navigate, router link

directive, attribute directive (ngclass-add dynamic class, ngstyle-add dynamic style, ngModel), structural directive, custom directive

component life cycle event, d/f b/w contructor, ngOnInit and pipes,custom pipes

API calls Integration (POST, GET, PUT, UPDATE, DELETE) 

form validation, template form and reactive form

services 

Resource and rxResource API

-----------------------------------------------------------------------------------------------------------------------
Sure — here’s a clean, **well-structured `README.md` file** for your listed Angular topics.
It includes **definitions, examples, and code snippets** (formatted in Markdown).

---

# 🌟 Angular Concepts – README

This document covers important **Angular topics** with definitions, examples, and syntax references.

---

## 🧩 Components

### Definition

A **Component** is the basic building block of an Angular application. It controls a section of the UI called a *view*.

### Example

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```

```html
<!-- app.component.html -->
<h1>{{ title }}</h1>
```

---

## 🔗 Data Binding

### Definition

Data Binding connects **component data** with the **view (HTML)**.

### Types

#### 1️⃣ One-way Data Binding

Data flows **from component → view**.

##### Interpolation

```html
<p>{{ title }}</p>
```

##### Property Binding

```html
<input [value]="title">
```

##### Event Binding

```html
<button (click)="onClick()">Click Me</button>
```

#### 2️⃣ Two-way Data Binding

Data flows **both ways** using `ngModel`.

```html
<input [(ngModel)]="username">
<p>Hello {{ username }}</p>
```

---

## ⚡ Signals

### Definition

**Signals** are a reactive primitive introduced in Angular for managing state reactivity.

### Example

```typescript
import { signal, computed } from '@angular/core';

export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(v => v + 1);
  }
}
```

### Reading & Changing Value

```typescript
console.log(this.count()); // read value
this.count.set(10); // set new value
```

---

## 🔁 Control Flow (`@if`, `@else`, `@for`)

Angular now supports control flow syntax similar to JS, replacing traditional `*ngIf` and `*ngFor`.

### Example

```html
@if (isLoggedIn) {
  <p>Welcome User!</p>
} @else {
  <p>Please Log In</p>
}

@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```

---

## 🧭 Routing

### Definition

Routing allows navigation between views in an Angular app.

### Example

#### Routes Configuration

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

#### Router Outlet

```html
<router-outlet></router-outlet>
```

#### Navigation

```html
<a routerLink="/about">Go to About</a>
```

#### Programmatic Navigation

```typescript
this.router.navigate(['/about']);
```

---

## 🧱 Directives

### Definition

A **Directive** is used to modify the DOM or the behavior of DOM elements.

### Types

#### 1️⃣ Attribute Directives

Modify the appearance or behavior of an element.

* **ngClass** – Add dynamic classes

  ```html
  <div [ngClass]="{'active': isActive}"></div>
  ```
* **ngStyle** – Add dynamic styles

  ```html
  <div [ngStyle]="{'color': isActive ? 'green' : 'red'}"></div>
  ```
* **ngModel** – Two-way data binding

  ```html
  <input [(ngModel)]="username">
  ```

#### 2️⃣ Structural Directives

Change the DOM structure.

* `*ngIf`, `*ngFor`, `*ngSwitch`

```html
<div *ngIf="show">Visible!</div>
<li *ngFor="let item of items">{{ item }}</li>
```

#### 3️⃣ Custom Directive

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

---

## 🔄 Component Life Cycle Events

### Common Hooks

| Hook            | Description                                |
| --------------- | ------------------------------------------ |
| `ngOnInit()`    | Called once after component initialization |
| `ngOnChanges()` | Called when input properties change        |
| `ngOnDestroy()` | Called before component is destroyed       |

### Difference: Constructor vs ngOnInit

| Feature | Constructor                       | ngOnInit                              |
| ------- | --------------------------------- | ------------------------------------- |
| Timing  | Called when class is instantiated | Called after component initialization |
| Purpose | Initialize class members          | Fetch data / call services            |

---

## 🧮 Pipes

### Definition

Pipes transform data in templates.

### Example

```html
<p>{{ today | date:'short' }}</p>
<p>{{ name | uppercase }}</p>
```

### Custom Pipe

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

---

## 🌐 API Calls Integration (HTTP Methods)

Use Angular’s **HttpClient** for RESTful API calls.

```typescript
import { HttpClient } from '@angular/common/http';

export class ApiService {
  constructor(private http: HttpClient) {}

  getData() { return this.http.get('/api/items'); }
  postData(data: any) { return this.http.post('/api/items', data); }
  updateData(id: number, data: any) { return this.http.put(`/api/items/${id}`, data); }
  deleteData(id: number) { return this.http.delete(`/api/items/${id}`); }
}
```

---

## ✅ Form Validation

### Template-driven Form

```html
<form #myForm="ngForm" (ngSubmit)="submit(myForm)">
  <input name="email" ngModel required email>
  <button [disabled]="myForm.invalid">Submit</button>
</form>
```

### Reactive Form

```typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';

this.form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
});
```

---

## 🧰 Services

### Definition

**Services** are used to share data or logic between components.

### Example

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() {
    return { name: 'John', age: 25 };
  }
}
```

---

## ⚙️ Resource and rxResource API

### Resource API

The **Resource API** simplifies fetching and caching data using Angular signals.

```typescript
import { resource } from '@angular/core/rxjs-interop';

const userResource = resource({
  loader: () => fetch('/api/user').then(res => res.json())
});
```

### rxResource

**rxResource** integrates with RxJS Observables for reactive data fetching.

```typescript
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

const data$ = rxResource(() => of({ name: 'John', age: 30 }));
```

---

## 📘 Summary

| Topic                 | Key Feature                     |
| --------------------- | ------------------------------- |
| Components            | Building blocks of Angular apps |
| Data Binding          | Connects component & template   |
| Signals               | Reactive state management       |
| Routing               | Navigation between components   |
| Directives            | Manipulate DOM & behavior       |
| Pipes                 | Data transformation             |
| API Integration       | REST calls via HttpClient       |
| Forms                 | User input handling             |
| Services              | Shared logic or data            |
| Resource / rxResource | Reactive data management        |

---
------------------------------------------------------------------------------------------------------------------------

Perfect ✅ — here’s the **final formatted `README.md`** file with a **Table of Contents** and clickable **section links** for easy navigation.
It includes all Angular topics with definitions, examples, and code snippets — fully Markdown-friendly.

---

# 🌟 Angular Concepts – README

A comprehensive overview of key **Angular topics**, including components, data binding, routing, directives, pipes, forms, and more — with definitions and examples.

---

## 📚 Table of Contents

1. [🧩 Components](#-components)
2. [🔗 Data Binding](#-data-binding)

   * [One-way Binding](#1️⃣-one-way-data-binding)
   * [Two-way Binding](#2️⃣-two-way-data-binding)
3. [⚡ Signals](#-signals)
4. [🔁 Control Flow (`@if`, `@else`, `@for`)](#-control-flow-if-else-for)
5. [🧭 Routing](#-routing)
6. [🧱 Directives](#-directives)

   * [Attribute Directives](#1️⃣-attribute-directives)
   * [Structural Directives](#2️⃣-structural-directives)
   * [Custom Directives](#3️⃣-custom-directive)
7. [🔄 Component Life Cycle Events](#-component-life-cycle-events)
8. [🧮 Pipes](#-pipes)
9. [🌐 API Calls Integration](#-api-calls-integration-http-methods)
10. [✅ Form Validation](#-form-validation)
11. [🧰 Services](#-services)
12. [⚙️ Resource and rxResource API](#️-resource-and-rxresource-api)
13. [📘 Summary](#-summary)

---

## 🧩 Components

### Definition

A **Component** is the basic building block of an Angular application. It controls a section of the UI called a *view*.

### Example

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```

```html
<!-- app.component.html -->
<h1>{{ title }}</h1>
```

---

## 🔗 Data Binding

### Definition

Data Binding connects **component data** with the **view (HTML)**.

---

### 1️⃣ One-way Data Binding

Data flows **from component → view**.

#### Interpolation

```html
<p>{{ title }}</p>
```

#### Property Binding

```html
<input [value]="title">
```

#### Event Binding

```html
<button (click)="onClick()">Click Me</button>
```

---

### 2️⃣ Two-way Data Binding

Data flows **both ways** using `ngModel`.

```html
<input [(ngModel)]="username">
<p>Hello {{ username }}</p>
```

---

## ⚡ Signals

### Definition

**Signals** are reactive primitives introduced in Angular for managing state reactivity.

### Example

```typescript
import { signal, computed } from '@angular/core';

export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(v => v + 1);
  }
}
```

### Read & Change Value

```typescript
console.log(this.count()); // read value
this.count.set(10); // set new value
```

---

## 🔁 Control Flow (`@if`, `@else`, `@for`)

Angular supports modern control flow syntax replacing traditional `*ngIf` and `*ngFor`.

### Example

```html
@if (isLoggedIn) {
  <p>Welcome User!</p>
} @else {
  <p>Please Log In</p>
}

@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```

---

## 🧭 Routing

### Definition

Routing enables navigation between different components (views).

### Example

#### Routes Configuration

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

#### Router Outlet

```html
<router-outlet></router-outlet>
```

#### Navigation

```html
<a routerLink="/about">Go to About</a>
```

#### Programmatic Navigation

```typescript
this.router.navigate(['/about']);
```

---

## 🧱 Directives

### Definition

A **Directive** modifies the structure or behavior of DOM elements.

---

### 1️⃣ Attribute Directives

Modify appearance or behavior of elements.

* **ngClass** – Add dynamic class

  ```html
  <div [ngClass]="{'active': isActive}"></div>
  ```

* **ngStyle** – Add dynamic style

  ```html
  <div [ngStyle]="{'color': isActive ? 'green' : 'red'}"></div>
  ```

* **ngModel** – Two-way data binding

  ```html
  <input [(ngModel)]="username">
  ```

---

### 2️⃣ Structural Directives

Change the DOM structure.

```html
<div *ngIf="show">Visible!</div>
<li *ngFor="let item of items">{{ item }}</li>
```

---

### 3️⃣ Custom Directive

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

---

## 🔄 Component Life Cycle Events

### Common Hooks

| Hook            | Description                                |
| --------------- | ------------------------------------------ |
| `ngOnInit()`    | Called once after component initialization |
| `ngOnChanges()` | Called when input properties change        |
| `ngOnDestroy()` | Called before component is destroyed       |

### Difference: Constructor vs ngOnInit

| Feature | Constructor                       | ngOnInit                              |
| ------- | --------------------------------- | ------------------------------------- |
| Timing  | Called when class is instantiated | Called after component initialization |
| Purpose | Initialize class members          | Fetch data / call services            |

---

## 🧮 Pipes

### Definition

**Pipes** transform data in templates.

### Example

```html
<p>{{ today | date:'short' }}</p>
<p>{{ name | uppercase }}</p>
```

### Custom Pipe

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

---

## 🌐 API Calls Integration (HTTP Methods)

Use Angular’s **HttpClient** for RESTful API calls.

```typescript
import { HttpClient } from '@angular/common/http';

export class ApiService {
  constructor(private http: HttpClient) {}

  getData() { return this.http.get('/api/items'); }
  postData(data: any) { return this.http.post('/api/items', data); }
  updateData(id: number, data: any) { return this.http.put(`/api/items/${id}`, data); }
  deleteData(id: number) { return this.http.delete(`/api/items/${id}`); }
}
```

---

## ✅ Form Validation

### Template-driven Form

```html
<form #myForm="ngForm" (ngSubmit)="submit(myForm)">
  <input name="email" ngModel required email>
  <button [disabled]="myForm.invalid">Submit</button>
</form>
```

### Reactive Form

```typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';

this.form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
});
```

---

## 🧰 Services

### Definition

**Services** are used to share data or logic between components.

### Example

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() {
    return { name: 'John', age: 25 };
  }
}
```

---

## ⚙️ Resource and rxResource API

### Resource API

Simplifies data fetching and caching using Angular signals.

```typescript
import { resource } from '@angular/core/rxjs-interop';

const userResource = resource({
  loader: () => fetch('/api/user').then(res => res.json())
});
```

### rxResource API

Integrates with **RxJS Observables** for reactive data fetching.

```typescript
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

const data$ = rxResource(() => of({ name: 'John', age: 30 }));
```

---

## 📘 Summary

| Topic                 | Key Feature                        |
| --------------------- | ---------------------------------- |
| Components            | Building blocks of Angular apps    |
| Data Binding          | Connects component & template      |
| Signals               | Reactive state management          |
| Routing               | Navigation between components      |
| Directives            | DOM manipulation                   |
| Pipes                 | Data transformation                |
| API Integration       | RESTful communication              |
| Forms                 | Template & Reactive input handling |
| Services              | Shared logic or data               |
| Resource / rxResource | Reactive data management           |

---





