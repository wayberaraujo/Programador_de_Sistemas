var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

// function problem(lines) {
// const [A, B, C, D] = lines

// console.log('DIFERENCA = ' + (A * B - C * D))
// }
// problem (lines)

const [A, B, C, D] = lines

console.log('DIFERENCA = ' + (A * B - C * D))