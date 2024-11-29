function separarTexto(texto, separador) {

    var resultado = texto.split(separador)
    return resultado
}

console.log( separarTexto("O rato roeu a roupa do rei de Roma", " ") )
console.log( separarTexto( "Ana Maria,Paulo Coelho,Carla" , ",") )
console.log( separarTexto( "fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com",";") )