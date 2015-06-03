# ES2015 Esri ArcGIS JS API Examples.

This repo will contain examples of using ES2015 along with the ArcGIS JS Api. Eventually many samples from the main
Esri documentation will be converted and added here. 

Please refer to http://babeljs.io/docs/learn-es2015/ to become familiar with ES2015

---

Function Arrows: Shorthand for creating anonymous function expressions. They bind 

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

```

---

Requirements
