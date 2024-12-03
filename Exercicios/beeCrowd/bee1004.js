var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var a = lines.shift()
var b = lines.shift()

a = Number(a)
b = Number(b)

var prod = a * b;

console.log("PROD = "+ prod );