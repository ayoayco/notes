# Augmenting JS Types

We can modify any object in Javascript by modifying it prototype. And since all types in JS are objects, we can modify them!

For example, if we want to modify the Number type, we can do so by modifying Number.prototype. If we want numbers to have a, say, new method called `method`, we do so by:

```js
// the method `method` provides a way to add a new method to the type Number by providing a name and the function that defines its behavior.
Number.prototype.method = function(name, func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
    }
}
```