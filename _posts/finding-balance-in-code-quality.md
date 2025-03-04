---
title: "Finding Balance in Code Quality: Readability, Predictability, Cohesion, and Coupling"
excerpt: "The most important thing is to find a balance between readability, predictability, cohesion, and coupling. Especially, cohesion can conflict with other values. Developers need to determine which value is more important for the specific situation ..."
coverImage: "/assets/blog/next-js-blog/cover2.jpg"
date: "2025-01-21"
author:
  name: "Doyun Hwang"
  picture: "/assets/blog/authors/logo.png"
ogImage:
  url: "/assets/blog/next-js-blog/cover2.jpg"
---

## 1. Readability
Code readability is all about how easily developers can understand what the code does. This matters because sooner or later, developers will need to maintain, debug, or refactor that code. Here are three ways that help improve code readability: reduce context, name things well, and make it read from top to bottom. 
```javascript
// Bad: High context
if (x) { doSomething(); }

// Good: Clear context
if (isUserLoggedIn) {
  showDashboard();
}
```

## 2. Predictability
When we read the code, we keep predicting what the code does. If the code does what we expect, we feel comfortable. If not, we feel confused. Here's an example of predictable versus unpredictable code:
```javascript
// Bad: Unpredictable behavior with side effects
function process(data) {
  globalState = data;  // side effect
}

// Good: Predictable behavior with pure function
function processData(data) {
  return transformedData(data);  // pure function
}
```
## 3. Cohesion
Cohesion is about how well the code is organized. If the code is well-organized, it's easier to understand. If not, it's harder to understand.
> **Readability and cohesion can sometimes conflict with each other.** For example, the well-organized code might not be readable. So, you need to find a balance between them.

## 4. Coupling
If the code is tightly coupled, it's hard to change one part without affecting the other. So, it's better to make the code loosely coupled. 
> Sometimes code duplication can be a good thing. If you remove duplication, you might increase coupling. So, you need to find a balance between cohesion and coupling.
```javascript
// Bad: Tight coupling with direct dependency
class OrderProcessor {
  constructor(database) {
    this.database = database;
  }
  process(order) {
    this.database.save(order);
  }
}

// Good: Loose coupling with dependency injection
class OrderProcessor {
  process(order, saveOrder) {
    return saveOrder(order);
  }
}
```


## 5. Find a balance
The most important thing is to find a balance between readability, predictability, cohesion, and coupling. Especially, cohesion can conflict with other values. Developers need to determine which value is more important for the specific situation. For example, when developing microservices, reducing coupling between services may be more important, while when developing a single component, increasing code cohesion might be more critical. The key is to set priorities based on the situation and make appropriate design decisions accordingly.
