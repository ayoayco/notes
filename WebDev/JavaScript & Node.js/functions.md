# Analysis of function declarations in JS

You can access a 'function' before it is declared. This will work.
```js
normalfunc('hello');

function normalfunc(str){
    console.log(str)
}
```

Arrow functions does not work like that. The strength of arrow functions are when you have to use the 'this' object of the caller. ???verify this. This will not work.
```js
arrfunc('nope');

arrfunc = (str) => {
    console.log(arrfunc)
}
```

This is just an anonymous function set to a variable. This will also not work
```js
anonfunc('nope');

anonfunc = function(str){
    console.log(str);
}
```


## Conclusion
For global functions, we can't use arrow functions or anonymous functions.
