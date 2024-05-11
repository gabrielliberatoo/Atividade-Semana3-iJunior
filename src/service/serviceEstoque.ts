import { WriteCSV } from '../model/writeCSV';


export class ServiceEstoque {
    private writeCSV: WriteCSV;

    constructor() {
        this.writeCSV = new WriteCSV();
    }

    public adicionarItem(nome: string, peso: number, valor: number, quantidade: number): boolean {
        if (!nome || peso <= 0 || valor <= 0 || quantidade <= 0) {
            console.error("Erro: Dados inseridos inválidos.");
            return false;
        }

        const estoque = this.writeCSV.lerEstoque();
        const itemExistente = estoque.find(item => item.nome === nome);
        if (itemExistente) {
            console.error("Erro: Item já existe no estoque.");
            return false;
        }

        this.writeCSV.adicionarItem({ nome, peso, valor, quantidade });
        return true;
    }

    public removerItem(nome: string): boolean {
        const estoque = this.writeCSV.lerEstoque();
        const itemExistente = estoque.find(item => item.nome === nome);
        if (!itemExistente) {
            console.error("Erro: Item não encontrado no estoque.");
            return false;
        }

        console.log(`Você está prestes a remover o seguinte item: ${itemExistente.nome}, Peso: ${itemExistente.peso}, Valor: ${itemExistente.valor}, Quantidade: ${itemExistente.quantidade}`);
        
        console.log("Deseja continuar com a remoção?");
        const confirmacao = true; // Alterar para receber a confirmação do usuário
        if (!confirmacao) {
            console.log("Remoção cancelada.");
            return false;
        }
        
        const novoEstoque = estoque.filter(item => item.nome !== nome);
        this.writeCSV.reescreverEstoque(novoEstoque);
        return true;
    }
}
