/*
Exercise 2. Manipulating objects in ES6 vs ES5.

I
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4}
var obj3 = Object.assign(obj1, obj2)
II
var obj1 = { a: 1, b: 2, c: 3, d: 4 }
var a = obj1.a
var b = obj1.b
var c = obj1.c
var d = obj1.d
III
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a: a, b: b, c: c, d: d }*/

// I
const obj1 = {a: 1, b: 2};
const obj2 = {a:2, c: 3, d: 4};
const obj3 = {...obj1, ...obj2}

// II
const obj4 = { a: 1, b: 2, c: 3, d: 4 };
let {a, b, c, d} = obj4;

// III
let e = 1
let f = 2
let g = 3
let h = 4
const obj5 = {e, f, g, h}