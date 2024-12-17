export function numeroprimo(np) {
    for (var div = 2; div < np; div++) {

        if (np % div === 0) {
            return false
        }

    }
    return true

}

export function quadrado(x) {
    var n1 = Number(x)
    var resultado = n1 ** 2
    return resultado

}

export const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

export const number = [2, 4, 5, 7, 10, 11, 12];
let soma = 0;

for (let i = 0; i <= number.length; i++) {
    if (i % 2 == 0) {
        soma += number[i];
    }
}

export var senario1 = [1, 2, 4, 5, 7, 8, 10, 11]
function calcularMedia(arr) {
if (arr.length == 0) {
    return 0;
} 
let soma = 0;
for (let i = 0; i < arr.length; i++) {
    
    soma += arr[i];
}
    return soma / arr.length;
}