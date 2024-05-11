import { ControleEstoque } from './controller/controleEstoque';
import * as readline from 'readline';

const controleEstoque = new ControleEstoque();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal(): void {
    console.log("=== Sistema de Gestão de Estoque ===");
    console.log("1. Adicionar Item");
    console.log("2. Remover Item");
    console.log("3. Listar Itens");
    console.log("4. Mostrar Total e Média");
    console.log("0. Sair");
    rl.question("Escolha uma opção: ", (opcao: string) => {
        switch (opcao) {
            case '1':
                adicionarItem();
                break;
            case '2':
                removerItem();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                menuPrincipal();
                break;
        }
    });
}

function adicionarItem(): void {
    rl.question("Nome do item: ", (nome: string) => {
        rl.question("Peso (em kg): ", (pesoInput: string) => {
            const peso = parseFloat(pesoInput);
            rl.question("Valor: ", (valorInput: string) => {
                const valor = parseFloat(valorInput);
                rl.question("Quantidade: ", (quantidadeInput: string) => {
                    const quantidade = parseInt(quantidadeInput);
                    controleEstoque.adicionarItem(nome, peso, valor, quantidade);
                    menuPrincipal();
                });
            });
        });
    });
}

function removerItem(): void {
    rl.question("Nome do item a ser removido: ", (nome: string) => {
        controleEstoque.removerItem(nome);
        menuPrincipal();
    });
}

menuPrincipal();
