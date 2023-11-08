import Pessoa from './Pessoa';
import Curso from "./Curso";

class Professor extends Pessoa {
    
    numero_registro: number;
    cursos: Curso[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        genero: string,
        data_nascimento: string,
        email: string,
        endereco: string,
        numero_registro: number,
    ) {
        super(id, nome, cpf, genero, data_nascimento, email, endereco);
        this.numero_registro = numero_registro;
        this.cursos = [];

    }

    excluir(){
        console.log(`Professor exclu?do: ${this.numero_registro}`);
    }

    alocar(){
        console.log(`Professor alocado: ${this.numero_registro}`);
    }

    desalocar(){
        console.log(`Professor desalocado: ${this.numero_registro}`);
    }
}

export default Professor;