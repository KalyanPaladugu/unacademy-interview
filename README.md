
## Strings:

+ Multi line strings can be create by using the `+` or `/` or template literal ` `(ES6)

+ Methods to get the URL

    + window.location.href;
    + document.URL;


### Promises

+ Promise is an object, It will represents the status of Asynchronous Operations
+ States in promises
    + pending
    + fulfilled/resolve
    + reject
+ If the promise is fulfilled the response can represent with then function
+ If the promise is rejected the error can display with in catch function

```
<script>
        var result=new Promise(function (resolve,reject){
           var data=true;
        //    var data=false;
           if(data){
               resolve("It's true statement")
           }
           else {
               reject("It's false statement")
           }
        })
        console.log(result)
        result.then(response => {
            console.log(response)
        }).catch(res=>{
            console.log(res)
        })
    </script>

 ```

###  callback functions

+ Passing function as argument for the another function
```
 function fname(){ var firstName="Kalyan";
        console.log(firstName)}
        function name(demo,lname) { var fullname="Paladugu";
                
          console.log(fullname);
          demo();
          console.log(lname)
    }
        name(fname,"Chakravarthi");

```

### closures

+ A closure gives you access to an outer function’s scope from an inner function

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

### async and await


+ `async` ensures that the function returns a promise, and wraps non-promises in it.
+ The keyword `await` makes JavaScript wait until that promise settles and returns its result.
```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

example2:
========= 

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

Higher Order Components:
========================

+ To use same counter logic in Hover component we have to pass state and event handler as props to parent component and pass from parent to hover component(This is not a great solution)

+ To share comman functionality between components(code reusability)
+ A pattern where a function takes component as argument and returns new component

+ `const newComponent = HigherOrderComponent(OriginalComponent)`

# localStorage & sessionStorage
===============================

Both storage objects provide same methods and properties:

* setItem(key, value) – store key/value pair.
* getItem(key) – get the value by key.
* removeItem(key) – remove the key with its value.
* clear() – delete everything.
* key(index) – get the key on a given position.
* length – the number of stored items.


## sessionStorage

+ The sessionStorage object is used much less often than localStorage.

+ Properties and methods are the same, but it’s much more limited:

+ The sessionStorage exists only within the current browser tab.
+ Another tab with the same page will have a different storage.
+ But it is shared between iframes in the same tab (assuming they come from the same origin).
+ The data survives page refresh, but not closing/opening the tab.


|  localStorage | 	sessionStorage |
| ------------- | ------------- |
| Shared between all tabs and windows with the same origin	| Visible within a browser tab, including iframes from the same origin  |
| Survives browser restart  | Survives page refresh (but not tab close)  |
+ [Referance link](https://javascript.info/localstorage)


### Axios

+ Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF
+ Axios (a promise-based HTTP client) and Fetch API (a browser in-built web API)

# 31-1-2022

ReactJS Interview Questions:
============================

+ Variable hosting
    - Variables can be use with out declaration
+ `temporarly dead zone`
  - the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable

+ implicit and explicit binding
+ implement caching/memoize fucntion
   - Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

  + [JavaScript Visualizer](https://www.jsv9000.app/)

  + Infinite currying

  + Render folder structure in UI whenever update the data ui should be update ?


  + Temporal deadzone

    - the time between variable hoisting and value is not assigned to  variable is called temporal dead zone

+ css specificity
  - Inline css
  - Id
  - class,pseudo-class,attribute selectors
  - elements and pseudi-elements

+ [Hoisting](https://www.youtube.com/watch?v=8arU-3_bxWA) is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
  - for variables default value is undefined @ memory allocation time. If you we take let or const keywords for variables before initialization we will get referance error.

  - If you try to assign anonymous function varivale with var keyword it will treat as  variable and then value will be undefine default whne you call function after initialization. In case if you are taking variable with let you will get error 
+ Closure gives you access to an outer functions scope from an inner function.

+ `this` refers to current object where it is called
+ `Call` invokes the function and allows you to pass in arguments one by one.
+ `Apply` invokes the function and allows you to pass in arguments as an array.
+ `Bind` returns a new function, allowing you to pass in a this array and any number of arguments.

+ `Synchronous` 
+ `Asynchrouns` 

+ `callback` is a function that can be passed as argument to nother function.
  
+ `callback hell` best solution is use `promises`
+ `Promises`
  - Promise is a javascript object that links producing code (that can take some time) and consuming code( that must wait for the result)
+ Promise state and values
  - Pending (undefined)
  - Fullfilled  (resolved value)
  - Rejected (reason for rejection)

+ Promise methods
  - `Promise.all([promises])`
  -  `Promise.allSettled([promises])`
  - `Promise.any([promises])`
  - `Promise.race([promises])`
+ Promise examples

  - `fetch`
  - `axios`

  ```
  fetch('https://api.github.com/users').then(response=>response.json()).
 then(data=> console.log(data))

 axios.get('https://api.github.com/users').then(
   result => console.log(result.data)
)
```

+ Async/await

  - async and awit make promises easier to write
  - async makes a function return a promise
  - await makes a function wait for a promise

+ Shallow copy & Deep copy

- call by referance --> shallow copy  --> mutable object
- call by value --> deep copy --> immutable object

+ primitive datatypes  always do deep copy
  - Number
  - String
  - Boolean
  - Null
  - Undefined
+ Non primitive datatypes always do shalow copy
  - object
  - Array

+ Methods to do deep copy from shalow copy object
  - JSON.parse(JSON.stringify(obj))
  - sprea operator (...)
  - Object.assign({},obj)


+ Event loop

- JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks
-   stack space is mainly used for storing order of method execution and local variales
- heap memory used dynamic allocation for allocating and deallocating memory blocks

```
function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

