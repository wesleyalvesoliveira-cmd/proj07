let saldo = 1500.00; // Valor inicial simulado

while (saldo > 0) {
    let saque = parseFloat(prompt(`Seu saldo atual é R$ ${saldo.toFixed(2)}. Digite o valor que deseja sacar:`));

    if (isNaN(saque) || saque <= 0) {
        alert("Valor inválido. Digite um valor maior que zero.");
    } else if (saque > saldo) {
        alert("Saldo insuficiente! Você não pode sacar um valor maior que o seu saldo atual.");
    } else {
        saldo -= saque;
        alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso!`);
    }
}

console.log("O saldo da sua conta acabou. Operações encerradas.");