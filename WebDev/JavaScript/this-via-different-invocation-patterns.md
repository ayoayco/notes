# `This` and how it is affected by different Invocation Patterns
The variable `this` is a bonus parameter that functions get depending on the **invocation pattern** with which they are called.

## Invocation Patterns
1. **Method nvocation Pattern** - when a function is a declared as a property of an object, it is invoked as a method... and the `this` parameter in this case is the object.
2. **Function Invocation Pattern** - when a function is not a method, it is invoked as a function... and the `this` in this case is the Global object. To workaround the difference of `this` in a method and an inner function, we assign `this` of the method to a variable (i.e. ```var _this = this```);
3. **Constructor Invocation Pattern** - when a functino is called with the `new` keyword, it is invoked as a constructor and a new object will be instantiated... `this` in this case will be the `prototype` of the function/object.
4. **Apply Invocatin Pattern** - in Javascript, an `apply` method exists on functions which allows us to call the function while assigning something else to its `this` parameter. The `apply` method is used by givin it two arguments: the first one is the value to which we want `this` to be bound, and the second is an array of arguments that will be passed to the function.

