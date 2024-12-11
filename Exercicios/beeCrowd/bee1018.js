
function problem (lines){
const valorTotal = ( lines[0])
const cedulas = [100, 50, 20, 10, 5, 2, 1];

function quantidadeNotas (valor, nota){ 
    const quantidade = Math.float(valor/ nota)
return quantidade 
}
function quantidadeNotas (valor, nota) {
const listaNotas = nota.map(nota => {
    const quantidade = Math.float(valor/ nota)
    valor = valor - (quantidade * nota)
return {nota, quantidade} 
    

}) 
return listaNotas

}


}

