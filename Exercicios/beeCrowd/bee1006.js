
var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = 5.0
var B = 6.0
var C = 7.0

var media = ( A * 2 + B * 3 + C * 5) / 10.0;

console.log("media = "+ media.toFixed(1));

var A = 5.0
var B = 10.0
var C = 10.0

var media = ( A * 2 + B * 3 + C * 5) / 10.0;

console.log("media = "+ media.toFixed(1));

var A = 10.0
var B = 10.0
var C = 5.0

var media = ( A * 2 + B * 3 + C * 5) / 10.0;

console.log("media = "+ media.toFixed(1))