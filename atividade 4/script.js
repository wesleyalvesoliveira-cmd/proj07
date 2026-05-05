let nome = "";
let sobrenome = "";

while (!nome.trim()) {
    nome = prompt("Digite o seu primeiro nome:");
    if (!nome.trim()) alert("O nome não pode ficar em branco!");
}

while (!sobrenome.trim()) {
    sobrenome = prompt("Digite o seu sobrenome:");
    if (!sobrenome.trim()) alert("O sobrenome não pode ficar em branco!");
}

console.log(`Nome devidamente preenchido: ${nome.trim()} ${sobrenome.trim()}`);