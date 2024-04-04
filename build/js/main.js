"use strict";
// convert to more or less specfic 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return ' ' + a + b;
};
let myVal = addOrConcat(1, 2, 'add');
let nextVal = addOrConcat(1, 2, 'add');
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
