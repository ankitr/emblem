// Generated by CoffeeScript 1.6.3
/*
builtins.coffee v0.1

The built-in JavaScript functions that the interpreter understands.

Released under the MIT License.
*/


/* Global Functions*/


(function() {
  var NumberFunction, StringFunction, absFunction, acosFunction, alertFunction, asinFunction, atan2Function, atanFunction, atobFunction, bigFunction, blinkFunction, boldFunction, btoaFunction, ceilFunction, closeFunction, cosFunction, decodeURIComponentFunction, decodeURIFunction, encodeURIComponentFunction, encodeURIFunction, evalFunction, expFunction, fixedFunction, floorFunction, isFiniteFunction, isNaNFunction, italicsFunction, lengthFunction, logFunction, maxFunction, minFunction, parseFloatFunction, parseIntFunction, powFunction, promptFunction, randomFunction, roundFunction, sinFunction, smallFunction, sqrtFunction, strikeFunction, subFunction, supFunction, tanFunction, toLowerCaseFunction, toUpperCaseFunction;

  decodeURIFunction = new Function(decodeURI, 'decodeURI', 'Decodes a URI.');

  decodeURIComponentFunction = new Function(decodeURIComponent, 'decodeURIComponent', 'Decodes a URI component.');

  encodeURIFunction = new Function(encodeURI, 'encodeURI', 'Encodes a URI.');

  encodeURIComponentFunction = new Function(encodeURIComponent, 'encodeURIComponent', 'Encodes a URI.');

  evalFunction = new Function(eval, 'eval', 'Evaluates a string and executes it as if it was script code.');

  isFiniteFunction = new Function(isFinite, 'isFinite', 'Determines whether a value is a finite, legal number.');

  isNaNFunction = new Function(isNaN, 'isNaN', 'Determines whether a value is an illegal number.');

  NumberFunction = new Function(Number, 'Number', 'Converts an object\'s value to a number.');

  parseFloatFunction = new Function(parseFloat, 'parseFloat', 'Parses a string and returns a floating point number.');

  parseIntFunction = new Function(parseInt, 'parseInt', 'Parses a string and returns an integer.');

  StringFunction = new Function(String, 'String', 'Converts an object\'s value to a string');

  /* Window Functions*/


  alertFunction = new Function(alert, 'alert', 'Displays an alert box with a message and an OK button.');

  atobFunction = new Function(atob, 'atob', 'Decodes a base-64 encoded string.');

  btoaFunction = new Function(btoa, 'btoa', 'Encodes a string in base-64.');

  closeFunction = new Function(close, 'close', 'Closes the current window.');

  promptFunction = new Function(prompt, 'prompt', 'Displays a dialog box that prompts the visitor for input.');

  /* Object Methods*/


  lengthFunction = new Function((function(object) {
    return object.length();
  }), 'length', 'Takes in an object, and returns its length.');

  toLowerCaseFunction = new Function((function(object) {
    return object.toLowerCase();
  }), 'toLowerCase', 'Returns the calling string value converted to lower case.');

  toUpperCaseFunction = new Function((function(object) {
    return object.toUpperCase();
  }), 'toUpperCase', 'Returns the calling string value converted to uppercase.');

  /* HTML String Methods*/


  bigFunction = new Function((function(object) {
    return object.big();
  }), 'big', 'Creates a string to be displayed in a big font as if it were in a <big> tag.');

  blinkFunction = new Function((function(object) {
    return object.blink();
  }), 'blink', 'Creates a string to blink as if it were in a <blink> tag.');

  boldFunction = new Function((function(object) {
    return object.bold();
  }), 'bold', 'Creates a string to be displayed as bold as if it were in a <b> tag.');

  fixedFunction = new Function((function(object) {
    return object.fixed();
  }), 'fixed', 'Causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag');

  italicsFunction = new Function((function(object) {
    return object.italics();
  }), 'italics', 'Causes a string to be italic, as if it were in an <i> tag.');

  smallFunction = new Function((function(object) {
    return object.small();
  }), 'small', 'Causes a string to be displayed in a small font, as if it were in a <small> tag.');

  strikeFunction = new Function((function(object) {
    return object.strike();
  }), 'strike', 'Causes a string to be displayed as struck-out text, as if it were in a <strike> tag.');

  subFunction = new Function((function(object) {
    return object.sub();
  }), 'sub', 'Causes a string to be displayed as a subscript, as if it were in a <sub> tag');

  supFunction = new Function((function(object) {
    return object.sup();
  }), 'sup', 'Causes a string to be displayed as a superscript, as if it were in a <sup> tag');

  /* Math Methods*/


  absFunction = new Function(Math.abs, 'abs', 'Returns the absolute value of a number.');

  acosFunction = new Function(Math.acos, 'acos', 'Returns the arccosine (in radians) of a number.');

  asinFunction = new Function(Math.asin, 'asin', 'Returns the arcsine (in radians) of a number.');

  atanFunction = new Function(Math.atan, 'atan', 'Returns the arctangent (in radians) of a number.');

  atan2Function = new Function(Math.atan2, 'atan2', 'Returns the arctangent of the quotient of its arguments.');

  ceilFunction = new Function(Math.ceil, 'ceil', 'Returns the smallest integer greater than or equal to a number.');

  cosFunction = new Function(Math.cos, 'cos', 'Returns the cosine of a number.');

  expFunction = new Function(Math.exp, 'exp', 'Returns EN, where N is the argument, and E is Euler\'s constant, the base of the natural logarithm.');

  floorFunction = new Function(Math.floor, 'floor', 'Returns the largest integer less than or equal to a number.');

  logFunction = new Function(Math.log, 'log', 'Returns the natural logarithm (base E) of a number.');

  maxFunction = new Function(Math.max, 'max', 'Returns the largest of zero or more numbers.');

  minFunction = new Function(Math.min, 'min', 'Returns the smallest of zero or more numbers.');

  powFunction = new Function(Math.pow, 'pow', 'Returns base to the exponent power, that is, base exponent.');

  randomFunction = new Function(Math.random, 'random', 'Returns a pseudo-random number between 0 and 1.');

  roundFunction = new Function(Math.round, 'round', 'Returns the value of a number rounded to the nearest integer.');

  sinFunction = new Function(Math.sin, 'sin', 'Returns the sine of a number.');

  sqrtFunction = new Function(Math.sqrt, 'sqrt', 'Returns the square root of a number.');

  tanFunction = new Function(Math.tan, 'tan', 'Returns the tangent of a number.');

}).call(this);
