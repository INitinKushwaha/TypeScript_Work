"use strict";
let stringArr = ['one', 'hey', 'Nitin'];
let guitars = ['Strat', 'les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Kushwaha';
stringArr.push('Nitin');
guitars[0] = 1984;
guitars.unshift('hello');
guitars = stringArr;
let test = [];
let bans = [];
bans.push('hello');
// tuples
let myTuple = ['hello', 10, true];
let mixed = ['hello', 10, true];
mixed = myTuple;
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bans;
myObj = {};
console.log(typeof myObj);
const exampleObj = {
    prop1: 'nitin',
    prop2: 10
};
console.log(exampleObj.prop1);
exampleObj.prop2 = 5;
let evh = {
    name: 'Eddie',
    active: true,
    albums: ['Van Halen 1', '1984']
};
let JP = {
    name: 'Jimmy Page',
    albums: ['I', 2003]
};
evh = JP;
const greetGuitarist = (guitarist) => {
    return `hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
