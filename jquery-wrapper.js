"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JqueryWrapper = void 0;
var jquery_1 = __importDefault(require("jquery"));
/**
 * a "wrapper class" behaves like jquery object.
 * new JqueryWrapper(".something").attr("hello", "world").css({color: "red"}).blah().blah()
 */
var JqueryWrapper = function (selector) {
    // first take a jquery object from regular jquery syntax
    var $element = 
    // @ts-ignore
    jquery_1.default(selector);
    // then copy .length & .prevObject properties into current (this) object
    this.length = $element.length;
    // @ts-ignore
    if ($element.prevObject !== undefined)
        this.prevObject = $element.prevObject;
    // then copy all array items [0] ... [N] into current (this) object
    for (var i = 0; i < this.length; i++)
        this[i] = $element[i];
    // finally make a bit "hack" like this
    // some jquery operation like .find() or .filter() or .children()
    // or any operation that returns "a collection of element"
    // usually make "a new collection object" by calling this.constructor()
    // thus making our class' contructor executed!
    // to avoid this problem, just hide the real class' constructor (nested in javascript prototype)
    // by placing a .constructor property and pass the original jquery's constructor
    this.constructor = jquery_1.default.fn.constructor;
};
exports.JqueryWrapper = JqueryWrapper;
// don't forget to prototyping our "function class" with jquery's prototype (the .fn)
// so all jquery functions (including plugins) will be imported into our class
JqueryWrapper.prototype = jquery_1.default.fn;
exports.default = JqueryWrapper;
