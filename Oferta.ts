import Pessoa from "./Pessoa";
import Aluno from "./Aluno";
import Professor from "./Professor";
import Curso from "./Curso";

class Oferta {

    constructor(
        private codigo_oferta: number,
        private curso: string,
        private professor: object,
        private aluno: Aluno[],
    ) { }

    excluir() {
        console.log(`Oferta excluido: ${this.codigo_oferta}`);
    }
}

export default Oferta;