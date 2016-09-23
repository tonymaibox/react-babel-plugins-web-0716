const app = "I don't do much.";

// Source code
const { foo, bar } = myLib;
 
// Gets transformed by the plugin to:
var _myLib = myLib;
var foo = _myLib.foo;
var bar = _myLib.bar;