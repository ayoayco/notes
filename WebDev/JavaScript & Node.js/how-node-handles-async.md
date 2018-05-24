# Some notes on how Node.js handles async

JS is a single-threaded, event-based language. It means it runs on a single thread and waits for events to happen before firing up callback functions we provide.

Node.js runs on Chrome V8 JS engine in a single thread, but is able to handle asynchronus jobs (which is handled by Java and Python by managing multi-threads), by utilizing an underlying C++ API, called libuv, that runs concurrent jobs with our JS code.

When we call asynchronus methods, Node.js sends these to a different thread which allows V8 to continue running with our code.

