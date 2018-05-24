# Recursion

Recursion is a programming technique where a function calls itself either directly or indirectly.

This technique solves a particular problem by dividing it into subproblems.

The following is an example of a recursive solution to the factorial problem:

```js
function factorial(num, i){
    var i = i || 1;

    if(num < 2){
        return i;
    }
    return factorial(num - 1, i * num);

}

console.log('result: ' + factorial(4));
```

