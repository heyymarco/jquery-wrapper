# What is this?

A class wrapper to turn standard jquery framework into ES6 class library.

## Installation

```sh
npm install jquery-wrapper-class --save
```

## Usage

### ES6 JavaScript

```js
import JqueryWrapper from "jquery-wrapper-class";

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

let btn1 = new CoolButton(".btn"); // select elements with class btn and wrap them into CoolButton class
btn1.doSomething(); // ok
btn1.doAnother(); // ok
btn1.addClass("jquery-fun"); // call any jquery function
let children = btn1.find(".good-child"); // call another jquery function
```

# TypeScript

```ts
import JqueryWrapper, { Selector } from "jquery-wrapper-class";

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

let btn1 = new CoolButton(".btn"); // select elements with class btn and wrap them into CoolButton class
btn1.doSomething(); // ok
btn1.doAnother(); // ok
btn1.addClass("jquery-fun"); // call any jquery function
let children = btn1.find(".good-child"); // call another jquery function
```