import { DatabaseModel } from "./DatabaseModel.js";

const database = new DatabaseModel().pool; //Inicializa o pool de conexões com o banco

class Cliente {
    private idCliente: number = 0;
    private nome: string;
    private cpf: string;
    private telefone: string;

    constructor (
        _nome: string,
        _cpf: string,
        _telefone: string
    ){
        this.nome = _nome;
        this.cpf = _cpf;
        this.telefone = _telefone
    }

     public getIdCliente(): number {
        return this.idCliente;
    }

    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }


    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }


    public getCpf(): string {
        return this.cpf;
    }
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    static async listarClientes (): Promise<Array<Cliente> | null>{
        try{
            let listaDeClientes: Array<Cliente> = [];

            const querySelectClientes = `SELECT * FROM clientes`;

           const respostaBD = await database.query(querySelectClientes);

           respostaBD.rows.forEach((clienteBD: any) => {
            const novoCliente: Cliente = new Cliente(
                clienteBD.nome,
                clienteBD.cpf,
                clienteBD.telefone
            );

            novoCliente.setIdCliente(clienteBD.id_cliente);

            listaDeClientes.push(novoCliente);

           });

           return listaDeClientes
        } catch (error) {
            console.error(`Erro ao acessar o banco de dados. ${error}`);
            return null;
        }
    }
}
export default Cliente;