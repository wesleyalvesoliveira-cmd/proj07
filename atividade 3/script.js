let totalCompra = 0;
let valorItem;

do {
    valorItem = parseFloat(prompt("Digite o valor do item (ou 0 para finalizar a compra):"));
    
    if (!isNaN(valorItem) && valorItem > 0) {
        totalCompra += valorItem;
    } else if (valorItem < 0) {
        alert("Valor inválido! Digite um valor positivo ou 0 para sair.");
    }
} while (valorItem !== 0);

console.log(`Compra finalizada! O total da sua compra é: R$ ${totalCompra.toFixed(2)}`);