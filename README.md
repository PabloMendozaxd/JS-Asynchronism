# Javasript Asynchronism
**General asynchronous programming concepts**

- **Asynchronism**:
   
   If a function relies on the result of another function, it has to wait for the other function to finish and return, and until that happens, the entire program is essentially stopped from the perspective of the user.

- **Blocking code**:

    When a web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen. This is called blocking; the browser is blocked from continuing to handle user input and perform other tasks until the web app returns control of the processor.

- **Threads**:

    A thread is basically a single process that a program can use to complete tasks. Each thread can only do a single task at once. Each task will be run sequentially; a task has to complete before the next one can be started.
    
    **🛑JavaScript is single-threaded🛑**
    