# Analysis of function declarations in JS

This will work.
You can access a 'function' before it is declared.
```js
normalfunc('hello');

function normalfunc(str){
    console.log(str)
}
```

This will not work.
Arrow functions does not work like that. The strength of arrow functions are when you have to use the 'this' object of the caller. ???verify this
```js
arrfunc('nope');

arrfunc = (str) => {
    console.log(arrfunc)
}
```

This will also not work
This is just an anonymous function set to a variable.
```js
anonfunc('nope');

anonfunc = function(str){
    console.log(str);
}
```


## Conclusion
For global functions, we can't use arrow functions or anonymous functions.
