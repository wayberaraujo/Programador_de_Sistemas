 export const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5
const inicialValue = 0;
const sumWithInicial = array1.reduce(
  (accumulator, currenteValue) => accumulator + currenteValue,
  inicialValue,
);

console.log(sumWithInicial);
