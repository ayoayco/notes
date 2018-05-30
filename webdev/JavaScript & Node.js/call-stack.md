# JavaScript handles function calls by maintaining a Stack

Each call pushes the return address (line and col) of the function, and then the parameters with which the function was called.

Next calls will be pushed in the same manner.

When a function executes a statement, this replaces the pushed parameters??? (verify this.)

When a function reaches the end/return statement, it is popped from the stack along with the variables and parameters. 

Objects are maintained in a separate heap... only pointer variables are maintained in the call stack.

