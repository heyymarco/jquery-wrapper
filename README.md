# What is this?

A class wrapper to turn standard jquery framework into ES6 class library.

# Installation

`npm install jquery-wrapper --save`

# Usage

import JqueryWrapper from 'jquery-wrapper';

class CoolButton extends JqueryWrapper {
    constructor(selector) {
        super(selector);
    }
}