const baz = bar(7)
```

+ Order of operations:

  - When calling bar, a first frame is created containing references to bar's arguments and local variables.
 - When bar calls foo, a second frame is created and pushed on top of the first one, containing references to foo's arguments and local variables.
 - When foo returns, the top frame element is popped out of the stack (leaving only bar's call frame).
When bar returns, the stack is empty.


+ Event propagation

  - capturing pahse (window to button) (for event add `ture` as third parameter)
  - target phase  (button)
  - bubbling phase (button to window)


+ Event delegation
  - Based upon the parent element try  to handle child lements


#### React lifecycle methods

+ React component has 3 lifecycle methods
  - Mounting  (Putting elements into the dom)
  - Updating (when component is updated)
  - Unmounting (when component is removed from the dom)

+ Mounting has the below order of execution
  1. constructor() -> optional
  2. getDerivedStateFromProps() -> optional
  3. render() -> mandatory
  4. componentDidMount() -> optional

+ Updating has the below order of execution

   1. getDerivedStateFromProps() -> optional
   2. shouldComponentUpdate() -> optional
   3. render() -> mandatory
   4. getSnapshotBeforeUpdate() -> optional
   5. componentDidUpdae()  -> optional


+ Unmounting will run the below lifecycle method
  1. componentWillUnmount()  
  

+ Event Handling in React
 - onClick
 - onSubmit etc...
+ If we want to bind the function to component in the constructor we have to bind the function .In ES6 it may be don't need
  ```
 constructor(props) {
         super();
        //  this.submit=this.submit.bind(this);
         this.state={

         }
      console.log("inconstructor")
     }
  ```

+ Inline binding

```
  render() {
        console.log("render");
    return (
        <>
            <div>Mounting</div>
            <button onClick={this.submit.bind(this)}>submit</button>
      </>
    )
  }
```
+ When we use arrow function no need to use `bind()`

+ conditional rendering
```
{this.state.user && <h1>{this.state.username}</h1>}

```

#### Routing 

+ Rounting means navigating from one URL to another URL without refreshing the application everytime

+ Primary components
  + routers like `BrowserRouter` anf `HashRouter`
  + route matches like `Route` and `Switch` or `Routes`
  + Navigation like `Link`,`Navlink` and `Redirect`

+ In `Route` the order of precedence is children -> component -> render 
+ In switch it will load firstmatch url content in the route .To avoid that use `exact` in the route. Better to give lengthy url first
+ To match specific URL in the route we have different options
  - exact
  - strict
  - sensitive

+ Navigation

- Link
  - it contains to property
  - To update the UI without refresh the page

##### iterators & Generators


+ In ES6 Iterators and generators have officially added

+ Iterators
  - Iterators allow you to iterate over any object(Arrays are also objects) that follows the specification
  - Iterable objects are objects that can be iterated over with for..of.
  - Technically, iterables must implement the `Symbol.iterator` method
  - Iterable objects are objects that can be iterated over with `for..of`
  - The next() method must return an object with two properties:
     - value (the next value)
     - done (true or false)`
```
function myNumbers() {
  let n = 0;
  return {
    next: function() {

      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30
```

+ Generators

  - Regular functions return only one, single value (or nothing).

  - Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

  - Generator functions
    - To create a generator, we need a special syntax construct: function*, so-called “generator function”.

  - It looks like this:

```
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();

let one = generator.next();

alert(JSON.stringify(one)); 
```

##### Pure Functions & Higher Order Functions

+ Pure functions

  - Given the same input will always return the same output
  - Have no side effects(only access the data the is passed to it)

+ Higher Order Functions

  - May accept function as parameter
  - Will return a function

```
function getCapture(camera) {
  // Invoke the passed function
  camera();
}

// Invoke the function by passing a function as an argument
getCapture(function(){
  console.log('Canon');
});

Ex:2
----
// Define a function that returns a function
function returnFunc() {
  return function() {
    console.log('Hi');
  }
}

// Take the returned function in a variable.
const fn = returnFunc();
// Now invoke the returned function.
fn(); // logs 'Hi' in the console

// Alternatively - A bit odd syntax but good to know
returnFunc()(); // logs 'Hi' in the console
```


##### PureComponent

+ Pure component will re-render only when shallow comparison of state is occured
+ If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method
+ In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself.

##### Higher Order Component
+ a higher-order component is a function that takes a component and returns a new component.

+ code reusability is main advantage
```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### Unacademy interview questions

1. Difference between `forEach` and `map`

  - Both are array functions to iterate elements in the array
  - `forEach` doesn't return anything but change the original array
  - `map` function can change the original array and return new array as a result
  - For the `map` function we can chaining (by filter)

2. Difference between null and undefined
  - null is actual value
  - variable is declared and not initialized

3. Event Delegation
  - Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

4. Flatten the array
  - Display all subarray elements in a sing single array elements

+ Round2:

1. Var,let & const 

2. let scope

3. call,apply and bind

  - This are used to manipulate the context of particular function
4. infinite currying 
5. composition polyfill

  - compose function takes inputs functions arguments and returns a result as function
  - first it will reads value for last function in the compose, then result will be passed to second that result willl passed to the first one finally we compose all the three functions and give result
  - for the compose `reduceRight` function we have to use .It will compose from right to left
  - If you want to do compose left to right `reduce` function we ave to use
  ```
  const result=compose(first,second,third)
  result(value)
  ```

6. Implement Promise.all
 - Promise.all accespts promises as argument if any one this promises fail total promises results will go to fail
 - To overcome that take error in `catch`  method



 + Error Boundaries

  - Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed
  - Use `static getDerivedStateFromError()` to render a fallback UI after an error has been thrown. Use `componentDidCatch()` to log error information.