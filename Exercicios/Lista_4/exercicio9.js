const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
