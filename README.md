# Exercícios de Lógica de Programação com JavaScript

Este repositório contém uma coleção de scripts desenvolvidos para praticar conceitos fundamentais de JavaScript, como estruturas de repetição (`while`, `do...while`), condicionais (`if...else`) e manipulação de entrada de dados.

## 📋 Lista de Exercícios

Os programas resolvem os seguintes desafios:

1.  **Validação de Número Positivo:** Solicita um número ao usuário e só aceita valores positivos, repetindo o pedido em caso de erro.
2.  **Média de Notas Interativa:** Permite inserir notas (0 a 10) indefinidamente e calcula a média aritmética quando um número negativo é digitado.
3.  **Totalizador de Compras:** Soma valores de produtos inseridos pelo usuário até que o valor `0` seja digitado, exibindo o total final.
4.  **Validação de Strings (Nome e Sobrenome):** Garante que campos de nome e sobrenome não sejam enviados vazios ou apenas com espaços.
5.  **Simulador de Saque Bancário:** Verifica o saldo disponível e permite múltiplos saques até que o saldo se esgote.

## 🚀 Como testar

Esses códigos foram desenvolvidos para rodar no ambiente do navegador. Para testá-los:

1. Abra qualquer página da web.
2. Pressione `F12` (ou `Ctrl + Shift + I` / `Cmd + Option + I`) para abrir as **Ferramentas do Desenvolvedor** (Developer Tools).
3. Selecione a aba **Console**.
4. Copie o código do exercício desejado nos seus arquivos, cole no console e pressione `Enter`.

## 💻 Tecnologias Utilizadas

- **JavaScript (ES6+)**
- Interação com o usuário via `prompt()`, `alert()` e `console.log()`

## 📄 Estrutura Básica

Cada exercício foca em um conceito diferente de repetição. Por exemplo, o uso de `do...while` para garantir que um bloco seja executado pelo menos uma vez antes da verificação da condição, e o uso de métodos como `.trim()` para validação de strings vazias.

```javascript
// Pequeno trecho de exemplo - Validação de espaços em branco
let nome = "";
while (!nome.trim()) {
    nome = prompt("Digite o seu primeiro nome:");
    if (!nome.trim()) alert("O nome não pode ficar em branco!");
}
