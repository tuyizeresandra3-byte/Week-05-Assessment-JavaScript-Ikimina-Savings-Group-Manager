//===== PART A1 =====Knowledge and Debugging

## A1. Predict the output

1. `console.log("3" + 4 + 5);`
   - Prediction: `345`
   - Explanation: JavaScript joins the values as text from left to right because the first value is a string.

2. `console.log(3 + 4 + "5");`
   - Prediction: `75`
   - Explanation: JavaScript adds 3 and 4 first to get 7, then joins 7 with the string "5".

3. `console.log("20" / "4");`
   - Prediction: `5`
   - Explanation: The division operator converts the numeric strings into numbers before dividing.

4. `console.log(null ?? "none");`
   - Prediction: `none`
   - Explanation: The nullish coalescing operator returns "none" because the left value is null.

5. `console.log("" || "empty");`
   - Prediction: `empty`
   - Explanation: An empty string is falsy, so the OR operator returns the second value.

6. `console.log(typeof undefined);`
   - Prediction: `undefined`
   - Explanation: The typeof operator returns the type name of undefined.

7. `console.log(Boolean("0"));`
   - Prediction: `true`
   - Explanation: "0" is a non-empty string, so it is truthy.

8. `console.log("Rwanda".slice(1, 4));`
   - Prediction: `wan`
   - Explanation: slice starts at index 1 and stops before index 4.



//===== PART A2 =====Find and fix the bugs

### Bugs and explanations

1. `let total;` does not initialize the counter. It should be `let total = 0;`.
2. The loop starts at index 1, which skips the first member. It should start at `i = 0`.
3. The condition uses `i <= members.length`, which can access an index outside the array. It should use `i < members.length`.
4. The condition uses `=` instead of a comparison operator. It should use `===` to compare the member's name with "Eric".
5. `total + 1;` does not update the counter. It should be `total = total + 1;`.
6. `Console.log` uses the wrong capitalization. It should be `console.log`.
7. `${Total}` uses the wrong variable capitalization. It should be `${total}`.

### Corrected code

```javascript
const members = ["Aline", "Eric", "Grace"];

let total = 0;

for (let i = 0; i < members.length; i++) {
    if (members[i] === "Eric") {
        total = total + 1;
    }
}

console.log(`Found ${total}`);
```

Expected output: `Found 1`


//===== PART A3 =====Short answers

### 1. What is the difference between let and const? When do you use each?

`let` declares a variable whose value can be reassigned. `const` declares a variable that cannot be reassigned. I use `const` when the variable should keep the same binding and `let` when its value needs to change.
I used const because I don't need to reassign name.

### 2. Why should a function usually return a value instead of using console.log inside it?

A function should usually return a value because the result can be stored in a variable, reused in another calculation, passed to another function, or tested. `console.log` only displays a value in the Console.

### 3. When do you use for...of and when do you use for...in?

I use `for...of` to loop through values in an array or another iterable. I use `for...in` to loop through the enumerable property keys of an object.

1. for...of gives us the values in the array.
2. for...in gives us the object's property keys.

