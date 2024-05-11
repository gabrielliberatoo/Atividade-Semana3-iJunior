import { ServiceEstoque } from '../service/serviceEstoque';

export class ControleEstoque {
    private service: ServiceEstoque;

    constructor() {
        this.service = new ServiceEstoque();
    }

    public adicionarItem(nome: string, peso: number, valor: number, quantidade: number): void {
        const success = this.service.adicionarItem(nome, peso, valor, quantidade);
        if (success) {
            console.log("Item adicionado com sucesso!");
        } else {
            console.error("Erro ao adicionar o item.");
        }
    }

    public removerItem(nome: string): void {
        const success = this.service.removerItem(nome);
        if (success) {
            console.log("Item removido com sucesso!");
        } else {
            console.error("Erro ao remover o item.");
        }
    }
}
