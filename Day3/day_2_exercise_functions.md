# functions-exercises.md

# JavaScript Functions - Practice Exercises

## Instructions

* Create a separate `.js` file for each exercise.
* Run your code using Node.js.
* Use meaningful variable and function names.
* Do not look at the solutions until you have attempted every exercise.

---

## Exercise 1: Basic Function

Create a function called `introduce` that accepts a `name` parameter and returns:

```text
Hi, I am <name>
```

Example:

```js
console.log(introduce("Delish"));
```

Output:

```text
Hi, I am Delish
```

---

## Exercise 2: Multiple Parameters

Create a function called `calculateArea` that accepts `width` and `height`.

Return the area of the rectangle.

Example:

```js
console.log(calculateArea(10, 5));
```

Output:

```text
50
```

---

## Exercise 3: Default Parameters

Create a function called `registerUser`.

Parameters:

* `username`
* `role` (default value: `"student"`)

Example:

```js
console.log(registerUser("Asha"));
console.log(registerUser("Ravi", "admin"));
```

Output:

```text
Asha registered as student
Ravi registered as admin
```

---

## Exercise 4: Conditional Logic

Create a function called `submitAssignment`.

Parameters:

* `studentName`
* `comment`

Rules:

* If `comment` is empty or contains only spaces, return:

```text
<studentName> submitted the assignment
```

* Otherwise, return:

```text
<studentName> submitted: <comment>
```

---

## Exercise 5: Arrow Function

Convert the following function into an arrow function:

```js
function multiply(a, b) {
  return a * b;
}
```

---

## Exercise 6: Function Expression

Create a function expression called `isEven`.

It should return `true` if a number is even, otherwise `false`.

Example:

```js
console.log(isEven(8));
console.log(isEven(7));
```

Output:

```text
true
false
```

---

## Exercise 7: Callback Basics

Create a higher-order function called `processNumber`.

Parameters:

* `number`
* `callback`

Return the result of the callback.

Example:

```js
function square(num) {
  return num * num;
}

console.log(processNumber(5, square));
```

Output:

```text
25
```

---

## Exercise 8: Anonymous Callback

Use an anonymous callback function with `processNumber`.

Example:

```js
console.log(
  processNumber(10, function (num) {
    return num + 100;
  })
);
```

Expected Output:

```text
110
```

---

## Exercise 9: Higher-Order Function

Create a function called `applyDiscount`.

Parameters:

* `price`
* `discountFunction`

Example:

```js
function tenPercentOff(price) {
  return price * 0.9;
}

console.log(applyDiscount(1000, tenPercentOff));
```

Output:

```text
900
```

---

## Exercise 10: Function Returning Function

Create a function called `createGreeting`.

It should accept a greeting word and return another function.

Example:

```js
const sayHello = createGreeting("Hello");

console.log(sayHello("Delish"));
```

Output:

```text
Hello, Delish
```

---

## Exercise 11: forEach()

Given this array:

```js
const skills = ["HTML", "CSS", "JavaScript"];
```

Use `forEach()` to print:

```text
I know HTML
I know CSS
I know JavaScript
```

---

## Exercise 12: map()

Given:

```js
const prices = [100, 200, 300];
```

Use `map()` to create a new array with 13% tax added.

Expected Output:

```js
[113, 226, 339]
```

---

## Exercise 13: filter()

Given:

```js
const applicants = [
  { name: "Asha", experience: 1 },
  { name: "Ravi", experience: 4 },
  { name: "Sita", experience: 2 },
];
```

Use `filter()` to return applicants with 3 or more years of experience.

---

## Exercise 14: find()

Using the same applicants array, find the applicant named `"Sita"`.

---

## Exercise 15: reduce()

Given:

```js
const scores = [80, 95, 70, 100];
```

Use `reduce()` to calculate the total score.

Expected Output:

```text
345
```

---

## Mini Project: CareerHub Application Processor

Create a function called `applyToJob`.

Parameters:

* `applicant`
* `onSuccess`

Example applicant:

```js
const applicant = {
  name: "Delish",
  role: "Frontend Developer",
  coverLetter: "I enjoy building user interfaces."
};
```

Requirements:

1. Print:

```text
Delish applied for Frontend Developer
```

2. If `coverLetter` is empty, print:

```text
No cover letter provided
```

3. Call the `onSuccess` callback.

Example callback:

```js
function sendConfirmation(applicant) {
  console.log(`Confirmation sent to ${applicant.name}`);
}
```

Expected Output:

```text
Delish applied for Frontend Developer
Confirmation sent to Delish
```
