import $ from "jquery";
/**
 * a "wrapper class" behaves like jquery object.
 * new JqueryWrapper(".something").attr("hello", "world").css({color: "red"}).blah().blah()
 */
const JqueryWrapper = function (selector) {
    // first take a jquery object from regular jquery syntax
    const $element = 
    // @ts-ignore
    $(selector);
    // then copy .length & .prevObject properties into current (this) object
    this.length = $element.length;
    // @ts-ignore
    if ($element.prevObject !== undefined)
        this.prevObject = $element.prevObject;
    // then copy all array items [0] ... [N] into current (this) object
    for (let i = 0; i < this.length; i++)
        this[i] = $element[i];
    // finally make a bit "hack" like this
    // some jquery operation like .find() or .filter() or .children()
    // or any operation that returns "a collection of element"
    // usually make "a new collection object" by calling this.constructor()
    // thus making our class' contructor executed!
    // to avoid this problem, just hide the real class' constructor (nested in javascript prototype)
    // by placing a .constructor property and pass the original jquery's constructor
    this.constructor = $.fn.constructor;
};
// don't forget to prototyping our "function class" with jquery's prototype (the .fn)
// so all jquery functions (including plugins) will be imported into our class
JqueryWrapper.prototype = $.fn;
// export the JqueryWrapper class:
export { JqueryWrapper };
export default JqueryWrapper;
