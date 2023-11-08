import Pessoa from "./Pessoa";
import Aluno from "./Aluno";
import Professor from "./Professor";
import Curso from "./Curso";
import Oferta from "./Oferta";

const pessoa = new Pessoa(1, 'Pedro Jos?', 'M', '111.111.111-11', '01/01/2000', 'pedrojose@outlook.com', 'Rua Carlos do Nascimento 55 - Brasilia - DF');
const aluno = new Aluno(1, 'Pedro Jos?', 'M', '111.111.111-11', '01/01/2000', 'pedrojose@outlook.com', 'Rua Carlos do Nascimento 55 - Brasilia - DF', 123456);
const professor = new Professor(1, 'Jo?o Pedro', 'M', '111.111.111-11', '01/01/2000', 'pedrojose@outlook.com', 'Rua Carlos do Nascimento 55 - Brasilia - DF', 1234567);
const curso = new Curso(123, 'JavaScript', 300);
const oferta = new Oferta(1234, 'JavaScript', professor, []);

pessoa.getInfo();

pessoa.excluir();
