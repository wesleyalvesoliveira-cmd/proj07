let somaNotas = 0;
let quantidadeNotas = 0;
let nota;

while (true) {
    nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou um número negativo para sair):"));
    
    if (nota < 0) {
        break; // Encerra o loop se for negativo
    }
    
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        somaNotas += nota;
        quantidadeNotas++;
    } else {
        alert("Nota inválida! Por favor, digite um valor entre 0 e 10.");
    }
}

if (quantidadeNotas > 0) {
    let media = somaNotas / quantidadeNotas;
    console.log(`A média das ${quantidadeNotas} notas digitadas é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhuma nota válida foi processada.");
}