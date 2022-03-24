
function calcularMedia(nota1, nota2, nota3)
{

let media = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10

if(media < 5) {
    return "Reprovado. Sua nota foi: " + media
}

else if (media < 7) {
    return "Prova Final. Sua nota foi: " + media
}
else {
return "Parabéns, você foi aprovado! Sua nota foi: " + media
}
}

console.log(calcularMedia(5, 5, 5))