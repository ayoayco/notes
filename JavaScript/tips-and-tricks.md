# JavaScript Random Tips and Tricks

Here's a list of some JavaScript techniques I've learned so far.

## Table of Contents
- [Notation](#notation)
- [Tips and Tricks](#tips-and-tricks)
    1. [Exclamation Conversion to Boolean](#exclamation-conversion-to-boolean)


## Notation

`// ->` is used to show the result of an expression. For example:

```js
1 + 1 // -> 2
```

`// >` means the result of `console.log` or another output. For example:

```js
console.log('hello, world!') // > hello, world!
```

`//` is just a comment used for explanations. Example:

```js
// Assigning a function to foo constant
const foo = function () {}
```

## Tips and Tricks
### 1. Exclammation Conversion to Boolean
Exclamation points can be used to convert any data type into boolean.

```js
'random string' // -> 'random string'
!'random string' // -> false
!!'random strign' // -> true
```

