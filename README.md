# What is this?

A class wrapper to turn standard jquery framework into ES6 class library.

## Installation

```sh
npm install jquery-wrapper-class --save
```

## Usage


### CommonJS

```js
// import JqueryWrapper into our script:
const JqueryWrapper = require("jquery-wrapper-class").default;

// optionally: put any jquery's plugin(s) here
// any modification of jquery's plugin(s), in the past or future, will be consumed by JqueryWrapper.
// require("jquery-plugin-chain");
// require("another-jquery-plugin");

// define our class that extends JqueryWrapper:
class CoolButton extends JqueryWrapper {
    constructor(selector) {
        super(selector); // call JqueryWrapper's constructor. Internally executes jquery $(selector)
    }

    doSomething() {
        this.attr("required", "");
    }

    doAnother() {
        this.find("div, span").css({ backgroundColor: "red" });
    }
}

// our class is ready to use:
let btn1 = new CoolButton(".btn"); // select elements with class btn and wrap them into CoolButton class
btn1.doSomething(); // ok
btn1.doAnother(); // ok
btn1.addClass("jquery-fun"); // call any jquery function
let children = btn1.find(".good-child"); // call another jquery function
```


### ES6 JavaScript

```js
// import JqueryWrapper into our script:
import JqueryWrapper from "jquery-wrapper-class";

// optionally: put any jquery's plugin(s) here
// any modification of jquery's plugin(s), in the past or future, will be consumed by JqueryWrapper.
// import "jquery-plugin-chain";
// import "another-jquery-plugin";

// define our class that extends JqueryWrapper:
class CoolButton extends JqueryWrapper {
    constructor(selector) {
        super(selector); // call JqueryWrapper's constructor. Internally executes jquery $(selector)
    }

    doSomething() {
        this.attr("required", "");
    }

    doAnother() {
        this.find("div, span").css({ backgroundColor: "red" });
    }
}

// our class is ready to use:
let btn1 = new CoolButton(".btn"); // select elements with class btn and wrap them into CoolButton class
btn1.doSomething(); // ok
btn1.doAnother(); // ok
btn1.addClass("jquery-fun"); // call any jquery function
let children = btn1.find(".good-child"); // call another jquery function
```


### TypeScript

```ts
// import JqueryWrapper into our script:
import JqueryWrapper from "jquery-wrapper-class";

// optionally: put any jquery's plugin(s) here
// any modification of jquery's plugin(s), in the past or future, will be consumed by JqueryWrapper.
// import "jquery-plugin-chain";
// import "another-jquery-plugin";

// define our class that extends JqueryWrapper:
class CoolButton extends JqueryWrapper {
    constructor(selector : Selector) {
        super(selector); // call JqueryWrapper's constructor. Internally executes jquery $(selector)
    }

    doSomething() {
        this.attr("required", "");
    }

    doAnother() {
        this.find("div, span").css({ backgroundColor: "red" });
    }
}

// our class is ready to use:
let btn1 = new CoolButton(".btn"); // select elements with class btn and wrap them into CoolButton class
btn1.doSomething(); // ok
btn1.doAnother(); // ok
btn1.addClass("jquery-fun"); // call any jquery function
let children = btn1.find(".good-child"); // call another jquery function
```