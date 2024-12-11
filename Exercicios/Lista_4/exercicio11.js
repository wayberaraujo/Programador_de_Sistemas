function calcularMedia(arr) {
if (arr.length === 0) {
    return 0;
} 
let soma = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    soma += arr[i];
}
    return soma / arr.length;
}
console.log(calcularMedia([1, 2, 4, 5, 7, 8, 10, 11]));
console.log(calcularMedia([10, 70, 30, 50]));
