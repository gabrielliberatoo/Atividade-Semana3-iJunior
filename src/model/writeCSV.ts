import { InterfaceData } from './interfaceData';
import * as fs from 'fs';

export class WriteCSV {
    private filePath: string = './src/model/estoque.csv';

    public adicionarItem(item: InterfaceData): void {
        let data: string = `${item.nome},${item.peso},${item.valor},${item.quantidade}\n`;
        fs.appendFileSync(this.filePath, data);
    }

    public lerEstoque(): InterfaceData[] {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, '');
            return [];
        }
        const csvData: string = fs.readFileSync(this.filePath, 'utf8');
        const linhas: string[] = csvData.split('\n');
        const estoque: InterfaceData[] = linhas.map(linha => {
            const [nome, peso, valor, quantidade] = linha.split(',');
            return { nome, peso: parseFloat(peso), valor: parseFloat(valor), quantidade: parseInt(quantidade) };
        });
        return estoque;
    }

    public reescreverEstoque(estoque: InterfaceData[]): void {
        let data: string = estoque.map(item => `${item.nome},${item.peso},${item.valor},${item.quantidade}`).join('\n');
        fs.writeFileSync(this.filePath, data);
    }
}
