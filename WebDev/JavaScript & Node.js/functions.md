# Analysis of function declarations in JS

this will work.
you can access a 'function' before it is declared
```js
normalfunc('hello');

function normalfunc(str){
    console.log(str)
}
```

this will not work.
arrow functions does not work like that
```js
arrfunc('nope');

arrfunc = (str) => {
    console.log(arrfunc)
}
```

this will also not work
this is just an anonymous function set to a variable.
```js
anonfunc('nope');

anonfunc = function(str){
    console.log(str);
}
```


## Conclusion
For global functions, we can't use arrow functions or anonymous functions.
