# Silent Failure of Node.js HTTP Server on Port Conflict

This repository demonstrates a common, yet easily missed, error in Node.js HTTP servers: the silent failure to start when the specified port is already in use.  The provided code lacks proper error handling, resulting in no indication of the failure.

## Bug

The `bug.js` file contains a basic HTTP server.  If you run this and the port 8080 is already occupied, the server will fail to start without any error messages to the console.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle this scenario, using the `'error'` event listener to catch port binding failures and provide informative error messages to the console.  This allows for easier debugging and better application robustness.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`.  If port 8080 is free, the server will start successfully.
3. Start another process using port 8080 (e.g., another Node.js server). 
4. Run `node bug.js` again. You'll observe no output, indicating the silent failure.
5. Run `node bugSolution.js`.  This time, you will see a meaningful error message indicating the port conflict.