# ES2015 Esri ArcGIS JS API Examples

This repo will contain examples of using ES2015 along with the ArcGIS JS Api. Eventually many samples from the main
Esri documentation will be converted and added here. 

---

## Overview of ES2015 features

### Function Arrows: 
Shorthand for creating anonymous function expressions. They support expression and statement bodies.
Also, unlike normal functions, arrows will share the same lexical ```javascript this ``` as their surrounding code.

```javascript
// Expression Bodies
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tripleNums = nums.map( v => v * 3);

// Statement Bodies
evenNums = []
nums.forEach(v => {
    if (v % 2 === 0)
        evenNums.push(v);
});

// Lexical this
var library = {
    _title: 'This is a title',
    _author: 'Bob Bobby',
    _renters: ['henry', 'Frank', 'Floyd'],
    printRenters() {
        this._renters.forEach(f =>              // this is bound to the scope of the library object
            console.log( f + " has rented " + this._title ));
    }
};

```

### Classes

ES2015 introduces 'classes' which function like a simple overlay over the more traditional JS prototype-based OOP.
Classes do support prototype-based inheritance, super calls, instance and static methods and constructors.


### Template Strings
 
Template strings provide syntactic sugar for creating strings. They function similarly to string interpolation features
in Python and other languages. Additionally a tag can be added to allow the string construction to be customized (such as
constructing higher level data structures from string contents.)

```Javascript
// Basic literal string creation
`In ES5 "\n" is a line-feed.`

// Multiline Strings

`This is not legal
in ES5`

// Interpolate variable bindings

var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

```

---

Requirements
