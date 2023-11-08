import Pessoa from "./Pessoa";
import Curso from "./Curso";

class Aluno extends Pessoa {

    numero_matricula: number;
    cursos_matriculados: Curso[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        genero: string,
        data_nascimento: string,
        email: string,
        endereco: string,
        numero_matricula: number,
    ) {
        super(id, nome, cpf, genero, data_nascimento, email, endereco);
        this.numero_matricula = numero_matricula;
        this.cursos_matriculados = [];
    }

    excluir() {
        console.log(`Aluno excluido: ${this.numero_matricula}`);
    }

    matricular() {
        console.log(`Aluno matriculado: ${this.numero_matricula}`);
    }

    desistir() {
        console.log(`Aluno desistente: ${this.numero_matricula}`);
    }

    verificar_cursos_matriculados() {
        console.log(`List de cursos: ${this.cursos_matriculados}`);
    }

}

export default Aluno;