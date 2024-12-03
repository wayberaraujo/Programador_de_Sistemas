var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var raio = lines [0]
var pi = 3.14159;
var area = (Math.pow(raio,2)*pi);

 console.log("A="+ area.toFixed(4))