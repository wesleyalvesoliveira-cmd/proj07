let numero;

do {
    numero = parseFloat(prompt("Digite um número positivo:"));
    
    if (numero < 0 || isNaN(numero)) {
        alert("Valor inválido! O número deve ser positivo.");
    }
} while (numero < 0 || isNaN(numero));

console.log(`Sucesso! Você digitou o número positivo: ${numero}`);